import { createContext, useState,useContext } from "react";

const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        diameter: 300,
        length: 2000,
        inletqty: 1,
        inletp1:100,
        inletp2:500,
        inletp3:1000,
        outletqty: 1,
        outletp1:100,
        outletp2:500,
        outletp3:1000
    });
    const [change,setChange]=useState(false)
  
   
    return <AppContext.Provider value={{
    formData,
    setFormData,
    change,
    setChange
  }}>
    {children}
  </AppContext.Provider>
}
export const useGlobalcontext = () => {
  return useContext(AppContext)
}