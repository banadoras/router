import './App.css';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Connect from './pages/connect';


const router = createBrowserRouter([
  { path: '/', element: <Home /> ,children:[
    { path: '/about', element: <About /> },
    { path: '/connect', element: <Connect /> },
  ]},
  
]);

function App() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/connect"}>
            Connect
          </Link>
        </li>
      </ul>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
