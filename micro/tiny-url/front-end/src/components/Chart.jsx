import React from "react";
import Chart from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"

const Chart = () => {
	return (
		<div className="chart">
			<div className="dataCard revenueCard">Chart 1</div>
			<div className="dataCard customerCard">
				<Bar />
			</div>
			<div className="dataCard categoryCard">Chart 3</div>
		</div>
	);
};

export default Chart;
