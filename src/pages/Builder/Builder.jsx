import React, { useState } from 'react';
import axios from "axios";
import './Builder.css';
import { parseResume } from '../../resumeAPI';
import Selector from '../../components/Selector.jsx/Selector';

function Builder() {
  const [fileContent, setFileContent] = useState('');
  const [parsedData, setParsedData] = useState(null);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const form = new FormData()
    form.append('file', file)
    parseResume(file)
  };

  return (
    
    <div className="file-uploader-container">
        <link
            href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
            rel="stylesheet"
        />
      <div className="upload-section">
        <h1>Upload Resume/CV</h1>
        <div style={{padding: "1rem"}}>
          <label class="button button--flex">
            <input type="file" onChange={handleFileUpload}/>
            Select  <i className="ri-upload-line" />
          </label>
        </div>

        <div>
            <p>Or</p>
            <a href="" className="button button--flex">
            Connect to LinkedIn <i className="ri-linkedin-box-fill" />
        </a>

        <Selector></Selector>
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