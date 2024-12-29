const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Weekly Sales",
      data: [
        {
          x: 10,
          y: 10,
          image: "./image/002-deadline.png",
        },
        {
          x: 66,
          y: 90,
          image: "./image/021-day-and-night-3.png",
        },
      ],
      backgroundColor: [
        "rgba(255, 26, 104, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 104, 0.5)",
        "rgba(0, 0, 0, 0.5)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 104, 0.5)",
        "rgba(0, 0, 0, 0.5)",
      ],
      borderWidth: 1,
      usePointStyle: true,
      pointStyle: (ctx) => {
        // console.log(ctx.raw.image);
        const pointImage = new Image(25, 25);
        pointImage.src = ctx.raw.image;
        return pointImage;
      },
      pointHitRadius: 50,
    },
  ],
};

const nineGridLabels = {
  id: "nineGridLabels",
  beforeDatasetsDraw: (chart, args, plugins) => {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
      scales: { x, y },
    } = chart;

    const nineLabels = {
      labels: [
        { name: "A1", x: 16.65, y: 16.65 },
        { name: "A2", x: 16.65, y: 49.95 },
        { name: "A3", x: 16.65, y: 83.25 },
        { name: "B1", x: 49.95, y: 16.65 },
        { name: "B2", x: 49.95, y: 49.95 },
        { name: "B3", x: 49.95, y: 83.25 },
        { name: "C1", x: 83.25, y: 16.65 },
        { name: "C2", x: 83.25, y: 49.95 },
        { name: "C3", x: 83.25, y: 83.25 },
      ],
    };

    ctx.save();
    ctx.font = "bold 12px 'fira code'";
    ctx.fillStyle = "rgb(102, 102, 102)";
    ctx.textAlign = "center";

    nineLabels.labels.forEach((label) => {
      ctx.fillText(
        label.name,
        x.getPixelForValue(label.x),
        y.getPixelForValue(label.y)
      );
    });

    ctx.fillText("A1", x.getPixelForValue(16.65), y.getPixelForValue(16.65));
  },
};

const config = {
  type: "scatter",
  data,
  options: {
    aspectRatio: 1,
    scales: {
      x: {
        min: 0,
        max: 100,
        afterTickToLabelConversion: (ctx) => {
          //   console.log(ctx);
          ctx.ticks = [];
          ctx.ticks.push({ value: 33.33, label: "" });
          ctx.ticks.push({ value: 66.66, label: "" });
        },
        grid: {
          drawTicks: false,
          color: "rgba(0, 0, 0, 0.4)",
          borderColor: "rgba(0, 0, 0, 0.4)",
        },
        border: {
          width: 2,
          dash: [6, 6],
          color: "rgba(0, 0, 0, 0.4)",
        },
        title: {
          display: true,
          text: "Potential",
          color: "rgba(0, 0, 0, 0.9)",
          font: "fira code",
        },
      },
      y: {
        min: 0,
        max: 100,
        afterTickToLabelConversion: (ctx) => {
          //   console.log(ctx);
          ctx.ticks = [];
          ctx.ticks.push({ value: 33.33, label: "" });
          ctx.ticks.push({ value: 66.66, label: "" });
        },
        grid: {
          drawTicks: false,
          color: "rgba(0, 0, 0, 0.4)",
          borderColor: "rgba(0, 0, 0, 0.4)",
        },
        border: {
          width: 2,
          dash: [6, 6],
          color: "rgba(0, 0, 0, 0.4)",
        },
        title: {
          display: true,
          text: "Impact",
          color: "rgba(0, 0, 0, 0.9)",
          font: "fira code",
        },
      },
    },
  },
  plugins: [nineGridLabels],
};

const myChart = new Chart(document.getElementById("myChart"), config);
