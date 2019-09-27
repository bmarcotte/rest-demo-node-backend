const sqlite3 = require( 'sqlite3' ).verbose();
const path    = require( 'path' );

function Model () {
}

let dbconn = null;
let dbfile = null;

Model.dbfile = function() {
  if ( dbfile === null ) {
    dbfile = process.env.DBFILE || '../data/bookmarks.db';
    if ( dbfile.charAt( 0 ) !== '/' ) {
      dbfile = path.resolve( __dirname, dbfile );
    }
  }

  return dbfile;
};

Model.open_db = function() {
  const dbfile = Model.dbfile();

  if ( dbconn === null ) {
    dbconn = new sqlite3.Database(
      dbfile,
      sqlite3.OPEN_READWRITE,
      ( err ) => {
        if ( err ) {
          console.error( err.message );
        }
      }
    );
  }

  return dbconn;
};

Model.close_db = function() {
  if ( dbconn === null ) {
    return;
  }

  dbconn.close(
    ( err ) => {
      if ( err ) {
        return console.error( err.message );
      }
      dbconn = null;
    }
  );
};

function error_handler( callback, message, params ) {
  console.error( 'ERROR: ' + message );
  if ( typeof params !== 'undefined' ) {
    console.error( 'params: ' + JSON.stringify( params ) );
  }

  return callback( { 'error': message } );
}

function response_handler( callback, rows_key, err, rows ) {
  let response_params = {};

  if ( err ) {
    response_params[ 'err' ] = err.message;
  }
  if ( rows ) {
    response_params[ rows_key ] = rows;
  }

  return callback( response_params );
}

Model.find = function( request_params, callback ) {
  let dbconn = Model.open_db();
  if ( ! dbconn ) {
    return error_handler(
      callback,
      "Couldn't find valid dbconn!",
      { 'request_params': request_params }
    );
  }

  if ( 'id' in request_params ) {
    dbconn.get(
      'SELECT * FROM bookmarks WHERE id = $id',
      { '$id': request_params[ 'id' ] },
      response_handler.bind( this, callback, 'bookmark' )
    );
  }
  else {
    dbconn.all(
      'SELECT * FROM bookmarks',
      response_handler.bind( this, callback, 'bookmarks' )
    );
  }
};

function do_query( sql, query_params, callback ) {
  let dbconn = Model.open_db();
  if ( ! dbconn ) {
    return error_handler(
      callback,
      "Couldn't find valid dbconn!",
      {
        'sql': sql,
        'query_params': query_params
      }
    );
  }

  dbconn.run(
    sql,
    query_params,
    function ( err ) {
      let response_params = {};

      if ( this ) {
        response_params[ 'rows_affected' ] = ( typeof this.changes !== 'undefined' )
          ? this.changes
          : 0;
        if ( ! query_params[ '$id' ] && typeof this.lastID !== 'undefined' ) {
          response_params[ 'lastID' ] = this.lastID;
        }
      }

      if ( err ) {
        response_params[ 'err' ] = err.message;
      }

      return callback( response_params );
    }
  );
}

Model.save = function( request_params, callback ) {
  if ( 'id' in request_params ) {
    return do_query(
      'UPDATE bookmarks SET name = $name, url = $url WHERE id = $id',
      {
        '$id':   request_params[ 'id'   ],
        '$name': request_params[ 'name' ],
        '$url':  request_params[ 'url'  ]
      },
      callback
    );
  }

  return do_query(
    'INSERT INTO bookmarks ( name, url ) VALUES ( $name, $url )',
    {
      '$name': request_params[ 'name' ],
      '$url':  request_params[ 'url'  ]
    },
    callback
  );
};

Model.remove = function( request_params, callback ) {
  if ( ! request_params[ 'id' ] ) {
    return error_handler(
      callback,
      'No id requested to delete!',
      { 'request_params': request_params }
    );
  }

  return do_query(
    'DELETE FROM bookmarks WHERE id = $id',
    { '$id': request_params[ 'id' ] },
    callback
  );
};

module.exports = exports = Model;
