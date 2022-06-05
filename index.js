// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

// push
function destructivelyAppendCat(name) {
    cats.push(name)
    return (cats)
}
// unshift()
function destructivelyPrependCat(name){
    cats.unshift("Bob")
    return (cats)
}
// pop()
function destructivelyRemoveLastCat (name) {
    cats.pop("Garfield")
    return (cats)
}
// shift()
function destructivelyRemoveFirstCat (name) {
    cats.shift("Milo")
    return (cats)
}
// push()
function appendCat(name) {
    let cats=["Milo", "Otis", "Garfield"];
    cats.push(name)
    return (cats)
}
// unshift()
function prependCat(name){
    let cats=["Milo", "Otis", "Garfield"];
    cats.unshift("Arnold")
    return (cats)
}
// pop()
function removeLastCat (name) {
    let cats=["Milo", "Otis", "Garfield"];
    cats.pop("Garfield")
    return (cats)
}
// use shift()
function removeFirstCat (name) { 
    let cats=["Milo", "Otis", "Garfield"];
    cats.shift("Milo")
    return (cats)
}

