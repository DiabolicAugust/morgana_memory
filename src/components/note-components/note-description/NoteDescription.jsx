import React, { useEffect, useState } from 'react';
import styles from './NoteDescription.module.css';

const NoteDescription = ({ description, onChange }) => {
  const [desc, setDesc] = useState(description);

  useEffect(() => setDesc(description), [description]);

  return (
    <div className={styles.main}>
      <textarea
        type="text"
        value={desc}
        onChange={(text) => {
          onChange(text.target.value);
          setDesc(text.target.value);
        }}
      />
    </div>
  );
};

export default NoteDescription;
