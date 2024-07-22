const getWaterDataForLast7Days = (waterData, month) => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;

  let daysArray = [];

  const upddateMonthToNumber = month => {
    return parseInt(month.split('-')[1], 10);
  };

  const monthAsNumber = upddateMonthToNumber(month);

  if (monthAsNumber === currentMonth) {
    if (today.getDate() < 7) {
      for (let i = 0; i < today.getDate(); i += 1) {
        const date = new Date();

        date.setDate(i + 1);
        const day = date.getDate().toString().padStart(2, '0');

        const dayData = waterData.find(water => water.day === day) || {
          portions: [],
        };
        const volume = dayData.portions.reduce(
          (total, portion) => total + portion.volume,
          0
        );

        daysArray.push({ name: day, uv: volume });
      }
    } else {
      for (let i = 6; i >= 0; i -= 1) {
        const date = new Date();
        // console.log('date:', date);
        date.setDate(today.getDate() - i);

        const day = date.getDate().toString().padStart(2, '0');
        // console.log('day:', day);
        const dayData = waterData.find(water => water.day === day) || {
          portions: [],
        };
        // console.log('dayData:', dayData);
        const volume = dayData.portions.reduce(
          (total, portion) => total + portion.volume,
          0
        );
        daysArray.push({ name: day, uv: volume });
      }
    }
  }
  if (monthAsNumber !== currentMonth) {
    for (let i = 1; i <= 25; i += 4) {
      const day = i.toString().padStart(2, '0');
      console.log(day);
      const dayData = waterData.find(water => water.day === day) || {
        portions: [],
      };
      const volume = dayData.portions.reduce(
        (total, portion) => total + portion.volume,
        0
      );
      daysArray.push({ name: day, uv: volume });
    }
  }

  return daysArray;
};

export default getWaterDataForLast7Days;
