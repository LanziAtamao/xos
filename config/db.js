exports.dev = function (mongoose) {
  mongoose.connect('mongodb://localhost/rino', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('mongodb is up and running ...');
    }
  })
}

exports.prod = function (mongoose) {
  mongoose.connect('mongodb://localhost/rino', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('mongodb is up and running ...');
    }
  })
}
