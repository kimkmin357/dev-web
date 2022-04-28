import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SampleAPI from './react-client/sampleApi';
import Main from './react-client/main';
import NotFound from './react-client/notFound';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/sampleApi" element={<SampleAPI />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>

  );
}

export default App;