import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const Linechart = (props) => {
  return (
    <div className='result-historicaldata-subcontainer-item-linechart' >
      <LineChart
        width={props.width}
        height={props.height}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        {props.lines.map((line, i) =>
          <Line key={i} type="monotone" dataKey={line.attribute} stroke={line.color} />
        )}
      </LineChart>
    </div>
  )
}

export default Linechart