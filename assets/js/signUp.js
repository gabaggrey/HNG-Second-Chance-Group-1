const signUp = document.getElementById('signUp-btn')
const signUp_inp = document.querySelectorAll('input')
const message = document.querySelector('.message')
const username = document.getElementById('Uname')
const password = document.querySelector('#inPass')
const confirm_password = document.querySelector('#cnfPass')
const passErr = document.querySelector('.passMessage')

signUp.addEventListener('click', e => {
    e.preventDefault()
    for (let i = 0; i < signUp_inp.length; i++) {
        if(signUp_inp[i].value < 5){
            message.style.display = 'block'
        }
        else{
            message.style.display = 'none'
        }
    }
    if (password.value !== '' && confirm_password.value !== '' && password.value !== confirm_password.value) {
        passErr.style.display = 'block'
    }
    else{
        passErr.style.display = 'none'
    }

})
