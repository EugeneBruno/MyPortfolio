document.addEventListener('DOMContentLoaded', ()=>{
    const hambuger = document.querySelector('.hambuger')
    const navlinks = document.querySelector('.nav-links')

    hambuger.addEventListener('click',()=>{
        navlinks.classList.toggle('active')
    })
    navlinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A'){
            navlinks.classList.remove('active')
        }
    })
})

