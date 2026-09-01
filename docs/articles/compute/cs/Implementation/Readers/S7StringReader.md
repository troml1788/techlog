```cs
using System;
using System.Text;


namespace ByteQuestor.Automation.Plc.Siemens.Readers
{
    public static class S7StringReader
    {
        public static string Read(
            byte[] data,
            int offset,
            int maxLength)
        {
            if (data == null)
                throw new ArgumentNullException(nameof(data));
            if (offset < 0)
                throw new ArgumentOutOfRangeException(nameof(offset));
            if (maxLength < 0)
                throw new ArgumentOutOfRangeException(nameof(maxLength));
            int totalLength = maxLength + 2;
            if (data.Length < offset + totalLength)
            {
                throw new ArgumentException(
                    "数据长度不足，无法读取s7 STRING");
            }

            int actualLength = data[offset + 1];

            if (actualLength > maxLength)
            {
                actualLength = maxLength;
            }

            if (actualLength == 0)
            {
                return string.Empty;
            }

            return Encoding.ASCII.GetString(data, offset + 2, actualLength);
        }
    }
}

```