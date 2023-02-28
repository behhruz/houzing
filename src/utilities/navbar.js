import useUniqueId from "../hooks/useId";
import HomePage from "../pages/home";
import PropertiesPage from "../pages/properties";

const Navbar = [
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
];

export default Navbar;
