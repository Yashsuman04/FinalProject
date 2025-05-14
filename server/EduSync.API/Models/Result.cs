using EduSync.API.Models;

public class Result
{
    public int Id { get; set; }
    public int AssessmentId { get; set; }
    public int UserId { get; set; }
    public int Score { get; set; }

    public Assessment Assessment { get; set; }
    public User User { get; set; }
}
