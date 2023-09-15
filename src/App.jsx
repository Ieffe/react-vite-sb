import "./css/App.css";

import Layout from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> } >
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
