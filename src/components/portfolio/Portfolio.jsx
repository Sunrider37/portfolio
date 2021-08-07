import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  frontend,
  backend,
  fullstack,
} from "../../data";
import { Link } from "@material-ui/core";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "fullstack",
      title: "Fullstack",
    }
    
  ];

  useEffect(() => {
    switch (selected) {
      case "fullstack":
        setData(fullstack);
        break;
      case "backend":
        setData(backend);
        break;
      default:
        setData(frontend);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          
          <div className="item">
            <img 
             onClick={() => window.open(d.website, "_blank")}
              src={d.img}
              alt=""
              />
            <h3>{d.title}</h3>
          </div>
              
        ))}
      </div>
    </div>
  );
}
