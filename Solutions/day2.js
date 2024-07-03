// Exercise 1
// let challenge = "30 Days of JavaScript"

// console.log(challenge)

// console.log(challenge.length)

// console.log(challenge.toUpperCase())

// console.log(challenge.toLowerCase())

// console.log(challenge.substr(0, 1))
// console.log(challenge.substring(0, 1))

// console.log(challenge.slice(3))

// console.log(challenge.includes("Script"))

// console.log(challenge.split())

// console.log(challenge.split(" "))

// console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(","))

// console.log(challenge.replace("JavaScript", "Python"))

// console.log(challenge.charAt(15))

// console.log(challenge.charCodeAt("J"))

// console.log(challenge.indexOf("a"))

// console.log(challenge.lastIndexOf("a"))

// console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"))

// console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"))

// console.log("You cannot end a sentence with because because because is a conjunction".search("because"))

// console.log(("  " + challenge + "  ").trim())

// console.log(challenge.startsWith("30"))

// console.log(challenge.endsWith("t"))

// console.log(challenge.match(/a/gi))

// console.log("30 Days of ".concat("Javascript"))

// console.log(challenge.repeat(2))

// Exercise 2
// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// console.log((typeof "10") === 10)
// console.log(parseInt("10") === 10)

// console.log(parseFloat("9.8") === 10)
// console.log(Math.round("9.8") === 10)

// console.log("python".includes("on"))
// console.log("jargon".includes("on"))

// console.log("I hope this course is not full of jargon".includes("jargon"))

// console.log(Math.round(Math.random() * 101))

// generates a number between two ranges min (included) and max (included): Math.floor(Math.random() * (max - min + 1)) + min
// ... min (included) and max (not included): Math.random() * (max - min) + min
// console.log(Math.round(Math.random() * (100 - 50 + 1) + 50))

// console.log(Math.round(Math.random() * (255 - 0 + 1) + 0))

// let string = "JavaScript"
// console.log(string.charAt(Math.round(Math.random() * string.length - 1)))

// console.log(
//     " 1 1 1 1 1\n",
//     "2 1 2 4 8\n",
//     "3 1 3 9 27\n",
//     "4 1 4 16 64\n",
//     "5 1 5 25 125"
// )

// console.log("You cannot end a sentence with because because because is a conjunction".substr(31, 23))

//Exercise 3

// let string = "Love is the best thing in this world. Some found their love and some are still looking for their love."
// console.log(string.split(" ").length)

// let string = "You cannot end a sentence with because because because is a conjunction"
// console.log(string.match(/because/gi).length)

// ChatGPT solved this one.
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanedSentence = sentence.replace(/[^a-zA-Z\s]/g, "")
let words = cleanedSentence.split(" ")
const wordFrequency = words.reduce((acc, word) => {
    word = word.toLowerCase();
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

const mostFrequentWord = Object.keys(wordFrequency).reduce((a, b) => wordFrequency[a] > wordFrequency[b] ? a : b);

console.log("Cleaned Sentence:", cleanedSentence);
console.log("Most Frequent Word:", mostFrequentWord)


const string = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month"
let array = string.match(/\d+/g)
let sum = 0

array.forEach(number => {
    sum += parseInt(number)
})

console.log(sum)