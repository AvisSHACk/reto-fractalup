const Country = ({active, country, handleClick}) => {

    return (
        <article className={`Country ${active && 'active'}`} onClick={() => handleClick(country.code)}>
            <div className="Country__imagen">
                <img src="https://picsum.photos/200/100" alt="" />
            </div>

            <div className="Country__info">
                
                <figure>
                    <img className="Country__flag" src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.jpg`} alt="" />
                    <figcaption>
                        <h3 className='Country__title'>
                            { country.name} 
                            <span className='Country__description'>{ country.continent.name}</span>
                        </h3>
                    </figcaption>

                </figure>
            </div>
        </article>
     );
}
 
export default Country;