document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const sideBar = document.getElementById('sideBar');
    const sideBarToggle = document.getElementById('sideBarToggle');
    const sideBarCloseBtn = document.getElementById('sideBarCloseBtn'); 
    const overlay = document.getElementById('overlay');
    const menuToggle = document.getElementById('menuToggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");  
    const savedTheme = localStorage.getItem('theme');


    if (savedTheme) {           
        body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
        body.classList.toggle('dark-mode', prefersDarkScheme.matches);
    } 
    updateDarkModeIcon();


    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        updateDarkModeIcon();
    });

    function updateDarkModeIcon() {
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️'; 
        } else {
            darkModeToggle.textContent = '🌙'; 
        }
    }

    // 메뉴 토글 버튼 이벤트
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isOpen = sideBar.classList.contains('open');
            
            if (isOpen) {
                // 사이드바 닫기
                sideBar.classList.remove('open');
                overlay.classList.remove('active');
                menuToggle.classList.remove('active');
            } else {
                // 사이드바 열기
                sideBar.classList.add('open');
                overlay.classList.add('active');
                menuToggle.classList.add('active');
            }
        });
    }

    function closeSideBar() {
        sideBar.classList.remove('open');
        overlay.classList.remove('active');
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
    }

    sideBarCloseBtn.addEventListener('click', closeSideBar);
    overlay.addEventListener('click', closeSideBar);

 
    const contactToggle = document.getElementById('contactToggle');
    const contactSubmenu = document.getElementById('contactSubmenu');

    if (contactToggle && contactSubmenu) {
        contactToggle.addEventListener('click', (e) => {
            e.preventDefault();
            contactToggle.classList.toggle('active');
            contactSubmenu.classList.toggle('show');
        });
    }
});    