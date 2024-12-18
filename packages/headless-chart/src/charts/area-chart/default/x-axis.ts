import type { AreaChartCustom } from "../types";
import * as Cartesian from "@shared/cartesian/index";

export function XAxis(...args: Parameters<AreaChartCustom["xAxis"]>) {
  return Cartesian.XAxis(args[0], {
    type: "value",
  });
}
