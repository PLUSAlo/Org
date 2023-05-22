import { useState } from 'react';
import './App.css';
import {v4 as uuid} from 'uuid';
import Form from './components/form/form';
import Header from './components/header/header';
import MiOrg from './components/miOrg';
import Team from './components/team';
import Footer from './components/footer';

function App() {

  const [showForm, updateShow] = useState(false)
  const [colaboradores, updateColaboradores] = useState([{
    id: uuid(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Programacion",
    photo: "https://github.com/genesysaluralatam.png",
    name: "Genesys Rondón",
    position: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id: uuid(),
    team: "UX Desing",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    position: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    team: "Programacion",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    position: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Innovacion y Gestion",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    position: "Dev FullStack",
    fav: false
  }])
  const [teams, updateTeams] = useState([
    {
      id: uuid(),
      title:"Programacion",
      colorPrimary: "#57C278",
      colorSecundary: "#D9F7E9"
    },
    {
      id: uuid(),
      title:"Front End",
      colorPrimary: "#82CFFA",
      colorSecundary: "#E8F8FF"
    },
    
    {
      id: uuid(),
      title: "Data Science",
      colorPrimary: "#A6D157",
      colorSecundary: "#F0F8E2"
    },
    
    {
      id: uuid(),
      title: "Devops",
      colorPrimary: "#E06B69",
      colorSecundary: "#FDE7E8"
    },
    
    {
      id: uuid(),
      title: "UX Desing",
      colorPrimary: "#DB6EBF",
      colorSecundary: "#FAE9F5"
    },
    
    {
      id: uuid(),
      title: "Movil",
      colorPrimary: "#FFBA05",
      colorSecundary: "#FFF5D9"
    },
    {
      id: uuid(),
      title:"Innovacion y Gestion",
      colorPrimary: "#FF8A29",
      colorSecundary: "#FFEEDF"
    },     
])

  const changeShow = () => {
    updateShow(!showForm)
  }

  const addColaborador = (colaborador) =>{
    updateColaboradores([...colaboradores, colaborador]);
  }

  const deleteColaborador = (id) =>{
      const newColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
      updateColaboradores(newColaboradores)
  }

  const updateColor = (color, id) =>{
      const teamsUpdate = teams.map((team)=>{
          if(team.id === id){
            team.colorPrimary = color;
          }
          return team
      })
      updateTeams(teamsUpdate)
  }
  //Teams
  
  const addTeam = (newTeam) =>{
    updateTeams([...teams, {...newTeam, id: uuid()}])
  
  }

  const like = (id) =>{
    const colaboradoresUpdates = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    updateColaboradores(colaboradoresUpdates)
  }
  return (
    <div>
      <Header />
      {showForm && <Form 
      teams = { teams.map( (team) => team.title)}
      addColaborador = {addColaborador}
      addTeam = {addTeam}
      
      />}        

      <MiOrg changeShow = {changeShow}/>
      {
        teams.map( (team) => <Team 
        datos={team} 
        key={team.title}
        colaboradores={colaboradores.filter(colaborador => colaborador.team === team.title)}
        deleteColaborador={deleteColaborador}
        updateColor ={updateColor}        
        like ={like}/>)
      }

      <Footer/>
    </div>
  );
}

export default App;
