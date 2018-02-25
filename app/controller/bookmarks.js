const model = require( '../model/bookmarks.js' );

function get_params( req ) {
  return Object.assign(
    {
      'method': req.method,
      'path': req.path
    },
    req.body,
    req.params
  );
}

exports.index = function( req, res ) {
  res.json(
    model.find( get_params( req ) )
  );
};

exports.get_bookmark = function( req, res ) {
  res.json(
    model.find( get_params( req ) )
  );
};

exports.create_bookmark = function( req, res ) {
  res.json(
    model.save( get_params( req ) )
  );
};

exports.update_bookmark = function( req, res ) {
  res.json(
    model.save( get_params( req ) )
  );
};

exports.delete_bookmark = function( req, res ) {
  res.json(
    model.remove( get_params( req ) )
  );
};
