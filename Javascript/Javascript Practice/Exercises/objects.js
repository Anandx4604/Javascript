//Objects in js

var Car= {
    car_brand :"Tesla",
    car_model : "Model 3",
    price : 350000,

    teslaAutoPilot : function()
    {
        document.write("This car has Auto Pilot");
    }
}
Car.fuelType="Electric";
Car.price = "45000";
Car.teslaAutoPilot();

document.write("<h2>"+typeof(Car.price)+"</h2>")

//constructor template to create more objects

// function Car(car_brand,car_model,price)
// {
//     this.car_brand = car_brand;
//     this.car_model=car_model;
//     this.price=price;
//     this.teslaAutoPilot = function()
//     {
//         document.write("<h2>This car has AutoPilot</h2>");
//     }
// }
// // 100 lines of code


// var car1 = new Car("Tesla","Model 3",35000);
// var car2 = new Car("Tesla","Model P",45000);
// var car3 = new Car("Audi","A8",50000);
// car2.teslaAutoPilot();
// document.write("<h2>"+car3.car_model+"</h2>");


// document.write("<h2>"+car3.fuelType+"</h2>")
