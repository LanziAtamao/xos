exports.run = function(app){
  app.locals.site = 'SountonME'
  app.locals.current = new Date().getFullYear()
}
