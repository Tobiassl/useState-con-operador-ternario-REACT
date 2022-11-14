import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Container,Flex} from '@chakra-ui/react'
import {Box} from './components/box/box'
import './App.css'

function App() {
  const [numero,setMostrarNumero] = useState(0)
  //const [showBox,setShowBox] = useState(false)

  //console.log(showText)

//  const mifuncion = () => {
//  setShowText('soy otro texto')
//}

//const mostrar = () =>{
  //setShowBox(!showBox)
  //}

  const suma = () => {
    setMostrarNumero(numero+1)
  }
  const resta = () => {
    if (numero >0){
      setMostrarNumero(numero-1)
    }else{
      alert('llego al minimo')
    }
    
  }

 

  return (
    <div className="App">
      {/*<Flex justifyContent='space-around'>
      </Flex>*/}

      {/* OPERADOR TERNARIO*/}
      
      <button onClick={resta} disabled={numero == 0 ?'disabled' : ''}>-</button>
      <h2>{numero}</h2>
      <button onClick={suma}>+</button>

     {/*  {showBox && <Box text={showText}/>}
      <button onClick={mostrar}>hace click</button>*/}

      {/*<button onClick={()=>setShowText('otro texto mas')}>Hace cambio</button>
      */}

       
    </div>
  )
}

export default App
