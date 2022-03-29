import React, {useState} from 'react'
//import './containerquotes.css'
import AuthorQuotes from './author/AuthorQuotes';
import QUOTES from '../Quotes.json';
import Quotes from './Quotes/Quotes';


function numberandom() {   //  Con esta funcion se genera un número aleatorio, para más adelante elegir la cita y el author 
    const largeQuotote = QUOTES.quotes.length
    let numberrandom= Math.floor((Math.random() * largeQuotote) + 1);
      return numberrandom
  }

  function color(){   //Genera los numeros del 0 al 255 para el cambio de colores.
    let redColor = Math.floor((Math.random() * 255) + 1);
    let greenColor = Math.floor((Math.random() * 255) + 1);
    let blueColor = Math.floor((Math.random() * 255) + 1);
    let colors = [];
      colors = `rgb(${redColor}, ${greenColor}, ${blueColor} )`
     return colors  
  } 






function ContainerQuotes() {
    
    const[positionIndex,setPosition] = useState(numberandom())
    const[quototeNum,setQuotote] = useState('')
    const[authorNum,setAuthor] = useState('')
    const[colorQuototeBox,setColorQuototeBox] = useState(color())  
    
  const changeValue = ( ) => {
    setPosition( numberandom())
    setQuotote(  QUOTES.quotes[positionIndex].quote)
    setAuthor(QUOTES.quotes[positionIndex].author)
    setColorQuototeBox(color())
    console.log(quototeNum);
    console.log(authorNum);
    console.log(colorQuototeBox);
    document.body.style.backgroundColor = color();
  }
  window.onload = function(){
    changeValue()
  }
  return (
    <div className='containerQuotes'>
        <div className='container1'>
         <Quotes principal= {quototeNum} />
        </div>
        <div className = 'container2'>
          <AuthorQuotes title={authorNum}/>
        </div>
        <div className='container3'>
        <button className='button'onClick={changeValue}> New Quote</button>
        </div>
        
    </div>
  )
  
}

export default ContainerQuotes