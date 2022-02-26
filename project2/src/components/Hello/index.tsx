import React from "react";

import { HelloProps } from "./index.d";

const Hello: React.FC<HelloProps> = ({ projectName }) => {
  return <h1>Hello World from {projectName}!</h1>;
};

export { Hello };
