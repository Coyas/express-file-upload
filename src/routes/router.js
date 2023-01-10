const exp = require("express")

const router = exp.Router()

// importar controllers
const uploadController = require('../controllers/uploadController');

router.get('/subi', uploadController.uploadFile);

router.get('/', (req, res) => res.status(200).send("Ola mundo"))

module.exports = router;