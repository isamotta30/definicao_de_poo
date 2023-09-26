function MudaDesenho(){

    const texto = document.querySelector("h1");
    const texto2 = document.querySelector(".texto1");
    const texto3 = document.querySelector(".texto2");
    const texto4 = document.querySelector(".objetosreais");
    const texto5 = document.querySelector(".objetosabstratos");
    const imagem = document.querySelector("img");
    const imagem2=document.querySelector("#img2");
    const imagem3=document.querySelector("#img3");
    const imagem4=document.querySelector("#img4");
    const imagem5=document.querySelector("#img5");
    const imagem6=document.querySelector("#img6");
    const valor = document.querySelector('#valor').value;
    const b1 = document.querySelector("#b1");
    const b2 = document.querySelector("#b2");
    const b3 = document.querySelector("#b3");
    const b4 = document.querySelector("#b4");
    const b5 = document.querySelector("#b5");
    const b6 = document.querySelector("#b6");

    const test ="";
    
    
    if(valor=="classe" || valor== "Classe"){
        texto.innerHTML = "Classe";
        imagem.setAttribute("src","img/classe2.png");
        imagem.setAttribute("width","300px");

        texto2.innerHTML="Uma classe é um gabarito para a definição de objetos. Através da definição de uma classe, descreve-se que propriedades -- ou atributos -- o objeto terá.Além da especificação de atributos, a definição de uma classe descreve também qual o comportamento de objetos da classe, ou seja, que funcionalidades podem ser aplicadas a objetos da classe.";
        b3.setAttribute("href","img/classe.gif");
        b3.innerHTML="Classe";

        texto3.innerHTML="Classes Abstratas:É um tipo de classe especial que não pode ser instanciada, apenas herdada. Sendo assim, uma classe abstrata não pode ter um objeto criado a partir de sua instanciação. Essas classes são muito importantes quando não queremos criar um objeto a partir de uma classe “geral”, apenas de suas “subclasses”.";
        b4.setAttribute("href","img/classeabstrata.png");
        b4.innerHTML="Classes Abstratas";

        texto4.innerHTML="Classes Internas:As classes internas em Java são mais que classes definidas dentro de outras classes. A definição destas classes implica que existe uma relação estreita entre uma classe interna e a externa que a contém. A definição é tal que as instâncias de classes internas têm acesso implícito às instâncias das classes externas, no contexto das quais foram criadas.Declaramos classes exatamente como fazíamos antes, mas agora ela está dentro do corpo de outra classe.Consequentemente dentro do arquivo .java desta outra classe).As suas regras de acesso são um pouquinho diferentes.O uso mais comum das classes internas é para lidar com eventos, como veremos mais a frente.Classes Internas";
        b5.setAttribute("href","img/classeinterna.png");
        b5.innerHTML="Classes Internas";

        texto5.innerHTML="Classes Anônimas:Classes anônimas te permitem criar um código mais conciso. Elas te permitem declarar e instanciar uma classe ao mesmo tempo. Elas são como classes locais exceto pelo fato de que elas não possuem nome.Enquanto classes locais são classes declaradas, as classes anônimas são expressões o que significa que você define a classe em outra expressão.";
        b6.setAttribute("href","img/classeanonima.png");
        b6.innerHTML="Classe Anônimas";

        document.body.style.backgroundColor = '#6A5ACD';
        document.body.style.color = 'black';

    
    }
    else if(valor=="objeto" || valor=="Objeto"){
        texto.innerHTML = "Objeto";
        imagem.setAttribute("href","img/objeto.gif");
        imagem.setAttribute("width","300px");   
       

      
        texto2.innerHTML="O objeto é, na verdade, uma aglutinação de estados e comportamentos.Conceitualmente falando, um objeto é um elemento que representa alguma entidade, quer seja abstrata quer seja concreta, da área de interesse do problema que está sendo analisado. Portanto, esse paradigma aproxima o mundo real do mundo virtual.";
        b3.setAttribute("href","img/instanciaeobjeto.png");
        b3.innerHTML="Objeto";
       

        texto3.innerHTML="Objetos reais: uma pessoa, um livro, um carro, um avião, um eletrodoméstico, um notebook etc.";
        b4.setAttribute("href","img/objetosinstancia2png.png");
        b4.innerHTML="Objetos reais";

        texto4.innerHTML="Objetos abstratos: as funções de pessoas nos sistemas – cliente, vendedor, representante, gerente, usuário etc.";
        b5.setAttribute("href","img/codigoobjeto.png");
        b5.innerHTML="Objetos abstratos";
        document.body.style.backgroundColor = '	#363636';
        document.body.style.color = 'white';
        texto5.innerHTML="";
        b6.innerHTML="";
      
    

    


       

    }
    
    else{
        texto.innerHTML = "Classe ou Objeto não encontrado😮 =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","300px");
        document.body.style.backgroundColor = 'red';
        document.body.style.color = 'white';
    }
}
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
