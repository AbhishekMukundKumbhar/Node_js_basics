const items  = ['item1', 'item2', 'item3'];
const person = {
    name : "danush",
    age : 24
}

//exports is a object so we can add property to the object and assign value
//similler to module.exports = {items, person}
module.exports.itemlist = items;
module.exports.person = person;