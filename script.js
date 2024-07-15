function extractDialogue() {
    const inputText = document.getElementById('inputText').value;
    const regex = /—([^—.]*\.)?/g; // Match text starting with — and ending with . or end of line
    let result = '';
    let match;
    let dialogueFound = false;

    while ((match = regex.exec(inputText)) !== null) {
        result += match[0].trim() + ' ';
        dialogueFound = true;
    }

    if (dialogueFound) {
        document.getElementById('inputText').value = result.trim();
    }
}

document.getElementById('extractButton').addEventListener('click', extractDialogue);


