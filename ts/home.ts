let pageHome = new class {

    sideNavElement;
    sideNav;

    constructor() {
        this.sideNavElement = document.querySelector('.sidenav');
        this.sideNav = M.Sidenav.init(this.sideNavElement, {});
        let menuMobile:HTMLLinkElement = document.getElementById('nav-mobile');
        menuMobile.addEventListener('click', function(event: Event) {
            event.preventDefault();
            pageHome.sideNav.open();
        });
    }
}
