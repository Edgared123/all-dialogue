function extractDialogue() {
    const inputText = document.getElementById('inputText').value;
    const regexQuoted = /"([^"]+)"/g; // Matches text inside double quotes
    const regexEmDash = /—([^—.]*\.)?/g; // Matches text starting with — and ending with . or end of line
    let result = '';
    let match;
    let dialogueFound = false;

    // Extract quoted dialogue
    while ((match = regexQuoted.exec(inputText)) !== null) {
        result += match[1].trim() + ' ';
        dialogueFound = true;
    }

    // Extract em dash dialogue
    while ((match = regexEmDash.exec(inputText)) !== null) {
        result += match[0].trim() + ' ';
        dialogueFound = true;
    }

    if (dialogueFound) {
        document.getElementById('inputText').value = result.trim();
    }
}

document.getElementById('extractButton').addEventListener('click', extractDialogue);
