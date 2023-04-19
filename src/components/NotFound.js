import { Note } from '@mui/icons-material';
import React from 'react';
import NoteImage from './NoteImage';

const NotFound = () => {
  return (
    <div>
    <NoteImage />
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
