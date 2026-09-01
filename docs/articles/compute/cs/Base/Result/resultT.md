
```cs
namespace ByteQuestor.Automation.Core.Results;
public class Result<T>
{
    public bool Success { get; init; }
    public string Message { get; init; } = string.Empty;
    public T? Data { get; init; }
    public Exception? Exception { get; init; }
    public static Result<T> Ok(
        T data,
        string message = "")
    {
        return new Result<T>
        {
            Success = true,
            Data = data,
            Message = message
        };
    }
    public static Result<T> Fail(
            string message,
            Exception? exception = null)
    {
        return new Result<T>
        {
            Success = false,
            Message = message,
            Exception = exception
        };
     }
}

```
2