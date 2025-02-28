function toCase(text) {
    
    if(text.length===0) return '-';
    text = text.replace(/[^a-zA-Z0-9]/g, '');
    let fin = `${text.toLowerCase()}-${text.toUpperCase()}`
    return fin;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

