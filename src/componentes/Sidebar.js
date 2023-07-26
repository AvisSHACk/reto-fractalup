const Sidebar = ({sidebarState}) => {
    
    return ( 
        <aside className={sidebarState ? 'Sidebar active' : 'Sidebar'}>
            <h2 className="Sidebar__logo">Logo</h2>
            <nav className="Sidebar__Menu">
                <p className="Sidebar__item">Inicio</p>
                <p className="Sidebar__item">Continentes</p>
                <p className="Sidebar__item">Paises</p>
            </nav>

        </aside>
     );
}
 
export default Sidebar;