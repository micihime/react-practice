window.onload = () => {
    const rootElement = document.getElementById("root");
    const button = document.createElement("button");
    button.innerHTML = "Click me to get current date and time";
    button.addEventListener("click", () => {
        button.innerHTML = new Date().toString();
    });
    rootElement.appendChild(button);
}