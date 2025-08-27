// src/index.js
import "./styles.css";
import HamburgerMenu from "./hamburger";


const navHamburgerButtonDOM = document.querySelector('.nav-hamburger-button');
const navHamburgerListDOM = document.querySelector('.nav-hamburger-list')
const hamburgerMenu = new HamburgerMenu(navHamburgerButtonDOM, navHamburgerListDOM)


const secondNavHamburgerButton = document.querySelectorAll('.nav-hamburger-button')[1];
const secondNavHamburgerListDOM = document.querySelectorAll('.nav-hamburger-list')[1];
const secondHamburgerMenu = new HamburgerMenu(secondNavHamburgerButton, secondNavHamburgerListDOM);