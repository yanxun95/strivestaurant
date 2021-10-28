import { Navbar, Nav } from "react-bootstrap";
import {
  Link,
  withRouter,
  RouteComponentProps,
  useHistory,
} from "react-router-dom";

interface MyNavComponentProps {
  title: string;
}

const MyNav = ({ title }: MyNavComponentProps) => {
  const history = useHistory();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>{title}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/">
            <div
              className={
                history.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </div>
          </Link>
          <Link to="/menu">
            <div
              className={
                history.location.pathname === "/menu"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/reservations">
            <div
              className={
                history.location.pathname === "/reservations"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Reservation
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
