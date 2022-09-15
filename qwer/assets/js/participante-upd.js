import { file, getImgRef, imgRef, metadata } from "../../../assets/js/cadastro/storage/getImg.js";
import { deleteImage, updateCollection, uploadImagem } from "../../../assets/js/firebase/experience-mtb.js";
import { txtFotoCard, txtModalidade, txtModalidadeRacing, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta } from "../../../assets/js/ui.js";
import { img } from "./participante-get.js";
let doc = localStorage.getItem('documentoLogado').replace(/\"|\"|\-/g, '');
const ID = txtPais.value + doc;
console.log(ID);
export function updateParticipante() {
    getImgRef(txtFotoCard)
    formUpdate.addEventListener('submit', async (event) => {
        event.preventDefault();
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
                uploadImagem(file, imgRef, metadata)
                deleteImage(img)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                // window.location.reload()
            } else if (txtFotoCard.value == '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                window.location.reload()
            } else if (txtSenha.value == '' && txtFotoCard.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    fotoCard: imgRef,
                }
                uploadImagem(file, imgRef, metadata)
                deleteImage(img)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                // window.location.reload()
            } else {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                }
                updateCollection(ID, subscription)
                console.log(subscription)
                alert('Cadastro Atualizado com sucesso!')
                window.location.reload()
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
                uploadImagem(file, imgRef, metadata)
                deleteImage(img)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                window.location.reload()
            } else if (txtFotoCard.value == '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                window.location.reload()
            } else if (txtSenha.value == '' && txtFotoCard.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    fotoCard: imgRef,
                }
                uploadImagem(file, imgRef, metadata)
                deleteImage(img)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                window.location.reload()
            } else {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                window.location.reload()
            }
        }

    })
}