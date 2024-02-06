import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        {/* // <Routes>
        //   <Route index path="/" element={<Home />} />
        // </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;