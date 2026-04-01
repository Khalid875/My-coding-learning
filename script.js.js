const inputField = document.querySelector('.ai-input');
const button = document.querySelector('.glow-button');
const displayScreen = document.getElementById('ai-text');

button.addEventListener('click', () => {
    const userQuery = inputField.value.toLowerCase();
    displayScreen.innerText = "Analyzing query...";

    setTimeout(() => {
        if (userQuery.includes("hello") || userQuery.includes("hi")) {
            displayScreen.innerText = "AI: Hello! How can I assist you today?";
        } else if (userQuery.includes("name")) {
            displayScreen.innerText = "AI: I am your Black Box AI Assistant.";
        } else if (userQuery.includes("time")) {
            displayScreen.innerText = "AI: Current System Time: " + new Date().toLocaleTimeString();
        } else if (userQuery === "") {
            displayScreen.innerText = "AI: Please type something first!";
        } else {
            displayScreen.innerText = "AI: Processing '" + userQuery + "'... No specific data found, but I am learning!";
        }
        inputField.value = ""; // Input clear karne ke liye
    }, 1000); // 1 second ka delay real feel dene ke liye
});