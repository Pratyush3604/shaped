import React from "react";
import lines from "../data/linesData";
import "./Pages.css";
import "../data/lines.css";

function Lines() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Types of <span className="gradient-text">Lines</span></h1>
        <p className="page-subtitle">Explore different types of lines and their properties</p>
      </div>

      <div className="cards-grid">
        {lines.map((line, i) => (
          <div key={i} className="card">
            {/* LINE VISUAL */}
            <div className={`shape-image ${line.image}`}></div>

            {/* LINE NAME */}
            <h3 className="card-title">{line.name}</h3>

            {/* DESCRIPTION */}
            <div className="card-description">
              {line.desc.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lines;