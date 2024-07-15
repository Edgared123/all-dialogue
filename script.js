function extractQuotes() {
    const inputText = document.getElementById('inputText').value;
    const regex = /"([^"]+)"/g;
    let result = '';
    let match;
    let quotesFound = false;

    while ((match = regex.exec(inputText)) !== null) {
        result += match[1] + ' ';
        quotesFound = true;
    }

    if (quotesFound) {
        document.getElementById('inputText').value = result.trim();
    }

    document.getElementById('extractButton').addEventListener('click', extractQuotes);
}