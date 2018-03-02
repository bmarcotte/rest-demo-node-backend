const model = require( '../model/bookmarks.js' );

exports.index = function( req, res ) {
  model.find(
    Object.assign( req.body, req.params ),
    ( results ) => { res.json( results ); }
  );
};

exports.get_bookmark = function( req, res ) {
  model.find(
    Object.assign( req.body, req.params ),
    ( results ) => { res.json( results ); }
  );
};

exports.create_bookmark = function( req, res ) {
  model.save(
    Object.assign( req.body, req.params ),
    ( results ) => { res.json( results ); }
  );
};

exports.update_bookmark = function( req, res ) {
  model.save(
    Object.assign( req.body, req.params ),
    ( results ) => { res.json( results ); }
  );
};

exports.delete_bookmark = function( req, res ) {
  model.remove(
    Object.assign( req.body, req.params ),
    ( results ) => { res.json( results ); }
  );
};
