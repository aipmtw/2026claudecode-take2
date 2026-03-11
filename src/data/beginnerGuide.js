export const levels = [
  {
    level: 1,
    title: "入門起步",
    subtitle: "第一次使用 Claude Code",
    color: "#4ecdc4",
    useCases: [
      {
        scenario: "我想開始使用 Claude Code",
        steps: [
          "在終端機輸入 `claude` 啟動互動式工作階段",
          "輸入你的問題或需求，按 Enter 送出",
          "Claude 會回應並可能使用工具幫你完成任務",
        ],
        commands: ["claude", "claude \"你好，請介紹自己\""],
        tip: "第一次使用需要先登入：執行 `claude auth login`",
      },
      {
        scenario: "我想讓 Claude 解釋一段程式碼",
        steps: [
          "啟動 Claude Code",
          "直接貼上程式碼或告訴它檔案位置",
          "用自然語言提問",
        ],
        commands: ["claude \"請解釋 src/App.jsx 這個檔案的功能\""],
        tip: "Claude 會自動讀取檔案，你不需要手動貼上程式碼",
      },
      {
        scenario: "我想查看有哪些指令可以用",
        steps: [
          "在互動模式中輸入 `/help`",
          "輸入 `/` 會顯示所有可用的斜線指令",
        ],
        commands: ["/help"],
        tip: "按 ↑↓ 方向鍵可以瀏覽之前輸入過的指令",
      },
      {
        scenario: "我想離開 Claude Code",
        steps: [
          "輸入 `/exit` 或按 `Ctrl+D` 離開",
        ],
        commands: ["/exit", "Ctrl+D"],
        tip: "你的對話會自動儲存，下次可以用 `claude -c` 繼續",
      },
    ],
  },
  {
    level: 2,
    title: "基本操作",
    subtitle: "掌握日常開發必備技能",
    color: "#7c6fe0",
    useCases: [
      {
        scenario: "我想讓 Claude 幫我寫程式碼",
        steps: [
          "描述你想要的功能，越具體越好",
          "Claude 會建議修改方案並詢問你是否同意",
          "確認後它會自動編輯檔案",
        ],
        commands: [
          "claude \"在 utils.js 中新增一個驗證 Email 格式的函式\"",
        ],
        tip: "Claude 會在修改檔案前詢問你的同意，你可以拒絕或要求調整",
      },
      {
        scenario: "我想繼續昨天的工作",
        steps: [
          "使用 `-c` 旗標繼續最近的對話",
          "或使用 `/resume` 選擇特定的工作階段",
        ],
        commands: ["claude -c", "/resume"],
        tip: "用 `/rename my-feature` 為工作階段命名，方便日後恢復",
      },
      {
        scenario: "對話太長，Claude 開始忘記前面的內容",
        steps: [
          "使用 `/compact` 壓縮對話",
          "可以加上指示告訴它保留什麼重點",
        ],
        commands: ["/compact", "/compact 保留 API 設計的討論"],
        tip: "用 `/context` 可以視覺化查看上下文空間的使用狀況",
      },
      {
        scenario: "我想查看 Claude 幫我改了什麼",
        steps: [
          "使用 `/diff` 開啟差異檢視器",
          "可以看到所有未提交的程式碼變更",
        ],
        commands: ["/diff"],
        tip: "養成定期檢查 diff 的習慣，確保變更符合預期",
      },
      {
        scenario: "我想快速執行終端機指令",
        steps: [
          "在輸入前加上 `!` 即可直接執行 bash 指令",
          "不需要離開 Claude Code",
        ],
        commands: ["!git status", "!npm test"],
        tip: "這是 Bash 模式，指令不會經過 Claude 處理",
      },
    ],
  },
  {
    level: 3,
    title: "效率提升",
    subtitle: "用進階技巧加速開發流程",
    color: "#ff6b9d",
    useCases: [
      {
        scenario: "我想讓 Claude 自動幫我處理重複性工作",
        steps: [
          "使用 `--permission-mode auto` 啟動自動接受模式",
          "或在互動模式中按 `Shift+Tab` 切換權限模式",
          "Claude 會自動執行操作，不再逐一詢問",
        ],
        commands: [
          "claude --permission-mode auto",
          "Shift+Tab 循環切換：一般 → 自動接受 → 計畫",
        ],
        tip: "自動模式適合信任的操作，敏感操作建議使用一般模式",
      },
      {
        scenario: "我想讓 Claude 先規劃再執行",
        steps: [
          "使用 `/plan` 進入計畫模式",
          "Claude 會先列出實作步驟，不會直接修改程式碼",
          "確認計畫後再切回一般模式執行",
        ],
        commands: ["/plan", "claude --permission-mode plan"],
        tip: "對於大型重構或不確定的任務，先規劃再執行可以避免走錯方向",
      },
      {
        scenario: "我想用不同的 AI 模型",
        steps: [
          "使用 `/model` 切換模型",
          "或按 `Alt+P`（Windows）/ `Option+P`（macOS）快速切換",
          "Opus 最強大、Sonnet 最平衡、Haiku 最快速",
        ],
        commands: ["/model opus", "/model sonnet", "Alt+P"],
        tip: "用 `/fast` 可以開啟快速模式，使用相同模型但加速輸出",
      },
      {
        scenario: "我想在腳本中使用 Claude",
        steps: [
          "使用 `-p` 旗標進入列印模式",
          "可以接受管道輸入，適合串接到工作流程中",
          "用 `--output-format json` 取得結構化輸出",
        ],
        commands: [
          "claude -p \"列出這個專案的主要功能\"",
          "cat error.log | claude -p \"分析這些錯誤\"",
          "claude -p --output-format json \"列出所有 TODO\"",
        ],
        tip: "加上 `--max-turns 3` 可以限制代理人的輪次，控制執行時間",
      },
      {
        scenario: "我想同時處理多個任務",
        steps: [
          "使用 `/fork` 建立對話分支，嘗試不同方向",
          "使用 `Ctrl+B` 將任務移到背景執行",
          "使用 `/tasks` 管理所有背景任務",
        ],
        commands: ["/fork 嘗試方案B", "Ctrl+B", "/tasks"],
        tip: "背景任務完成時會自動通知你",
      },
      {
        scenario: "我想讓 Claude 記住我的偏好",
        steps: [
          "使用 `/memory` 編輯 CLAUDE.md 記憶檔",
          "或使用 `/init` 初始化專案設定",
          "寫入你的開發慣例與偏好",
        ],
        commands: ["/memory", "/init"],
        tip: "在 CLAUDE.md 中寫入如「一律使用 TypeScript」、「測試用 Vitest」等偏好",
      },
    ],
  },
  {
    level: 4,
    title: "進階整合",
    subtitle: "與開發工具深度結合",
    color: "#ffd93d",
    useCases: [
      {
        scenario: "我想讓 Claude 幫我做 Code Review",
        steps: [
          "使用 `/pr-comments` 查看 PR 的留言",
          "使用 `/security-review` 檢查安全性漏洞",
          "使用 `/install-github-app` 設定 GitHub 自動化",
        ],
        commands: [
          "/pr-comments 123",
          "/security-review",
          "/install-github-app",
        ],
        tip: "安裝 GitHub App 後，Claude 可以自動回覆 PR 留言",
      },
      {
        scenario: "我想擴展 Claude 的能力",
        steps: [
          "使用 `/mcp` 設定 MCP 伺服器",
          "MCP 可以讓 Claude 存取資料庫、API 等外部資源",
          "用 `--mcp-config` 從設定檔載入",
        ],
        commands: [
          "/mcp",
          "claude mcp add my-server -- npx my-mcp-server",
          "claude --mcp-config ./mcp.json",
        ],
        tip: "MCP 是 Claude Code 最強大的擴展機制，可以串接幾乎任何工具",
      },
      {
        scenario: "我想在隔離環境中開發功能",
        steps: [
          "使用 `--worktree` 在獨立的 Git Worktree 中啟動",
          "變更不會影響主分支",
          "完成後可以合併或丟棄",
        ],
        commands: ["claude -w feature-auth"],
        tip: "適合實驗性功能開發或並行處理多個功能分支",
      },
      {
        scenario: "我想自訂代理人處理特定任務",
        steps: [
          "使用 `--agents` 旗標定義特化代理人",
          "指定代理人的工具、模型與行為",
          "Claude 會在適當時機自動呼叫",
        ],
        commands: [
          "claude --agents '{\"reviewer\":{\"description\":\"程式碼審查\",\"prompt\":\"你是資深審查員\",\"model\":\"sonnet\"}}'",
        ],
        tip: "代理人可以有不同的模型和工具集，適合分工處理複雜任務",
      },
      {
        scenario: "我想從任何地方遠端操控 Claude",
        steps: [
          "使用 `/remote-control` 讓工作階段可從 claude.ai 遠端控制",
          "或用 `--remote` 直接在雲端建立工作階段",
          "用 `--teleport` 將雲端工作帶回本機",
        ],
        commands: ["/remote-control", "claude --remote \"修復 bug\"", "claude --teleport"],
        tip: "遠端控制適合在手機上監控長時間任務的進度",
      },
    ],
  },
  {
    level: 5,
    title: "專家技巧",
    subtitle: "掌握所有隱藏功能與最佳實踐",
    color: "#6bcf7f",
    useCases: [
      {
        scenario: "我想完全自訂 Claude 的行為",
        steps: [
          "使用 `--system-prompt` 完全取代系統提示",
          "或用 `--append-system-prompt` 追加指示",
          "可以從檔案載入複雜的提示內容",
        ],
        commands: [
          "claude --system-prompt \"你是 Rust 專家，只用 Rust 回答\"",
          "claude --append-system-prompt-file ./team-rules.txt",
        ],
        tip: "自訂系統提示適合團隊標準化或特殊用途場景",
      },
      {
        scenario: "我想設定自動化鉤子",
        steps: [
          "使用 `/hooks` 設定工具事件的鉤子",
          "可以在檔案修改、指令執行等事件時自動觸發腳本",
          "例如：每次編輯後自動跑 linter",
        ],
        commands: ["/hooks"],
        tip: "鉤子是自動化工作流程的關鍵，可以確保程式碼品質",
      },
      {
        scenario: "我想控制成本與用量",
        steps: [
          "使用 `--max-budget-usd` 設定花費上限",
          "使用 `/cost` 即時查看費用",
          "使用 `/usage` 查看方案配額",
        ],
        commands: [
          "claude -p --max-budget-usd 2.00 \"重構整個模組\"",
          "/cost",
          "/usage",
        ],
        tip: "在 CI/CD 中使用時，務必設定預算上限防止意外支出",
      },
      {
        scenario: "我想取得結構化的 JSON 輸出",
        steps: [
          "使用 `--json-schema` 指定輸出格式",
          "Claude 會回傳符合 Schema 的驗證過 JSON",
          "適合整合到自動化管線中",
        ],
        commands: [
          "claude -p --json-schema '{\"type\":\"object\",\"properties\":{\"bugs\":{\"type\":\"array\"}}}' \"找出所有 bug\"",
        ],
        tip: "結合 `--output-format json` 與 `--json-schema` 可以建立可靠的自動化管線",
      },
      {
        scenario: "我想用外掛程式擴充功能",
        steps: [
          "使用 `/plugin` 管理外掛程式",
          "用 `--plugin-dir` 載入自訂外掛目錄",
          "使用 `/reload-plugins` 熱重載外掛",
        ],
        commands: ["/plugin", "claude --plugin-dir ./my-plugins", "/reload-plugins"],
        tip: "外掛可以新增自訂斜線指令和工具，非常適合團隊共用",
      },
      {
        scenario: "我想排除問題與除錯",
        steps: [
          "使用 `/doctor` 診斷安裝問題",
          "使用 `--debug` 啟用除錯記錄",
          "使用 `Ctrl+O` 切換詳細輸出查看工具細節",
        ],
        commands: ["/doctor", "claude --debug \"api,mcp\"", "Ctrl+O"],
        tip: "遇到問題時先跑 /doctor，大多數問題都能自動檢測出來",
      },
    ],
  },
];
