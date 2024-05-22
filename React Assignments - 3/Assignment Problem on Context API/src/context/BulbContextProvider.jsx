import { createContext, useState } from "react";

// Step 1: Create Context
export const BulbContext = createContext();

// Step 2.A : Provide Context
export function BulbContextProvider(props) {
  const [isOn, setIsOn] = useState(false);

  const switchOn = () => {
    /*complete the missing code*/
  };

  const switchOff = () => {
    /*complete the missing code*/
  };

  return (
    <BulbContext.Provider
      value={
        {
          /*complete the missing code*/
        }
      }
    >
      {props.children}
    </BulbContext.Provider>
  );
}
