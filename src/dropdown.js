export default class DropdownMenu {
    constructor(navHamburgerButtonDOM, navHamburgerListDOM) {
        this.navHamburgerDOM = navHamburgerButtonDOM;
        this.navHamburgerListDOM = navHamburgerListDOM;

        this.removeDefaultListStyling();
        this.dropdownToggle();
        this.attachEventListener();
    }

    removeDefaultListStyling = () => {
        this.navHamburgerListDOM.style.listStyleType = 'none'
        this.navHamburgerListDOM.style.margin = '0';
        this.navHamburgerListDOM.style.padding = '0';
    }

    attachEventListener = () => {
        this.navHamburgerDOM.addEventListener('click', this.dropdownToggle);
    }

    dropdownToggle = () => {
        if (this.navHamburgerListDOM.style.display !== 'none') {
            this.navHamburgerListDOM.style.display = 'none';
            return;
        } 
    
        this.navHamburgerListDOM.style.display = '';
        return;
    }
}