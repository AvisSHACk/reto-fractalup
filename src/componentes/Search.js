import { AiOutlineSearch } from 'react-icons/ai';
import { CONTINENTS } from '../querys/AllContinents';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { BYCONTINENT } from '../querys/ByContinent';
import useGetCountries from '../hooks/useCountries';
const Search = ({changeSearch}) => {
    const {data} = useQuery(CONTINENTS);
    const [getCountry, result] = useLazyQuery(BYCONTINENT);
    const [codesContinents, changeCodeContinents] = useState([]);
    const {changeCountries} = useGetCountries();
    const [openFiltered, changeOpenFiltered] = useState(false);

    const showCountries = (e) => {
        e.preventDefault()
        getCountry({variables: {codeBySearch: codesContinents}})
    }

    useEffect(() => {

        if(result.data) {
            changeCountries(result.data.countries)
        }

    }, [result, changeCountries])

    const addCodeContinent = (code) => {
        changeCodeContinents(
            [
                ...codesContinents,
                code
            ]
        )
    }
    return (
        <form className="Search" onSubmit={showCountries}>
             <label htmlFor="pais">
                 Pais
                 <input 
                    type="search" 
                    name="pais" 
                    id="pais"
                    autoComplete='off'
                    onChange={e => changeSearch(e.target.value)}
                    onClick={() => changeOpenFiltered(true)}
                    // onBlur={() => changeOpenFiltered(false)}
                    placeholder="Escriba el pais que desea ver"
                />
             </label>
             <button className="Search__submit" onClick={() => changeOpenFiltered(false)}>
                 <AiOutlineSearch />
                    Buscar
             </button>

            
             <div className={`Search__filters ${openFiltered && 'active'}`}>
                <h4>Filtrar por continentes</h4>
                <div className="Search__filtersContainer">
                    {data && data.continents.map((continent) => (
                        <figure key={continent.code} onClick={() => addCodeContinent(continent.code)}>
                            <img src="https://whsrn.org/wp-content/uploads/2018/12/cec-map_atlantic_small.jpg" alt="" />
                            <figcaption>
                                {continent.name}
                            </figcaption>
                        </figure>
                    ))}
                </div>
             </div>
        </form>
    )
}

export default Search;