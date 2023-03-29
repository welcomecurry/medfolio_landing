import React, { useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";
import './Builder.css';
import { parseResume } from '../../resumeAPI';
import Selector from '../../components/Selector.jsx/Selector';

function Builder() {
  const [fileContent, setFileContent] = useState('');
  const [parsedData, setParsedData] = useState(null);

  const [progress, setProgress] = useState(0);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    uploadFiles(file);
  }

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          parseResume(downloadURL)
        });
      }
    );
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