using Microsoft.AspNetCore.Mvc;
using EduSync.API.Data;
using EduSync.API.Models;

namespace EduSync.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CourseController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("upload")]
        public IActionResult UploadCourse(Course course)
        {
            _context.Courses.Add(course);
            _context.SaveChanges();
            return Ok(new { message = "Course uploaded successfully." });
        }

        [HttpGet("all")]
        public IActionResult GetAllCourses()
        {
            var courses = _context.Courses.ToList();
            return Ok(courses);
        }
    }
}
