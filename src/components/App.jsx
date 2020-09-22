import React from "react";

// MDEditor
import MDEditor from "@uiw/react-md-editor";

const App = () => {
  const [value, setValue] = React.useState("**Hello FreeCodeCamp!!!**");
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
        fullscreen
      />
    </div>
  );
};

export default App;
