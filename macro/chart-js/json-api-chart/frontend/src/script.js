import { Chart } from "chart.js/auto";
import "./styles.css";

const url = "http://localhost:5000/api";
const fetchApi = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.year_population);
    return data.year_population;
  } catch (error) {
    console.error(error.message);
  }
};

const fetchData = async () => {
  const data = await fetchApi();
  console.log(data);
  if (Array.isArray(data) && data.length > 0) {
    new Chart(document.getElementById("canvas"), {
      type: "line",
      data: {
        labels: data.map((cur) => cur.year),
        datasets: [
          {
            label: "Population per YEAR",
            data: data.map((cur) => cur.population),
          },
        ],
      },
    });
  } else {
    console.error("Invalid data structure or empty data array");
  }
};

fetchData();
