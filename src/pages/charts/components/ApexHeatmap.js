import React from "react";
import { useTheme } from "@material-ui/styles";
import ApexCharts from "react-apexcharts";

const config = {
  series: [
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
  ],
  plotOptions: {
    heatmap: {
      radius: 30,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 50,
            color: "#008FFB",
          },
          {
            from: 51,
            to: 100,
            color: "#00E396",
          },
        ],
      },
    },
  },
};

export default function ApexLineChart() {
  var theme = useTheme();

  return (
    <ApexCharts
      plotOptions={config.plotOptions}
      options={themeOptions(theme)}
      series={config.series}
      type="heatmap"
      height={350}
    />
  );
}

// ##################################################################
function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "";
    var y = 100;
    // Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }

  return series;
}

function themeOptions(theme) {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette.primary.main],
  };
}
