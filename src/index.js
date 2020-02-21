module.exports = function toReadable (number) {
  let numberString = "";
  let firstNumber = {
		"1": "one hundred",
		"2": "two hundred",
		"3": "three hundred",
		"4": "four hundred",
		"5": "five hundred",
		"6": "six hundred",
		"7": "seven hundred",
		"8": "eight hundred",
		"9": "nine hundred"
	}

	let secondNumber = {
		"10": "ten",
		"11": "eleven",
		"12": "twelve",
		"13": "thirteen",
		"14": "fourteen",
		"15": "fifteen",
		"16": "sixteen",
		"17": "seventeen",
		"18": "eighteen",
		"19": "nineteen",
		"2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety",
	}

	let thirdNumber = {
		"1": "one",
		"2": "two",
		"3": "three",
		"4": "four",
		"5": "five",
		"6": "six",
		"7": "seven",
		"8": "eight",
		"9": "nine",
		"10": "ten",
		"11": "eleven",
		"12": "twelve",
		"13": "thirteen",
		"14": "fourteen",
		"15": "fifteen",
		"16": "sixteen",
		"17": "seventeen",
		"18": "eighteen",
		"19": "nineteen",
		"20": "twenty"
	}
	

switch (true) {
	case number === 0:
		return numberString += "zero";
		break;

	case number <= 20:
		for (const key in thirdNumber) {
			if (key === String(number)) {
				numberString += `${thirdNumber[key]}`;
			}
		}
		break;

	case number > 20 && number < 100:
		let arr = String(number).split('');
		for (const key in secondNumber) {
			if (key === arr[0]) {
				numberString += `${secondNumber[key]}`;
			}
		}
		for (const key in thirdNumber) {
			if (key === arr[1] && Number(arr[1]) !== 0) {
				numberString += ` ${thirdNumber[key]}`;
			}
		}
		break;

	case number >= 100 && number < 1000:
		let arr1 = String(number).split('');
		for (const key in firstNumber) {
			if (key === arr1[0]) {
				numberString += `${firstNumber[key]}`;
			}
		}
		for (const key in secondNumber) {
			if ((key === arr1[1]+arr1[2] && Number(arr1[1]) !== 0)|| key === arr1[1]) {
				numberString += ` ${secondNumber[key]}`;
			}
		}
		for (const key in thirdNumber) {
			if (key === arr1[2] && arr1[1] !== "1" ) {
				numberString += ` ${thirdNumber[key]}`;
			}
			
		}
		break;
		
}

return numberString;
}
