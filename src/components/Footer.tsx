interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <footer>
    <section>
      <a
        href="https://github.com/Zyphaex"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/samhillier"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a href="https://x.com/Zyphaex" target="_blank" rel="noopener noreferrer">
        X
      </a>
      <a
        href="https://instagram.com/Zyphaex"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </section>
    <section>
      <p>
        &copy; {new Date().getFullYear()} SBDREC. All Rights Reserved.
        <br />
      </p>
    </section>
  </footer>
);

export default Footer;
