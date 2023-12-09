//function to get the length of the password
const generateButton = document.querySelector(".generatebutton");
const alertbutton = document.querySelector(".alert");
//password digitbox
const passworddigitbox = document.querySelector(".passworddigitbox");
const digitbutton = document.querySelector(".enter");
const passwordigitvalue = document.querySelector(".passwordigit");
//passwordbox
const passwordbox = document.querySelector(".passwordbox");
const copybutton = document.querySelector(".copy");
const passwordfield = document.querySelector(".password");
digitbutton.addEventListener("click", function passworddigit() {
        passwordbox.style.display = "block";
        passwordbox.style.display = "flex";
        generateButton.style.display = "block";
        generateButton.style.display = "flex";
        passworddigitbox.style.display = "none";
})
//function to randomly a generate a password
generateButton.addEventListener("click", function generatepassword() {
    const dataset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:<>?";
    var password = "";
    const maxlen = passwordigitvalue.value;
        for (len = 0; len < passwordigitvalue.value; len++) {
            var randomnumber = Math.random() * dataset.length;
            var floornum = Math.floor(randomnumber);
            // console.log(dataset[floornum]);
            password = password + dataset[floornum];
            console.log(password);
        }
        console.log(password);
        passwordfield.value = password;
})
// function to copy the password
copybutton.addEventListener("click", function copypassword() {
    passwordfield.select();
    document.execCommand('copy');
})
generateButton.addEventListener("mousedown", function(event){
    event.preventDefault();
})
