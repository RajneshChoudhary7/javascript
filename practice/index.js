let formEl = document.querySelector("form"); // SignUp form
let form2 = document.querySelector("#form2"); // SignIn form

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = {
        name: formEl[0].value,
        email: formEl[1].value,
        password: formEl[2].value
    };
    console.log("Signup data:", data);
    localStorage.setItem("formdata", JSON.stringify(data));
    alert("Signup Successful");
});

form2.addEventListener("submit", (e) => {
    e.preventDefault();

    let saveData = localStorage.getItem("formdata");
    if (!saveData) {
        alert("Please signup first!");
        return;
    }

    let dataObj = JSON.parse(saveData);

    let loginObj = {
        email: form2[0].value,
        password: form2[1].value
    };

    if (dataObj.email === loginObj.email && dataObj.password === loginObj.password) {
        alert("Login Successful!");
    } else {
        alert("Invalid email or password.");
    }
});
