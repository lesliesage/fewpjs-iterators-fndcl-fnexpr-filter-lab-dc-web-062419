// Code your solution here

    // findMatching()
    //   1) returns all drivers that match the passed in name
    //   2) returns matching drivers if case does not match but letters do
    //   3) returns an empty array if there is no match
    // fuzzyMatch()
    //   4) returns a driver if beginning provided letters match
    //   5) does not return drivers if only middle or ending letters match
    //   6) does not return drivers if only middle or ending letters match
    // matchName()
    //   7) accesses the data structure to check if name matches

function findMatching(drivers, str){
  return drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase()
  });
}

function fuzzyMatch(drivers, str){
  let matchLength = str.length;
  return drivers.filter(driver => {
    return driver.slice(0,matchLength).toLowerCase() === str.toLowerCase()
  });
}

function matchName(drivers, str){
  return drivers.filter(driver => {
    return driver.name === str
  });
}
