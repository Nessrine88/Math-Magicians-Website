import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function Layout() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1 style={{
            color: '#ffe400',
            fontSize: '24px',
          }}
          >
            Math MAagicians
          </h1>
        </div>
        <div className="navList">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
