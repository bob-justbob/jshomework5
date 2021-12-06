const form = document.querySelector('.form')
const ul = document.querySelector('ul')
const input = document.querySelector('input[name="thing"]')
 

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

        li.appendChild(button)
        li.appendChild(span)
        ul.appendChild(li)



        
        input.value = '';
        input.focus(); 
}  
})
