using Microsoft.EntityFrameworkCore;
using EduSync.API.Models;

namespace EduSync.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }

        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Progress> Progresses { get; set; }

        public DbSet<Assessment> Assessments { get; set; }
        public DbSet<Result> Results { get; set; }



    }
}
