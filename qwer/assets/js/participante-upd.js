
import { getImgRef, imgRef } from "../../../assets/js/cadastro/storage/getImg.js";
import { updateCollection } from "../../../assets/js/firebase/experience-mtb.js";
import { txtFotoCard, txtModalidade, txtModalidadeRacing, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta } from "../../../assets/js/ui.js";
import { getParticipante } from "./participante-get.js";

if (localStorage.getItem('token') == '') {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../../index.html'
} else {
    getParticipante()
    let doc = localStorage.getItem('documentoLogado').replace(/\"|\"|\-/g, '');
    const ID = txtPais.value + doc;
    console.log(ID);
    getImgRef(txtFotoCard)
    formUpdate.addEventListener('submit', async (event) => {
        event.preventDefault();
        debugger
        if (txtModalidade.value == "Racing") {
            if (txtFotoCard.value != '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard: imgRef,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado 1')
                // window.location.href = 'index.html'
            } else if (txtFotoCard.value == '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado 2')
                // window.location.href = 'index.html'
            } else if (txtSenha.value == '' && txtFotoCard.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    fotoCard: imgRef,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado 3')
                // window.location.href = 'index.html'
            } else {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                }
                updateCollection(ID, subscription)
                console.log(subscription)
                alert('Cadastro Atualizado 4')
                // window.location.href = 'index.html'
            }
        }
        else {
            if (txtFotoCard.value != '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard: imgRef,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado 5')
                // window.location.href = 'index.html'
            } else if (txtFotoCard.value == '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado 6')
                // window.location.href = 'index.html'
            } else if (txtSenha.value == '' && txtFotoCard.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    fotoCard: imgRef,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado 7')
                // window.location.href = 'index.html'
            } else {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado 8')
                // window.location.href = 'index.html'
            }
        }

    })
}


