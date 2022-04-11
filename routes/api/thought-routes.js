const router = require('express').Router();


const { 
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction

} = require('../../controllers/thought-controller');

// -- Directs to: /api/thoughts <GET>
router.route('/').get(getAllThoughts);

// -- Directs to: /api/thoughts/:userId <POST>
router.route('/:userId').post(addThought);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router.route('/:id').get(getThoughtById).put(updateThought); 

// -- Directs to: /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

// -- Directs to: /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(addReaction);

// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

// Export module router
module.exports = router;