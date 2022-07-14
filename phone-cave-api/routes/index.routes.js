const phoneData = require('../db/phones.json')

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).json(phoneData)
});

router.get("/:id", (req, res, next) => {
  const phoneId = parseInt (req.params.id)
  const phoneDitails = phoneData.filter(phone => phone.id === phoneId)
  if(phoneDitails.length !== 0){
    res.status(200).json(phoneDitails[0])
  }else{
    res.status(404).json(`No phone found with id : ${phoneId}`)
  }
});

module.exports = router;
