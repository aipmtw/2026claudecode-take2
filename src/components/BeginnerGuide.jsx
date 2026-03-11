import { useState } from "react";
import { levels } from "../data/beginnerGuide";
import "./BeginnerGuide.css";

function BeginnerGuide() {
  const [expandedLevel, setExpandedLevel] = useState(1);
  const [expandedCase, setExpandedCase] = useState({});

  const toggleCase = (levelIdx, caseIdx) => {
    const key = `${levelIdx}-${caseIdx}`;
    setExpandedCase((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="beginner-guide">
      <div className="guide-header">
        <h2>新手學習路線</h2>
        <p>從零開始，循序漸進掌握 Claude Code — 以「使用情境」引導你逐步升級</p>
      </div>

      <div className="level-progress">
        {levels.map((lvl) => (
          <button
            key={lvl.level}
            className={`level-dot ${expandedLevel === lvl.level ? "active" : ""}`}
            style={{
              "--level-color": lvl.color,
            }}
            onClick={() => setExpandedLevel(lvl.level)}
          >
            <span className="dot-number">Lv.{lvl.level}</span>
            <span className="dot-label">{lvl.title}</span>
          </button>
        ))}
        <div className="progress-line" />
      </div>

      <div className="levels-container">
        {levels.map((lvl) => (
          <div
            key={lvl.level}
            className={`level-section ${expandedLevel === lvl.level ? "expanded" : "collapsed"}`}
            style={{ "--level-color": lvl.color }}
          >
            <button
              className="level-title-bar"
              onClick={() =>
                setExpandedLevel(expandedLevel === lvl.level ? null : lvl.level)
              }
            >
              <div className="level-badge">Lv.{lvl.level}</div>
              <div className="level-info">
                <h3>{lvl.title}</h3>
                <span className="level-subtitle">{lvl.subtitle}</span>
              </div>
              <span className="level-count">
                {lvl.useCases.length} 個情境
              </span>
              <span className="expand-icon">
                {expandedLevel === lvl.level ? "▼" : "▶"}
              </span>
            </button>

            {expandedLevel === lvl.level && (
              <div className="use-cases">
                {lvl.useCases.map((uc, i) => {
                  const key = `${lvl.level}-${i}`;
                  const isOpen = expandedCase[key] !== false;
                  return (
                    <div key={i} className={`use-case-card ${isOpen ? "open" : ""}`}>
                      <button
                        className="use-case-header"
                        onClick={() => toggleCase(lvl.level, i)}
                      >
                        <span className="scenario-icon">💡</span>
                        <span className="scenario-text">「{uc.scenario}」</span>
                        <span className="toggle-icon">{isOpen ? "−" : "+"}</span>
                      </button>

                      {isOpen && (
                        <div className="use-case-body">
                          <div className="steps-section">
                            <h4>操作步驟</h4>
                            <ol className="steps-list">
                              {uc.steps.map((step, j) => (
                                <li key={j}>
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: step.replace(
                                        /`([^`]+)`/g,
                                        '<code>$1</code>'
                                      ),
                                    }}
                                  />
                                </li>
                              ))}
                            </ol>
                          </div>

                          <div className="commands-section">
                            <h4>相關指令</h4>
                            <div className="command-chips">
                              {uc.commands.map((cmd, j) => (
                                <code key={j} className="command-chip">
                                  {cmd}
                                </code>
                              ))}
                            </div>
                          </div>

                          <div className="tip-section">
                            <span className="tip-icon">💡</span>
                            <span
                              className="tip-text"
                              dangerouslySetInnerHTML={{
                                __html: uc.tip.replace(
                                  /`([^`]+)`/g,
                                  '<code>$1</code>'
                                ),
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeginnerGuide;
