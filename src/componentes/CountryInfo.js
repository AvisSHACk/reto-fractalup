const CountryInfo = ({countryInfoCurrent, changeCountryInfoCurrent, changeCountryCurrent}) => {

    const close = () => {
        changeCountryCurrent(undefined)
        changeCountryInfoCurrent(undefined)
    }
    return (
        <div className='Country__info Country__info--more'>
            <div className="Country__close" onClick={() => close()}>x</div>
            <img src="https://picsum.photos/200/100" alt="" />
            <figure>
                <img className="Country__flag" src={`https://flagcdn.com/w80/${countryInfoCurrent.code.toLowerCase()}.jpg`} alt="" />
                <figcaption>
                    <h3 className='Country__title'>
                        { countryInfoCurrent.name} 
                        <span className='Country__description'>{ countryInfoCurrent.continent.name}</span>
                    </h3>
                </figcaption>

            </figure>
            <p className='Country__name'>Capital: <span className='Country__description'>{ countryInfoCurrent.capital}</span></p>
            <p className='Country__name'>Language: <span className='Country__description'>{ countryInfoCurrent.languages[0].name}</span></p>
            <p className='Country__name'>Currency: <span className='Country__description'>{ countryInfoCurrent.currency}</span></p>
        </div>
    )
}

export default CountryInfo;