import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from 'recharts';
import b from "../utils/sampleData.json";

function ActivityPieChart({ data }) {
  console.log(data,"data");
  let color = b.data.AuthorWorklog.activityMeta;

  if (data.length > 0) {
    return (
      <div>
        <PieChart width={600} height={300}>
          <Pie
            data={data}
            cx={120}
            cy={120}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={color[index].fillColor} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    );
  }
}

export default ActivityPieChart;