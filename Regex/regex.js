const sentenceOne = 'Mary and Samantha arrived at the bus station early, but waited until noon for the bus!.'

// 1. Find all words which are 4 or 5 characters long
const regexOne = /\w{4,5}/g
console.log(sentenceOne.match(regexOne))

// 2. Find upper case
const regexTwo = /[A-Z]/g
console.log(sentenceOne.match(regexTwo))

// 3. Regex for Match File Extension
const regexFileName = /\.(gif|jpg|jpeg|png)/
const fileExtension = 'fasfsasfsfa.jpeg'.match(regexFileName)  
if (fileExtension) {
    console.log('Match File')
} else {
    console.log('Not Match')
}

// 4. Regex for Special Character
const regexSpecialCharacter = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
const specialChar = '*( Helo {k. ='.match(regexSpecialCharacter)
if (specialChar) {
    console.log('Contain Special Character')
} else {
    console.log('Not Contain Special Character')
}

// 5. Replace Xmas with Christmas
const str = 'The night before Xmas...';
const newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);

// 6. Regex to get number from string 
const str3 = 'Goran3213123'
const numberRegEx = /[0-9]/g
console.log(str3.match(numberRegEx))

// 7. Regex to remove the characters between the numbers
const str5 = "Java3goran4Script"
const reg = /\d.*\d/
const newStr5 = str5.replace(reg, "-");
console.log(newStr5);