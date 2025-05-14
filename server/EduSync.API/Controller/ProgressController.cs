using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EduSync.API.Data;
using EduSync.API.Models;

namespace EduSync.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProgressController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProgressController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/progress/update
        [HttpPost("update")]
        public async Task<IActionResult> UpdateProgress([FromBody] Progress progress)
        {
            if (progress == null || progress.UserId == 0 || string.IsNullOrEmpty(progress.ModuleName))
                return BadRequest("Invalid progress data.");

            var existing = await _context.Progresses
                .FirstOrDefaultAsync(p =>
                    p.UserId == progress.UserId &&
                    p.CourseId == progress.CourseId &&
                    p.ModuleName == progress.ModuleName);

            if (existing != null)
            {
                existing.IsCompleted = progress.IsCompleted;
                existing.CompletedOn = progress.IsCompleted ? DateTime.UtcNow : null;
            }
            else
            {
                progress.CompletedOn = progress.IsCompleted ? DateTime.UtcNow : null;
                _context.Progresses.Add(progress);
            }

            await _context.SaveChangesAsync();
            return Ok(new { message = "Progress updated", progress });
        }

        // GET: api/progress/student/5/course/10
        [HttpGet("student/{userId}/course/{courseId}")]
        public async Task<IActionResult> GetProgressByCourse(int userId, int courseId)
        {
            var modules = await _context.Progresses
                .Where(p => p.UserId == userId && p.CourseId == courseId)
                .ToListAsync();

            var total = modules.Count;
            var completed = modules.Count(p => p.IsCompleted);

            var progressPercentage = total > 0 ? (int)((double)completed / total * 100) : 0;

            return Ok(new
            {
                TotalModules = total,
                CompletedModules = completed,
                ProgressPercentage = progressPercentage,
                Modules = modules
            });
        }
    }
}
