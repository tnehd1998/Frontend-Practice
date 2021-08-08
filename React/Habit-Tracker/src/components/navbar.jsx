import React, { memo } from "react";

const Navbar = memo((props) => {
  return (
    <header className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </header>
  );
});

export default Navbar;
