function Model () {
}

// Just stubs for now until we hook up a database.

Model.find = function( params ) {
  return Object.assign( params, {
    'model_method': 'find',
    'sql_method': ( 'id' in params ? 'SELECT WHERE' : 'SELECT *' )
  } );
};

Model.save = function( params ) {
  return Object.assign( params, {
    'model_method': 'save',
    'sql_method': ( 'id' in params ? 'UPDATE' : 'INSERT' )
  } );
};

Model.remove = function( params ) {
  return Object.assign( params, {
    'model_method': 'remove',
    'sql_method': ( 'id' in params ? 'DELETE' : '<error>' )
  } );
};

module.exports = exports = Model;
