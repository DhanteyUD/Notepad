import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoteList from './components/note/NoteList';
import Note from './models/note.model';
import Header from './components/header/Header';
import CreateNote from './components/note/CreateNote';
import './App.css';

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: 'Note 1',
      content: 'Note 1 content',
      color: '#D3D3D3',
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
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
