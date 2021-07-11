const express = require('express');
const empCtrl = require('../controllers/employees-controllers');
const router = express.Router();

router.get('/', empCtrl.getAll)
router.post('/', empCtrl.create)
router.patch('/:id', empCtrl.update)
router.delete('/:id', empCtrl.delete)

module.exports = router;