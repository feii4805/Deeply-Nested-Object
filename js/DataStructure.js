const milkTea = {
    locations: "LIC, Flushing,Union Square ",
    rating: ["★★★★☆", "★★★☆☆", "★★★★★"],
    toppings: ["Tapioca Pearls", "Pudding", "Aloe", "Grass Jelly", "Oats","Jelly", "Ice Cream", "Crystal boba","Floam"],
    caffeineLevel: "light,medium,deep",
    teaBase: "Four Seasons Tea, Amber Oolong Milk Tea,  Black Tea, Jasmine Green Tea",
    typesOfMilkOrCreamer: "Powder Creamer, Oat Milk, Soy Milk",
    temperature: true,  // true: Hot, false: Cold
    amountOfSugar: "0, 1, 2, 3",   // tablespoons
    levelOfIce: "0%, 30%, 70%, 100%", //cube
    syrupFlavors: ["Honey","Strawberry","Peach","Mango"],
    signatureDrink: "House Special Milk Tea, Strawberry Four Seasons Milk Tea, Honey Amber Milk tea, Milk Tea Duo",
    latteSeries: "Oat Latte",
    waitTime: "5,10,15",        // minutes
    cup: {
        material: "Plastic, Paper",
        size: "Small,Large",
        lid: {
            material: "Plastic",
            color: "Clear",
            type: "Sealable"
        },
        straw: {
            material: "Plastic",
            color: "Black",
            type: "Thin, Thick"
        }
    },
    recipe1: {
        drink: "Strawberry Four Seasons Milk Tea",
        steps: {
            teaBase: [
                "Add 250ml tea", 
                "Add powder creamer", 
                "Mix well", 
                "Add sugar", 
                "Mix well"
            ],
            addSyrup: "Add one 20ml of Strawberry syrup into the cup",
            assemble: [
                "Add ice to the cup", 
                "Pour the milk tea", 
                "Cover with lid"
            ]
        }
    },
    recipe2: {
        drink: "Honey Amber Milk tea ",
        steps: {
            teaBase: [
                "Add 250ml tea", 
                "Add powder creamer", 
                "Mix well", 
                "Add 20ml of honey", 
                "Mix well"
            ],
            addTopping: "None",
            assemble: [
                "Add ice to the cup", 
                "Pour the milk tea", 
                "Cover with lid"
            ]
        }
    },
    recipe3: {
        drink: "House Special Milk Tea", 
        steps: {
            teaBase: [
                "Add 250ml tea", 
                "Add powder creamer", 
                "Mix well", 
                "Add sugar", 
                "Mix well"
            ],

            addTopping: "Add one scoop of tapiocas and one scoop of oats into the cup",
            assemble: [
                "Add ice to the cup", 
                "Pour the milk tea", 
                "Cover with lid"
            ]
        }
    }

    getWaitTime: function(recipe) {
        // Assuming each step takes 5minutes
         stepTime = 5;
        totalSteps = recipe.steps.teaBase.length + recipe.steps.assemble.length + 1; // +1 for additional steps
         waitTime = totalSteps * stepTime;
        console.log(`The wait time for ${recipe.drink}will be approximately ${waitTime} minutes.`);
    },

    isCold: function() {
        if (this.temperature) {
            console.log("The milk tea is hot.");
        } else {
            console.log("The milk tea is cold.");
        }
    }
};
