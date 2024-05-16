import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      handleAlert("DarkMode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert("LightMode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route>
            <Route exact path="/" element={<TextForm
                heading="Enter the text"
                mode={mode}
                showAlert={handleAlert}
              />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
