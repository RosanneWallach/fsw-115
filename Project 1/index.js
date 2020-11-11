  
let postmanData = JSON.parse(`[
    {"School":"CUNY Kingsborough", "lengthOfTime" : 2 , "lengType" : "years"}, {"School":"CUNY Brooklyn", "lengthOfTime" : 1 , "lengType" : "years"},{"School":"CUNY Medgar Evers", "lengthOfTime" : 1 , "lengType" : "years"}, {"School":"Bryan University", "lengthOfTime" : 1 , "lengType" : "months"}
] `)

const assignment = document.querySelector('#example');
assignment.innerHTML = '<ul>' + postmanData.map((value) =>  
     `<li>I lived in ${Object.values(value)[0]} for ${Object.values(value)[1]} ${Object.values(value)[2]}  </li>`
     ).join('') + '</ul>'