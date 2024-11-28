import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="bg-navbar-bg bg-no-repeat object-cover">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <h3>footer</h3>
      </footer>
    </>
  );
};

export default Layout;
