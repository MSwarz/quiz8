var express = require('express');
var router = express.Router(); // generamos un enrutador basico

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: [] });
});

// Autoload de comandos con :quizId  lo instalamos antes de show y answer
router.param('quizId', quizController.load);  // se instala con metodo param sólo si contiene 'quizId' en el url

//atender peticiones. Definicion de rutas
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new', quizController.new);
router.post('/quizes/create', quizController.create);
router.get('/quizes/:quizId(\\d+)/edit', quizController.edit);
router.put('/quizes/:quizId(\\d+)', quizController.update);


router.get('/author', function(req, res) {
  res.render('author', { hechopor: 'Manuel Suárez', errors: [] });
});



module.exports = router;
