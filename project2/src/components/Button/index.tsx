import React from "react";

import { ButtonProps } from "./index.d";

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>One button</button>;
};

export { Button };
