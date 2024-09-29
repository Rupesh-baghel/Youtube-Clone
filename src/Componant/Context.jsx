
import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../Rapidapi"; 
export const MyContext = createContext();
export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");
  // useEffect(() => {
  //   const fetchAllData = async (query) => {
  //     setLoading(true);
  //     const res = await fetchData(query);
  //     setData(res);
  //     console.log(res.contents);
  //     setLoading(false);
  //   };

  //   fetchAllData(value);
  // }, [value]);
  useEffect(()=>{
                  fetchAllData(value)
         },[value])  
        const fetchAllData=(query)=>{
         setLoading(true)
         fetchData(`search/?q=${query}`).then(({contents})=>{
            console.log(contents)
             setData(contents)
             setLoading(false)
         })}
  return (
    <MyContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}


export const useAuth = () => useContext(MyContext);
