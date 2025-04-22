function task1(callback) {
    setTimeout(() => {
    console.log("The 1st statement");
    callback();
}, 6000);
}

function task2(callback) {
    setTimeout(() => {
    console.log("The 2nd statement");
    callback();
}, 4000);
}

function task3(callback){
    setTimeout(() => {
    console.log("The 3rd statement");
    callback();
}, 2000);
}

function task3(callback) {
    setTimeout(() => {
    console.log("The 4th statement");
    callback();
}, 4000);
}

function task5(callback) {
    setTimeout(() => {
    console.log("The 5th statement");
    callback();
}, 3000);
}

function task6(callback) {
    setTimeout(() => {
    console.log("The 6th statement");
    callback();
}, 2000);
}

function task7(callback) {
   setTimeout(() => {
    console.log("The 7th statement");
    callback();
}, 1000); 
}

task1(() => {
    task2(() => {
        task3(() => {
            task5(() => {
                task6(() => {
                    task7(() => {
                        
                    })
                })
            })
        })
    })
})
