import { FiMenu } from 'react-icons/fi';
import { useLazyQuery } from "@apollo/client";
import Country from './Country';
import CountryInfo from './CountryInfo';
import { useEffect, useState } from 'react';
import { MYCOUNTRY } from '../querys/MyCountry';
import Search from './Search';
import useGetCountries from '../hooks/useCountries';


const Main = ({sidebarState, changeSidebarState}) => {
    const [search, changeSearch] = useState("");
    const [countryCurrent, changeCountryCurrent] = useState();
    const [countryInfoCurrent, changeCountryInfoCurrent] = useState();
    const [getCountry, result] = useLazyQuery(MYCOUNTRY);

    const {countries, loading} = useGetCountries();

    const showCountry = (code) => {
        changeCountryCurrent(code)
        getCountry({variables: {codeBySearch: code}})
    }

    useEffect(() => {

        if(result.data) {
            changeCountryInfoCurrent(result.data.country)
        }

    }, [result])

   

    return ( 
        <main>
            <div className='Main__icon' onClick={() => changeSidebarState(!sidebarState)}>
                <FiMenu/>
            </div>
            
           <Search changeSearch={changeSearch}/>

           {loading && <div className="loader"></div>}

           <div className='Countries'>
                <div className="Countries__container">
                    {countries && countries.filter(
                          country =>
                            country.name.toLowerCase().indexOf(search.toLowerCase()) > -1
                        )
                        .map(country => 
                            <Country 
                                key={country.code}
                                active={country.code === countryCurrent}
                                country={country} 
                                showCountry={showCountry}
                            />
                        )
                    }
                </div>

                {countryInfoCurrent && 
                    <CountryInfo 
                        countryInfoCurrent={countryInfoCurrent} 
                        changeCountryInfoCurrent={changeCountryInfoCurrent}
                        changeCountryCurrent={changeCountryCurrent}
                    />
                }
                
           </div>
        </main>
     );
}
 
export default Main;