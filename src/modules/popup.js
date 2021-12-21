const togglePopup = () => {
    const openPopup = (e) => {
        if (!e.target.matches('.fancyboxModal')) {
            return;
        }
        e.preventDefault()
        const modalBtn = e.target,
            popupContent = document.querySelector(modalBtn.getAttribute('href')),
            popup = popupContent.closest('.modal--opened'),
            overlay = document.querySelector('.overlay')

        popup.style.display = 'block'
        overlay.style.display = 'block'
        popupContent.style.display = 'block'

        const closePopup = (e) => {
            if (!e.target.matches('.modal__close, .overlay')) {
                return;
            }
            popup.style.display = 'none'
            overlay.style.display = 'none'
            popupContent.style.display = 'none'
            document.body.removeEventListener('click', closePopup)
        };

        document.body.addEventListener('click', closePopup)
    };

    document.body.addEventListener('click', openPopup)
}


export default togglePopup




