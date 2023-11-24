export const signup = (app) => {
    app.post('/users/signup', (requisicao, resposta) => {
        console.log(requisicao.body)

        resposta.send(requisicao.body)
    })
}

