document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const sideBar = document.getElementById('sideBar');
    const sideBarToggle = document.getElementById('sideBarToggle');
    const sideBarCloseBtn = document.getElementById('sideBarCloseBtn'); 
    const overlay = document.getElementById('overlay');
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

    sideBarToggle.addEventListener('click', () => {
        sideBar.classList.add('open');
        overlay.classList.add('active');
    });

    sideBarCloseBtn.addEventListener('click', () => {
        sideBar.classList.remove('open');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sideBar.classList.remove('open');
        overlay.classList.remove('active');
    });
});    