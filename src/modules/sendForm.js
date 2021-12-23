
const sendForm = (formId) => {
    const form = document.getElementById(formId);
    const errorText = 'Что-то пошло не так...';
    //const loadText = 'Загрузка...'  //spinner
    let img = document.createElement("img");
    img.src = "images/form/spinner.svg";

    const successText = 'Спасибо! Мы скоро с Вами свяжемся!';
    const status = document.createElement('div');

    status.style.cssText = "font-size: 2rem; color: #fff";


    const validate = (list) => {
        let success = true

        return success
    }


    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }


    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const formData = new FormData(form)
        const formBody = {}
        const formElements = form.querySelectorAll("input")


        const removeMessage = () => {
            setTimeout(() => status.remove(), 2000);
        };


        status.innerHTML = `<img src="images/form/spinner.svg" alt="">`
        form.append(status)

        formData.forEach((val, key) => {
            formBody[key] = val
        })


        //
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    status.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                    //
                    //setTimeout(() => {
                        //document.querySelector(".popup").style.display = "none";
                    //}, 3000);

                    //unBlockBody()
                    removeMessage();

                    //
                })
                .catch(err => {
                    status.textContent = errorText
                    removeMessage();
                })
        }
    })

}

export default sendForm;





