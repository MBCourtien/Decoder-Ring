
const caesarModule = (function () {
  // create helper function to convert message to array of numbers
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
                    continue;
            }

    }
    return array;
}
//create helper function to convert array of numbers into letters
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
            continue;
        }

    };
    return array;
}

  function caesar(input, shift, encode = true) {
    //create if statement to return false if shift does not meet requirements
    if(!shift || shift === 0 || shift<-25 || shift>25 ){return false};
    
    //create if statement to reverse shift if encode is set to false
    if (encode===false) {shift *= -1};
    
    //create array that is populated by numbers associated with each letter after setting message to lowercase
    const stringAsNumbers = convertLettersToNumbers(input.toLowerCase());
    
    //create array that changes number based on provided shift
    const codedMessage = stringAsNumbers.map((num) => (typeof num === 'string')?num:num+shift);
    
    //create empty array
    const numbers= [];
    
    //loop through coded message and ensure number stays between 0 and 25 and push those numbers to new array
    for (let i in codedMessage) {
        let num = codedMessage[i];
        if (num>25) {
            num += -26;

        }else if (num<0) {
            num += 26;

        }
        numbers.push(num);
    }

    // convert numbers array to letters and join letters into string and return
    return convertNumbersToLetters(numbers).join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
