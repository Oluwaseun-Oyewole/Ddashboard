/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import Chart from "react-apexcharts";

type TCurve =
  | "smooth"
  | "straight"
  | "stepline"
  | "smooth"
  | "straight"
  | "stepline";

type Props = {
  id: string | "bar-chart";
  series: any | undefined;
  type?: "bar" | any;
  colors?: Array<string>;
  className?: string;
  dropShadowColor?: string;
  strokeColor?: Array<string>;
  height?: number | string;
  width?: number | string;
  xaxisLabel?: boolean;
  yAxisLabel?: boolean;
  stacked?: boolean;
  plotOptions?: boolean;
  showGrid?: boolean;
  categories?: Array<string>;
  label?: Array<string>;
  curve?: TCurve | TCurve[];
  showDownloads?: boolean;
};

export const CustomChart: FC<Props> = ({
  type,
  colors,
  id,
  series,
  className,
  height,
  xaxisLabel,
  yAxisLabel,
  showGrid,
  label,
  categories,
  curve,
  showDownloads,
  stacked,
}) => {
  const yaxisOptions = {
    show: true,
    labels: {
      show: yAxisLabel ? true : false,
      // categories: [0, 100, 200, 300, 400],
      style: {
        colors: "gray",
        fontSize: "13px",
        fontWeight: 300,
        fontFamily: "Poppins",
      },

      // align: "right",
      // minWidth: 0,
      // maxWidth: 160,
      formatter: (value: any) => {
        return type !== "line" && type !== "area" && value > 0
          ? `${value}K`
          : `${value}`;
      },
    },

    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  };

  const options = {
    chart: {
      id: id,
      toolbar: {
        show: true,
        tools: {
          download: showDownloads ? true : false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
      selection: {
        enabled: true,
        stroke: {},
      },
      background: "#FFF",
      dropShadow: {
        enabled: true,
        blur: 5,
        opacity: 0.2,
        color: "grey",
      },
      stacked: stacked,
    },
    labels: label,
    xaxis: {
      categories: categories || [],
      labels: {
        show: xaxisLabel ?? true,
        style: {
          fontFamily: "Poppins",
          color: "#fff",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: yaxisOptions,
    fill: {
      colors: colors,
    },
    legend: {
      show: true,
      // position: "top",
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      show: showGrid ?? true,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            fontSize: "13px",
            fontWeight: 300,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      theme: "dark",
    },
    stroke: {
      show: true,
      colors: colors,
      curve: curve,
    },
    colors: colors,
  };

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height ?? 300}
      className={className}
    />
  );
};
