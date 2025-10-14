import { createContext, useContext, useState, useMemo } from "react";
const AppContext = createContext(undefined);
export function AppContextProvider({children}) {
  const [title, setTitle] = useState("Mern.practice");
  const contextValue = useMemo(()=>({title,setTitle}),[title]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
//creating new hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context){
    throw new error ("useApp must be used within AppContext ")
  }
  return context;
}
