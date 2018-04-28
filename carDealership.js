const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  console.log("In stock we have:\n" + Cars.stock());
  rl.question("what kind of car do you want to rent?\n", (car) => {
    Cars.rent(car);
  });
};

let Cars = {
  
  categories : ['sedan', 'suv', 'sports'],
  
  sedan : {
    price : 30,
    stock: 0,
  },
  
  suv : {
    price : 35,
    stock : 10
  },
  
  sports : {
    price : 40,
    stock : 5,
  },
  
  stock() {
    let numAvailable = "";
    for(let i in this.categories){
      numAvailable += this.categories[i] + ": " + this[this.categories[i]].stock + ", ";
    }
    return numAvailable;
  },
  
  rent(car){
    if(this[car] && typeof car === 'string'){
      if(this[car].stock > 0) {
        this[car].stock --;
        console.log(`${car} rented`);
        rl.close()
      } else {
        console.log('Car Unavailable');
        main();
      }
    } else {
      console.log("not a car");
      main();
    }
  }
};



main();