import "./miOrg.css"
import { useState } from "react"
const MiOrg = (props) =>{
    
    //const [name, updateName] = useState("Alondra")

    // const [show, updateShow] = useState(true)
    // const manageClick = () => {
    //     updateShow(!show)
    // }
    return <section className="org_section">
        <h3 className="title">Mi Organizacion {}</h3>
        <img src="/img/add.png" alt="add" onClick={props.changeShow}></img>
    </section>
}
export default MiOrg