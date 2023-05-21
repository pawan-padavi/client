import { Link } from "react-router-dom";

export const Right = () => {
  return (
    <div>
      <ul>
        <li> <Link to="/Home">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Websites">Websites</Link></li>
        <li>
          <Link to="/Resume"> Resume </Link>
        </li>
        <li><Link to="/ContactUs"> Contact us </Link></li>
      </ul>
    </div>
  );
};
