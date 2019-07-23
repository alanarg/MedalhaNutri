//versao 21

let arq = [
"/",
"css/medalha.css",
"css/largemedalha.css",
"css/smallmedalha.css",
"css/mediumedalha.css",
"index.html",
"ingerir.html",

]

self.addEventListener("install", function(){
    console.log("Instalou")
    caches.open("ceep-arquivos").then(cache => {
        cache.addAll(arq)
      })
})


self.addEventListener("fetch", function(event){

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })

    event.respondWith(promiseResposta)

})
