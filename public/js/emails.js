let emailRequestForm = document.querySelector('.email-request-form');

emailRequestForm.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('https://travello-travel.herokuapp.com/emails',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            text: document.querySelector('#message').value
        })
    }).then((res) => res.text()) //we convert the response from the server into the text format
    .then((data) => console.log(data));  
})