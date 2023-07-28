import { useLazyQuery } from "@apollo/client";
import { COUNTRIES } from "../querys/AllCountries";
import { useEffect } from "react";
import useGetCountries from "../hooks/useCountries";

const Sidebar = ({sidebarState}) => {

    const [getCountries, result] = useLazyQuery(COUNTRIES);
    const {changeCountries} = useGetCountries();
    const showCountries = () => {
        getCountries();
    }

    useEffect(() => {
        changeCountries(result.data?.countries);
    }, [result, changeCountries]);
    
    return ( 
        <aside className={sidebarState ? 'Sidebar active' : 'Sidebar'}>
            <h2 className="Sidebar__logo">Logo</h2>
            <nav className="Sidebar__Menu">
                <ul>
                    <li className="Sidebar__item" onClick={() => showCountries()}>Lista paises</li>
                    <li className="Sidebar__item">Continentes</li>
                </ul>
            </nav>

        </aside>
     );
}
 
export default Sidebar;