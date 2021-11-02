import React, {Fragment} from "react";
import NewPet from "./components/Pet/NewPet";
import NavBar from "./components/navigation/NavBar";

function App () {
  return (
    <Fragment>
       <NavBar />
      <NewPet />
    </Fragment>
  );
}

export default App;