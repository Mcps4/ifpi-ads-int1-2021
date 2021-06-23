import {Cavaleiro,Soldado,Personagem} from './Q2_personagem'
import {Jogo} from './Q2_jogo'

let gan = new Soldado("Gandolf",1,100,20);
let esc = new Cavaleiro("Escanor",2,100,50);
let mel = new Soldado("Meliodas", 3,100,55);
let hawk = new Personagem("Hawk",4,100);

let jogo = new Jogo();
jogo.incluir(gan);
jogo.incluir(esc);
jogo.incluir(mel);
jogo.incluir(hawk);

gan.atacar(esc);
avaliar_batalha();
mel.atacar(esc);
avaliar_batalha();
gan.atacar(mel);
avaliar_batalha();