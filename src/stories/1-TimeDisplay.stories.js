import React from "react";

import TimeDisplay from "../components/TimeDisplay";

export default {
  component: TimeDisplay,
  title: "Time Display",
};

export const firstTime = () => <TimeDisplay>01:23</TimeDisplay>;
export const secondTime = () => <TimeDisplay>45:67</TimeDisplay>;
export const lastTime = () => <TimeDisplay>89:00</TimeDisplay>;
