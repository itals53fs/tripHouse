const dirname = './src/data'
const fs = require('fs')

function save(arq, payload) {
    const content = read(arq)
    content.push(payload)
    write(arq, content);
}

function getAll(arq) {
    const content = read(arq)
    return content;
}

function getProdutos() {
    return produtos;
}
function deleteProduto(id) {
    const produto = produtos.infor[id]
    delete produtos.infor[id];
    return produto;
}

const read = (arq) => {
    const content = fs.readFileSync(`${dirname}/${arq}.json`, 'utf8');
    return JSON.parse(content);
}

const write = (arq, payload) => {
    const content = JSON.stringify(payload, null, 2);
    fs.writeFileSync(`${dirname}/${arq}.json`, content, 'utf8')
}

const search = (arq, id) => {
    const content = getAll(arq)
    const index = content.findIndex(element => element.id === id)
    return index
}

const alterar = (arq, payload) => {
    const index = search(arq, payload.id)
    if (index > -1) {
        const content = read(arq)
        content[index] = payload
        write(arq, content)
        return "alterado com sucesso"
    }
    return "não encontardo"

}

const remove = (arq, id) => {
    const index = search(arq, id)
    if (index > -1) {
        const content = read(arq)
        content.splice(index, 1)
        write(arq, content)
        return "deletado com sucesso"
    }
    return "item não encontrado"
}
const confirme = (arq, payload) => {
    const content = getAll(arq)
    const user = content.find(element => element.login == payload.email)
    if (user) {
        if (user.senha == payload.password) {
            return user
        }
    }
    return 'usuário ou senha invlido'
}
module.exports = {

    getAll,
    save,
    read,
    remove,
    alterar,
    confirme,
}