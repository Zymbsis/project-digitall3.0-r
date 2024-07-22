const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'var(--primary-white-color)',
          padding: '5px',
          border: '1px solid var(--primary-white-color)',
          borderRadius: '5px',
        }}
      >
        <p>{`${payload[0].value} ml`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
