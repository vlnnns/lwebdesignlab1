// Getting references to HTML elements
const orderButtons = document.querySelectorAll('.orderBtn');
const commentBox = document.getElementById('commentBox');
const addCommentBtn = document.getElementById('addCommentBtn');
const commentList = document.getElementById('commentList');
const elementsWithClass = document.getElementsByClassName('orderBtn')
const listItems = document.getElementsByTagName("p");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function (){
        this.style.fontStyle = "Italic";
    })
    listItems[i].addEventListener("mouseout", function (){
        this.style.fontStyle = "";
    })
}

function handleOrderClick(event) {
    const itemName = event.target.getAttribute('data-item');
    alert(`Ordered: ${itemName}`);
}

// Function to add a comment
function addComment() {
    const commentText = commentBox.value.trim();
    if (commentText !== '') {
        const newComment = document.createElement('li');
        newComment.innerText = commentText;
        commentList.appendChild(newComment);
        commentBox.value = '';
    }
}

for (let i = 0; i < elementsWithClass.length; i++) {
    elementsWithClass[i].addEventListener("mouseover", function () {
        this.textContent = "Serious?"; // Change the text content when the cursor is over the element
    });

    elementsWithClass[i].addEventListener("mouseout", function () {
        this.textContent = "Order"; // Restore the original text content when the cursor leaves the element
    });
}
// Adding event listeners
orderButtons.forEach(button => {
    button.addEventListener('click', handleOrderClick);
});

addCommentBtn.addEventListener('click', addComment);
