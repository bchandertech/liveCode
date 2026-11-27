import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 sm:px-6 lg:px-8"
      >
        <ul className="flex items-center gap-1 sm:gap-4">
          <li>
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-base"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-base"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-base"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
