const generateAbout = (templateData) => {
  // console.log(employeeArray);
  
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${templateData
            .filter(({ role }) => role)
            .map(({ name, id, email, role }) => {
              return `
              <div class="col-12 mb-2 bg-dark text-light p-3">
                <h3 class="portfolio-item-title text-light">${name}</h3>
                <h5 class="portfolio-languages">
             
                </h5>
                <p>${email}</p>
                <a href="${id}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
              </div>
            `;
            })
            .join('')}
        </p>
      </section>
    `;
  };

  
  module.exports = templateData => {
      console.log(templateData);
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
        </div>
      </header>
      <main class="container my-5">
        ${generateAbout(templateData)}
      </main>
      <footer class="container text-center py-3">
      
      </footer>
    </body>
    </html>
    `;
  };