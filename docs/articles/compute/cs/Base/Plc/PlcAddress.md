::: tip 入门案例
**这里是基础案例示例，不参与后续更新**。
:::
```cs
namespace ByteQuestor.Automation.Core.Plc
{
    public class PlcAddress
    {
        public string Value { get; set; }
        public PlcAddress(string value) 
        { 
            Value = value;
        }
        public override string ToString()
        {
            return Value;
        }
    }
}

```