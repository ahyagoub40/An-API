// fake data
const users = [{
  id: 1,
  name: "Richard Hendricks",
  email: "richard@piedpiper.com",
},
{
  id: 2,
  name: "Bertram Gilfoyle",
  email: "gilfoyle@piedpiper.com",
},
];

// our routes
const router = app => {
  app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send({ message: 'Hello, Server' });
  });
  app.get('/users', (request, response) => {
    response.send(users);
  });
};

module.exports = router;