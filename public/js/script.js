/*function showMessage() {
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
*/
// space for successful message 
const success_msg = document.getElementById("success-message")
;

// Actual message delivery procedure 
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        console.log(data);

        if (data.success) {
            success_msg.innerText = "Message sent successfully 🚀";
           // alert("Message sent successfully 🚀");
            success_msg.style.opacity = "1";
            setTimeout(() => {

    success_msg.style.opacity = "0";

}, 3000);

            form.reset();

        } else {

            alert("Submission failed");

            console.log(data);

        }

    } catch (error) {

        console.log(error);

        alert("Something went wrong");

    }

});



            
