checkPalindrome("ollo");

function checkPalindrome(str) {

let newString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
let reverseString = newString.split("").reverse().join("");

if (newString == reverseString) {
	return true
} else {
	return false
}

}

