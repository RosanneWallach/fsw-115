fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json() )
.then(res => {
    for (let i = 0; i < res.results.length; i++){
        const h1 = document.createElement('h1')
        h1.setAttribute("id", "first")
        h1.textContent = res.results[i].name
        document.body.appendChild(h1)

    }
})

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(res => res.json()  )
.then(res => {
  for (let i = 0; i < res.results.length; i++) {
      const h1 = document.createElement('h1')
      h1.setAttribute("id", "third")
      h1.textContent = res.results[i].name
      document.body.appendChild(h1)
  }
})

      fetch("https://swapi.dev/api/people/")
      .then(res => res.json()  )
      .then(res => {
          for (let i = 0; i < res.results.length; i++) {
              const h2 = document.createElement('h2')
              h2.setAttribute("id", "second")
              h2.textContent = res.results[i].name
              document.body.appendChild(h2)
          }

})
