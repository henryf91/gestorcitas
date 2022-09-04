import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const borrandoPaciente = pacientes.filter(pacienteCurrent => pacienteCurrent.id !== id)
    setPacientes(borrandoPaciente)
  }

  useEffect(() => {
    const getLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    getLS()
  }, [])

  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  
  

  return (
    <div className="container mx-auto mt-20">
      <Header />    
      <div className="mt-12 md:flex">
        <Formulario 
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          pacientes={pacientes}
          paciente={paciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>  
    </div>
  )
}

export default App
