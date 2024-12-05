import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/SamHillierDev",
    label: "GitHub",
    icon: <FaGithub size={24} />,
  },
  {
    href: "https://linkedin.com/in/samhillier",
    label: "LinkedIn",
    icon: <FaLinkedin size={24} />,
  },
  {
    href: "https://x.com/Zyphaex",
    label: "X (formerly Twitter)",
    icon: <FaTwitter size={24} />,
  },
  {
    href: "https://instagram.com/Zyphaex",
    label: "Instagram",
    icon: <FaInstagram size={24} />,
  },
];

const Footer: React.FC = () => (
  <footer className="bg-gray-800 py-4 text-white">
    <section className="flex flex-col items-center justify-center gap-4 md:flex-row">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </section>
    <section className="mt-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} SBDREC. All Rights Reserved.
      </p>
    </section>
  </footer>
);

export default Footer;
