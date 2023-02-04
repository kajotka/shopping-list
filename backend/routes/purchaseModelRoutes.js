const router = require('express').Router();

const PurchaseModel = require('../models/purchaseModel');

router.route('/').get((req, res) => {
    PurchaseModel.find()
        .then(purchases => res.json(purchases))
        .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const price = Number(req.body.price);

    const newPurchase = new PurchaseModel({
        name,
        category,
        price,
    });

    newPurchase.save()
        .then(() => res.json('Purchase added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;