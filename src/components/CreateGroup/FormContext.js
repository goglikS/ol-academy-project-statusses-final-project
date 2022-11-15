import { createContext, useContext, useState } from "react";

const FormContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <FormContext.Provider value={{ userData, setUserData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const { userData, setUserData } = useContext(FormContext);

  return { userData, setUserData };
}
