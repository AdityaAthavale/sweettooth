import React, { useCallback } from "react";
import ImageUploader from "./components/ImageUpload"
import './App.css';


function App() {
  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
  }, []);

  return (
    <div className="container">
      <div id="UploadWindow">
        <ImageUploader onDrop={onDrop} />
      </div>
    </div>
  );
}

export default App;
