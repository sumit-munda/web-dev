Chart.register(Chart.Color);

const canvas = document.getElementById("myChart");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  // Create a linear gradient
  // The start gradient point is at x=20, y=0
  // The end gradient point is at x=220, y=0
  //   const gradient = ctx.createLinearGradient(20, 0, 620, 0);
  const gradient = ctx.createLinearGradient(0, 0, 400, 0);

  // Add three color stops
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.2, "blue");
  gradient.addColorStop(0.4, "yellow");
  gradient.addColorStop(0.6, "green");
  gradient.addColorStop(0.8, "purple");
  gradient.addColorStop(1, "orange");

  // Set the fill style and draw a rectangle
  ctx.fillStyle = gradient;
  ctx.fillRect(20, 20, 200, 100);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: gradient,
          borderColor: Chart.helpers
            .color("rgba(0, 0, 0, 0.1)")
            .alpha(0.5)
            .rgbString(),
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
