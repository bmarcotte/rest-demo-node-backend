const express             = require( 'express' );
const router              = express.Router();
const bookmark_controller = require( '../controller/bookmarks' );

router.route( '/bookmarks' )
  .get( bookmark_controller.index );

router.route( '/bookmark/:id' )
  .get(    bookmark_controller.get_bookmark    )
  .put(    bookmark_controller.update_bookmark )
  .delete( bookmark_controller.delete_bookmark );

router.route( '/bookmark' )
  .get(    bookmark_controller.get_bookmark    )
  .post(   bookmark_controller.create_bookmark )
  .put(    bookmark_controller.update_bookmark )
  .delete( bookmark_controller.delete_bookmark );

module.exports = router;
