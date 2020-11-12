axios.get("https://api.vschool.io/RosanneWallach/todo")
  
.then(res => 
    {
        for(let i = 0; i < res.data.length; i++)
        {
			const h1 = document.createElement('h1')
			h1.textContent = res.data[i].title
            document.body.append(h1)
        }
    })


let todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    let title = document.querySelector('title').value
    let price = document.querySelector('price').value
    let description = document.querySelector('description').value

    let newTodo = 
    {
        Title: title,
        Price: price,
        Description: description
    }

    axios.post("https://api.vschool.io/RosanneWallach/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})

