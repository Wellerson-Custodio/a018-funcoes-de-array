const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

 const funcao1 = (objeto) =>{
   return objeto
   
 }
console.log(objeto)


 const funcao2 = (objeto) =>{
    
     let textCorrido = `Nome ${objeto.nome}, Profissao ${objeto.profissao}, 
     Username${objeto.username}, Senha${objeto.senha}`
return funcao2              
 }
 console.log(funcao2(funcao1(objeto)))

