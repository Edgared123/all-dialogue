function processPassage(passage) {
    function replaceMatch(match, p1) {
        let words = p1.split(' ');
        if (words.length > 2) {
            return ' ';
        } else {
            return match + ' ';
        }
    }

    let processedPassage = passage.replace(/[*—](.*?)[*—]/g, replaceMatch);
    processedPassage = processedPassage.replace(/\s{2,}/g, ' ').trim();
    processedPassage = processedPassage.replace(/"/g, ' ').trim();
    processedPassage = processedPassage.replace(/ +/g, ' ');

    return processedPassage;
}

function extractDialogue() {
    let inputText = document.getElementById('inputText').value;
    let result = processPassage(inputText);

    if (!result) {
        document.getElementById('inputText').textContent = 'No dialog found.';
    } else {
        document.getElementById('inputText').textContent = result;
    }
}
document.getElementById('extractButton').addEventListener('click', extractDialogue);