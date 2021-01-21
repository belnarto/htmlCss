function helloFunction() {
    let name = prompt("What is your name?");
    // только такие скобки позволяют
    let msg = `<h1>Hi ${name}!</h1>`
    document.body.innerHTML += msg
}