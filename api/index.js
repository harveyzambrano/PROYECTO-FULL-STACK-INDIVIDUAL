//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getTypes} = require("./src/controllers/TypeDiets.js")
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port,async () => {
    await getTypes(); // para cargar los tipos de dietas desde un inicio
    console.log(`Server raised in port ${port}`); // eslint-disable-line no-console
  });
});






/* const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getTypes} = require("./src/controllers/TypeDiets.js")

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001,async () => {
    await getTypes();
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}); */