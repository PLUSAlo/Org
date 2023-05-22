import "./colaborador.css"
import { AiOutlineCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Colaborador = (props) =>{

    const{name, position, photo, team, id, fav } = props.datos
    const{colorPrimary, deleteColaborador, like} = props
    return <div className="colaborador">
        <AiOutlineCloseCircle className="delete" onClick={() => deleteColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimary}}>
            <img src={photo} alt={name}/>
        </div>
        
        <div className="info">
            <h4>{name}</h4>            
            <h5>{position}</h5>
            {fav ? <AiFillHeart color="red" onClick = {() => like(id)}/> : 
            <AiOutlineHeart onClick = {() => like(id)}/>}
            
            
        </div>
    </div>
}
// https://github.com/harlandlohora.png

export default Colaborador