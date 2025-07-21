document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.getElementById("signUpButton");
    const signInButton = document.getElementById("signInButton");
    const container = document.getElementById("container");

    const users = [];

    const signUpForm = document.getElementById("signUpForm");
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("signUpName").value;
        const email = document.getElementById("signUpEmail").value;
        const password = document.getElementById("signUpPassword").value;

        if (!name || !email || !password) {
            alert("Please fill in all the fields.");
            return;
        }

        users.push({ name, email, password });

        alert(`Sign up successful! Welcome, ${name}.`);

        container.classList.remove("right-panel-active");
    });

    const signInForm = document.getElementById("signInForm");
    signInForm.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const email = document.getElementById("signInEmail").value;
        const password = document.getElementById("signInPassword").value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            alert(`Sign in successful! Welcome back, ${user.name}.`);
            window.location.href = "/products";
            } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    if (signUpButton) {
        signUpButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });
    } else {
        console.error("Sign-up button not found in the DOM.");
    }

    if (signInButton) {
        signInButton.addEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });
    } else {
        console.error("Sign-in button not found in the DOM.");
    }
});
