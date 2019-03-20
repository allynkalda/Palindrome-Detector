checkPalindrome("ollo");




function checkPalindrome(str) {

var first = "";
var reverse = [];

for (var i = 0; i < str.length; i++) {

	first += str[i];

	reverse.unshift(str.charAt(i));

	var second = reverse.join("");

}

if (first === second) {
	console.log(first + " is a palindrome!")
} else {
	console.log(first + " and " + second + " is not a palindrome." )
}


}
