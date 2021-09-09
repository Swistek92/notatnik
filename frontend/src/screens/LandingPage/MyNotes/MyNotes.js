import React from 'react'
import MainScreen from '../../../components/MainScreen'
import {Link} from "react-router-dom"
import { Button, Card } from 'react-bootstrap'
import notes from "../../../data/notes"

const MyNotes = () => {
const  delateHandler = (id)=>{
  if(window.confirm("Are you sure?")){
    
  }
}


  return (
  
  <MainScreen title="siemano kolego">
    <Link to="createnote">
      <Button style={{ marginLeft: 10, marginBottom:6}} size="lg">
      Nowa notatka
      </Button>
      {
          notes.map(note=>(

              <Card style={{margin: 10}}>
        <Card.Header style={{display: "flex"}}>
          <span style={{color:"black", textDecoration:"none", flex:1,cursor:"pointer", alignSelf:"center",fontsize:18,}}>
            {note.title}
          </span>
        
        <div>
          <Button href={`/note/${note._id}`}> Edit </Button>
          <Button variant="danger" className="mx-2" onClick={()=> delateHandler(note._id) }> Delate </Button>
        </div>
        </Card.Header>
      </Card>



          ))
      }


      


    </Link>
    
     </MainScreen>
  
  )
  
}

export default MyNotes
