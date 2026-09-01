```cs
namespace ReadCodeDemo.Models
{
    public class BatteryData
    {
        public string BarCode { get; set; } = string.Empty;
        public short State { get; set; }
        public bool Have { get; set; }
        public bool ScanOk { get; set; }
        public bool ScanNg { get; set; }
    }
}

```