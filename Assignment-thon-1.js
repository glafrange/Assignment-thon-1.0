let cars = {
  
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
      if(cars.isAvailable(car)) {
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

console.log(cars.isAvailable('sports'));
console.log(cars.sports.stock);
console.log(cars.rent('sports'));
console.log(cars.sports.stock);
