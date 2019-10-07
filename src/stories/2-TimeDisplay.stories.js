import React from "react";

import TimeDisplay from "../components/TimeDisplay";

export default {
  component: TimeDisplay,
  title: "Time Display",
};

export const time = () => <TimeDisplay>00:00</TimeDisplay>;
