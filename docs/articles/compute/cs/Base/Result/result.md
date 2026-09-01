

```cs
namespace ByteQuestor.Automation.Core.Results;

public class Result
{
    public bool Success { get; init; }
    public string Message { get; init; } = string.Empty;
    public Exception? Exception { get; init; }
    public static Result Ok(String message = "")
    {
        return new Result
        {
            Success = true,
            Message = message
        };
    }
    public static Result Fail(
        string message,
        Exception ? exception = null)
    {
        return new Result
        {
            Success = false,
            Message = message,
            Exception = exception
        };
    }
}
```
1d