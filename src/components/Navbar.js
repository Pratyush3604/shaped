import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Geometry Explorer</h2>
      <div>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/lines">Lines</Link>
        <Link style={styles.link} to="/shapes2d">2D Shapes</Link>
        <Link style={styles.link} to="/shapes3d">3D Shapes</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"15px 40px",
    background:"rgba(0,0,0,0.3)",
    backdropFilter:"blur(8px)"
  },
  logo:{margin:0},
  link:{
    color:"white",
    marginLeft:"20px",
    textDecoration:"none",
    fontWeight:"bold"
  }
}
