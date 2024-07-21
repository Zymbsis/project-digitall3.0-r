import React, { useEffect, useState } from 'react';

import css from './WeekDiagram.module.css';
import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';
import { useSelector } from 'react-redux';
import { selectInfoByMonth } from '../../../redux/water/selectors.js';

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
  const getWaterDataForLast7Days = waterData => {
    const today = new Date();
    let daysArray = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      const day = date.getDate().toString().padStart(2, '0');

      const dayData = waterData.find(water => water.day === day) || {
        portions: [],
      };
      console.log(waterData);
      const volume = dayData.portions.reduce(
        (total, portion) => total + portion.volume,
        0
      );
      daysArray.push({ name: day, uv: volume });
    }

    return daysArray;
  };

  const { days: waterData } = useSelector(selectInfoByMonth);

  const transformedData = getWaterDataForLast7Days(waterData);
  console.log(transformedData);

  const [chartSize, setChartSize] = useState({
    width: 244,
    height: 256,
    r: 7,
    strokeWidth: 2,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 370) {
        setChartSize({
          width: 244,
          height: 256,
          r: 8,
          strokeWidth: 2,
          // top: 47,
        });
      } else if (window.innerWidth < 767) {
        setChartSize({
          width: 303,
          height: 256,
          r: 8,
          strokeWidth: 2,
          // top: 47,
        });
      } else if (window.innerWidth < 768) {
        setChartSize({
          width: 272,
          height: 256,
          r: 8,
          strokeWidth: 2,
          // top: 47,
        });
      } else if (window.innerWidth < 1440) {
        setChartSize({
          width: 608,
          height: 260,
          r: 12,
          strokeWidth: 3,
          // top: 71,
        });
      } else {
        setChartSize({
          width: 588,
          height: 273,
          r: 12,
          strokeWidth: 3,
          // top: 49,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toLitersOrPercent = value => {
    if (value === 0) {
      return '0%';
    }
    return `${(value / 1000).toFixed(1)} L`;
  };

  return (
    // <div>
    <div className={css.container}>
      <AreaChart
        // className={css.areaChartWrapper}
        width={chartSize.width}
        height={chartSize.height}
        data={transformedData}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
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
            r: chartSize.r,
            strokeWidth: chartSize.strokeWidth,
            stroke: 'var( --hover-green-color)',
          }}
          activeDot={{
            fill: 'var( --primary-white-color)',
            r: chartSize.r,
            strokeWidth: chartSize.strokeWidth,
            stroke: 'var( --hover-green-color)',
          }}
        />
      </AreaChart>
    </div>
  );
};

export default WeekDiagram;

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

// const transformonmData = [
//   { name: '12', uv: 1200 },
//   { name: '13', uv: 1500 },
//   { name: '14', uv: 700 },
//   { name: '15', uv: 2000 },
//   { name: '16', uv: 1200 },
//   { name: '17', uv: 1000 },
//   { name: '18', uv: 1800 },
// ];

// const monthInfo = {
//   date: '2024-07',
//   days: [
//     {
//       portions: [
//         {
//           _id: '669bb542dde1070bf232c7ff',
//           userId: '6696da096b946c399dd89cf2',
//           time: '09:00:05',
//           date: '2024-07-01',
//           volume: 1000,
//           dailyNorma: 1500,
//           createdAt: '2024-07-20T13:01:54.929Z',
//           updatedAt: '2024-07-20T13:01:54.929Z',
//         },
//       ],
//       completionRate: 0.6666666666666666,
//       day: '01',
//     },
//     {
//       portions: [
//         {
//           _id: '669bb555dde1070bf232c88d',
//           userId: '6696da096b946c399dd89cf2',
//           time: '09:00:05',
//           date: '2024-07-02',
//           volume: 900,
//           dailyNorma: 1500,
//           createdAt: '2024-07-20T13:02:13.337Z',
//           updatedAt: '2024-07-20T13:02:13.337Z',
//         },
//       ],
//       completionRate: 0.6,
//       day: '02',
//     },
//     {
//       portions: [
//         {
//           _id: '669bb563dde1070bf232c9a8',
//           userId: '6696da096b946c399dd89cf2',
//           time: '09:00:05',
//           date: '2024-07-03',
//           volume: 870,
//           dailyNorma: 1500,
//           createdAt: '2024-07-20T13:02:27.903Z',
//           updatedAt: '2024-07-20T13:02:27.903Z',
//         },
//       ],
//       completionRate: 0.58,
//       day: '03',
//     },
//     {
//       portions: [
//         {
//           _id: '669bb570dde1070bf232c9ac',
//           userId: '6696da096b946c399dd89cf2',
//           time: '09:00:05',
//           date: '2024-07-04',
//           volume: 1000,
//           dailyNorma: 1500,
//           createdAt: '2024-07-20T13:02:40.602Z',
//           updatedAt: '2024-07-20T13:02:40.602Z',
//         },
//       ],
//       completionRate: 0.6666666666666666,
//       day: '04',
//     },
//     {
//       portions: [
//         {
//           _id: '669bb57ddde1070bf232c9b0',
//           userId: '6696da096b946c399dd89cf2',
//           time: '09:00:05',
//           date: '2024-07-05',
//           volume: 900,
//           dailyNorma: 1500,
//           createdAt: '2024-07-20T13:02:53.993Z',
//           updatedAt: '2024-07-20T13:02:53.993Z',
//         },
//       ],
//       completionRate: 0.6,
//       day: '05',
//     },
//     {
//       portions: [
//         {
//           _id: '669bb58cdde1070bf232c9b4',
//           userId: '6696da096b946c399dd89cf2',
//           time: '09:00:05',
//           date: '2024-07-06',
//           volume: 700,
//           dailyNorma: 1500,
//           createdAt: '2024-07-20T13:03:08.379Z',
//           updatedAt: '2024-07-20T13:03:08.379Z',
//         },
//       ],
//       completionRate: 0.4666666666666667,
//       day: '06',
//     },
//     {
//       portions: [
//         {
//           _id: '669bb59adde1070bf232c9b8',
//           userId: '6696da096b946c399dd89cf2',
//           time: '09:00:05',
//           date: '2024-07-07',
//           volume: 800,
//           dailyNorma: 1500,
//           createdAt: '2024-07-20T13:03:22.318Z',
//           updatedAt: '2024-07-20T13:03:22.318Z',
//         },
//       ],
//       completionRate: 0.5333333333333333,
//       day: '07',
//     },
//   ],
// };
