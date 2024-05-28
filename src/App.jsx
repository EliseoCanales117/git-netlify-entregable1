
import './App.css';
//import phrases from "./utils/phrases.json";
import arrayPhrases from "./utils/phrases.json";
import getRandom from './services/getRandom';
import { useState } from "react" ; 

import ShowPhrase from './components/ShowPhrase';
import ButtonPhrase from './components/ButtonPhrase'; 
import arrayImages from './utils/images.json';


function App() {

  const [phrase, setPhrase] = useState (getRandom (arrayPhrases));

  //const image = getRandom(arrayImages);
  
  const [image, setImage] = useState(getRandom(arrayImages));

  const objStyles = {
    backgroundImage: `url(../public/fortuna-2/fondo${image}.png)` , 
  }
  

  return (
  
      <div className= "app" style = {objStyles}>
        <h1 className='app__title'>Galletas de la Fortuna</h1>

        <ButtonPhrase
        setPhrase={setPhrase}
        setImage={setImage}
        
        />
        <ShowPhrase
         phrase={phrase}
        
        />
       
      </div>
     
  )
}

export default App;
