const express = require('express');
const router = express.Router();


router.put('/modification',(req, res) =>{
    res.send('<h1>Produit modifié</h1>');
  });
  
router.delete('/suppression',(req, res) =>{
    res.send('<h1>Produit supprimé</h1>');
  });


router.route('/creation')
.get((req, res) =>{
    res.send(`Formulaire nouveau Produit
    <form method="post">
    <label for="name">Nom du Produit</label>
    <input type="text" name="name"/>
    <input type="submit" value="cree"/>
    </form>
    `);
  })
.post((req, res) =>{
    res.send(`<h1>Produit crée </h1>`);
  });


router.get(
    '/produit/detail',
    (req, res, next) =>{
  console.log("[spy] : Access au detail u produit");
  next();
    }, (req, res) =>{
      res.send('<h1>Detail du Produit </h1>');
    }
  );
  
module.exports = router;