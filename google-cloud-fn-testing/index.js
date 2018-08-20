exports.helloworld = function(req, res) {
  var name = req.query.name || 'world'
  res.status(200).send('hello' + name)
}


