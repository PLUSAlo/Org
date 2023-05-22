import { useState } from "react"
import "./item.css"
const Item =(props) => {
    const placeholderChange = `${props.placeholder}...`
    
    const {type = "text"} = props

    const manageChange = (e) => {
        props.updateValue(e.target.value)
    }
    return <div className={`item item-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} value={props.value} onChange={manageChange} type={type}/>
    </div>
}
export default Item