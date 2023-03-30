import React, { useState, useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import axios from "axios";
import "./Builder.css";
import { parseResume } from "../../resumeAPI";
import Selector from "../../components/Selector.jsx/Selector";
import { BuildLoader } from "../../components/BuildLoader/BuildLoader";
import TextInput from "../../components/TextInput/TextInput";
import ManualForm from "../../components/ManualForm/ManualForm";
import { SunspotLoader } from "react-awesome-loaders";

function Builder() {
  const [fileContent, setFileContent] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const [url, setUrl] = useState(null);

  const [progress, setProgress] = useState(0);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileUploaded(true);
    uploadFiles(file);
  };

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
          const fetchAPI = async () => {
            setParsedData(await parseResume(downloadURL));
            console.log(parsedData);
          };

          fetchAPI();
        });
      }
    );
  };

  useEffect(() => {
    console.log(parsedData);
  }, [parsedData]);

  return (
    <div className="file-uploader-container">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div className="upload-section">
        {!fileUploaded && !parsedData ? (
          <>
            <h1>Upload Resume/CV</h1>
            <div style={{ padding: "1rem" }}>
              <label class="button button--flex">
                <input type="file" onChange={handleFileUpload} />
                Select <i className="ri-upload-line" />
              </label>
            </div>

            <p className="or-p">Or</p>

            <div>
              <a href="" className="button button--flex">
                Connect to LinkedIn <i className="ri-linkedin-box-fill" />
              </a>
            </div>
          </>
        ) : (
          <>
            {parsedData ? (
              <div>
                <>
                  <ManualForm
                    title="Education"
                    values={
                      parsedData?.affinda.extracted_data.education.entries
                    }
                  />
                  <ManualForm
                    title="Languages"
                    values={parsedData?.affinda.extracted_data.languages}
                  />
                </>
              </div>
            ) : (
              <SunspotLoader
                gradientColors={["#6366F1", "#E0E7FF"]}
                shadowColor={"#3730A3"}
                desktopSize={"128px"}
                mobileSize={"100px"}
              />
            )}
          </>
        )}

        <Selector></Selector>
      </div>
      <div className="">
        <p>
          Your portfolio created by artificial intelligence will appear here.
        </p>
        {parsedData && (
          <div style={{ height: "5rem" }}>
            {Object.entries(parsedData).map(([sectionName, sectionData]) => (
              <div key={sectionName}>
                <h3>{sectionName}</h3>
                {Object.entries(sectionData).map(([fieldName, fieldValue]) => (
                  <div key={fieldName}>
                    <h4>{fieldName}</h4>
                    {typeof fieldValue === "object" && fieldValue !== null ? (
                      Array.isArray(fieldValue) ? (
                        <ul>
                          {fieldValue.map((item, index) => (
                            <li key={index}>
                              {typeof item === "object" ? (
                                <div>
                                  <h5>Item {index + 1}</h5>
                                  <p>{JSON.stringify(item)}</p>
                                </div>
                              ) : (
                                item
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div>
                          {Object.entries(fieldValue).map(([key, value]) => (
                            <div key={key}>
                              <h5>{key}</h5>
                              {typeof value === "object" && value !== null ? (
                                Array.isArray(value) ? (
                                  <ul>
                                    {value.map((item, index) => (
                                      <li key={index}>
                                        {typeof item === "object" ? (
                                          <div>
                                            <h6>Item {index + 1}</h6>
                                            <p>{JSON.stringify(item)}</p>
                                          </div>
                                        ) : (
                                          item
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <div>
                                    {Object.entries(value).map(
                                      ([subKey, subValue]) => (
                                        <div key={subKey}>
                                          <h6>{subKey}</h6>
                                          <p>
                                            {typeof subValue === "object" &&
                                            subValue !== null
                                              ? JSON.stringify(subValue)
                                              : subValue}
                                          </p>
                                        </div>
                                      )
                                    )}
                                  </div>
                                )
                              ) : (
                                <p>{value}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )
                    ) : (
                      <p>{fieldValue}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {!parsedData && fileUploaded && (
          <>
            <BuildLoader />
            <p>Building...</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Builder;
