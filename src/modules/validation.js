const validation = () => {
    document.body.addEventListener('click', event => {
        if (!event.target.closest('form')) {
            return
        }
        const form = event.target.closest('form'),
            elementsForm = [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button' && item.type !== 'hidden'),
            pattern = {
                fio: /^[а-яё]{2,}[\sа-яё]*$/i,
                phone: /^\+?\d{11}$/
            }

        // проверка соответствия шаблону:
        const isValid = elem => {
            if (elem.value.trim() === '') {
                return false;
            } else {
                return pattern[elem.name].test(elem.value);
            }
        };

        // подсветка невалидного поля :
        const showError = elem => {
            elem.classList.remove('success');
            elem.classList.add('error');
            if (elem.nextElementSibling && elem.nextElementSibling.matches('.error-message')) {
                return;
            }
            const errorDiv = document.createElement('div')
            errorDiv.textContent = `Введите корректные данные`
            errorDiv.classList.add('error-message')
            elem.insertAdjacentElement('afterend', errorDiv);
        }

        // подсветка валидного поля:
        const showSuccess = elem => {
            elem.classList.remove('error');
            elem.classList.add('success');
            if (elem.nextElementSibling && elem.nextElementSibling.matches('.error-message')) {
                elem.nextElementSibling.remove();
            }
        }

        // проверка и подсветка поля:
        const checkIt = event => {
            const target = event.target;

            if (isValid(target)) {
                showSuccess(target);
            } else {
                showError(target);
            }
        }

        // проверка поля при изменении:
        elementsForm.forEach(elem => elem.addEventListener('change', checkIt));

        // игнорировать нажатие кнопки "отправить", если поля невалидны:
        form.addEventListener('submit', event => {
            let successed = true;
            elementsForm.forEach(elem => {
                if (!elem.classList.contains('success')) {
                    return successed = false;
                }
            });
            if (!successed) {
                event.preventDefault();
            }
        })
    })
}
export default validation;