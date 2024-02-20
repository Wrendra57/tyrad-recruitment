import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DataFake } from "../../../store/data";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function BarChart() {
  const option = {
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      legend: {
        position: "top",
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
      y: {
        stacked: false,
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
    },
  };

  const data = {
    labels: DataFake.map((item) => item.label.substring(0, 3)),
    datasets: [
      {
        label: "Income",
        data: DataFake.map((item) => item.data1),
        backgroundColor: "#545be7",
      },
      {
        label: "Outcome",
        data: DataFake.map((item) => item.data2),
        backgroundColor: "#c7c8fe",
      },
    ],
  };

  return (
    <Bar
      options={option}
      data={data}
      style={{ width: "100%", height: "auto" }}
    />
  );
}

export default BarChart;
