//AJAX
const url = 'example.com/data';

fetch(url)
    .then((response) => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => {
        //do something with the response
    })
    .catch(error => console.log('there was an error'));


//redirects
fetch(url).then(response => response.redirect(newURL))// redirects to another URL
    .then(response => {
    }) // do something else
    .catch(error => console.log('There was an error: ', error));

//text responses
fetch(url).then(response => response.text()) // transforms the text stream into a JavaScript string
    .then(text => console.log(text))
    .catch(error => console.log('There was an error: ', error));

//file responses
fetch(url).then(response => response.blob()) // transforms the text stream into a JavaScript string
    .then(blob => console.log(blob.type))
    .catch(error => console.log('There was an error: ', error));

//JSON
fetch(url).then(response => response.json()) // transforms the text stream into a JavaScript string
    .then(data => console.log(Object.entries(data)))
    .catch(error => console.log('There was an error: ', error));


//Creating Response Objects
const response = new Response('Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});

//Request Interface
/*const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors', redirect: 'follow', cache: 'no-cache'
});*/

const headers = new Headers({
    'Content-Type': 'text/plain',
    'Accept-Charset': 'utf-8',
    'Accept-Encoding': 'gzip,deflate'
})
const request = (url, {headers: headers});
//put in request instead of url into fetch.

//AJAX example
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL).then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
        .then(response => response.text()).then(text => outputDiv.innerText = text)
        .catch(error => console.log('There was an error:', error
        ))
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL).then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    }).then(response => response.json()).then(data => outputDiv.innerText = data.value)
        .catch(error => console.log('There was an error:', error))
}, false);

//To Do List: Sending info

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const task = new FormData(form);
    // const number = form.task.value;
   // const task = {userId: 1, title: form.task.value, completed: false}
    const data = JSON.stringify(task);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
    const request = new Request(url, {method: 'POST', mode: 'cors', header: headers, body: data})
    fetch(request).then(response => response.json()).then(task => console.log(`${task.title} saved with an id of ${task.id}`))
    .catch( error => console.log('There was an error:', error));
}

//Example of generalized request object
// const request = new Request(form.action, { method: form.method, header: headers, body: data } );


