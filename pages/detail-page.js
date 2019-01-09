//test empty input
function doesNotPassValidations(name,msg) {
    if (!name && !msg) {
        alert('Both fields are empty! You must have misclicked \'Post your comment\'.');
        return true;
    }

    if (!name) {
        alert('A girl has no name?');
        return true;
    }

    if (!msg) {
        alert('You forgot to include a message!');
    }

    if (msg.length > 280){
        alert('Write less. Ain\'t nobody got time fo\' dat.');
        return true;
    }
    return false;
}
// add event handler
function submitComment(){
    // gather data
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    //Check for errors

    if(doesNotPassValidations(name,msg)) {
        return null;
    }

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
    commentSection.appendChild(comment);

    //reset the input fields
    inputField.value = null;
    textArea.value = null;       
}