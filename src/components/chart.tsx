"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

type DataItem = {
  id: number;
  date: string;
  numberOfPackages: number;
};

type ChartProps = {
  apiUrl: string;
  chartTitle: string;
};

const ChartComponent: React.FC<ChartProps> = ({ apiUrl, chartTitle }) => {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: "",
        data: [] as number[],
        fill: false,
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataItem[]>(apiUrl);
        const labels = response.data.map((item) => item.date);
        const values = response.data.map((item) => item.numberOfPackages);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: chartTitle,
              data: values,
              fill: false,
              borderColor: "rgb(75, 192, 192, 1)",
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [apiUrl, chartTitle]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line
        data={{
          labels: chartData.labels,
          datasets: chartData.datasets,
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              text: chartTitle,
            },
          },
          scales: {
            x: {
              type: "category" as const,
              title: {
                display: true,
                text: "Date",
              },
            },
            y: {
              type: "linear" as const,
              title: {
                display: true,
                text: "Number of Packages",
              },
              min: 0, // Set minimum value for the y-axis
              max: 100000, // Set maximum value for the y-axis
              ticks: {
                stepSize: 10000,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
