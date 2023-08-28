import { TimeRange } from "@/shared/types";

export const getSelectedPeriod = (selectedTimeRange: TimeRange) => {
  switch (selectedTimeRange) {
    case "short_term":
      return "last month";
    case "medium_term":
      return "last 6 months";
    case "long_term":
      return "all time";
    default:
      return "";
  }
};
