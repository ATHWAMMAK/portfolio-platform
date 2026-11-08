function Header() {
  return (
    <header className="header">
      <div className="logo">
        Creative<span>Space</span>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#add-project">Add Project</a>
      </nav>

      <a href="#projects" className="header-button">
        Explore Work
      </a>
    </header>
  );
}

export default Header;

