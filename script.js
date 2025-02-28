function toCase(text) {
    if (text.length === 0) return '-';
    let fin = `${text.toLowerCase()}-${text.toUpperCase()}`;
    return fin;
}

// Do not change the code below
const text = prompt("Enter text:");
alert(toCase(text));



