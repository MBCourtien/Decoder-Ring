

const polybiusModule = (function () {
  //create helper function to convert message into array of numbers
  function convertLettersToNumbers(string) {
    let array=[];
    for (let i in string) {
            switch (string[i]) {
                case 'a':
                    array.push(11);
                    continue;
                case 'b':
                    array.push(21);
                    continue;
                case 'c':
                    array.push(31);
                    continue;
                case 'd':
                    array.push(41);
                    continue;
                case 'e':
                    array.push(51);
                    continue;
                case 'f':
                    array.push(12);
                    continue;
                case 'g':
                    array.push(22);
                    continue;
                case 'h':
                    array.push(32);
                    continue;
                case 'i':
                    array.push(42);
                    continue;
                case 'j':
                    array.push(42);
                    continue;
                case 'k':
                    array.push(52);
                    continue;
                case 'l':
                    array.push(13);
                    continue;
                case 'm':
                    array.push(23);
                    continue;
                case 'n':
                    array.push(33);
                    continue;
                case 'o':
                    array.push(43);
                    continue;
                case 'p':
                    array.push(53);
                    continue;
                case 'q':
                    array.push(14);
                    continue;
                case 'r':
                    array.push(24);
                    continue;
                case 's':
                    array.push(34);
                    continue;
                case 't':
                    array.push(44);
                    continue;
                case 'u':
                    array.push(54);
                    continue;
                case 'v':
                    array.push(15);
                    continue;
                case 'w':
                    array.push(25);
                    continue;
                case 'x':
                    array.push(35);
                    continue;
                case 'y':
                    array.push(45);
                    continue;
                case 'z':
                    array.push(55);
                    continue;
                default:
                    array.push(string[i]);
            }

    }
    return array;
}
//create helper fucntion to convert numbers to letters
function convertNumbersToLetters(numbers) {

    let array=[];
    for (let i in numbers) {
        switch (numbers[i]) {
            case 11:
            array.push('a');
            continue;
            case 21:
            array.push('b');
            continue;
            case 31:
            array.push('c');
            continue;
            case 41:
            array.push('d');
            continue;
            case 51:
            array.push('e');
            continue;
            case 12:
            array.push('f');
            continue;
            case 22:
                array.push('g');
                continue;
            case 32:
                array.push('h');
                continue;
            case 42:
                array.push('(i/j)');
                continue;
            case 52:
                array.push('k');
                continue;
            case 13:
                array.push('l');
                continue;
            case 23:
                array.push('m');
                continue;
            case 33:
                array.push('n');
                continue;
            case 43:
                array.push('o');
                continue;
            case 53:
                array.push('p');
                continue;
            case 14:
                array.push('q');
                continue;
            case 24:
                array.push('r');
                continue;
            case 34:
                array.push('s');
                continue;
            case 44:
                array.push('t');
                continue;
            case 54:
                array.push('u');
                continue;
            case 15:
                array.push('v');
                continue;
            case 25:
                array.push('w');
                continue;
            case 35:
                array.push('x');
                continue;
            case 45:
                array.push('y');
                continue;
            case 55:
                array.push('z');
                continue;
            default:
            array.push(numbers[i]);
        }

    }
    return array;
};
  //create helper function that takes a coded message and returns an array of two digit numbers for decoding
  function splitCodedMessage(str) {
    let arr = [];
    for(let i = 0; i<str.length; i++) {
        arr.push(str[i])
    }
    let codedMessage=[]
    for (let i = 0; i<arr.length; i+=2) {
        if(arr[i]!==' ') {
            codedMessage.push(arr[i] * 10 + Number(arr[i+1]))
        }else{
            codedMessage.push(arr[i]);
            i = i-1;

        }
    }
    return codedMessage
}

  
  function polybius(input, encode = true) {
    //create if statement to determine if function should encode or decode
    if (encode === true) {
      //encode message and return string
        const codedMessage = convertLettersToNumbers(input.toLowerCase());
        return codedMessage.join('');
    } else {
      //test coded message to make sure it has an even amount of numbers  
      const testCodedMessageLength = input.replace(/ /g,'');
      //return false if coded message is an odd length
       if(testCodedMessageLength.length % 2 !==0) {return false}
        //decode message and return string
        const splitMessage = splitCodedMessage(input);
        return convertNumbersToLetters(splitMessage).join('')

    }
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
