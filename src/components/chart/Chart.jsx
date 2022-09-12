import React, { PureComponent }  from 'react';
import "./chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'Jun', loss: 4000, revenue: 2400},
  {name: 'Feb', loss: 3000, revenue: 1398},
  {name: 'Mar', loss: 2000, revenue: 9800},
  {name: 'Apr', loss: 2780, revenue: 3908},
  {name: 'May', loss: 1890, revenue: 4800},
  {name: 'Jun', loss: 2390, revenue: 3800},
  {name: 'Jul', loss: 3490, revenue: 4300},
];

class CustomizedXAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="var(--color-d)" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }
}

class CustomizedYAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="var(--color-d)">
          {payload.value}
        </text>
      </g>
    );
  }
}


const Chart = ({aspect, title}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="50%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedXAxisTick />} />
          <YAxis  height={60} tick={<CustomizedYAxisTick />} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="var(--color-d-b)" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="loss" stroke="var(--color-d-c)" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart