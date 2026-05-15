function showMessage() {
    alert("Thanks for visiting AT's portfolio 🚀");
}
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(
        "https://api.web3forms.com/submit",
        {
            method: "POST",
            body: formData
        }
    );

    if (response.ok) {

        alert("Message sent successfully 🚀");

        form.reset();

    } else {

        alert("Something went wrong");

    }

});
