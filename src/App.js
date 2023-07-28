import { useState } from "react";
import Main from "./componentes/Main";
import Sidebar from "./componentes/Sidebar";
import { CountriesProvider } from "./context/CountriesContext";

function App() {

  const [sidebarState, changeSidebarState] = useState(false);

  return (
    <div className="App">
      <CountriesProvider>
        <Sidebar sidebarState={sidebarState}/>
        <Main sidebarState={sidebarState} changeSidebarState={changeSidebarState}/>
      </CountriesProvider>
    </div>
  );
}

export default App;
