function cadastrar(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;

    if(nome == "" || idade == "" || curso == "") {
        alert("Cadastro Inválido")
    }
    else{
        alert("Cadastro Realizado com Sucesso")
        document.getElementById("resultado").innerHTML = 
        "Nome do(a) aluno(a) é: " + nome
        + "<br> Idade: " + idade + " anos. "
        + "<br> Seu curso é: " + curso;

        document.querySelector(".descricao").textContent = 
        "Informações do aluno";

        document.getElementById("nome").style.display = "none";
        document.getElementById("idade").style.display = "none";
        document.getElementById("curso").style.display = "none";
        document.getElementById("cadastrar").style.display = "none";

        document.getElementById("resultado").style.display = "block"
        document.getElementById("novoAluno").style.display = "block"

    }
}
function novoAluno(){
        document.getElementById("nome").style.display = "block";
        document.getElementById("idade").style.display = "block";
        document.getElementById("curso").style.display = "block";
        document.getElementById("cadastrar").style.display = "block";

        document.getElementById("resultado").style.display = "block";
        document.getElementById("novoAluno").style.display = "block";

        document.querySelector(" .descricao").textContent = "Preencha os dados abaixo";
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("curso").value = "";
}
/*

if (se) = caso seja verdeiro a condição
else (senão) = caso seja falso a condição
- sinal de atribuição de valor

== sinal de comparação entre
dois elementos ou valores.

+ concatenar (juntar informações)

*/