export class Ingredient {
    name:string;
    units:number;
    
    constructor(ingName:string,numOfUnits:number) {
        this.name = ingName;
        this.units = numOfUnits;
    }
    
    getName() {
        return this.name;
    }
 
    getUnits() {
        return this.units;
    }
}
