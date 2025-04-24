// Promises Async Await

const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true;

            if(preHeatOven) {
                resolve("Preheat oven to 180deg")
            } else {
                reject("Failed Task")
            }
        }, 1000)
    })
};

const addSuggarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSuggarAndChocoChips = true;

            if(addSuggarAndChocoChips) {
                resolve("Place butter and chocolate chips, stir until melted and smooth");
            } else {
                reject("Failed Task")
            }
        }, 1000)
    })
};

const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addFlourCocoaAndSalt= true;

            if(addFlourCocoaAndSalt) {
                resolve("Add Flour , coco and salt and stir until sooth")
            } else {
                reject("Failed Task")
            }
        }, 1000)
    })
};
const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true;

            if(bakeMixture) {
                resolve("Bake for 24 minutes for realty gooey center")
            } else {
                reject("Failed Task")
            }
        }, 1000)
    })
};

const bakeChocalateBrownies = async () => {
    const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addSuggarAndChocoChips();
    console.log(taskTwo);

    const taskThree = await addFlourCocoaAndSalt();
    console.log(taskThree);

    const taskFour = await bakeMixture();
    console.log(taskFour);

    console.log("Enjoy ! Your perfect Chocolate Brownies")
}
bakeChocalateBrownies();