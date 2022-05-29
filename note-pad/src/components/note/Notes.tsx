import * as React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import Note from '../../models/note.model';
import './note.css';

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <>
      <div className="mb-3">
        <Container
          className="note-container"
          style={{ backgroundColor: note.color }}
        >
          <Card className="card">
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.content}</Card.Text>
              <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
              <Button
                className="mt-3 delete"
                variant="danger"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </Button>
              <Button
                className="mt-3 edit"
                variant="secondary"
                onClick={() => handleDelete(note.id)}
              >
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Notes;
