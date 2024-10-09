import { Navbar } from "react-bootstrap";
import ReactLogo from "../Images/Home - Copy.jpeg";

const Header = () => {
  return (
    <Navbar bg="light" className="justify-content-between p-3 ">
      <Navbar.Brand>
        <img src={ReactLogo} alt="Logo" width="90" className=" align-top" />{" "}
        <span className="fw-bolder">Pure-Claim</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
