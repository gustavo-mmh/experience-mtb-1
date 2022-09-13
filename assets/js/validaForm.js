import { btnCadastro, checkboxTermos, divChallenge, divRacing, formCadastro, required, txtConfirmaSenha, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtSenha } from "./ui.js";

export function VerificaModalidade() {
    if (txtModalidade.value == "Racing") {
        divRacing.style.display = "block";
        divChallenge.style.display = "none";
        txtModalidadeChallenge.removeAttribute("required");
        txtModalidadeRacing.setAttributeNode(required);
    } else {
        divChallenge.style.display = "block";
        divRacing.style.display = "none";
        txtModalidadeRacing.removeAttribute("required");
        txtModalidadeChallenge.setAttributeNode(required);
    }
}

export function validatePassword() {
    if (txtSenha.value != txtConfirmaSenha.value) {
        formCadastro.classList.add('was-validated')
        txtConfirmaSenha.setCustomValidity("Senhas diferentes!");

    } else {
        txtConfirmaSenha.setCustomValidity('');
    }
}
export function bloqueio(divElement, element) {
    if (divElement.style.display == "none") {
        divElement.style.display = "block";
        element.setAttributeNode(required);
    } else {
        divElement.style.display = "none";
        element.removeAttribute("required");
        element.value = '';
    }
}
export function bloqueioSenha(divElement, element, element2) {
    if (divElement.style.display == "none") {
        divElement.style.display = "block";
        element.setAttributeNode(required);
        element2.setAttributeNode(required);
    } else {
        divElement.style.display = "none";
        element.removeAttribute("required");
        element2.removeAttribute("required");
        element.value = '';
        element2.value = '';
    }
}

export function bloqueioCadastro() {
    if (checkboxTermos.checked) {
        btnCadastro.disabled = false;
    } else {
        btnCadastro.disabled = true;
        // btnCadastro.classList.add('disabled');
    }
}
