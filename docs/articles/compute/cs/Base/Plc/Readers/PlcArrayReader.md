```cs
using ByteQuestor.Automation.Core.Data.Parsers;
using ByteQuestor.Automation.Core.Results;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace ByteQuestor.Automation.Core.Plc.Readers
{
    /// <summary>
    /// PLC连续数组读取器
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PlcArrayReader<T>
    {
        private readonly IPlcClient _plc;
        private readonly IDataParser<T> _parser;
        public PlcArrayReader(
            IPlcClient plc,
            IDataParser<T> parser
            )
        {
            _plc = plc ?? throw new ArgumentNullException(nameof(plc));
            _parser = parser ?? throw new ArgumentNullException(nameof(parser));
        }


        public async Task<Result<List<T>>> ReadAsync(
            PlcAddress startAddress, int cout)
        {
            if (cout <= 0)
            {
                return Result<List<T>>.Fail(
                    "读取数量必须大于0");
            }
            int totalSize = _parser.DataSize * cout;

            //一次读取整个数组
            var readResult =
                await _plc.ReadAsync(startAddress, totalSize);
            if (!readResult.Success)
            {
                return Result<List<T>>.Fail(readResult.Message);
            }


            var result = new List<T>();
            for (int i = 0; i < cout; i++)
            {
                int offset =
                    i * _parser.DataSize;

                byte[] itemData = new byte[_parser.DataSize];
                Array.Copy(
                    readResult.Data,
                    offset,
                    itemData,
                    0,
                    _parser.DataSize);

                T item = _parser.Parse(itemData);
                result.Add(item);
            }

            return Result<List<T>>.Ok(result);
        }
    }
}

```