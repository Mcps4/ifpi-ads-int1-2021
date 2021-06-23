class ColecaoArray<T> {
    private array: T[] = [];
    private incremento: number = 0;
    adiciona(item: T){
        this.array.push(item);
    }

    proximo(){
        return this.array[this.incremento += this.incremento];
    }

    atual(){
        return this.array[this.incremento];
    }

    isPrimeiro(){
        if(this.array[this.incremento] = this.array[0]){
            return true;
        } else{
            return false;
        }
    }

    isUltimo(){
        if(this.array[this.incremento] = this.array[this.array.length - 1]){
            return true;
        } else{
            return false;
        }
    }

    irParaPrimeiro(){
        this.incremento = 0;
    }
}

interface Iteravel <T> {
    proximo(): T;
    atual():T;
    isPrimeiro():boolean;
    isUltimo():boolean;
    irParaPrimeiro():T;
}

let array = new ColecaoArray<Number>();
array.adiciona(10);
array.adiciona(20);
console.log(array.proximo())
console.log(array.atual())
console.log(array.isPrimeiro())
console.log(array.isUltimo())
console.log(array.irParaPrimeiro())