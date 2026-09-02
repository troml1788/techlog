::: tip 入门案例
**这里是基础案例示例，不参与后续更新**。
:::
```cs
using ByteQuestor.Automation.Core.Results;
namespace ByteQuestor.Automation.Core.Plc;
public interface IPlcClient
{
    bool IsConnected { get; }
    Task<Result> ConnectAsync();
    Task<Result> DisconnectAsync();
    Task<Result<byte[]>> ReadAsync(
        PlcAddress address,
        int length
        );
    Task<Result> WriteBytesAsync(
        PlcAddress address,
        byte[] data);
}
```