/* 
Write a function to remove array element based on object property?

How to remove array element based on object property?

Test Cases:
removeArrayElement("money") returns the array without the money object
removeArrayElement("id") returns the array without the id object
removeArrayElement("cStatus") returns the array without the cStatus object
*/

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    return array.filter(element => element.field !== filterField);
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)