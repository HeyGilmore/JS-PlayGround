import { createNavbar } from "./navbar.js"; // Since both files are in the same folder

// Define your navbar data
const navLinks = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

// Create a navbar instance
const myNavBar = createNavbar("MyWebsite", navLinks);

// Render the navbar inside an existing element with ID 'headerSection'
myNavBar.render("headerSection");
