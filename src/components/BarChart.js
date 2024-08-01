import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import b from "../utils/sampleData.json"
function ActivityBarChart({data}) {
    console.log(data)
 let color= b.data.AuthorWorklog.activityMeta
//  console.log(color)

 if(data.length>0){
    return (
        <div>
        <BarChart width={600} height={300} data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis type="number" />
            <XAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            {/* {color.map((item)=><Bar key={item.label} dataKey={item.label} fill={item.fillColor}/>)} */}
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    </div>
      )
 }
 
}

export default ActivityBarChart

