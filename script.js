document.getElementById('extractTable').addEventListener('click', function () {
    const inputText = document.getElementById('inputText');
    let passage = inputText.value;

    function replaceMatch(match, p1) {
        const words = p1.trim().split(/\s+/);
        if (words.length > 2) {
            return " "; // Return a space to ensure space between dialogues
        } else {
            return match + " "; // Return the original match plus a space for spacing
        }
    }

    // Use regex to find text within asterisks or em dashes and apply the replace function
    passage = passage.replace(/[*—](.*?)[*—]/g, replaceMatch);

    // Remove extra spaces, including those at the end of the passage
    passage = passage.replace(/\s{2,}/g, ' ').trim();

    // Remove all quotation marks from the processed passage
    passage = passage.replace(/"+/g, ' ').trim();

    // Ensure only single spaces throughout
    passage = passage.replace(/\s+/g, ' ');

    inputText.value = passage; // Output back to the textarea
});