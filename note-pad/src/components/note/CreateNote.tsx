import * as React from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import Note from '../../models/note.model';

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = React.useState<string>('');
  const titleRef = React.useRef<HTMLInputElement>(null);
  const contentRef = React.useRef<HTMLTextAreaElement>(null);
  const colorRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === '' || contentRef.current?.value === '') {
      // alert('Title and content are required');
      return setError('Both fields are required');
    }
    setError('');
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        content: (contentRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
  };

  return (
    <>
      <h2>Create Note</h2>
      <Form
        className="mb-3 mt-3"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <FormGroup className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the Note"
            ref={titleRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicTitle">
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder="Enter your notes"
            as="textarea"
            rows={3}
            ref={contentRef}
          />
        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="colorInput">Note Color</Form.Label>
          <Form.Control
            type="color"
            defaultValue="#dfdfdf"
            id="colorInput"
            title="Choose your color"
            ref={colorRef}
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
