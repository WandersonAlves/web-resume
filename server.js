let express = require("express"),
    app = express(),
    compression = require("compression"),
    path = require("path");

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV;

app.use(compression());
app.use(require('prerender-node').set('prerenderToken', 'tpyqRIMLw4teOnaAI8FM'));
app.use('/', express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + `/index.html`));
});

app.listen(PORT);

console.log(`Runing at port ${PORT} and in ${ENV} enviroment`);
