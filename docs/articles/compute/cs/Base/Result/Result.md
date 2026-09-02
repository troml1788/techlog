::: tip 入门案例
**这里是基础案例示例，不参与后续更新**。
:::

## 【结果层】说明
利用类的构造函数的特性，在使用的时候，构造一个结果对象并返回，且根据调用和传入返回成功(含提示信息)和失败(含提示信息)

## 【结构层】源码
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
## 使用
### 在接口层定义
+ `Task<T>` 代表一个可以等待的异步操作，最终产出一个 T 类型的值
+ `Task<Result>` = 等待一个任务，任务完成后会产生一个 Result 对象
```cs
Task<Result> ConnectAsync();
```
调用这个方法，不会直接返回 Result，而是先返回一个任务（Task）.等通讯操作做完，任务里面装入 Result。
```cs
using ByteQuestor.Automation.Core.Results;
namespace ByteQuestor.Automation.Core.Plc;
public interface IPlcClient
{
    bool IsConnected { get; }
    Task<Result> ConnectAsync();
}
```

### 在通讯层实现
在这里 Task 的作用尤为明显，`_plc.Open()`是同步方法，执行时会阻塞线程。
```cs
return Task.FromResult(Result.Fail("PLC连接失败"));
```
同步进行了两件事：
+ 生成一个`Result`对象
+ 创建一个状态标记为已完成的`Task`容器，容器内存放`Result`对象，没有后台工作在运行(由`Task.FromResult`开启的`Task`)。
⚠️该`Task`没有后台任务在运行，只是用来满足接口`Task<Result>`返回类型要求，不是用来异步执行 PLC 连接
```cs
using ByteQuestor.Automation.Core.Results;
public class SiemensPlcClient : IPlcClient
{
    public Task<Result> ConnectAsync()
    {
        try
        {
            _plc.Open();
            if (!_plc.IsConnected)
            {
                return Task.FromResult(Result.Fail("PLC连接失败"));
            }
            return Task.FromResult(Result.Ok("PLC连接成功"));
        }
        catch (Exception ex)
        {
            return Task.FromResult(
                Result.Fail(
                    $"PLC连接异常:{ex.Message}", ex));
        }
    }
}
```
### 在应用层调用
通讯层负责解析结果,`conesult`接收
+ `await`表明取出`Task<Result>`里的`Result`,
如果不加`await`,表明接收`Task<Result>`
```cs
private async void ReadCodeBtn_Click(object sender, EventArgs e)
{
    var conesult =
        await plc.ConnectAsync();

    if (!connectResult.Success)
    {
        MessageBox.Show(
            connectResult.Message);

        return;
    }
}
```



<style scoped>
/* 自定义样式，不影响全局 */
h1 {
  text-align: center;
  color: #4299e1; /* 清新蓝，可自行修改 */
  margin: 2rem 0;
}
.tip {
  border-radius: 8px;
  padding: 2rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #2d3748;
  background-color: #f5fafe; /* 浅蓝背景，提升阅读感 */
}
.tip strong {
  color: #e53e3e; /* 重点内容标红，突出核心数字 */
}
hr {
  border: none;
  border-top: 1px dashed #dee2e6;
  margin: 1rem 0;
}
</style>