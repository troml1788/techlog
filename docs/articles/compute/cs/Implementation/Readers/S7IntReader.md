```cs
using System;


namespace ByteQuestor.Automation.Plc.Siemens.Readers
{
    public static class S7IntReader
    {
        public static short ReadInt16(byte[] data,int offset)
        {
            if(data == null)
                throw new ArgumentNullException(nameof(data));

            if(offset < 0 || offset +2>data.Length)
            {
                throw new ArgumentException(
                    "数据长度不足,无法读取S7 INT");
            }

            return (short)(data[offset] <<8| data[offset+1]);
        }
    }
}
```