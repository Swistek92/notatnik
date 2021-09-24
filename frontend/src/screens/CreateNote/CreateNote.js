import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";

function CreateNote({ history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    history.push("/mynotes");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Nowa notatka">
      <Card>
        <Card.Header>Nowa notatka</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Tytuł</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="podaj tytuł"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Treść</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="wpisz treść"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Podgląd</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Label>Kategoria</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="podaj kategorie"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Stwórz Notatke
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Restart
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          dzisiejsza data - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateNote;
