import "./topbar.scss";
import { Mail, GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Manuel Stefan Christopher
          </a>
          <div className="itemContainer">
            <a href="mailto:ms2chris@uwaterloo.ca" target="_blank"><Mail className="icon"/></a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/mschristophers" target="_blank"><GitHub className="icon" style={{fontSize: "30px"}}/></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/mschristophers/" target="_blank"><LinkedIn className="icon"/></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}