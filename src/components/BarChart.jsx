import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Legend } from "chart.js/auto";

ChartJS.register(Legend);

// eslint-disable-next-line react/prop-types
const BarChart = ({ chartData }) => {
  return (
    <Bar
    width="100%"
     height="80"
      data={chartData}
      options={{
        
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            // border: {
            //   color: 'red'
            // },
            title: {
              color: "red",
              display: true,
              text: "Month",
            },
          },
          y: {
            suggestedMax: 600,
          },
        },
      }}
    />
  );
};

export default BarChart;
