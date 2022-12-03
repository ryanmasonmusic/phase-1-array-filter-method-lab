

function findMatching(drivers, string){
    return drivers.filter(
    (findMatching) => findMatching.toLowerCase() === string.toLowerCase()
    );
    }

function fuzzyMatch(drivers, string){
    return drivers.filter(
        (name) => name.indexOf(string) === 0
    );
}

function matchName(drivers, string){
    // console.log("does this console log" , drivers.name)
    return drivers.filter(
       driver => driver.name === string
    );
}