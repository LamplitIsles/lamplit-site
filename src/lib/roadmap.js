// Editorial baseline: the Phase 1B launch. Not an engineering completion record.
// User confirmed Phase 1A complete; Phase 1B is shown as complete for launch copy.
export const phases = [
  {
    id: 'phase-0', number: '0', title: '在自己的岛上点灯', label: '开源自托管', status: '已完成', done: true,
    outcome: '在自己的 Cloudflare 账户上安家，掌握运行环境与数据。',
    features: ['完整聊天前后端开源，可独立部署，不需要购买服务器或让电脑长期开着。', '网页聊天、历史搜索、持久化记忆与 Markdown 文件。', '手机 PWA 入口；按需接入 R2，保存照片、头像与背景。'],
    note: '模型 API 费用自付；Cloudflare 资源按账户额度与实际用量计算。'
  },
  {
    id: 'phase-1a', number: '1A', title: '有人照看，你们安心住下', label: '免费托管', status: '已完成', done: true,
    outcome: '邮箱登录，进入自己的小家。平台照看运行环境，你们继续日常。',
    features: ['独立的个人地址，用户间的聊天、记忆、图片与凭据隔离。', '使用自己的模型 API key，保留历史、搜索、记忆与图片。', '支持 DeepSeek 网页端记录导入与远程 MCP 配置。'],
    note: '聊天机免费托管，无需订阅工作机。模型用量直接向你选择的服务商结算。'
  },
  {
    id: 'phase-1b', number: '1B', title: '把想法，变成你们的小家', label: '工作机与定制', status: '已完成', done: true,
    outcome: '说出想改的地方，让工作机修改真实项目；先预览，再发布。',
    features: ['工作机与聊天机拥有独立上下文，技术事务和日常各有空间。', '私有项目保存前端源码，支持布局、样式、交互与图片资源定制。', '构建、预览、确认发布与回滚，手机上也能使用自己的 PWA 前端。', '协助身份资料整理、聊天记录导入、前端改造与 MCP 接入；后端通过插件参数和提示词配置。', '主动开启七天工作机试用，到期不自动收费。'],
    note: 'Paid 工作机标准价 ¥60/季，现阶段 75 折 ¥45/季（折合 ¥15/月），用于平台维护。一次购买三个月，到期手动续费，不自动扣款；未续费仍保留已有界面和免费聊天；平台升级所需的兼容修复由平台负责。两机均 BYOK。'
  },
  {
    id: 'phase-2', number: '2', title: '一起，走向更远的地方', label: '迁出、分享与更多连接', status: '规划中', done: false,
    outcome: '让小家能带走，让好的布置可以分享，让彼此协作更自然。',
    features: ['完整迁入迁出：带上身份、聊天记录、记忆、前后端源码及必要配置，保留定制成果。', '聊天机与工作机直接交接需求、回传结果。', '前端模板分享、用户间 Git 协作与更多聊天来源导入。', '手机能力连接，以及主动唤醒、群聊等扩展。'],
    note: '这些能力尚未开放，将根据实际需要逐步推进。'
  }
];
