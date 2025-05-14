using Microsoft.AspNetCore.Mvc;
using EduSync.API.Models;
using EduSync.API.Services;

namespace EduSync.API.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var user = new User
            {
                FullName = request.FullName,
                Email = request.Email,
                Role = request.Role
            };

            var (success, message) = await _authService.RegisterUser(user, request.Password);

            if (!success)
            {
                return BadRequest(new { message });
            }

            return Ok(new { message });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var (success, token, message) = await _authService.Login(request.Email, request.Password);

            if (!success)
            {
                return BadRequest(new { message });
            }

            return Ok(new { token, message });
        }
    }

    public class RegisterRequest
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Role { get; set; } = "Student";
    }

    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
} 