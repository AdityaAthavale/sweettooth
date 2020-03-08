import React, { useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImageUploader from "./components/Image_Uploader/ImageUpload"
import NavBar from "./components/Nav_Bar/NavBar"
import './App.css';
import CakeMaker from "./components/Cake_Maker/CakeMaker";
import BasicCakeDetails from "./components/Forms/BasicCakeDetails"
import { CakeDataProvider } from "./components/DataProviders/CakeDataProvider";
import LoginForm from "./components/Login/login";


function App() {
  const onDrop = useCallback(acceptedFiles => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
  }, []);

  return (
    
      <Router>
        <div className="appBackground">
          <NavBar />
          <div className="container">
          <CakeDataProvider>
            <Route exact path="/cakeMaker" component={CakeMaker} />
            <Route exact path="/submitCake" component={ImageUploader} />
            <Route exact path = "/login" component={LoginForm} />
            <Route exact path="/" component={BasicCakeDetails} />
          </CakeDataProvider>
          </div>
        </div>
      </Router>
  );
}
export default App;
