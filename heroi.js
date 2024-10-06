class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para atacar, com base no tipo do herói
  atacar() {
    let ataque;

    // Definindo o ataque conforme o tipo do herói
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "não tem ataque definido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias dos heróis
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Shaolin", 25, "monge");
const heroi4 = new Heroi("Hattori", 28, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
