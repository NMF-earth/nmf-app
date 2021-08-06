import React from "react";
import { View } from "react-native";
import { Svg, G, Path } from "react-native-svg";
import Pie from "paths-js/pie";
import { gt, lt, both, cond, always, __ } from "ramda";

import { Layout } from "constant";
import { Colors } from "style";

import styles from "./Chart.styles";

const chartWidth = Layout.screen.width / 2;
const chartHeight = chartWidth;

const gt400 = gt(__, 399);
const lt340 = lt(__, 340);

const gt340 = gt(__, 339);
const lt400 = lt(__, 400);
const between340and400 = both(gt340, lt400);

const getDirtyFactor = cond([
  [lt340, always(8)],
  [between340and400, always(6)],
  [gt400, always(5)],
]);

const dirtyFactor = getDirtyFactor(Layout.screen.width);

const ringWidth = chartWidth / dirtyFactor;

interface Props {
  totalEmissionsPercentage: number;
  transportEmissionsPercentage: number;
  foodEmissionsPercentage: number;
}

const Chart: React.FC<Props> = ({
  totalEmissionsPercentage,
  transportEmissionsPercentage,
  foodEmissionsPercentage,
}) => {
  const data = {
    values: [foodEmissionsPercentage, transportEmissionsPercentage, totalEmissionsPercentage],
    colors: [Colors.green50, Colors.yellow50, Colors.apricot],
  };

  const pies = data.values.map((pieData, i) => {
    const r = ((chartHeight / 2 - ringWidth) / data.values.length) * i + ringWidth;
    return Pie({
      r,
      R: r,
      center: [0, 0],
      data: [pieData, 1 - pieData],
      accessor: (x) => x,
    });
  });

  const pieBackgrounds = data.values.map((pieData, i) => {
    const r = ((chartHeight / 2 - ringWidth) / data.values.length) * i + ringWidth;
    return Pie({
      r,
      R: r,
      center: [0, 0],
      data: [0.999, 0.001],
      accessor: (x) => x,
    });
  });

  return (
    <View style={styles.container}>
      <Svg width={Layout.screen.width - Layout.PADDING_HORIZONTAL * 4} height={chartHeight}>
        <G x={Layout.screen.width / 2 - Layout.PADDING_HORIZONTAL * 2} y={chartHeight / 2}>
          <G>
            {pieBackgrounds.map((pie, i) => {
              return (
                <Path
                  key={Math.random()}
                  d={pie.curves[0].sector.path.print()}
                  strokeWidth={16}
                  stroke={data.colors[i] + "20"}
                />
              );
            })}
          </G>
          <G>
            {pies.map((pie, i) => {
              return (
                <Path
                  key={Math.random()}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={pie.curves[0].sector.path.print()}
                  strokeWidth={16}
                  stroke={data.colors[i]}
                />
              );
            })}
          </G>
        </G>
      </Svg>
    </View>
  );
};

export default Chart;
