
/* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*
*/

async function getData(uId) {
return new Promise((resolve, reject) => {
setTimeout(() => {
console.log("Fetched the data!");
resolve("skc@gmail.com");
}, 4000);
});
}
async function getEmail(){
console.log("start");
var email = await getData("skc");
console.log("Email id of the user id is: " + email);
console.log("end");
}
getEmail();

// How do you solve this problem. How can we wait for till the function execution is completed, so that we can have correct email at line 10?

