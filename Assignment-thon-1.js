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
        return `${car} rented`;
      } else {
        return 'Car Unavailable';
      }
    } else {
      return "not a car";
    }
  }
};

console.log(Cars.stock());
console.log(Cars.sports.stock);
console.log(Cars.rent('sports'));
console.log(Cars.stock());
