import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const NavbarMenu = () => {
  const { store, actions } = useContext(Context);

  const handleDeleteFavorite = (name) => {
    actions.deleteFavorite(name);
  };

  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Link to="/">
            <Image
              src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0-1536x1536.png"
              height="100"
              alt="Star Wars"
            />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav>
        <DropdownButton
          id="dropdown-basic-button"
          title={`Favorites (${store.favorites.length})`}
          className="favorites-dropdown"
        >
          {store.favorites.map((item, index) => (
            <Dropdown.Item key={index}>
              {item}
              <FontAwesomeIcon
                icon={faTrash}
                className="ml-2"
                onClick={() => handleDeleteFavorite(item)}
              />
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Navbar>
    </>
  );
};