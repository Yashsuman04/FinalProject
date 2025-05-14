public class Progress
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int CourseId { get; set; }
    public string ModuleName { get; set; } = "";
    public bool IsCompleted { get; set; }
    public DateTime? CompletedOn { get; set; }
}
