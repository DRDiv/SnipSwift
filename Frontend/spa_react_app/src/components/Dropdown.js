import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Dropdown.css'; // Importing CSS file for styling

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="dropdown" onClick={handleToggleDropdown}>
      <NavLink to="#" className="dropdown-toggle">Summary</NavLink>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li><NavLink to="/abstractive">Abstractive</NavLink></li>
          <li><NavLink to="/extractive">Extractive</NavLink></li>
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
