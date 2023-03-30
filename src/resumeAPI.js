export const parseResume = async (file) => {
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
  
    try {
      const response = await fetch('https://api.edenai.run/v2/ocr/resume_parser', options);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  