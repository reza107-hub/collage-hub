import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <Link to={"/"}>
          <img className="h-14" src="/logo.png" alt="logo" />
        </Link>
        <p className="text-gray-600">
          <span className="text-main font-bold text-2xl">College Hub</span>
          <br />
          Providing college booking since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover hover:text-main text-gray-600">Branding</a>
        <a className="link link-hover hover:text-main text-gray-600">Design</a>
        <a className="link link-hover hover:text-main text-gray-600">Marketing</a>
        <a className="link link-hover hover:text-main text-gray-600">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover hover:text-main text-gray-600">About us</a>
        <a className="link link-hover hover:text-main text-gray-600">Contact</a>
        <a className="link link-hover hover:text-main text-gray-600">Jobs</a>
        <a className="link link-hover hover:text-main text-gray-600">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover hover:text-main text-gray-600">Terms of use</a>
        <a className="link link-hover hover:text-main text-gray-600">Privacy policy</a>
        <a className="link link-hover hover:text-main text-gray-600">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
