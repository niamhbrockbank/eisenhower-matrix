import { useState } from "react";
import { IUseStateManager } from "../types";

export const UseStateManager = ():IUseStateManager => {
  const [forgetAboutItItems, setForgetAboutItItems] = useState<string[]>([]);

  return { forgetAboutItItems, setForgetAboutItItems };
};
