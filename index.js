//01- Crie um array que receba 5 itens e exiba no console.

const produtos = ["celular" , "PS5" , "PC" , "fone" , "Relógio" ]

   console.log(produtos)
//ou

    produtos.forEach( produto => console.log(produto))

//02- Utilize um método para adicionar um nome ao inicio do array.

const alunos = ["zoro" , "Luffy" , "sanji" , "midoriya" ,  "itadori" ]

alunos [5] = "Gojo"
alunos.push("madruguinha")
alunos.unshift("pedro")

console.log(alunos)




   console.log("---------------------------------------------------------")

    

//03- Utilize um método para remover o último nome do array.

const newAlunos = ["Nami" , "Robin" ,  "Kirito" , "pikachu" ,  "Chopper"]

  delete newAlunos [4]

newAlunos.sort()

  console.log(newAlunos)


  console.log("---------------------------------------------------------")


//04- Utilize um método para adicionar dois nomes ao fim do array.

const carro = ["fusca" , "BMW" , "Volvo" , "Ford K" , "Fiat"]

carro.splice(5 ,6 , "camaro" , "Ferrari")

console.log(carro)


console.log("---------------------------------------------------------")
//05- Utilize um método para remover o primeiro nome do array.

const animais = ["cavalo" , "gato" , "cachorro" ]
  
animais.shift(0)

console.log(animais)

console.log("---------------------------------------------------------")


//06 Utilize um método para organizar em ordem crescente o seguinte array:


 const numbers = [7,5,6,3,8,9,2,1,4]

 numbers.sort()

 console.log(numbers)

 console.log("---------------------------------------------------------")


//07 Crie um objeto que receba ao menos três propriedades sobre você.
//08 Adicione uma nova propriedade sem alterar seu objeto inicial.

//09 Remova uma propriedade desse objeto.

//10-Mostre no console todas as propriedades desse objeto
let eu3 = {

        nome: 'Natan' ,  
        idade: 20 , 
         estilo: 'Não vivo sem música' ,
        time:'sofrendo pelo Grenn bay Packers e Corinthians' ,
        hobbies: 'Estudar , codar , ler , assistir série e filmes e jogar'
      
  
}

delete eu3.time


console.log(eu3)



console.log("---------------------------------------------------------")



//11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

//12- Mostre no console o nome de um amigo de cada lista.


const cadastro = [ { nome:"Luffy", idade: 18, telefone:"18 987547522", },
 {
 amigo1: "zoro" , idade:20 , telefone:"18 99872563", cabelo:"verde" ,  } ,

 { nome: "gojo", idade: 22, telefone:"19 8752322123", cabelo: "Branco" } ,
{ amigo2:"itadori" , idade:18, telefone:"11 994168055", cabelo:"vermelho" } ,             
 
 { nome:"Gon", idade: 16, telefone:"18 757167852 ", cabelo: "preto"    } ,
 {amigo3: "Killua" , idade:17 , telefone:"13 9978425" , cabelo:"Branco"}

] 

console.log(cadastro[1])
console.log(cadastro[3])
console.log(cadastro[5])




  






