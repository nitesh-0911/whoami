const input = document.getElementById("commandInput");
const terminal = document.getElementById("terminal");

function print(text) {
    const p = document.createElement("p");
    p.classList.add("output")
    p.innerHTML = text;
    terminal.appendChild(p);
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const command = input.value.trim().toLowerCase();
        print(`$ ${command}`);
        handleCommand(command);
        input.value = ""; // yaha hum inout ko clear kia
    }
});

function handleCommand(command) {
    switch (command) {
        case "help":
            print("Available commands: about, skills, projects, learning, contact, clear");
            break;

        case "about":
            print("I am Nitesh Kumar Gosai, a self-taught web developer and JavaScript learner.");
            break;

        case "skills":
            print(`
        HTML, CSS, JavaScript<br>
        Linux Terminal (daily usage)<br>
        OS & Networking basics<br>
        Git & GitHub
      `);
            break;

        case "projects":
            print("Twitter Backend CRUD System (JavaScript)");
            break;

        case "learning":
            print("DSA, Logic Building, 21-Day JS Challenge, FreeCodeCamp JS");
            break;

        case "contact":
            print("Email: nitesh.dev@proton.me<br>GitHub: github.com/nitesh-c");
            break;

        case "clear":
            terminal.innerHTML = "";
            break;
        case "whoami":
            print("nitesh.dev");
            break;
        default:
            print("Command not found. Type 'help'");
    }
}
