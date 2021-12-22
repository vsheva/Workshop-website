

const formValidation = () => {



    let validFormText = () => {
        const formText = document.querySelector("input[name='user_message']")
        formText.addEventListener("input", (e) => {
            let text = e.target
            text.value = text.value.replace(/[^а-я\d\s\,\.\!\-\:\;\"\?]/gi, '');
            if (text.value.length < 2) {
                text.setCustomValidity("Введите минимум 2 буквы в поле");
            } else {
                text.setCustomValidity("");
            }
        })
    }
    validFormText();


    let validFormName = () => {
        let formName = document.querySelectorAll("input[name='user_name']")
        formName.forEach(element => {
            element.addEventListener("input", (e) => {
                let name = e.target
                name.value = name.value.replace(/[^а-я\s]/gi, '');

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
        let formPhone = document.querySelectorAll('input[name="user_phone"]')
        formPhone.forEach(element => {
            element.addEventListener("input", (e) => {
                let phone = e.target
                phone.value = phone.value.replace(/[^\d\(\)\+\-]/gi, '');
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