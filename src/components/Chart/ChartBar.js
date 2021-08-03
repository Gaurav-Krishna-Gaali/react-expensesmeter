import React from "react";
import Chart from "./Chart";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barfillHeight = "0%";

  if (props.maxValue > 0) {
    barfillHeight = Math.round(props.value / props.maxValue) * 100 + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillHeight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
