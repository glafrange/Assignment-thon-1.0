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
      if (this[car].stock > 0) return "sports: Available";
      return "sports: Not Available";
    }
    else {
      return "Not a car";
    }
  },
  
  rent(car){
    if(this[car]){
      this[car].stock --;
      return `${car} rented`;
    } else {
      return "not a car";
    }
  }
};

console.log(cars.isAvailable('sports'));
console.log(cars.sports.stock);
console.log(cars.rent('sports'));
console.log(cars.sports.stock);
