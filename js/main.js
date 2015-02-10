var blueberries = {
    name: "Bouncing Blueberries",
    latinName: "Vaccinum corymbosum",
    growsOnShrub: true,
    energy: "240 kJ",
    carbohydrates: "14.49",
    protein: "0.74 g"
};

var grapes = {
    name: "Googly Grapes",
    latinName: "Vitis vinifera",
    growsOnShrub: false,
    energy: "288 kJ",
    carbohydrates: "18.1 g",
    protein: "0.72 g"
};

var redCurrant = {
    name: "Ravishing Red Currants",
    latinName: "Ribes rubrum",
    growsOnShrub: true,
    energy: "234 kJ",
    carbohydrates: "13.8 g",
    protein: "1.4 g"
};

//this is an array (indicated with square brackets)

var berryFruits = [blueberries, grapes, redCurrant];

//this is a loop which looks inside the specified array, and asks it to pull specific strands of information (name, energy, protin etc) from item (which refers to one item within the array). Inside the loop, we created a data list.


// a function is a fancy way of saying a variable that contains code and is reusable 


var writeBerryFruits = function (allBerries) {
    allBerries.forEach (function (item) {
    document.write("<dl>");
        
    document.write("<dt>Berry</dt>");
    document.write("<dd>" + item.name + "</dd>");
    
    document.write("<dt>Latin Name</dt>");
    document.write("<dd>" + item.latinName + "</dd>");
    
    document.write("<dt>Grows on Shrub</dt>");
    document.write("<dd>" + item.growsOnShrub + "</dd>");
    
    document.write("<dt>Energy</dt>");
    document.write("<dd>" + item.energy + "</dd>");
    
    document.write("<dt>Carbohydrates</dt>");
    document.write("<dd>" + item.carbohydrates + "</dd>");
    
    document.write("<dt>Protein</dt>");
    document.write("<dd>" + item.protein + "</dd>");
    
    document.write("</dl>");
    });
};

writeBerryFruits ([blueberries, grapes, redCurrant]);



