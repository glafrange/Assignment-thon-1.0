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
  }
};

console.log(cars.sedan.isAvailable());