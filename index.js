// // Code your solution here



function findMatching(array, name) {
    return array.filter(driver=>(
        driver.toLowerCase() === name.toLowerCase()
    )
             )
}



function fuzzyMatch(array, name){
    return array.filter(driver=>(
        driver.substring(0, 1) === name.substring(0, 1)
    )
            )
}


function matchName(array, name) {
    return array.filter(key=>key.name === name)
}

