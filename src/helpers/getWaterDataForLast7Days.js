const getWaterDataForLast7Days = waterData => {
  const today = new Date();
  let daysArray = [];

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
      date.setDate(today.getDate() - i);
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
  }

  return daysArray;
};

export default getWaterDataForLast7Days;
