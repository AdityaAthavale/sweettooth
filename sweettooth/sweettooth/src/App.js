import React, { useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImageUploader from "./components/Image_Uploader/ImageUpload"
import NavBar from "./components/Nav_Bar/NavBar"
import './App.css';
import CakeMaker from "./components/Cake_Maker/CakeMaker";
import BasicCakeDetails from "./components/Forms/BasicCakeDetails"
import { CakeDataProvider } from "./components/DataProviders/CakeDataProvider";


function App() {
  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
  }, []);

  return (
    
      <Router>
        <div>
          <NavBar />
          <div className="container">
          <CakeDataProvider>
            <Route exact path="/cakeMaker" component={CakeMaker} />
            <Route exact path="/submitCake" component={ImageUploader} />
            <Route path="/" component={BasicCakeDetails} />
          </CakeDataProvider>
          </div>
        </div>
      </Router>
  );
}


{/* <div className="row">
<CakeMaker />
</div> */}

{/* <div className="row">
          <div id="UploadWindow">
            <ImageUploader onDrop={onDrop} />
          </div>
        </div> */}

export default App;
