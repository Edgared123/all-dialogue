function extractQuotes() {
    const inputText = document.getElementById('inputText').value;
    const regex = /"([^"]+)"/g;
    let result = '';
    let match;

    while ((match = regex.exec(inputText)) !== null) {
        result += match[1] + ' ';
    }

    document.getElementById('inputText').value = result.trim();
}