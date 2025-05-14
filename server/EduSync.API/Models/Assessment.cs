using EduSync.API.Models;

public class Assessment
{
    public int Id { get; set; }
    public int CourseId { get; set; }
    public string Title { get; set; } = "";
    public int MaxScore { get; set; }

    public Course Course { get; set; } // Navigation property
}
