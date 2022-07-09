

const substitutionModule = (function () {
  //create helper function to convert the letters of message into numbers to aide with encoding
  function convertLettersToNumbers(string) {
    let array=[];
    for (let i in string) {
            switch (string[i]) {
                case 'a':
                    array.push(0);
                    continue;
                case 'b':
                    array.push(1);
                    continue;
                case 'c':
                    array.push(2);
                    continue;
                case 'd':
                    array.push(3);
                    continue;
                case 'e':
                    array.push(4);
                    continue;
                case 'f':
                    array.push(5);
                    continue;
                case 'g':
                    array.push(6);
                    continue;
                case 'h':
                    array.push(7);
                    continue;
                case 'i':
                    array.push(8);
                    continue;
                case 'j':
                    array.push(9);
                    continue;
                case 'k':
                    array.push(10);
                    continue;
                case 'l':
                    array.push(11);
                    continue;
                case 'm':
                    array.push(12);
                    continue;
                case 'n':
                    array.push(13);
                    continue;
                case 'o':
                    array.push(14);
                    continue;
                case 'p':
                    array.push(15);
                    continue;
                case 'q':
                    array.push(16);
                    continue;
                case 'r':
                    array.push(17);
                    continue;
                case 's':
                    array.push(18);
                    continue;
                case 't':
                    array.push(19);
                    continue;
                case 'u':
                    array.push(20);
                    continue;
                case 'v':
                    array.push(21);
                    continue;
                case 'w':
                    array.push(22);
                    continue;
                case 'x':
                    array.push(23);
                    continue;
                case 'y':
                    array.push(24);
                    continue;
                case 'z':
                    array.push(25);
                    continue;
                default:
                    array.push(string[i]);
            }

    }
    return array;
}
//create helper function to convert numbers to letters to aide with decoding
function convertNumbersToLetters(numbers) {

    let array=[];
    for (let i in numbers) {
        switch (numbers[i]) {
            case 0:
            array.push('a');
            continue;
            case 1:
            array.push('b');
            continue;
            case 2:
            array.push('c');
            continue;
            case 3:
            array.push('d');
            continue;
            case 4:
            array.push('e');
            continue;
            case 5:
            array.push('f');
            continue;
            case 6:
                array.push('g');
                continue;
            case 7:
                array.push('h');
                continue;
            case 8:
                array.push('i');
                continue;
            case 9:
                array.push('j');
                continue;
            case 10:
                array.push('k');
                continue;
            case 11:
                array.push('l');
                continue;
            case 12:
                array.push('m');
                continue;
            case 13:
                array.push('n');
                continue;
            case 14:
                array.push('o');
                continue;
            case 15:
                array.push('p');
                continue;
            case 16:
                array.push('q');
                continue;
            case 17:
                array.push('r');
                continue;
            case 18:
                array.push('s');
                continue;
            case 19:
                array.push('t');
                continue;
            case 20:
                array.push('u');
                continue;
            case 21:
                array.push('v');
                continue;
            case 22:
                array.push('w');
                continue;
            case 23:
                array.push('x');
                continue;
            case 24:
                array.push('y');
                continue;
            case 25:
                array.push('z');
                continue;
            default:
            array.push(numbers[i]);
        }

    }
    return array;
}

//create helper function that encodes message to simplify main code 
function encodeMessage(input, alphabet) {
    const inputInNumbers = convertLettersToNumbers(input.toLowerCase());
    let finalMessage = [];
    for( let i in inputInNumbers) {
        if(typeof inputInNumbers[i]!== 'string') {
            finalMessage.push(alphabet[inputInNumbers[i]])
        }else {
            finalMessage.push(inputInNumbers[i])
        }
    }
    return finalMessage.join('')
}
//create helper function to decode message to simplify main function
function decodeMessage(input, alphabet) {
    let messageInNumbers= [];

    for(let i= 0; i<input.length; i++) {
        if(alphabet.indexOf(input[i])===-1) {
            messageInNumbers.push(input[i])
        }else{
        messageInNumbers.push(alphabet.indexOf(input[i]))
        }
    }
    return messageInNumbers
}


  function substitution(input, alphabet, encode = true) {
   //create if statement to return false if alphabet does not meet requirements
   if (!alphabet || alphabet.length!==26 || typeof alphabet!=='string') {return false}
   //create cipher variable to set alphabet to all lowercase 
   let cipher = alphabet.toLowerCase();
    //loop through alphabet to ensure that no characters are repeated in alphabet
    for (let i = 0; i < alphabet.length - 1; i++) {
        for (let j = i + 1; j < alphabet.length; j++) {
            if (alphabet[i] == alphabet[j]) {
                return false;
            }
        }
    }

    //create if statement to determine whether function should decode or encode message
    if(encode===true) {
        return encodeMessage(input, cipher)
    }else{
        return convertNumbersToLetters(decodeMessage(input, cipher)).join('')
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
