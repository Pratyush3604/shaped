import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.homePage}>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Welcome to <span style={styles.gradientText}>Geometry Explorer</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Discover Lines, 2D Shapes, and 3D Shapes Interactively
          </p>
          <p style={styles.heroAuthor}>By Pratyush Dalmia — Mayo College</p>
          
          <div style={styles.featureGrid}>
            <Link to="/lines" style={styles.featureCard}>
              <div style={styles.featureIcon}>📏</div>
              <h3 style={styles.featureTitle}>Lines</h3>
              <p style={styles.featureText}>Explore different types of lines and their properties</p>
            </Link>
            
            <Link to="/shapes2d" style={styles.featureCard}>
              <div style={styles.featureIcon}>⬛</div>
              <h3 style={styles.featureTitle}>2D Shapes</h3>
              <p style={styles.featureText}>Learn about flat shapes with formulas and details</p>
            </Link>
            
            <Link to="/shapes3d" style={styles.featureCard}>
              <div style={styles.featureIcon}>🔷</div>
              <h3 style={styles.featureTitle}>3D Shapes</h3>
              <p style={styles.featureText}>Discover 3D solids with interactive visualizations</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  homePage: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  hero: {
    textAlign: 'center',
    maxWidth: '900px',
    width: '100%',
  },
  heroContent: {
    animation: 'fadeInUp 0.8s ease',
  },
  heroTitle: {
    fontSize: '3.5rem',
    margin: '0 0 20px 0',
    fontWeight: '800',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #1e90ff, #ff6ec7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: '0 0 10px 0',
    fontWeight: '300',
  },
  heroAuthor: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.6)',
    margin: '0 0 50px 0',
    fontStyle: 'italic',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '50px',
  },
  featureCard: {
    background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.2) 0%, rgba(138, 43, 226, 0.2) 100%)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '30px',
    textDecoration: 'none',
    color: 'white',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'block',
  },
  featureIcon: {
    fontSize: '4rem',
    marginBottom: '15px',
  },
  featureTitle: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  featureText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.95rem',
    margin: '0',
  },
};

export default Home;