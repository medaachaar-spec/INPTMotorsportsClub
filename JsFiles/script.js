const joinForm = document.getElementById("joinForm");
const successAlert = document.getElementById("successAlert");

joinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const category = document.getElementById("category").value;
    const message = document.getElementById("message").value.trim();

    if (fullName === "" || email === "" || category === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    successAlert.classList.remove("d-none");

    joinForm.reset();

    setTimeout(function () {
        successAlert.classList.add("d-none");
    }, 5000);
});