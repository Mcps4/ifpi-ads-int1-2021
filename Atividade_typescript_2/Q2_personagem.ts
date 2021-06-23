export class Personagem {
    constructor(public nome: string, public id: number, public energia: number){
        this.nome = nome;
        this.id = id;
        this.energia = energia;
    }

    estaVivo() {
        if (this.energia == 0){
            return false;
        } else{
            return true;
        }
    }

    defenderAtaque(dano:number) {
        if(this.energia - dano < 0){
            this.energia = 0;
        } else{
            this.energia = this.energia - dano;
        }
    }


}

export class Soldado extends Personagem {
    constructor(public nome: string, public id: number, public energia: number, public forca_ataque: number){
        super(nome,id,energia)
        this.forca_ataque = forca_ataque;
    }

    atacar(p:Personagem){
        p.defenderAtaque(this.forca_ataque)
    }

    defenderAtaque(dano:number){
        dano = dano / 2;
        if(this.energia - dano < 0){
            this.energia = 0;
        } else{
            this.energia = this.energia - dano;
        }


    }
}

export class Cavaleiro extends Soldado {
    constructor(public nome: string, public id:number, public energia:number,public forca_ataque:number,){
        super(nome,id,energia,forca_ataque)
    }

    atacar(p:Personagem){
        let dano = this.forca_ataque * 2;
        p.defenderAtaque(dano);
    }

    defenderAtaque(dano:number){
        dano = dano / 3;
        if(this.energia - dano < 0){
            this.energia;
        } else{
            this.energia = this.energia - dano;
        }
    }

}

