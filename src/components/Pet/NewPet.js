import React from 'react';
import Card from "../UI/Card";
const NewPet = () => {
    return (
    <React.Fragment>
        <Card>
            <form>
          
                 <label> Pet Name </label>
                 <input  type="text" placeholder="Nombre"/> <br/>
                 <label>Owner NAme</label>
                 <input type="password" pattern=".{6,}"/>  <br/>
                 <label> E-mail</label>
                 <input  type="email" list="defaultsEmails"/> <br/>
                 
                 <datalist id="defaultEmails">
               
                     <option value="ejemplo@gmail.com"> </option>
                     <option value="ejemplo@hotmail.com"></option>
                     <option value="ejemplo@yahoo.com"></option>


                 </datalist>
               

                 <label>Contraseña</label>
                 <input type="password" pattern="[A-Za-z]{8,}"/>  <br/>
 
                
                 <p>
                     <button type="submit">Crear </button>
                </p>

        </form>
        </Card>
        
    </React.Fragment>
    );
};
export default NewPet;