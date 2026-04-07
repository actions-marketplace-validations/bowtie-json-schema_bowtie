import { Link } from "react-router";
import { useContext } from "react";
import Button from "react-bootstrap/Button";

import { ThemeContext } from "../context/ThemeContext";

const NotFound = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1
        className={`display-4 fw-bold mb-4 ${isDarkMode ? "text-info" : "text-secondary"}`}
      >
        Page Not Found
      </h1>
      <p className="fs-5 text-muted mb-4 text-center">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link to="/" className="text-decoration-none">
        <Button size="lg" className="px-4 py-2 shadow-sm">
          Go To Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
