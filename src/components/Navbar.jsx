function Navbar({ setPage }) {
  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => setPage("home")}
      >
        Code<span>Path</span>
      </div>

      <div className="nav-links">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("stack")}>
          Visualizer
        </button>

      </div>

    </nav>
  );
}

export default Navbar;