import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container-fluid movie-app">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
