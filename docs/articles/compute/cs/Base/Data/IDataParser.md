```cs
namespace ByteQuestor.Automation.Core.Data.Parsers
{
    public interface IDataParser<T>
    {
        /// <summary>
        /// 一个数据块占用多少Byte
        /// </summary>
        int DataSize { get; }
        /// <summary>
        /// 将原始数据解析为对象
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        T Parse(byte[] data);
    }
}

```