```cs
using ByteQuestor.Automation.Core.Plc;
using ByteQuestor.Automation.Core.Results;
using ByteQuestor.Automation.Plc.Siemens.Address;
using S7.Net;

namespace ByteQuestor.Automation.Plc.Siemens;

public class SiemensPlcClient : IPlcClient
{
    private readonly S7.Net.Plc _plc;
    public bool IsConnected => _plc?.IsConnected ?? false;
    public SiemensPlcClient(
        CpuType cpuType,
        string ip,
        short rack = 0,
        short slot = 1)
    {
        _plc = new S7.Net.Plc(
            cpuType,
            ip,
            rack,
            slot
            );
    }

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

    public Task<Result> DisconnectAsync()
    {
        try
        {
            _plc.Close();
            return Task.FromResult(
                Result.Ok("PLC已断开1"));
        }
        catch (Exception ex)
        {
            return Task.FromResult(
                 Result.Fail($"PLC断开异常:{ex.Message}", ex));
        }
    }

    public Task<Result<byte[]>> ReadAsync(
        PlcAddress address,int length)
    {
        try
        {
            if (!_plc.IsConnected)
            {
                return Task.FromResult(
                    Result<byte[]>.Fail("PLC未连接"));
            }
            
            SiemensAddressParser.Parse(
                address.Value, out int dbNumber, out int startByte);
            byte[] data =
                _plc.ReadBytes(
                    DataType.DataBlock,
                    dbNumber,
                    startByte,
                    length);
            return Task.FromResult(
                Result<byte[]>.Ok(data));
        }
        catch(Exception ex)
        {
                return Task.FromResult(
                 Result < byte[]>.Fail($"PLC读取异常:{ex.Message}", ex));
        }
    }

    public Task<Result> WriteBytesAsync(
        PlcAddress address,
        byte[] data)
    {
        throw new NotImplementedException();
    }
    //--------
}
```