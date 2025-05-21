function createAlarm(name, delay) {
    return new Promise ((resolve, reject) => {
        if(delay >= 4000){
             setTimeout((resolve) => {
            console.log(`Wake up ${name}`)
        }, 4000)
    } else {
        reject('Delay is not sufficient');
    }
    });
    }

    console.log('Temoin');
    createAlarm('Bobo', 1000).then((message) => {
        console.log(message)
    }).catch((error) => {
        console.error(error)
    })

       
