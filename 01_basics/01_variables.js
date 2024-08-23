const accountId = 14453
let accountEmail = "rashmitest@gmail.com"
var accountPassword = "12345"
accountCity = "bhilai"
let accountState;

// accountId = 2 // not allowed
accountEmail = "rt123@gmail.com"
accountPassword = "2222"
accountCity = "Durg"
console.log(accountId);
/* prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])