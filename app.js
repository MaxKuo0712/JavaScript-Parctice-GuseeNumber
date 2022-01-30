let answer, inputNumber, minNumber, maxNumber;

minNumber = 0;
maxNumber = 100;
answer = Math.floor((Math.random() * 100 + 1));
console.log(answer);

do {
    inputNumber = window.prompt("終極密碼，請輸入"+ minNumber + "~" + maxNumber +"之間的數字");
    console.log("Print1 : target: " + answer + ", input: " + inputNumber + ", min: " + minNumber + ", max: " + maxNumber);
    
    if (checkInput(inputNumber) == false) {
        continue;
    } else {
        if (inputNumber == answer) {
            window.alert("恭喜答對了！ " + answer);
            break;
        } else {
            if (inputNumber < answer) {
                minNumber = inputNumber;
            } else if (inputNumber > answer) {
                maxNumber = inputNumber;
            }
        }
    }
} while (inputNumber != answer);

function checkInput(inputNumber) {
    if (isNaN(inputNumber) || (inputNumber === "")) {
        window.alert("請重新輸入阿拉伯數字");
        return false;
    } else if ((inputNumber <= minNumber)) {
        window.alert("輸入錯誤，數字請大於最小數字");
        return false;
    } else if ((inputNumber >= maxNumber)) {
        window.alert("輸入錯誤，數字請小於最大數字");
        return false;
    }    
}

