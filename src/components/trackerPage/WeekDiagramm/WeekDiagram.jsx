import React, { useEffect, useState } from 'react';

import css from './WeekDiagram.module.css';
import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';

const data = [
  { name: '12', uv: 1200 },
  { name: '13', uv: 1500 },
  { name: '14', uv: 700 },
  { name: '15', uv: 2000 },
  { name: '16', uv: 1200 },
  { name: '17', uv: 1000 },
  { name: '18', uv: 1800 },
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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        <p>{`${payload[0].value} ml`}</p>
      </div>
    );
  }

  return null;
};

const WeekDiagram = () => {
  const [chartSize, setChartSize] = useState({ width: 303, height: 256 });

  useEffect(() => {
    const handleResize = () => {
      if (Math.min(window.innerWidth - 64, 768)) {
        setChartSize({ width: 588, height: 273 });
      }
    };

    handleResize(); // Установить начальный размер
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toLitersOrPercent = value => {
    if (value === 0) {
      return '0%';
    }
    return `${value / 1000} L`;
  };

  return (
    // <div>
    <div className={css.container}>
      <AreaChart
        // className={css.areaChartWrapper}
        width={chartSize.width}
        height={chartSize.height}
        data={data}
        // margin={{ top: 47, right: 20, left: 20, bottom: 40 }}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
        // padding={{ top: 0, right: 0, left: 0, bottom: 0 }}
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

        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: 'none', pointer: 'none' }}
          offset={-50}
        />

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
          activeDot={{
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
