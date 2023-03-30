export class user {
  
  constructor(name, email, number){
    this.name = name
    this.email = email
    this.number = number
  }
}

export class listing {

  constructor(vin, make, model, year, mileage, color, price ){
    this.vin = vin
    this.make = make
    this.model = model
    this.year = year
    this.mileage = mileage
    this.color = color
    this.price = price
    this.sold = sold
  }

}

export class testDrive {

  constructor(day, time, user, vin){
    this.day = day
    this.time = time
    this.user = user
    this.vin = vin
  }
}

export class sale {

  constructor(carListing, date, amount, comments){
    this.carListing = carListing
    this.date = date
    this.amount = amount
    this.comments = comments
  }
}