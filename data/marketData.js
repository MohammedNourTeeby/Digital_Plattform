export const generateMockData = (days = 30) => {
  const data = [];
  let price = 45000; // السعر الابتدائي
  const startDate = new Date(2024, 0, 1); // 1 يناير 2024

  for (let i = 0; i < days; i++) {
    const open = price;
    const high = open * (1 + Math.random() * 0.03);
    const low = open * (1 - Math.random() * 0.02);
    const close = open * (1 + (Math.random() * 0.02 - 0.01));
    const volume = Math.floor(Math.random() * 5000) + 1000;

    data.push({
      time: new Date(startDate.setDate(startDate.getDate() + 1))
        .toISOString()
        .split("T")[0],
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2)),
      volume,
      rsi: Math.random() * 30 + 40, // مؤشر RSI وهمي
      macd: (Math.random() - 0.5) * 2, // مؤشر MACD وهمي
    });

    price = close;
  }

  return data;
};

export const historicalData = generateMockData();
