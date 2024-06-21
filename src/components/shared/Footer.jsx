import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center gap-y-5 p-5 bg-base-200 text-base-content rounded">
                <div>
                    <Link to="/" className="btn btn-ghost md:text-2xl ">Houzez</Link>
                </div>
                <nav className="grid grid-flow-col gap-4">
                    <a href="/login" className="link link-hover">Login</a>
                    <a href="/register" className="link link-hover">Register</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://twitter.com/" target="_blank">
                            <FaTwitter className="h-6 w-6 primary-text" />
                        </a>
                        <a href="https://youtube.com/" target="_blank">
                            <FaYoutube className="h-6 w-6 primary-text" />
                        </a>
                        <a href="https://fb.com/" target="_blank">
                            <FaFacebook className="h-6 w-6 primary-text" />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by Houzez</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;