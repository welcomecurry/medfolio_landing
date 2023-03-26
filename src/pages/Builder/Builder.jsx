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
        <link
            href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
            rel="stylesheet"
        />
      <div className="upload-section">
        <h1>Upload Resume/CV</h1>
        <a href="" className="button button--flex">
           Select <i className="ri-upload-line" />
        </a>

        <input
          type="file"
          className="button button--flex"
          onChange={handleFileUpload}
        />

        <div>
            <p>Or</p>
            <a href="" className="button button--flex">
           Connect to LinkedIn <i className="ri-linkedin-box-fill" />
        </a>

        <input
          type="file"
          className="button button--flex"
          onChange={handleFileUpload}
        />
        </div>
      </div>
      <div className="">
        <p>Your portfolio created by artificial intelligence will appear here.</p>
        {fileContent && (
          <pre className="">{fileContent}</pre>
        )}
      </div>
    </div>
  );
}

export default Builder;