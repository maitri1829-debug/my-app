import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  const [mode, setDarkMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  }

  return (
    <>
      <Router>

        <Navbar
          title="ShopMe"
          aboutText="About"
          mode={mode}
        />

        <Alert alert={alert} />

        <Routes>

          <Route
            path="/about"
            element={
              <>
            <h1>This is about page</h1>
            <About />
             </> 
            }
          />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter text to analyze"
                mode={mode}
              />
            }
          />

        </Routes>

      </Router>
    </>
  );
}

export default App;

