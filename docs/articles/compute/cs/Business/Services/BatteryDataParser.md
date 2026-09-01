```cs
using ReadCodeDemo.Models;
using ByteQuestor.Automation.Plc.Siemens.Readers;


namespace ReadCodeDemo.Services
{
    public class BatteryDataParser
    {
        public BatteryData Parse(byte[] data)
        {
            if (data == null)
                throw new ArgumentNullException(nameof(data));

            if (data.Length < 36)
            {
                throw new ArgumentException(
                    "Battery_Data数据长度不足36 Byte");
            }

            return new BatteryData
            {
                BarCode =
                    S7StringReader.Read(
                        data,
                        0,
                        29),

                State =
                    S7IntReader.ReadInt16(
                        data,
                        32),

                Have =
                    S7BitReader.Read(
                        data,
                        34,
                        0),

                ScanOk =
                    S7BitReader.Read(
                        data,
                        34,
                        1),

                ScanNg =
                    S7BitReader.Read(
                        data,
                        34,
                        2)
            };
        }
    }
}
```