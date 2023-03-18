import useUniqueId from "../hooks/useId";
import HomePage from "../pages/home";
import PropertiesPage from "../pages/properties";

const NavbarUttils = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
    element: <HomePage />,
  },
  {
    id: useUniqueId,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
    element: <PropertiesPage />,
  },
  {
    id: useUniqueId,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: false,
    element: <h1>Generic Sign In</h1>,
  },
];

export default NavbarUttils;
