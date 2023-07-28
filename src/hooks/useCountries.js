import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

const useGetCountries = () => {
    return useContext(CountriesContext);
}
 
export default useGetCountries;