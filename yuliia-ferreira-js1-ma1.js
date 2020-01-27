// question 1
// create an object and log the string
const cat = {
    complain: function() {
        console.log("Meow!"); 
    }
}
cat.complain();

// question 2
// select h3 and assign it to a variable
const heading = document.querySelector("h3");
console.log(heading);

// question 3
// change the font size
heading.style.fontSize = "2em";

// question 4
// add a class to the heading variable
heading.classList.add("subheading");
console.log(heading.className);

// question 5
// selects all the p elements and assigns them to a variable
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// question 6
// select the div by its class 
const resultsContainer = document.querySelector(".results");
console.log(resultsContainer);
// set its inner HTML
resultsContainer.innerHTML = "<p>New paragraph</p>";

// question 7
// create a function
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function makeCatArray(catArray) {
    // loop through the argument and console log the name property in each object
    for (let index = 0; index < catArray.length; index++) {
        console.log(catArray[index].cats.name);
    }
} 
// call the function
makeCatArray("Blob");
makeCatArray("Harold");
makeCatArray("Blurt");

// question 8
//  wrap each name property in an h5 tag, add it to a variable, return the variable from the function
function makeCatArray(catArray) {
    // declare a variable
    let catArraysHTML = "";
    // loop through the argument
    for (let index = 0; index < catArray.length; index++) {
        catArraysHTML += `<h5>${catArray[index].cats.name}</h5>`;
    }
    // return a variable from the function
    return catArraysHTML;
}

// question 9
// call the function
makeCatArray(cats).innerHTML = "<p>New paragraph</p>";

// question 10
// add a p element containing the age property from each object
// wrap the h5 and p in a div
function makeCatArray(catArray) {
    let catArraysHTML = "";
    for (let index = 0; index < catArray.length; index++) {
         let catArrayAge = "Age unknown";
        catArraysHTML += `<div>
                             <h5>${catArray[index].cats.name}</h5>
                             <p>${catArray[index].cats.age}</p>
                        </div>`;
        if (catArray[index].age) {
            catArrayAge = catArray[index].age;
        }
    }
    return catArraysHTML;
}