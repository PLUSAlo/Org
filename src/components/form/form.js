import { useState } from "react"
import "./form.css"
import ItemList from "../itemList/"
import Item from "../item"
import Button  from "../button"
const Form = (props) =>{

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")

    const [title, updateTitle] = useState("")
    const [color, updateColor] = useState("")

    const {addColaborador, addTeam} = props

    const manageSent = (e) =>{
        e.preventDefault()
        let dataSent = {
            name,
            position,
            photo,
            team
        }
        addColaborador(dataSent)
    }

    const manageNewTeam = (e) =>{
        e.preventDefault()
        addTeam({title, colorPrimary: color})
        
    }
    return <section className="formulario">
        <form onSubmit={manageSent}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Item titulo="Nombre" placeholder="Ingresa nombre" required value= {name} updateValue={setName}/>
            <Item titulo="Puesto"  placeholder="Ingresa puesto"  required value= {position} updateValue={setPosition}/>
            <Item titulo="Foto"  placeholder="Ingresa enlace de foto"  required value= {photo} updateValue= {setPhoto}/>
            <ItemList titulo="Equipos" value= {team} updateValue= {setTeam} teams={props.teams}></ItemList>
            <Button texto="Crear" ></Button>
        </form>
        <form onSubmit={manageNewTeam}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Item titulo="Titulo" placeholder="Ingresa titulo" required value= {title} updateValue={updateTitle}/>
            <Item titulo="Color Primario"  placeholder="Ingresa color primario" type="color" required value= {color} updateValue={updateColor}/>
            <Button texto="Registrar Equipo" ></Button>
        </form>
    </section>
}

export default Form