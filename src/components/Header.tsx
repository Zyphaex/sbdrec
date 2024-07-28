interface HeaderProps {
  showAddLifter: boolean;
  toggleAddLifter: () => void;
}

const Header: React.FC<HeaderProps> = ({ showAddLifter, toggleAddLifter }) => (
  <>
    <nav>
      <ul>
        <li>
          <button onClick={toggleAddLifter}>
            {showAddLifter ? "Hide Add Lifter" : "Add Lifter"}
          </button>
        </li>
      </ul>
    </nav>
    <header>
      <h1>SBDREC.com</h1>
    </header>
  </>
);

export default Header;
