import React, { useState } from 'react';
import './ManualForm.css';
import TextInput from '../TextInput/TextInput';

function ManualForm({ title, values }) {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsCollapsibleOpen(!isCollapsibleOpen);
  };

  return (
    <div className="manual-form">
      <div className="collapsible-header" onClick={toggleCollapsible}>
        <h2 className="collapsible-header__title">{title}</h2>
        <button className="collapsible-header__toggle">{isCollapsibleOpen ? '-' : '+'}</button>
      </div>
      {isCollapsibleOpen && (
        <div className="collapsible-content">
          <TextInput values={values}/>
        </div>
      )}
    </div>
  );
}

export default ManualForm;
