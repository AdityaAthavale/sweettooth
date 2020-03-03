import React, { useCallback } from "react";
import ImageUploader from "./components/Image_Uploader/ImageUpload"
import NavBar from "./components/Nav_Bar/NavBar"
import './App.css';
import Cake_board from "./components/Cake_Maker/cake_board";
import Pallet from "./components/Cake_Maker/pallet";


function App() {
  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div id="UploadWindow">
            <ImageUploader onDrop={onDrop} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Pallet />
          </div>
          <div className="col-md-8">
            <Cake_board />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
