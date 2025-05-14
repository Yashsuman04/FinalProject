using Microsoft.AspNetCore.Mvc;
using EduSync.API.Data;
using EduSync.API.Models;
using Microsoft.EntityFrameworkCore;

namespace EduSync.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EnrollmentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EnrollmentController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("enroll")]
        public async Task<IActionResult> Enroll([FromBody] Enrollment enrollment)
        {
            var alreadyEnrolled = await _context.Enrollments
                .AnyAsync(e => e.UserId == enrollment.UserId && e.CourseId == enrollment.CourseId);

            if (alreadyEnrolled)
                return BadRequest(new { message = "User already enrolled in this course." });

            _context.Enrollments.Add(enrollment);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Enrollment successful", enrollment });
        }
    }
}
