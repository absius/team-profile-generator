const generateCards = (templateData) => {

            return`
            <div class="container">
        <div class="row">
            ${templateData
                .filter(function(role) {
                    if (role.role != "Manager") {
                      return false; // skip
                    } return true;
                })
                //.filter(({ role }) => role)
                .map(({ name, id, email, role, github, officeNumber, school }) => {
                    return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${role}</h5>
              <p class="card-text">Name: ${name}</p>
              <p class="card-text">Employee Id: ${id}</p>
              <a href="mailto:${email}">Email Address: ${email}</a>
              <p class="card-text">Office Number: ${officeNumber}</p>
              </div>
              </div>
              `;
            })
            .join('')}
            ${templateData
                .filter(function(role) {
                    if (role.role != "Engineer") {
                      return false; // skip
                    } return true;
                })
                //.filter(({ role }) => role)
                .map(({ name, id, email, role, github, officeNumber, school }) => {
                    return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${role}</h5>
              <p class="card-text">Name: ${name}</p>
              <p class="card-text">Employee Id: ${id}</p>
              <a href="mailto:${email}">Email Address: ${email}</a>
              <a href="#" class="btn btn-primary">https://github.com/${github}</a>
              </div>
              </div>
              `;
            })
            .join('')}
            ${templateData
                .filter(function(role) {
                    if (role.role != "Intern") {
                      return false; // skip
                    } return true;
                })
                //.filter(({ role }) => role)
                .map(({ name, id, email, role, github, officeNumber, school }) => {
                    return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${role}</h5>
              <p class="card-text">Name: ${name}</p>
              <p class="card-text">Employee Id: ${id}</p>
              <a href="mailto:${email}">Email Address: ${email}</a>
              <p class="card-text">Office Number: ${school}</p>
              </div>
              </div>
              `;
            })
            .join('')}
   </div>
   </div>
          `;
        

};

  
  module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
        <h1>Team Profile</h2>
        </div>
      </header>
      <main class="container my-5">
        ${generateCards(templateData)}
      </main>
      <footer class="container text-center py-3">
      
      </footer>
    </body>
    </html>
    `;
  };