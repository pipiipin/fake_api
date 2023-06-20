const jsonServer = require("json-server");
const db = require('./db.json');

const transformData = () => {
  const contents = db.map((content, index) => ({
    ...content,
    image: `https://picsum.photos/id/${index + 1}/555/333`,
  }));

  return { contents };
};

const server = jsonServer.create();
const router = jsonServer.router(transformData());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
