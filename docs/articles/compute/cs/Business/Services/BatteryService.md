```text
现在我们已经有：

① SiemensPlcClient

负责：

PLC → byte[]
② PlcArrayReader<T>

负责：

byte[360]
    ↓
切成10份
    ↓
10 × byte[36]
③ BatteryDataParser

负责：

byte[36]
    ↓
BatteryData

现在新增：

④ BatteryService

负责：

把前三个组合起来

最终：

BatteryService
       │
       ▼
PlcArrayReader<BatteryData>
       │
       ▼
BatteryDataParser
       │
       ▼
SiemensPlcClient
```