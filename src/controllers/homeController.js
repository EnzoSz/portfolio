//creamos el objeto controller
const homeController = {
  //creamos el metodo index
  index: (req, res) => {
    res.render("home");
  },
};

//exportamos el objeto
module.exports = homeController;