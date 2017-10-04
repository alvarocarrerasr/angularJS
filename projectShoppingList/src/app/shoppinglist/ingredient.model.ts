export class Ingredient {
    private name: string;
    private amount: number;
    constructor(name: string) {
        this.name = name;
        this.amount = 1;
    }
    increaseAmount() {
        this.amount += 1;
    }
    getIngredientName() {
        return this.name;
    }
}
