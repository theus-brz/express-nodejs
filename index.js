require('./config/connect');
const app = require('./config/app');

app.listen(3000, () => {
  console.log("server running");
});
