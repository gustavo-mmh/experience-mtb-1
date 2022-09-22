export const required = document.createAttribute("required");
export const formComprovante = document.querySelector('#formComprovante');
export const formCadastro = document.querySelector('#formCadastro');
export const formUpdate = document.querySelector('#formUpdate');
export const formLogin = document.querySelector('#formLogin');
export const txtNome = document.querySelector('#txtNome');
export const txtComprovante = document.querySelector('#txtComprovante');
export const txtDocumento = document.querySelector('#txtDocumento');
export const txtEmail = document.querySelector('#txtEmail');
export const txtWhatsApp = document.querySelector('#txtWhatsApp');
export const txtDataNascimento = document.querySelector('#txtDataNascimento');
export const txtPais = document.querySelector('#txtPais');
export const txtCidade = document.querySelector('#txtCidade');
export const txtModalidade = document.querySelector('#txtModalidade');
export const txtModalidadeRacing = document.querySelector('#txtModalidadeRacing');
export const txtModalidadeChallenge = document.querySelector('#txtModalidadeChallenge');
export const txtNomeEquipe = document.querySelector('#txtNomeEquipe');
export const txtTamanhoCamiseta = document.querySelector('#txtTamanhoCamiseta');
export const txtSenha = document.querySelector('#txtSenha');
export const txtFotoCard = document.querySelector('#txtFotoCard');
export const txtRefFotoCard = document.querySelector('#txtRefFotoCard');
export const txtConfirmaSenha = document.querySelector('#txtConfirmaSenha');
export const imgThumbnail = document.querySelector('#imgThumbnail');
export const loginDocumento = document.querySelector('#loginDocumento');
export const loginPais = document.querySelector('#loginPais');
export const loginPassword = document.querySelector('#loginPassword');
export const cardNome = document.querySelector('#cardNome');
export const cardDocumento = document.querySelector('#cardDocumento');
export const cardEmail = document.querySelector('#cardEmail');
export const cardWhatsApp = document.querySelector('#cardWhatsApp');
export const cardDataNascimento = document.querySelector('#cardDataNascimento');
export const cardPais = document.querySelector('#cardPais');
export const cardCidade = document.querySelector('#cardCidade');
export const cardModalidade = document.querySelector('#cardModalidade');
export const cardCategoria = document.querySelector('#cardCategoria');
export const cardNomeEquipe = document.querySelector('#cardNomeEquipe');
export const cardTamanhoCamiseta = document.querySelector('#cardTamanhoCamiseta');
export const cardFoto = document.querySelector('#cardFoto');
export const cardStatus = document.querySelector('#cardStatus');


export const checkboxSenha = document.querySelector('#checkboxSenha');
export const checkboxTermos = document.querySelector('#checkboxTermos');
export const checkboxFoto = document.querySelector('#checkboxFoto');

export const btnCadastro = document.querySelector('#btnCadastrar');
export const btnLogin = document.querySelector('#btnLogin')
export const btnLogout = document.querySelector('#btnLogout')

export const divComprovante = document.querySelector('#comprovante');
export const divFoto = document.querySelector('#divFoto');
export const divSenha = document.querySelector('#Senha');
export const divRacing = document.querySelector('#racing');
export const divChallenge = document.querySelector('#challenge');
export const divAuthState = document.querySelector('#divAuthState')
export const statusLogin = document.querySelector('#statusLogin')

export const divPagamento = document.querySelector('#pagamento')
export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

export const errorHandler = () => {
    // btnLogin.classList.remove('loading');
    // btnLogin.classList.remove('success');
    // btnLogin.classList.add('error');
    statusLogin.innerHTML = "Error :(";
}
export const successHandler = () => {
    // btnLogin.classList.remove('loading');
    // btnLogin.classList.remove('error');
    // btnLogin.classList.add('success');
    statusLogin.innerHTML = "SUUUUUChEEESSOO";
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
    checkboxTermos.checked = false
    formCadastro.classList.remove('was-validated')
}