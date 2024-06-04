body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #111;
    color: #fff;
    padding: 1em 0;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
}

nav ul li {
    margin: 0 1em;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    flex: 1;
    padding: 2em;
    text-align: center;
}

footer {
    background-color: #111;
    color: #fff;
    text-align: center;
    padding: 1em 0;
}

section {
    margin-bottom: 2em;
}

button {
    background-color: #444;
    color: #fff;
    border: none;
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
}

button:hover {
    background-color: #666;
}
