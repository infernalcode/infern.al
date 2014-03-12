var ApplicationController = {
  index: function(req, res) {
    res.view({title: 'Infernal Engineering'});
  }
};
module.exports = ApplicationController;