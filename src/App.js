import { useState } from "react";
import Main from "./componentes/Main";
import Sidebar from "./componentes/Sidebar";

function App() {

  const [sidebarState, changeSidebarState] = useState(false);

  return (
    <div className="App">
      <Sidebar sidebarState={sidebarState}/>
      <Main sidebarState={sidebarState} changeSidebarState={changeSidebarState}/>
    </div>
  );
}

export default App;
