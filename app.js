const form = document.querySelector('.form')
const ul = document.querySelector('ul')
const input = document.querySelector('input[name="thing"]')
const logbutton = document.querySelector('.logbutton')
const loggbutton = document.querySelector('.loggbutton')
const errorMsg = document.getElementById('errorMSg')
const exit = document.querySelector('.exit')
 

logbutton.addEventListener("click", function(event){
    event.preventDefault();
    const popup = document.querySelector('.popup')
    popup.style.display = "flex"
    
    exit.onclick = function(){
        popup.remove();
        return;
    }
});



loggbutton.addEventListener('click', function(event){
    event.preventDefault();
    errorMsg.value = "";
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == "" || password == "") {
        
        errorMsg.textContent = "user or passord are incorect try again"
    } 

})




form.addEventListener('submit', (event) =>{
    event.preventDefault();

    if(input.value.trim()){   
        const button = document.createElement('button')
        button.type = 'button '
        button.textContent = "remove"

        button.onclick = function(){
            button.parentElement.remove()
            return;
        };

        
        const span =document.createElement('span')
        span.textContent = input.value;

        const li = document.createElement('li')
        li.style.textDecoration = "none"

        li.appendChild(button)
        li.appendChild(span)
        ul.appendChild(li)



        
        input.value = '';
        input.focus(); 
}  
})
