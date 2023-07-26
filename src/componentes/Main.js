import { AiOutlineSearch } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import Country from './Country';
import { useEffect, useState } from 'react';

const COUNTRIES = gql`
        query {
            countries {
                code
                name
                emoji
                emojiU
                continent {
                    name
                }
            }
        }
    `

    const MYCOUNTRY = gql`
        query countryByCode($codeBySearch: ID!){
            country(code: $codeBySearch) {
                name
                capital
                currency
                currencies
                continent {
                    name
                  }
                languages {
                    name
                }
              }
        }
    `

const Main = ({sidebarState, changeSidebarState}) => {
    const {data, loading} = useQuery(COUNTRIES);
    const [getCountry, result] = useLazyQuery(MYCOUNTRY);
    const [country, changeCountry] = useState();

    const showCountry = (code) => {
        getCountry({variables: {codeBySearch: code}})
    }

    useEffect(() => {

        if(result.data) {
            changeCountry(result.data.country)
        }

    }, [result])

   

    return ( 
        <main>
            <div className='Main__icon' onClick={() => changeSidebarState(!sidebarState)}>
                <FiMenu/>
            </div>
            
           <form className="Search">
                <label htmlFor="pais">
                    Pais
                    <input type="text" name="pais" id="pais" placeholder="Escriba el pais que desea ver"/>
                </label>
                <button className="Search__submit">
                    <AiOutlineSearch />
                    Buscar
                </button>
           </form>

           {loading && <p>loading</p>}

           <div className='Countries'>
                <div className="Countries__container">
                    {
                        data && data.countries.map(country => 
                            <Country 
                                key={country.code} 
                                country={country} 
                                showCountry={showCountry}
                            />
                        )
                    }
                </div>
                {country && 
                <div className='Countries__info'>
                    <div className="Country__close" onClick={e => changeCountry(undefined)}>x</div>
                    <img src="https://picsum.photos/200/100" alt="" />
                    <h3 className='Country__title'>{ country.name} <span className='Country__description'>{ country.continent.name}</span></h3>
                    <p className='Country__name'>Capital: <span className='Country__description'>{ country.capital}</span></p>
                    <p className='Country__name'>Language: <span className='Country__description'>{ country.languages[0].name}</span></p>
                    <p className='Country__name'>Currency: <span className='Country__description'>{ country.currency}</span></p>
                </div>
                }
                
           </div>
        </main>
     );
}
 
export default Main;