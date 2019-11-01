import React from 'react';
import '../App.css';
import { Button, Col, Row } from 'react-bootstrap';
import store from "../store";
import { editText, submitText } from "../actions";
import EdiText from 'react-editext';
import textToReactMarkup from 'react-markup-text';
import ReactMarkDown from 'react-markdown';

function Text({ menu }) {
  const state = store.getState();
  const { value, menu_id } = menu;
  // const markValue = textToReactMarkup(value);
  console.log(`Menu: ${menu}`);
  const activeMenuId = menu_id;
  // store.dispatch(editText(activeMenuId, false));  
  const showComponent = state.editing.showComponent;
  console.log(`showComponent ? ${showComponent}`);

  const handleSubmit = (val, activeMenuId) => {
    const markVal = ReactMarkDown(val);
    store.dispatch(submitText(activeMenuId, markVal));
    console.log("Menu text updated");
  }

  return (
    <Col className="Text">
      <EdiText
        className="Text"
        viewProps={{
          className: 'Text',
        }}
        inputProps={{
          className: 'textarea',
          placeholder: 'Type your content here',
          style: {
            outline: 'none',
            minWidth: 'auto'
          },
          rows: 5
        }}
        onSave={handleSubmit}
        type="textarea"
        value={value}
        saveButtonContent="Apply"
        cancelButtonContent="Cancel"
        editButtonContent="Edit"
        hideIcons={true}
      />
    </Col>
  );

}

export default Text;

