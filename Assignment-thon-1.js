let Cars = {
  
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
  
  isAvailable(car) {
    if(this[car]) {
      if (this[car].stock > 0) return true;
      return false;
    }
    else {
      return "Not a car";
    }
  },
  
  rent(car){
    if(this[car]){
      if(this.isAvailable(car)) {
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

console.log(Cars.isAvailable('sports'));
console.log(Cars.sports.stock);
console.log(Cars.rent('sports'));
console.log(Cars.sports.stock);
