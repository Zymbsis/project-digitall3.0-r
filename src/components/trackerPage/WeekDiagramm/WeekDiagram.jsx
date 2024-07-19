import React from 'react';

import css from './WeekDiagram.module.css';
import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';

const data = [
  { name: '12', uv: 600 },
  { name: '13', uv: 2500 },
  { name: '14', uv: 700 },
  { name: '15', uv: 2000 },
  { name: '16', uv: 1200 },
  { name: '17', uv: 800 },
  { name: '18', uv: 500 },
];

// const CustomDot = props => {
//   const { cx, cy, index, data } = props;
//   const dx = index === 0 ? 11 : 0;
//   const dy = index === 0 ? -11 : 0;
//   return (
//     <circle
//       cx={cx + dx}
//       cy={cy + dy}
//       r={7}
//       fill="var(--primary-white-color)"
//       strokeWidth={2}
//       stroke="var(--hover-green-color)"
//     />
//   );
// };

// точки не кастомні
// {{
//   fill: 'var( --primary-white-color)',
//   r: 7,
//   strokeWidth: 2,
//   stroke: 'var( --hover-green-color)',
// }}
// />

const toLitersOrPercent = value => {
  if (value === 0) {
    return '0%';
  }
  return `${value / 1000} L`;
};

const WeekDiagram = () => {
  return (
    <div className={css.container}>
      <div>Hello</div>

      <AreaChart
        width={303}
        height={300}
        data={data}
        margin={{ top: 10, right: 20, left: 20, bottom: 40 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0"
              stopColor="var( --hover-green-color)"
              stopOpacity={1}
            />
            <stop
              offset="100%"
              stopColor="var( --hover-green-color)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="name"
          tick={{
            fontSize: 15,
            fill: 'var(--primary-dark-grey-color)',
            dy: 20,
          }}
          axisLine={{ stroke: 'none' }}
          tickLine={{ stroke: 'none' }}
        />
        <YAxis
          tickFormatter={toLitersOrPercent}
          tickCount={6}
          tick={{
            fontSize: 15,
            fill: 'var(--primary-dark-grey-color)',
            dx: -20,
          }}
          axisLine={{ stroke: 'none' }}
          tickLine={{ stroke: 'none' }}
        />

        <Tooltip />
        <Area
          dataKey="uv"
          stroke="var( --hover-green-color)"
          strokeWidth="2"
          fillOpacity={1}
          fill="url(#colorUv)"
          // dot={<CustomDot data={data} />}
          dot={{
            fill: 'var( --primary-white-color)',
            r: 7,
            strokeWidth: 2,
            stroke: 'var( --hover-green-color)',
          }}
        />
      </AreaChart>
    </div>
  );
};

export default WeekDiagram;
