const Country = ({country, showCountry}) => {

    return (
        <article className="Country" onClick={() => showCountry(country.code)}>
            <div className="Country__imagen">
                <img src="https://picsum.photos/200/100" alt="" />
            </div>

            <div className="Country__info">
                <h3 className='Country__title'>
                    { country.name} 
                    <span className='Country__description'>{ country.continent.name}</span>
                </h3>
            </div>
        </article>
     );
}
 
export default Country;