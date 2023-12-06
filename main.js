const modeSwitch = document.getElementById('modeSwitch');

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        // Apply dark mode styles
        document.body.classList.add('dark-mode');
    } else {
        // Remove dark mode styles
        document.body.classList.remove('dark-mode');
    }
    document.addEventListener('DOMContentLoaded', function() {
    const modeSwitch = document.getElementById('modeSwitch');
    const prefersDarkMode = localStorage.getItem('darkMode');

    if (prefersDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        modeSwitch.checked = true;
    }

    modeSwitch.addEventListener('change', function() {
        if (modeSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
});

});
