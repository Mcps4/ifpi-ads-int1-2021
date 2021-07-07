export class calcular_classificar_dados{
    constructor(private media_casos_hj: number, private media_casos_14: number){
        this.media_casos_hj = media_casos_hj;
        this.media_casos_14 = media_casos_14;
    }

    calculo_variacao(media_casos_hj: number,media_casos_14: number): number{
        let calculo_var = ((this.media_casos_hj - this.media_casos_14)/this.media_casos_14)*100;
        return calculo_var;
    }

    classificacao_string(): any{
        if(this.calculo_variacao(this.media_casos_hj,this.media_casos_14) < 15 && this.calculo_variacao(this.media_casos_hj, this.media_casos_14) > 8){
            console.log('Em Estabilidade')
        }
        else if(this.calculo_variacao(this.media_casos_hj, this.media_casos_14) < 8){
            console.log('Em Queda')
        } else{
            console.log('Em Alta')
        }
    }
}

    