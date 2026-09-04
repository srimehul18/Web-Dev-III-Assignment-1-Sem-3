import {isEven} from "./Modules/IsEven.js"
import {logger} from "./Modules/logger.js"
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