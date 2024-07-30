import React, { useState } from "react";
import b from "../utils/sampleData.json";
import CardComponent from "./CardComponent";
function Dashboard() {
  const [selectValUser, setSelectValUser] = useState("");
  const [selectValDate, setSelectValDate] = useState("");
  const [cardData, setCardData] = useState("");
  console.log(b);
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="dropdown">
        <div className="user-dropdown">
          <p>Users</p>
          <select
            value={selectValUser}
            onChange={(e) => setSelectValUser(e.target.value)}
          >
            {b.data.AuthorWorklog.rows.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="date-dropdown">
          <p>Time Period</p>
          <select
            value={selectValDate}
            onChange={(e) => setSelectValDate(e.target.value)}
          >
            {b.data.AuthorWorklog.rows[0].dayWiseActivity.map((item) => (
              <option key={item.date}>{item.date}</option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {b.data.AuthorWorklog.activityMeta.map((item) => (
          <div className="cards">
            <CardComponent
              key={item.label}
              label={item.label}
              color={item.fillColor}
            ></CardComponent>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
