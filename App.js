import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
// import { Table } from '@mui/material';
import Table1 from './Table1';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Table1" elements={<Table1/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
