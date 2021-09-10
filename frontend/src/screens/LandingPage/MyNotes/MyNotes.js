import React, { useEffect, useState } from 'react'
import MainScreen from '../../../components/MainScreen'
import {Link} from "react-router-dom"
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
// import notes from "../../../data/notes"
import axios from "axios";

const MyNotes = () => {
 const [notes, setNotes] = useState([])

const  delateHandler = (id)=>{
  if(window.confirm("Are you sure?")){
    
  }
}
const fetchNotes = async() => {
  const{data} = await axios.get("/api/notes");
  setNotes(data);
}

useEffect(()=>{
  fetchNotes();
},[]);



  return (
  
  <MainScreen title="Witaj mój notatniczku">
    <Link to="createnote">
      <Button style={{ marginLeft: 10, marginBottom:6}} size="lg">
      Nowa notatka
      </Button>
      </Link>
      {
          notes.map(note=>(
            <Accordion key={note._id}>

        <Card style={{margin: 10}}>
        <Card.Header style={{display: "flex"}}>
          <span  style={{
            color:"black",
             textDecoration:"none",
              flex:1,cursor:"pointer",
               alignSelf:"center",
               fontsize:18,}}>

              <Accordion.Toggle as={Card.Text} variant="link" eventKey="0"> 


                {note.title}

              </Accordion.Toggle>
          


          </span>
        
        <div>
          <Button href={`/note/${note._id}`}> Edit </Button>
          <Button variant="danger" className="mx-2" onClick={()=> delateHandler(note._id) }> Delate </Button>
        </div>
    
        </Card.Header>
            <Accordion.Collapse eventKey="0"> 
              <Card.Body>

            <Badge  style={{backgroundColor:"green"}}>
              Category -{note.category}
            </Badge>


                  <blockquote className="blockquote mb-0">
              <p>
                {note.content}
              </p>
              <footer className="blockquote-footer">
                Create on date 
              </footer>
            </blockquote>

            </Card.Body>
            
            </Accordion.Collapse>
            
    
    
      </Card>
            </Accordion>

              



          ))
      }


      


    
    
     </MainScreen>
  
  )
  
}

export default MyNotes
