import { useEffect, useState } from "react";
import "./portfolio.scss";
import {featuredPortfolio} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const baseURL = './images/';
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
  ];

  useEffect(() => {
    switch (selected) {
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="porto" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.link} target="_blank"><img
              src={require("" + baseURL + d.img).default}
              alt=""
            /></a> 
            <h3>{d.title} <br/><br/> <i className="ii">{d.stack}</i></h3>
          </div>
        ))}
      </div>
    </div>
  );
}