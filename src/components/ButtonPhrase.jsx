import React from 'react';
import arrayPhrases from "../utils/phrases.json"; 
import getRandom from '../services/getRandom';
import arrayImages from '../utils/images.json';


const ButtonPhrase = ({setPhrase, setImage}) => {

    const handlePhrase = () =>{
        setPhrase(getRandom(arrayPhrases));
        setImage(getRandom(arrayImages));


    }



  return (
    <button onClick={handlePhrase} className="btn">Probar mi suerte</button>
  )
}

export default ButtonPhrase;
