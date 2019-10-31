import React from 'react';
import '../App.css';
import { Button, Col, Row } from 'react-bootstrap';
import store from "../store";
import { editText, submitText } from "../actions";
import EdiText from 'react-editext';

function Title({ menu }) {
  const state = store.getState();  
  const { title, menuId } = menu;
  console.log(`Menu: ${menu}`);
  const activeMenuId = menuId;

  const handleSubmit = (activeMenuId, val) => {
    store.dispatch(submitText(activeMenuId, val));
    console.log("Menu text updated");
  }
 

  return (
    <Col className="Header">
      <EdiText
        className="Header"
        viewProps={{
          className: 'Header__name',          
        }}
        inputProps={{
          className: 'Header__name',          
        }}
        onSave={handleSubmit}
        type="text"
        value={title}
        saveButtonContent="Apply"
        cancelButtonContent="Cancel"
        editButtonContent="Edit"
        hideIcons={true}
    />     
    </Col>
  );

}

export default Title;

