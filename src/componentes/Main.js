import { FiMenu } from 'react-icons/fi';
import Country from './Country';
import { useState } from 'react';
import Search from './Search';
import useGetCountries from '../hooks/useCountries';
import useCountryInfoCurrent from '../hooks/useCountryInfoCurrent';
import CountryInfo from './CountryInfo';


const Main = ({sidebarState, changeSidebarState}) => {
    const {countries, loading} = useGetCountries();
    const {countryCurrent, 
        showCountry, 
        countryInfoCurrent, 
        cleanCountryCurrent} = useCountryInfoCurrent();
        
    const [search, changeSearch] = useState("");

    const handleClick = (code) => {
        showCountry(code)
    }
    
    return ( 
        <main>
            <div className='Main__icon' onClick={() => changeSidebarState(!sidebarState)}>
                <FiMenu/>
            </div>
            
           <Search search={ search } changeSearch={changeSearch}/>

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
                                handleClick={handleClick}
                            />
                        )
                    }
                </div>

                {countryInfoCurrent && 
                    <CountryInfo
                        countryInfoCurrent={countryInfoCurrent} 
                        cleanCountryCurrent={cleanCountryCurrent}
                    />
                }
                
           </div>
        </main>
     );
}
 
export default Main;