# Intiface Central 入门

先让手机或电脑连上设备，再交给支持 Intiface / Buttplug 的应用使用。这份中文图文指南陪你走完第一次连接。

**还没安装？先去[下载页](/downloads/)取 Android 安装包。** Windows、macOS、Linux 与 iOS 的安装入口在 [Intiface 官网](https://intiface.com/)。

本文按官方入门流程整理，并参考当前设置与品牌说明；核对日期为 2026 年 10 月 4 日。截图来自官方教程的旧版桌面界面，手机的导航位置、新版图标和文字可能不同。保留英文按钮名便于对照，**点击任意截图可查看原图**。

## 1. 安装后，先认一认界面

打开 Intiface Central。顶部是启动与停止按钮；**Devices**（设备）用来找设备，**Log**（日志）用来查看连接问题。

<a href="/images/intiface-central/intiface-1.png" data-sveltekit-reload aria-label="查看原图：Intiface Central 首次打开的桌面界面，顶部为播放按钮，左侧有 Devices、Log 和 Settings 导航"><img src="/images/intiface-central/intiface-1.png" alt="Intiface Central 首次打开的桌面界面，顶部为播放按钮，左侧有 Devices、Log 和 Settings 导航" width="1209" height="891" loading="lazy" /></a>

*图 1：官方旧版桌面界面，首次操作从顶部按钮和设备页开始。*

手机安装后，按系统提示允许蓝牙或附近设备访问。把设备放在手机附近，并按设备说明开机、进入可连接状态；退出正在连接它的厂商 App。

**支持蓝牙不等于支持每一款设备。** 能否使用，取决于 Intiface / Buttplug 是否已有该型号的协议支持。

## 2. 确认蓝牙开关

进入 **App Modes**（应用模式），使用 **Engine**（引擎）模式。在 **Device Managers**（设备管理器）里确认 **Bluetooth LE** 开启；这是常用的蓝牙直连入口。如果开关不能改，先停止引擎。

<a href="/images/intiface-central/intiface-device-managers.png" data-sveltekit-reload aria-label="查看原图：设备管理器设置，Bluetooth LE 开关处于开启状态"><img src="/images/intiface-central/intiface-device-managers.png" alt="设备管理器设置，Bluetooth LE 开关处于开启状态" width="1015" height="408" loading="lazy" /></a>

*图 2：关注第一项 Bluetooth LE；其余项目不需要照着旧截图全部开启。*

大多数 BLE 设备直接在 Intiface 内连接，**不要先去系统蓝牙设置里配对**。WeVibe、Satisfyer 等部分型号有例外，应按对应品牌说明操作。电脑需要可用的蓝牙适配器；手机可使用自身蓝牙。

旧截图中的 **Lovense Connect Service** 和 **Lovense HID Dongle** 已是过时接入方式。当前官方品牌说明已停止支持它们；Lovense 设备也优先使用蓝牙直连。

## 3. 启动引擎

点击顶部的大三角形 **播放按钮**。它负责启动设备连接服务，不是播放音乐。

<a href="/images/intiface-central/intiface-control-panel-start.png" data-sveltekit-reload aria-label="查看原图：引擎尚未启动时的顶部控制栏，左侧为三角形播放按钮"><img src="/images/intiface-central/intiface-control-panel-start.png" alt="引擎尚未启动时的顶部控制栏，左侧为三角形播放按钮" width="1170" height="244" loading="lazy" /></a>

*图 3：启动前。*

<a href="/images/intiface-central/intiface-control-panel-started.png" data-sveltekit-reload aria-label="查看原图：引擎启动后，播放按钮变成方形停止按钮，状态显示正在运行并等待客户端"><img src="/images/intiface-central/intiface-control-panel-started.png" alt="引擎启动后，播放按钮变成方形停止按钮，状态显示正在运行并等待客户端" width="1171" height="216" loading="lazy" /></a>

*图 4：启动后。*

按钮变成方形 **停止按钮**，说明服务已启动。看到 **Engine running, waiting for client**（引擎运行中，等待应用连接）是正常状态；你还可以先在 Intiface 内测试设备。

顶部的 **Server Address**（服务地址）供后续应用连接使用。需要结束时，点击方形按钮停止引擎；这也会停止并断开设备及应用连接。

## 4. 扫描并连接设备

引擎运行后进入 **Devices**（设备），点击 **Start Scanning**（开始扫描）。

<a href="/images/intiface-central/intiface-devices-panel.png" data-sveltekit-reload aria-label="查看原图：Devices 页尚未连接设备，顶部显示 Start Scanning 扫描入口"><img src="/images/intiface-central/intiface-devices-panel.png" alt="Devices 页尚未连接设备，顶部显示 Start Scanning 扫描入口" width="1182" height="891" loading="lazy" /></a>

*图 5：在设备页开始扫描。*

设备被识别并连接后，会出现在列表里。找到设备后点击 **Stop Scanning**（停止扫描）；停止扫描不会停止已经启动的引擎。

<a href="/images/intiface-central/intiface-devices-panel-connected.png" data-sveltekit-reload aria-label="查看原图：已连接设备列表，示例中显示 Xbox 手柄和 Lovense Max，以及各自的功能滑块"><img src="/images/intiface-central/intiface-devices-panel-connected.png" alt="已连接设备列表，示例中显示 Xbox 手柄和 Lovense Max，以及各自的功能滑块" width="1182" height="1482" loading="lazy" /></a>

*图 6：官方示例使用 Xbox 手柄和 Lovense Max；你的设备名称与控制项会不同。*

## 5. 确认控制有效，再连接应用

找到自己的设备及功能控制项，先用最低强度短暂测试，再回到零或停止。不要直接把所有滑块推满；以设备说明与自己的舒适程度为准。

**Vibrate** 是振动，**Rotate** 是旋转，**Constrict** 是收紧类功能。控制项随型号变化，有多个功能也不代表它们都叫“振动”。新版可能需要点进设备详情操作。

确认设备有响应后，再打开支持 Intiface / Buttplug 的应用，使用它的连接入口。应用与 Intiface 在同一台设备时，通常使用 `ws://localhost:12345`；以 Intiface 显示的服务地址和应用说明为准。

**电脑上的 localhost 指向电脑本身。** 如果 Intiface 装在手机、应用运行在电脑，应按应用说明填写手机地址，或使用 Intiface 的 Repeater（中继）模式；不能直接照抄电脑的 localhost。无需为初次本机测试修改网络监听设置。

## 6. 没找到设备，或出现错误？

先确认设备开机、靠近手机、系统蓝牙和相关权限已开启。退出厂商 App 与其他控制应用，再重新开机设备、扫描一次。若仍无法识别，检查该型号是否受支持；反复扫描不能补上缺失的协议。

<a href="/images/intiface-central/intiface-control-panel-update-error.png" data-sveltekit-reload aria-label="查看原图：顶部控制栏出现 Update 和 Error 提示，可进入设置查看更新或进入日志查看错误"><img src="/images/intiface-central/intiface-control-panel-update-error.png" alt="顶部控制栏出现 Update 和 Error 提示，可进入设置查看更新或进入日志查看错误" width="1176" height="211" loading="lazy" /></a>

*图 7：更新与错误提示示例，新版可能以图标呈现。*

- **Update**（更新）：有新版可用，进入设置查看。
- **Error（错误）或警告图标**：打开 **Log**（日志）查看具体原因。
- **等待 client**：还没有外部应用连接，不等于设备连接失败。

准备寻求帮助时，记录 Intiface 版本、手机或电脑系统、设备型号和日志中的错误。分享前检查日志，去掉不想公开的地址或其他私密信息。可查阅[官方排错说明](https://intiface.com/docs/intiface-central/troubleshooting/)或到[官方论坛](https://discuss.buttplug.io/)询问。

## 来源与进一步阅读

本页由 Lamplit 整理中文操作说明，截图来自 Nonpolynomial / Intiface 官方文档，保留原界面。它不是官方中文文档，也不提供设备兼容保证。

- [原入门教程 Quick(ish)start](https://intiface.com/docs/intiface-central/quickstart/)：入门流程与本文截图出处。
- [引擎控制栏](https://intiface.com/docs/intiface-central/ui/engine-control-panel/)与[设备面板](https://intiface.com/docs/intiface-central/ui/devices-panel/)：当前按钮、状态与功能说明。
- [引擎模式设置](https://intiface.com/docs/intiface-central/ui/app-modes-engine-control-panel/)与[蓝牙连接说明](https://intiface.com/docs/intiface-central/hardware/bluetooth/)：开关、配对及手机中继。
- [Lovense 当前品牌说明](https://intiface.com/docs/intiface-central/brands/lovense/)：旧接入方式的支持变化。
