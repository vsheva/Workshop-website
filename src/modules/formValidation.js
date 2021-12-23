

const formValidation = () => {



    let validFormName = () => {
        let formName = document.querySelectorAll("input[name='fio']")
        formName.forEach(element => {
            element.addEventListener("input", (e) => {
                let name = e.target
                name.value = name.value.replace(/[^а-яa-z]/gi, '');

                if (name.value.length < 2) {
                    name.setCustomValidity("Введите минимум 2 буквы");
                } else {
                    name.setCustomValidity("");
                }
            })
        })
    }
    validFormName();




    let validFormPhone = () => {
        let formPhone = document.querySelectorAll('input[name="phone"]')
        formPhone.forEach(element => {
            element.addEventListener("input", (e) => {
                let phone = e.target
                phone.value = phone.value.replace(/[^\d\+]/gi, '');
                if (phone.value.length < 5) {
                    phone.setCustomValidity("Введите не менее 5 цифр номера");
                } else {
                    phone.setCustomValidity("");
                }
            })
        })
    }
    validFormPhone()

}

export default formValidation;