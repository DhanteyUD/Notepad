import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoteList from './components/note/NoteList';
import Note from './models/note.model';
import Header from './components/header/Header';
import CreateNote from './components/note/CreateNote';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <hr style={{ padding: 2 }} />
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
