

    let button = document.querySelector("#click");

    const toggle = () => {
        const body = document.body;
        body.classList.toggle('dark-mode');
        let a = Array.from( document.querySelectorAll('.a')).forEach(e =>  e.classList.toggle('link-color'))
        if(body.classList.contains('dark-mode')) {
            const setStorage = localStorage.setItem('darkMode', 'on')
        } else {
            const unsetStorage = localStorage.setItem('darkMode', 'off')
        }
    }
    const darkMode = () => {
        const body = document.body;
        const setMode =  localStorage.getItem('darkMode');
        if(setMode === 'on') {
            body.classList.add('dark-mode');
            let a = Array.from( document.querySelectorAll('.a')).forEach(e =>  e.classList.add('link-color'))
        } else {
            body.classList.remove('dark-mode');
            let a = Array.from( document.querySelectorAll('.a')).forEach(e =>  e.classList.remove('link-color'))
        }
    }
    document.addEventListener('DOMContentLoaded', darkMode)
    button.addEventListener('click', toggle)