function escopo() {
    const email = document.querySelector('#email');
    const button = document.querySelector('button');
    const formMain = document.querySelector('#form-main');
    const sucessMain = document.querySelector('#success-main');
    const sucessEmail = document.querySelector("#success-email");
    const form = document.querySelector('form');

    function verifyEmail(value) {
        if (value.includes('@')) {
            return true;
        }else{
            return false;
        }
    };

    button.addEventListener('click',e=>{

        e.preventDefault();
        const msg = document.createElement('label');
        msg.classList.add('error-msg');
        msg.innerText = "Valid email required";
        if(verifyEmail(email.value)){
            formMain.style.display = "none";
            sucessMain.style.display = "flex";
            sucessEmail.innerHTML = email.value;
        }else{
            email.style.background = 'hsl(4, 100%, 67%)';
            form.innerHTML.includes('Valid')? null:form.insertBefore(msg,email);
        };
    })
}
escopo()
