import { createContext } from "react";
import { TContextProps } from "./Domain/TContextProps";

export const MernContext = createContext<TContextProps>({} as TContextProps);
