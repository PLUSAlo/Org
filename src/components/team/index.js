import "./team.css"
import Colaborador from "../colaborador"
import hexToRgba from "hex-to-rgba";
const Team = (props) =>{

    const { colorPrimary, colorSecundary, title, id} = props.datos
    
    const {colaboradores, deleteColaborador, updateColor, like} = props
    const obj ={
        backgroundColor: hexToRgba(colorPrimary, 0.3)
    }
    const objTitle ={
        borderColor: colorPrimary
    }

    return <> 
    {
        colaboradores.length >0 &&
        <section className="team" style={obj}>
        <input className="colorInput" type="color" value={hexToRgba(colorPrimary, 0.3)} onChange={(event) =>{
                updateColor(event.target.value, id)
        }}></input>
        <h3 style={objTitle}>{title}</h3>
        <div className="colaboradores">
            {
                colaboradores.map ((colaborador)=><Colaborador datos={colaborador} 
                key={colaborador.name} 
                colorPrimary= {colorPrimary} 
                deleteColaborador={deleteColaborador} 
                like={like}/>)
            }
        </div>
        </section>
    }</>
}

export default Team