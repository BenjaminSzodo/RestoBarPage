const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');
const promosController = require('../controllers/promosCrontroller');


router.get('/menus', menuController.getAllMenu);
router.get('/promo', promosController.getAllPromos);

router.put('/updatedmenu',menuController.updateMenu);
router.put('/updatedpromo',promosController.updatePromo);

router.post('/menu', menuController.createMenu);
router.post('/promos', promosController.createPromos);

router.delete('/deletemenu',menuController.deleteMenuById);
router.delete('/deletepromo',promosController.deletePromoById);


module.exports = router;
