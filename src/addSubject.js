import './addSubject.css';
import { useState } from "react";

const dayDict= {}
function AddSubject() {
  
  const [sig, setSig] = useState("") //Arreglo de signaturas
  const[init, setInit] = useState("")
  const[end, setEnd] = useState("")
  const[day, setDay] = useState("Lunes")

  function addSignature(){
    
    if (!dayDict.hasOwnProperty(day)) {
      dayDict[day] = {}; // {"Lunes": {}}. Si verifica no crea nuevo dia si ya existe
    }

    if(!dayDict[day].hasOwnProperty(sig)){
      dayDict[day][sig] = {} //{"Lunes": { Matematica: {} }}
      const signature = {}
      signature["init"] = init
      signature["end"] = end // {init: 2, end: 2}      
      dayDict[day][sig] = signature //{ "Lunes": { Base de Datos: {init:2, end:2} }}
      console.log(day)
      console.log(signature) 
    }else{
      alert('esa materia ya existe')
    }
    console.log(dayDict)
  }

  let clk = () => {
    addSignature()
    setSig("")
    setInit("")
    setEnd("")
  }

  return(
    <>
      <h1>Schelude</h1>
      <select name="days" id="days-select" onChange={e => setDay(e.target.value)}>
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miercoles">Miercoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
        <option value="Sabado">Sabado</option>
      </select>
      <input type='text' placeholder="Materia" onChange={(e) => setSig(e.target.value) } value={sig} />
      <input type='text' placeholder="Inicio" onChange={(e) => setInit(e.target.value) } value={init}/>
      <input type='text' placeholder="Fin" onChange={(e) => setEnd(e.target.value)} value={end} />
      {console.log(day,sig, init,end)}
      <button onClick={clk}>Añadir materia</button>
    <table>
      <tr>
      </tr>
    </table>
    </> 
  );
}

export default AddSubject;
