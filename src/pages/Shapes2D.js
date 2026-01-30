import React from "react";
import shapes2D from "../data/shapes2DData";
import "../data/shapes2D.css";
import "./Pages.css";

function Shapes2D() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">2D <span className="gradient-text">Shapes</span></h1>
        <p className="page-subtitle">Learn about flat shapes with formulas and properties</p>
      </div>

      <div className="cards-grid">
        {shapes2D.map((shape, i) => (
          <div key={i} className="card">
            <div className={`shape-image ${shape.image}`}></div>
            <h3 className="card-title">{shape.name}</h3>
            
            <div className="card-description">
              {shape.desc.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {shape.formulas && (
              <div className="card-formulas">
                <h4>Formulas:</h4>
                <ul>
                  {shape.formulas.map((formula, j) => (
                    <li key={j}>{formula}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shapes2D;