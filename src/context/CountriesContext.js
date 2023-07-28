import { useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import { COUNTRIES } from "../querys/AllCountries";

const CountriesContext = createContext();

const CountriesProvider = ({children}) => {
    const {data, loading} = useQuery(COUNTRIES);
    const [countries, changeCountries] = useState()

    useEffect(() => {
        changeCountries(data?.countries)
    }, [data])
    
    return (
        <CountriesContext.Provider value={{countries, loading, changeCountries}}>
            { children}
        </CountriesContext.Provider>
    )
}
 
export {CountriesContext, CountriesProvider};