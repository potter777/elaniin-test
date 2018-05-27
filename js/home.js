"use strict";
let pageHome = new class {
    constructor() {
        this.sideNavElement = document.querySelector('.sidenav');
        this.sideNav = M.Sidenav.init(this.sideNavElement, {});
        let menuMobile = document.getElementById('nav-mobile');
        menuMobile.addEventListener('click', function (event) {
            event.preventDefault();
            pageHome.sideNav.open();
        });
    }
};
//# sourceMappingURL=home.js.map