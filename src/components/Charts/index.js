import React from "react";
import { Line, Pie } from "@ant-design/charts";

function ChartComponent({ sortedTransactions, transactions }) {
  const data = sortedTransactions.map((item) => {
    return { date: item.date, amount: item.amount };
  });

  let spendingData = sortedTransactions.filter((transaction) => {
    if (transaction.type === "expense") {
      return { tag: transaction.tag, amount: transaction.amount };
    }
  });

  let finalSpendings = spendingData.reduce((acc, obj) => {
    let key = obj.tag;
    if (!acc[key]) {
      acc[key] = { tag: obj.tag, amount: obj.amount };
    } else {
      acc[key].amount += obj.amount;
    }
    return acc;
  }, {});

  const config = {
    data: data,
    width: 500,
    autoFit: true,
    xField: "date",
    yField: "amount",
  };

  const spendingConfig = {
    data: Object.values(finalSpendings),
    width: 500,
    angleField: "amount",
    colorField: "tag",
  };

  let chart;
  let pieChart;
  return (
    <div className="charts-wrapper">
      <div>
        <h2 style={{ marginTop: 0 }}>Financial Statistics</h2>
        <Line
          {...config}
          onReady={(chartInstance) => (chart = chartInstance)}
        />
      </div>

      <div>
        <h2>Total Spendings</h2>
        <Pie
          {...spendingConfig}
          onReady={(chartInstance) => (pieChart = chartInstance)}
        />
      </div>
    </div>
  );
}

export default ChartComponent;
