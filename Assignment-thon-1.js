let cars = {
  
  sedan : {
    price : 30,
    stock: 0,
    isAvailable() {
      if (this.stock > 0) return "Sedan: Available";
      return "Sedan: Not Available";
    }
  },
  
  suv : {
    price : 35,
    stock : 10,
    isAvailable() {
      if (this.stock > 0) return "suv: Available";
      return "suv: Not Available";
    }
  },
  
  sports : {
    price : 40,
    stock : 5,
    isAvailable() {
      if (this.stock > 0) return "sports: Available";
      return "sports: Not Available";
    }
  },
  
  rent(car){
    if(this[car]){
      this[car].stock --;
      return car, "rented";
    } else {
      return "not a car";
    }
  }
  
};

console.log(cars.sports.stock);
console.log(cars.rent('sports'));
console.log(cars.sports.stock);