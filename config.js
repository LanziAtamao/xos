exports.run = function(app){
  app.locals.site = 'SountonME'
  app.locals.current = new Date().getFullYear()
  app.locals.description = 'geomatic, géomatique, benin, javascript, node, express, modelisation'
  app.locals.author = 'Hodonou Sounton'
}
