import React, { useCallback } from "react";
import ImageUploader from "./components/ImageUpload"
import CakeMaker from "./components/CakeMaker"
import './App.css';


function App() {
  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log("finally here I should write logic")
    console.log(acceptedFiles);
  }, []);

  const onCancel = () => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log("finally here I should write logic to cancel upload")
  }

  return (
    <div className="container centered">
      <div id="UploadWindow">
        <ImageUploader onDrop={onDrop} onCancel={onCancel}/>
      </div>
      <div id="CakeMaker"> 
        <CakeMaker />
      </div>
    </div>
  );
}

export default App;
