import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaAngellist,
} from 'react-icons/fa';
import AppointWheelsLogo from '../../assets/icons/AppointWheels.png';
import BurgerMenu from './BurgerMenu';
import { destroySession } from '../../redux/slices/loginSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const userToken = sessionStorage.getItem('authToken');
  const user = JSON.parse(sessionStorage.getItem('userCredentials')) || {};

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleOpenMenu = () => setIsOpenMenu(!isOpenMenu);

  const logoutSubmit = () => {
    dispatch(destroySession(userToken));
  };

  return (
    <>
      <nav className="shadow-md md:hidden z-[1000]">
        <div className="flex items-center justify-center">
          <picture>
            <img src={AppointWheelsLogo} alt="AppointWheels Logo" className="h-16 sm:mt-3" />
          </picture>
          <BurgerMenu isOpen={isOpenMenu} toggle={toggleOpenMenu} />
        </div>
        {isOpenMenu && (
          <aside className="absolute z-10 w-full pb-12 text-black transition-all duration-500 ease-in-out origin-top transform bg-white shadow-xl">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition "
                  onClick={toggleOpenMenu}
                >
                  Home
                </NavLink>
                {user.role && user.role === 'admin' && (
                <>
                  <NavLink
                    to="/newcar"
                    className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                    onClick={toggleOpenMenu}
                  >
                    Create Car
                  </NavLink>
                  <NavLink
                    to="/deletecar"
                    className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                    onClick={toggleOpenMenu}
                  >
                    Delete Car
                  </NavLink>
                </>
                )}
              </li>
              <li>
                <NavLink
                  to="/rentals"
                  className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                  onClick={toggleOpenMenu}
                >
                  My Rentals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rental/new"
                  className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                  onClick={toggleOpenMenu}
                >
                  New Rental
                </NavLink>
              </li>
              {user.id === undefined && (
              <li>
                <NavLink
                  to="/login"
                  className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                  onClick={toggleOpenMenu}
                >
                  Login
                </NavLink>
              </li>
              )}
              {user.id === undefined && (
              <li>
                <NavLink
                  to="/signup"
                  className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                  onClick={toggleOpenMenu}
                >
                  Register
                </NavLink>
              </li>
              )}
              {user.id !== undefined && (
              <li>
                <button
                  type="button"
                  className="block w-full text-left p-2 pl-4 hover:bg-[var(--red)] hover:text-white text-xl font-bold md:hover:transition"
                  onClick={() => {
                    logoutSubmit();
                    toggleOpenMenu();
                  }}
                >
                  Logout
                </button>
              </li>
              )}
            </ul>
          </aside>
        )}
      </nav>
      <nav className="hidden w-full md:block md:w-1/5 md:fixed">
        <div className="flex flex-col h-screen py-8 bg-white shadow-lg text-back ">
          <picture>
            <img src={AppointWheelsLogo} alt="AppointWheels Logo" className="block" />
          </picture>
          <ul className="flex flex-col flex-1 pl-4 font-semibold uppercase mt-14">
            <li>
              <NavLink
                to="/"
                activeclassname="bg-[var(--green)]"
                className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition "
              >
                Home
              </NavLink>
              {user.role && user.role === 'admin' && (
                <>
                  <NavLink
                    to="/newcar"
                    className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                  >
                    Create Car
                  </NavLink>
                  <NavLink
                    to="/deletecar"
                    className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                  >
                    Delete Car
                  </NavLink>
                </>
              )}
            </li>
            <li>
              <NavLink
                to="/rentals"
                activeclassname="bg-[var(--green)]"
                className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
              >
                My Rentals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rental/new"
                activeclassname="bg-[var(--green)]"
                className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
              >
                New Rental
              </NavLink>
            </li>
            {user.id === undefined && (
              <li>
                <NavLink
                  to="/login"
                  className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
                >
                  LOGIN
                </NavLink>
              </li>
            )}
            {user.id === undefined && (
            <li>
              <NavLink
                to="/signup"
                className="block p-2 pl-4 hover:bg-[var(--green)] hover:text-white text-xl font-bold md:hover:transition"
              >
                REGISTER
              </NavLink>
            </li>
            )}
            {user.id !== undefined && (
              <li>
                <button
                  type="button"
                  className="block w-full text-left p-2 pl-4 hover:bg-[var(--red)] hover:text-white text-xl font-bold md:hover:transition"
                  onClick={
                    logoutSubmit
                  }
                >
                  LOGOUT
                </button>
              </li>
            )}
          </ul>
          <footer>
            <div className="flex justify-center mt-auto">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-green-500"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-green-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-green-500"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://angel.co/u/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-green-500"
                aria-label="AngelList"
              >
                <FaAngellist size={20} />
              </a>
            </div>
            <div className="mt-4 text-sm text-center text-gray-500">
              &copy;&nbsp;
              {new Date().getFullYear()}
              &nbsp;AppointWheels
            </div>
          </footer>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
