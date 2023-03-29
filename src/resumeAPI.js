export function parseResume(file) {
    console.log(file)
    console.log(file.file)

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
      file_url: file
    })
  };
  
  fetch('https://api.edenai.run/v2/ocr/resume_parser', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
