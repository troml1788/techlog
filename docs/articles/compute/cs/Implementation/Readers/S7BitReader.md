```cs
using System;


namespace ByteQuestor.Automation.Plc.Siemens.Readers
{
    public static class S7BitReader
    {
        public static bool Read(
            byte[] data,
            int byteOffset,
            int bitOffset)
        {
            if(data == null) throw new ArgumentNullException(nameof(data));
            if(byteOffset < 0 || byteOffset >=data.Length)
            {
                throw new ArgumentOutOfRangeException("Byte地址超出范围");
            }

            if(bitOffset < 0 || bitOffset > 7)
            {
                throw new ArgumentException(
                    "Bit必须在0-7之间");
            }

            return (data[byteOffset] & (1 << bitOffset)) != 0;
        }
    }
}


```