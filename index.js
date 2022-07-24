document.addEventListener( "DOMContentLoaded" , () => {


    // for menu button
        const toggleButton = document.querySelector('.toggle-button')
        toggleButton.addEventListener('click' ,() => {
            
            const navbar = document.querySelector('.navbar')
            console.log(navbar.classList.toggle('toggle-nav'))
            console.log(navbar.classList)
            
        })

} )
       
 