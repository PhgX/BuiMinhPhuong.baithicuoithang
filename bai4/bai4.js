class Animal {
    name;
    weight;
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        return alert(`Con ${this.getName()} có cân nặng là ${this.getWeight()}`)
    }
}

const objAnimal1 = new Animal ('Elephant', 45.6)
objAnimal1.toString()

const objAnimal2 = new Animal ('Mouse', 20)
objAnimal1.toString()

