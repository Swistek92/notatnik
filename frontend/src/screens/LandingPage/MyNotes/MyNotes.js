import React, { useEffect } from 'react'
import MainScreen from '../../../components/MainScreen'
import {Link, useHistory} from "react-router-dom"
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
// import notes from "../../../data/notes"
// import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteAction, listNotes } from '../../../actions/notesActions';
import Loading, { } from "../../../components/Loading"
import ErrorMessage, { } from "../../../components/ErrorMessage"

const MyNotes = () => {

   const dispatch = useDispatch();

   const noteList = useSelector((state)=> state.noteList);
   const {loading, notes, error} = noteList; 

 const userLogin = useSelector(state => state.userLogin)
 const {userInfo} =  userLogin 

//  const [notes, setNotes] = useState([])


const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

 const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success:successUpdate } = noteUpdate;

 const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;



  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };
const history = useHistory(); 
// const fetchNotes = async() => {
//   const{data} = await axios.get("/api/notes");
//   setNotes(data);
// }

useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  return (
  
  <MainScreen title={`Hi * _> ${userInfo.name} <_ * `}>
    <Link to="/createnote">
      <Button style={{ marginLeft: 10, marginBottom:6}} size="lg">
      Nowa notatka
      </Button>
      </Link>


           {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}

      
      {error && <ErrorMessage variant='danger'> {error}</ErrorMessage>}
      {loading && <Loading/> }
      {notes?.reverse().map(note=>(
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
          <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
        </div>
    
        </Card.Header>
            <Accordion.Collapse eventKey="0"> 
              <Card.Body>

            <Badge  style={{backgroundColor:"green"}}>
              Category -{note.category}
            </Badge>


                  <blockquote className="blockquote mb-0">
              <p>{note.content} </p>
              <footer className="blockquote-footer">
                Create on date{"  "}
                <cite title="Source Title">
                            {note.createdAt.substring(0, 10)}
                        </cite>
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
