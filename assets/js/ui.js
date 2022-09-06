import { AuthErrorCodes } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
export const txtPais = document.querySelector('#txtPais');
export const txtNome = document.querySelector('#txtNome');
export const txtDocumento = document.querySelector('#txtDocumento');
export const txtDataNascimento = document.querySelector('#txtDataNascimento');
export const txtEmail = document.querySelector('#txtEmail');
export const txtCidade = document.querySelector('#txtCidade');
export const txtWhatsApp = document.querySelector('#txtWhatsApp');
export const txtTamanhoCamiseta = document.querySelector('#txtTamanhoCamiseta');
export const txtModalidade = document.querySelector('#txtModalidade');
export const txtModalidadeRacing = document.querySelector('#txtModalidadeRacing');
export const txtModalidadeChallenge = document.querySelector('#txtModalidadeChallenge');
export const txtNomeEquipe = document.querySelector('#txtNomeEquipe');
export const txtSenha = document.querySelector('#txtSenha');
export const txtFotoCard = document.querySelector('#txtFotoCard');
export const formCadastro = document.querySelector('#formCadastro');
export const btnCadastro = document.querySelector('#btnCadastrar');
export const txtConfirmaSenha = document.querySelector('#txtConfirmaSenha');
export const loginDocumento = document.querySelector('#loginDocumento');
export const loginPassword = document.querySelector('#loginPassword');
export const formLogin = document.querySelector('#formLogin');

export const btnLogout = document.querySelector('#btnLogout')
export const btnLogin = document.querySelector('#btnLogin')

export const divAuthState = document.querySelector('#divAuthState')
export const statusLogin = document.querySelector('#statusLogin')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

export const showLoginForm = () => {
    login.style.display = 'block'
    app.style.display = 'none'
}

export const showApp = () => {
    login.style.display = 'none'
    app.style.display = 'block'
}

export const hideLoginError = () => {
    divLoginError.style.display = 'none'
    lblLoginErrorMessage.innerHTML = ''
}

export const showLoginError = (error) => {
    divLoginError.style.display = 'block'
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`
    }
    else {
        lblLoginErrorMessage.innerHTML = `Error: ${error.message}`
    }
}

export const showLoginState = (user) => {
    lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
}
export function limparDados() {
    txtNome.value = ''
    txtDocumento.value = ''
    txtDataNascimento.value = ''
    txtEmail.value = ''
    txtCidade.value = ''
    txtWhatsApp.value = ''
    txtNomeEquipe.value = ''
    txtSenha.value = ''
    txtConfirmaSenha.value = ''
    txtFotoCard.value = ''
    formCadastro.classList.remove('was-validated')
}