import { useState, useMemo } from "react";
import { categories, commands } from "./data/commands";
import BeginnerGuide from "./components/BeginnerGuide";
import "./App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCommands = useMemo(() => {
    return commands.filter((cmd) => {
      const matchCategory =
        activeCategory === "all" || cmd.category === activeCategory;
      const matchSearch =
        !searchTerm ||
        cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.brief.includes(searchTerm) ||
        cmd.useCase.includes(searchTerm);
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  const grouped = useMemo(() => {
    const map = {};
    for (const cmd of filteredCommands) {
      if (!map[cmd.category]) map[cmd.category] = [];
      map[cmd.category].push(cmd);
    }
    return map;
  }, [filteredCommands]);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Claude Code 指令大全</h1>
          <p className="subtitle">
            所有指令、快捷鍵與 CLI 選項的完整參考手冊（繁體中文版）
          </p>
          <div className="stats">
            <span className="stat-badge">共 {commands.length} 個指令</span>
            <span className="stat-badge">{categories.length} 個分類</span>
          </div>
        </div>
      </header>

      <div className="controls">
        <div className="search-bar">
          <span className="search-icon">&#128269;</span>
          <input
            type="text"
            placeholder="搜尋指令、說明或使用情境..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm("")}>
              ✕
            </button>
          )}
        </div>

        <div className="category-tabs">
          <button
            className={`tab ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            全部
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name.split("（")[0]}
            </button>
          ))}
        </div>
      </div>

      <main className="main">
        <BeginnerGuide />
        {filteredCommands.length === 0 ? (
          <div className="no-results">
            <p>找不到符合「{searchTerm}」的指令</p>
            <button onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
              清除篩選
            </button>
          </div>
        ) : (
          categories
            .filter((cat) => grouped[cat.id])
            .map((cat) => (
              <section key={cat.id} className="category-section">
                <div className="category-header">
                  <h2>{cat.name}</h2>
                  <p className="category-desc">{cat.description}</p>
                  <span className="count-badge">
                    {grouped[cat.id].length} 個指令
                  </span>
                </div>

                <div className="commands-grid">
                  {grouped[cat.id].map((cmd, i) => (
                    <div key={i} className={`command-card ${cmd.category}`}>
                      <div className="command-name">
                        <code>{cmd.command}</code>
                      </div>
                      <div className="command-brief">{cmd.brief}</div>
                      <div className="command-usecase">
                        <span className="usecase-label">使用情境：</span>
                        {cmd.useCase}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
        )}
      </main>

      <footer className="footer">
        <p>
          Claude Code 指令參考手冊 — 繁體中文版 | 資料來源：Claude Code 官方文件
        </p>
      </footer>
    </div>
  );
}

export default App;
