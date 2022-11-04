class Plane {
    constructor(type, model, maxRange, maxSpeed) {
      this.type = type
      this.model = model
      this.maxRange = maxRange
      this.maxSpeed = maxSpeed
    }
  }
  
  class CivilPlane extends Plane {
    constructor(model, maxRange, maxSpeed, paxCapacity) {
      super('civil', model, maxRange, maxSpeed)
      this.paxCapacity = paxCapacity
    }
  }
  
  class CargoPlane extends Plane {
    constructor(model, maxRange, maxSpeed, cargoCapacity) {
      super('cargo', model, maxRange, maxSpeed)
      this.cargoCapacity = cargoCapacity
    }
  }
  
let Boing737Max = new CivilPlane('Boing737Max', 7130, 838, 153);
let AirbusA380 = new CivilPlane('AirbusA380', 14800, 903, 575);
let AirbusA320 = new CivilPlane('AirbusA320', 6112, 829, 190);
let AirbusA330 = new CivilPlane('AirbusA330', 11750, 871, 440);
let Boeing777 = new CivilPlane('Boeing777', 13000, 930, 320);
  
let BoeingDreamlifter = new CargoPlane('BoeingDreamlifter', 13450, 910, 396890);
let AirbusBelugaXL = new CargoPlane('AirbusBelugaXL', 4300, 737, 50500);
let Boeing7478 = new CargoPlane('Boeing747-8', 14320, 908, 76100);

let Aviacompany = [ Boing737Max, AirbusA380, AirbusA320, AirbusA330, Boeing777, BoeingDreamlifter, AirbusBelugaXL, Boeing7478 ];
console.log('Sort by range(distance):');
function sortByRange(Aviacompany) {
    Aviacompany.sort((a, b) => a.maxRange > b.maxRange ? 1 : -1);
  }
  sortByRange(Aviacompany)
  console.log(Aviacompany);

console.log('Sum of pax capacity:');
let sumPax = 0;
for (i =0; i < Aviacompany.length; i++) {
    if (Aviacompany[i].paxCapacity > 0) {
        sumPax += Aviacompany[i].paxCapacity
    }
}
console.log(sumPax);

console.log('Sum of cargo capacity, kg:');
let sumCargo = 0;
for (i =0; i < Aviacompany.length; i++) {
    if (Aviacompany[i].cargoCapacity > 0) {
        sumCargo += Aviacompany[i].cargoCapacity
    }
}
console.log(sumCargo);

console.log('Find by parameners:');
function find(paramType, paramRange) {
for (i =0; i < Aviacompany.length; i++) {
    if (Aviacompany[i].type == paramType && Aviacompany[i].maxRange >= paramRange) {
        console.log(Aviacompany[i]);
    }
}
}
find('civil', 13000)
