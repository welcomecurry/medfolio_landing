import React, { useState } from 'react';
import './Builder.css';

function Builder() {
  const [fileContent, setFileContent] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setFileContent(event.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <div className="file-uploader-container">
      <div className="file-uploader-left">
        <input
          type="file"
          className="file-uploader-input"
          onChange={handleFileUpload}
        />
      </div>
      <div className="file-uploader-right">
        {fileContent && (
          <pre className="file-uploader-pre">{fileContent}</pre>
        )}
      </div>
    </div>
  );
}

export default Builder;