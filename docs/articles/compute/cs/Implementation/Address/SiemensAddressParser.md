

```cs
namespace ByteQuestor.Automation.Plc.Siemens.Address
{
    internal class SiemensAddressParser
    {
        public static void Parse(
            string address,
            out int dbNumber,
            out int startByte)
        {
            if (string.IsNullOrWhiteSpace(address))
            {
                throw new ArgumentNullException("PLC地址不能为空",nameof(address));
            }
            string[] parts = address.Split('.');

            if(parts.Length !=2)
            {
                throw new FormatException(
                    "西门子地址格式错误.eg:DB100.5616");
            }
            if (!parts[0].StartsWith("DB"))
            {
                throw new FormatException(
                    "目前只支持DB区域");
            }
            if (!int.TryParse(parts[0].Substring(2), out dbNumber))
            {
                throw new FormatException(
                    "DB编号格式错误");
            }
            if (!int.TryParse(parts[1],out startByte))
            {
                throw new FormatException(
                    "起始Byte格式错误");
            }
        }
    }
}


```