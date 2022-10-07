const $title = document.querySelector('h1')
function setTitle (title){
    $title.textContent = title
}


const $description = document.querySelector('p')
function setDescription (description){
    $description.textContent = description
}

const $body = document.querySelector('body')
function setBackgroundColor (color){
    $body.style.backgroundColor = color
}

function setFontColor (color){
    $body.style.color = color
}

function setTheme (theme){
 $body.className = theme
}










