import { useEffect, useState } from "react";
import "./works.scss";
import {workExperience} from "../../data";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Works() {
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
        setData(workExperience);
    }
  }, [selected]);

  return (
    <div className="werk" id="works">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <Card className="card">
              <CardHeader
                avatar={  
                  <a href="https://unlimited-app.com/" target="_blank">
                    <Avatar src={require("" + baseURL + d.img).default}
                            aria-label="recipe" 
                            className="avatar"/></a>
                }
                title={d.title}
                titleTypographyProps={{variant:'h2'}}
                subheader={d.role}
                subheaderTypographyProps={{variant:'h4'}}
                className="cHeader"
                style={{fontSize: "100px"}}
              />
              <CardContent className="cContent">
                <Typography variant="body2" color="text.secondary">
                  <h3>{d.location_time}</h3>
                  <br/><br/>
                  <p>{d.activity}</p>
                  <i><b>Stack: {d.stack}</b></i>
                </Typography>
              </CardContent>
              </Card>
          </div>
        ))}
      </div>
    </div>
  );
}