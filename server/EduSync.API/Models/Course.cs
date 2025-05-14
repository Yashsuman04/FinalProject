using System.ComponentModel.DataAnnotations;

namespace EduSync.API.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = "";

        public string Description { get; set; } = "";

        public string MediaUrl { get; set; } = ""; // Placeholder for Azure Blob URL
    }
}
