//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step){
    //the html string made from step
    return `<li>${step}</li>`;
}

// use map to convert the list from strings to HTML
const stepsHtml = steps.map(listTemplate);

// set the innerHTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); 