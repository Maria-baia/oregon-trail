class Traveler {
    constructor(name){
        let traveler = this
        traveler.name = name
        traveler.food = 1
        traveler.isHealthy = true
    }
    hunt(){
        this.food += 2
    }
    eat(){
        if(this.food > 0){
            this.food --
        }else{
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.list = []
    }
    getAvailableSeatCount(){
        return this.capacity - this.list.length
    }
    join(name){
        if(this.getAvailableSeatCount() > 0){
            this.list.push(name)
        }
        return this.list
    }
    shouldQuarantine(){
        for(let i=0; i<this.list.length; i++){
            if(this.list[i].isHealthy === false){
                return true
            }
        }
        return false
    }
    totalFood(){
        let result = 0
        for(let i=0; i<this.list.length; i++){
            result += this.list[i].food
        } 
        return result
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);