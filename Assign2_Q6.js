// 6. Write a JavaScript program to remove duplicate items from an array (ignore case
//   sensitivity)

function getDistinct(words) {
    var unique = [];


    for (var value of words) {
        if (unique.indexOf(value) === -1) {
            unique.push(value);
        }
    }
    return unique;
}

var words = [1, 7, 1, "Hi", "SkillSanta", "Hi"];
var uniqueWords = getDistinct(words);
console.log(uniqueNames);

