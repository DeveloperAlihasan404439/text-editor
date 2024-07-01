import React, { useEffect, useState, useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";

import "./App.css";

function App() {
  function handleTextEdit(content) {
    console.log(content);
  }
  return (
    <div className="container">
      <div className="text-box">
        <SunEditor
          placeholder="Please type here..."
          autoFocus={false}
          width="100%"
          height="200"
          onChange={handleTextEdit}
          setOptions={{
            buttonList: [
              ["undo", "redo", "save"],
              ["font", "fontSize"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
              ],
              ["table", "list", "align", "horizontalRule", "outdent", "indent"],
              ["fontColor", "hiliteColor", "textStyle"],
              ["math", "image", "audio", "video"],
              ["removeFormat", "link", "print", "fullScreen", "codeView"],
            ],
            defaultStyle: "font-size: 16px;",
            katex: katex, // Provide the katex object here
          }}
        />
      </div>
    </div>
  );
}

export default App;
