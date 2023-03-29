export function parseResume(file) {
    console.log(file)
    console.log(file.file)


    // const reader = new FileReader();
    // reader.readAsDataURL(f);

  const reader = new FileReader();
//   reader.readAsDataURL(blob);

//   reader.readAsArrayBuffer(blob);
//   reader.onload = () => {
//     // Do something with the blob data, such as sending it in an API request
//     const blob = new Blob([file], { type: file.type });

//     const options = {
//         method: 'POST',
//         headers: {
//           accept: 'application/json',
//           'content-type': 'application/json',
//           authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTc5MGMxMTktMzVkOS00MGEyLTk1YzItNjFhZGI2NjYyMzJjIiwidHlwZSI6ImFwaV90b2tlbiJ9.aCP6lXwnaX5JSqL23cMLjF37bWiVNlggd_L1vwfbS44'
//         },
//         body: JSON.stringify({
//           response_as_dict: true,
//           attributes_as_list: false,
//           show_original_response: false,
//           providers: 'affinda',
//           file: blob
//         })
//       };
      
//       fetch('https://api.edenai.run/v2/ocr/resume_parser', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//   };

const blob = new Blob([file], { type: file.type });

const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTc5MGMxMTktMzVkOS00MGEyLTk1YzItNjFhZGI2NjYyMzJjIiwidHlwZSI6ImFwaV90b2tlbiJ9.aCP6lXwnaX5JSqL23cMLjF37bWiVNlggd_L1vwfbS44'
    },
    body: JSON.stringify({
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      providers: 'affinda',
      file: file
    })
  };
  
  fetch('https://api.edenai.run/v2/ocr/resume_parser', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
