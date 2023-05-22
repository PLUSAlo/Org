import "./itemList.css"
const ItemList = (props) =>{


     const manageChange = (e) => {
        props.updateValue(e.target.value)
     }
    return <div className="lista_item">
        <label>{props.titulo}</label>
        <select value={props.value} onChange={manageChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
        </select>
    </div>
}
export default ItemList