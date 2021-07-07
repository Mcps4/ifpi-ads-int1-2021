export class calcular_comissao_vendas{
    constructor(private nome_func: string, private total_vendas: number){
        this.nome_func = nome_func;
        this.total_vendas = total_vendas;

    }

    valor_comissao(): any{
            let comissao = 0;
            if(this.total_vendas <= 5000){
                comissao = 0;
                console.log('não teve nenhum valor de comissao');
            }
            else if(this.total_vendas <= 10000){
                comissao = (this.total_vendas - 5000) * 0.05;
                console.log(`O valor da comissao na segunda faixa foi de ${comissao} reais`);
            }
            else if(this.total_vendas <= 30000){
                comissao = comissao + (this.total_vendas - 10000) * 0.1;
                console.log(`O valor da comissao na terceira faixa foi de ${comissao} reais`);
            } else{
                comissao = this.total_vendas * 0.2;
                console.log(`O valor da comissao na quarta faixa foi de ${comissao} reais`);
            }
    }

    salario_funcinario(): any{
        let salario: number
        let valor_comissao: number = this.valor_comissao()
        
        salario = 1100 + valor_comissao;
        return salario;
    }
}