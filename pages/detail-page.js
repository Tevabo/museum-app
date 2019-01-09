
// add event handler
function submitComment(){
    // gather data
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    // create new elements
    const comment = document.createElement('section');
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // reassigning variables
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    
    //display a comment
    const commentSection = document.getElementById('comments');
    console.log(commentSection);
    commentSection.appendChild(comment);

    //reset the input fields
    inputField.value = null;
    textArea.value = null;
}

