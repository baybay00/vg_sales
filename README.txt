The website was created by Bailey Greer and the report was written by Amani Lester. We haven't heard from Peter Lim since project 3.

The website uses React, Next.js, and Express.js as the javascript frameworks.

These frameworks alongside Node.js will need to be installed to run the website.

Axios is used to handle http requests to the database and express runs the backend server that is set up to receive the requests.

A database instance of the vgsales database will also need to be created. I used mysql workbench to import the vgsales.csv file with the Table Data Import Wizard.

Once the database instance is created the 3 arguments in the sequelize function of ./src/app/server/db.js will need to be updated with the name of the database and your username and password.

For example mine is set up like so:

const sequelize = new Sequelize('game', 'root', '12345',{
                                        host: 'localhost',
                                        dialect: 'mysql'
                                    })

Sequelize was used for the execution of queries on the database.

All packages can be installed by executing 'npm install axios cors express sequelize react body-parser mysql mysql2 next nodemon' in a terminal.

Once all dependencies are installed from the root directory .\vg_sales_site execute npm run all in a terminal and the site will be accessible at localhost:3000.

Dataset credits: https://www.kaggle.com/datasets/gregorut/videogamesales?resource=download