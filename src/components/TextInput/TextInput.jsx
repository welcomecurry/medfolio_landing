import React, { useState } from 'react';
import './TextInput.css';

function TextInput({values}) {
    console.log(values)
  const [inputs, setInputs] = useState([{ value: '' }, values]);

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: '' }]);
  };

  return (
    <div className="text-input-form">
      {inputs.map((input, index) => (
        <div className="text-input-form__input-container" key={index}>
          <input
            className="text-input-form__input"
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button className="text-input-form__button" onClick={handleAddInput}>Add More</button>
    </div>
  );
}

export default TextInput;
