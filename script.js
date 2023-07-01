function carregaDicionario() {
    var descricao = {
        pet01: {
            nome: "Phoebe",
            imagem: "img/phoebe.png",
            descricao: "Oi, eu me chamo Phoebe e tenho 2 anos. Fui encontrada recentemente e estou a procura de um lar acolhedor e divertido, com humanos que tenham paciência, cuidem de mim e brinquem bastante comigo. ",
            citacao: "Sou linda e distribuo muitos lambeijos, quer ser meu parceiro(a)?",
        },
        pet02: {
            nome: "Wandinha",
            imagem: "img/wandinha.png",
            descricao: "Posso me chamar Wandinha, mas não tenho nada de rabujenta e antissocial, pelo contrário gosto muito de socializar e me divertir por ai. Estou a procura de um larzinho para chamar de meu. :)",
            citacao: "Sou pretinha e fofinha, quer ser minha amiguinha?. ",
        },
        pet03: {
            nome: "Daenerys",
            imagem: "img/daenerys.png",
            descricao: "Apesar de ser a primeira do meu nome, nascida na tormenta e guerreira gloriosa, estou em busca de uma casinha quentinha com humanos amorosos que cuidem de mim e tenham muita paciência com o meu ronronar. ",
            citacao: "Ainda procuro um lar cheio de amor para defender e zelar. Quem sabe você não está aqui para me salvar?",
        },
        pet04: {
            nome: "Salem",
            imagem: "img/salem.png",
            descricao: "Prazer, Salem. Sou o melhor gato que você poderia ter como companhia, zelarei pelo seu lar dia e noite, você não precisará se preocupar pois o seu lar eu iriei guardar.",
            citacao: "Posso até conhecer umas bruxarias, mas a minha fantasia é te ter um dia... humano querido.",
        },
        pet05: {
            nome: "Pumba",
            imagem: "img/pumba.png",
            descricao: "Hakuna Matata!!! Eu sou o Pumba, tenho 4 anos e busco um lar alegre e amoroso. Ficarei muito feliz em fazer parte da sua família, me adota???",
            citacao: "Os seus problemas você deve esquecer, isso é viver...",
        },
        pet06: {
            nome: "Matilda",
            imagem: "img/matilda.png",
            descricao: "Como a Matilda do filme, eu fui negligenciada... mas hoje estou bem, feliz e forte. Estou a procura de uma casa linda, leve, com papais que me deem muito carinho e amor. Você me deixa fazer parte da sua família?",
            citacao: "Matilda descobriu, para sua grande surpresa, que a vida era divertida e ela decidiu tirar o máximo de proveito.",
        },
    };

    var content = document.getElementById("content");

    for (var bio in descricao) {
        content.innerHTML +=
         '<div class="card">' + 
         '<img src="' + 
         descricao [bio].imagem + 
         '"/>' + 
         "<details> <summary>" + 
         descricao [bio].nome +
         "</summary>" +
         "<p>" +
         descricao[bio].descricao +
         "</p>" +  
         "<blockquote> <q>" +
         descricao[bio].citacao +
         "</q> </blockquote>" +
         "</details> </div>";
    }
}

carregaDicionario();