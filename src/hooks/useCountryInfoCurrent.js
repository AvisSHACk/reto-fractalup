import { useLazyQuery } from "@apollo/client";
import { MYCOUNTRY } from "../querys/MyCountry";
import { useEffect, useState } from "react";

const useCountryInfoCurrent = () => {
    const [getCountry, result] = useLazyQuery(MYCOUNTRY);
    const [countryInfoCurrent, changeCountryInfoCurrent] = useState();
    const [countryCurrent, changeCountryCurrent] = useState();

    const showCountry = (code) => {
        changeCountryCurrent(code)
        getCountry({variables: {codeBySearch: code}})
    }

    const cleanCountryCurrent = () => {
        changeCountryCurrent(undefined)
        changeCountryInfoCurrent(undefined)
    }

    useEffect(() => {

        if(result.data) {
            changeCountryInfoCurrent(result.data.country)
        }

    }, [result])

    return {countryInfoCurrent, countryCurrent, showCountry, cleanCountryCurrent}
}

export default useCountryInfoCurrent;