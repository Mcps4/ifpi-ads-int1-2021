import {Cavaleiro,Soldado,Personagem} from './Q2_personagem'
export class Jogo {
    personagens: Array<Personagem> = []
    constructor(){
        this.personagens = []
    }

    incluir(personagem:Personagem){
        let incremento = 0;
        for(let i = 0; i < this.personagens.length; i++){
            if(personagem.id == this.personagens[i].id){
                break;
            } else{
                incremento ++;
            }
        }

        if(incremento != this.personagens.length){
            console.log("O Personagem já foi incluido no jogo!")
        } else{
            this.personagens.push(personagem);
            console.log("Personagem incluido no jogo!")
        } 
    }

    consultar(id:number){
        for(let i = 0; i < this.personagens.length ; i++){
            if(id != this.personagens[i].id){
                console.log("O personagem com id digitado não foi cadastrado!");
            } else{
                return this.personagens[i];
            }
        }
    }

    atacar(id_1: number, id_2: number){
        let perso_id_1 = this.consultar(id_1);
        let perso_id_2 = this.consultar(id_2);
        if(id_1 && id_2 == null){
            console.log("ERROR o personagem não pode se atacar!")
        } else{
            if(perso_id_1 instanceof Soldado || perso_id_1 instanceof Cavaleiro){
                perso_id_1.atacar(perso_id_2);
            } else{
                console.log("ERROR o personagem não possui uma classe! não será possivel realizar o ataque")
            }
        }
    }

    avaliar_batalha(){
        for( let i = 0; i < this.personagens.length ; i++){
            console.log("id do personagem: ", this.personagens[i].id);
            console.log("nome do personagem: ", this.personagens[i].nome);
            console.log("quantidade de energia do personagem: ", this.personagens[i].energia);
            console.log("O personagem está vivo?(true ou false): ", this.personagens[i].estaVivo());
        }
    }
}