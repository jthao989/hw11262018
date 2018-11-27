let goat = {
    _size:"large", 
    _speed: "slow",
    _type: "mountain",
    _weight: 100,
    
    set weight(newWeight){
        if(typeof newWeight != "number") {
            console.log('not a number');

        }else {
            this._weight = newWeight;

        }

    },
    get weight() {
        return this._weight;

    }

}

console.log(goat._weight);
goat.weight=300;
console.log(goat._weight);
console.log(goat.weight);


//console.log(Object.values(boat));
//getting object values
let goat_values = Object.values(goat)
//getting object keys
let goat_keys = Object.keys(goat);
//loop through values
goat_values.forEach(item => {
    console.log(item);
});
//loop through keys
goat_keys.forEach(item => {
    console.log(item);
});

let bird = {
    _size:"small", 
    _speed: "fast",
    _type: "robin",
    _weight: 2,
    
    set weight(newWeight){
        if(typeof newWeight != "number") {
            console.log('not a number');

        }else {
            this._weight = newWeight;

        }

    },
    get weight() {
        return this._weight;

    }

}

console.log(bird._weight);
bird.weight=300;
console.log(bird._weight);
console.log(bird.weight);


//console.log(Object.values(boat));
//getting object values
let bird_values = Object.values(bird)
//getting object keys
//let bird_keys = Object.keys(bird);
//loop through values
bird_values.forEach(item => {
    console.log(item);
});
//loop through keys
bird_keys.forEach(item => {
    console.log(item);
});


