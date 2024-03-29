import data from './rawBooks.json' assert { type: 'json' };
console.log(data[1000]["# Pages"]);

var totalPages = 0;
for (let i = 0; i < data.length; i++) {
    totalPages = parseInt(totalPages) + data[i]["# Pages"];
}
var avgPages = totalPages/data.length;
console.log("average number of pages: " + avgPages);

const genres = [];
const counters = [];

for (let i = 0; i < data.length; i++) {
    var found = false;
    var counter = 0;
    for (let j = 0; j < genres.length; j++) {
        if (data[i].category == genres[j]) {
            counters[j]++;
            found = true;
        }
    }
    if (found == false) {
        genres.push(data[i].category);
        counters.push(counter);
    }
}
console.log(genres.length);
var highestCounter = 0;
var highestCounterIndex = 0;
for (let i = 0; i < counters.length; i++) {
    if (counters[i]>highestCounter) {
        highestCounter = counters[i];
        highestCounterIndex = i;
    }
}

console.log("most popular genre: " + genres[highestCounterIndex]);

var totalTBR = 0;
var counter100 = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i]["Time on TBR (days)"]>0) {
        if (data[i]["Date Bought"] !== "" && data[i]["Date Bought"] !== "#REF!") {
            if (data[i]["Date Read"] !== "N/A") {
                console.log(data[i]["Time on TBR (days)"])
                totalTBR = parseInt(totalTBR) + data[i]["Time on TBR (days)"];
                counter100++;
            }
        }
    }
}
console.log(counter100 + " books");
var avgTBR = totalTBR/counter100;
console.log("totalTBR: " + totalTBR + ". avg TBR (days): " + avgTBR);

const authors = [];
const counters2 = [];

for (let i = 0; i < data.length; i++) {
    var found2 = false;
    var counter2 = 0;
    for (let j = 0; j < authors.length; j++) {
        if (data[i].author == authors[j]) {
            counters2[j]++;
            found2 = true;
        }
    }
    if (found2 == false) {
        authors.push(data[i].author);
        counters2.push(counter2);
    }
}
// console.log(authors.length);
var highestCounter2 = 0;
var highestCounterIndex2 = 0;
for (let i = 0; i < counters2.length; i++) {
    if (counters2[i]>highestCounter2) {
        highestCounter2 = counters2[i];
        highestCounterIndex2 = i;
    }
}

console.log("most popular author: " + authors[highestCounterIndex2]);

var counter3 = 0;
var counter4 = 0;
for (let i = 0; i < data.length; i++) {
    counter4++;
    if (data[i]["read?"]=="Yes") {
        counter3++;
    }
}
console.log((counter3/counter4)*100 + " percent of the books are read")

var counter5 = 0;
var counter6 = 0;
for (let i = 0; i < data.length; i++) {
    counter6++;
    if (data[i]["read?"]=="Yes" && data[i]["audio?"]=="Yes") {
        counter5++;
    }
}
console.log((counter5/counter6)*100 + " percent of audio books are read, " + ((counter3/counter4)*100-(counter5/counter6)*100) + " percent more than the percent of books read")

//console.log(data[1]["# Pages"] + data[2]["# Pages"])


// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

