const { isEven } = require('./Modules/IsEven.js')
const { logger } = require('./Modules/logger.js')
logger("Application Started")
let numbers = [10, 15, 20, 25]
numbers.forEach((number) => {
    if (isEven(number)) {
        logger(number + " is Even")
    }
    else {
        logger(number + " is Odd")
    }
})
logger("Application Finished")
