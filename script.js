function extractDialogue(inputText) {
    // Remove words enclosed in asterisks at the beginning
    inputText = inputText.replace(/^\*\w+\* /, '');

    // Regex to find text inside double quotes
    const regexQuoted = /"([^"]+)"/g;
    let dialoguesQuoted = [];
    let match;

    // Extract dialogues inside double quotes
    while ((match = regexQuoted.exec(inputText)) !== null) {
        dialoguesQuoted.push(match[1]);
    }

    // Regex to find text following an em dash
    const regexEmDash = /—([^—.]*\.?)/g;
    let dialoguesEmDash = [];

    // Extract dialogues following an em dash
    while ((match = regexEmDash.exec(inputText)) !== null) {
        dialoguesEmDash.push(match[1].trim());
    }

    // Combine all extracted dialogues
    let extractedDialogues = dialoguesQuoted.concat(dialoguesEmDash);
    console.log(extractedDialogues.join(' '));
}

// Example usage (for testing purposes)
let inputText = prompt("Enter your passage:");
extractDialogue(inputText);