export class Recipe {
    name: string;
    description: string;
    imageUrl: string;

    constructor(name: string, description: string, imageUrl: string) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getImageUrl() {
        return this.imageUrl;
    }

}
