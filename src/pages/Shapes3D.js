import React from "react";
import shapes3D from "../data/shapes3DData";
import ShapeViewer from "../components/ShapeViewer";
import "./Pages.css";

function Shapes3D() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">3D <span className="gradient-text">Shapes</span></h1>
        <p className="page-subtitle">Discover 3D solids with interactive visualizations</p>
      </div>

      <div className="cards-grid-3d">
        {shapes3D.map((shape, i) => (
          <div key={i} className="card card-3d">
            <h3 className="card-title">{shape.name}</h3>

            <div className="shape-viewer-container">
              <ShapeViewer model={shape.model} />
            </div>

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

export default Shapes3D;