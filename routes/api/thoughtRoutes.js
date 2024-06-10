// const router = require('express').Router();
// const {
//   getThoughts,
//   getSingleThought,
//   createThought,
//   updateThought,
//   deleteThought,
//   addReaction,
//   deleteReaction
// } = require('../../controllers/thoughtController.js')

// router.route('/').get(getThoughts).post(createThought);

// router.route('/:thoughtId')
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);


// router.route('/:thoughtId/reactions').post(addReaction);

// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// module.exports = router;
const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

console.log('Thought Controller:', thoughtController);

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = thoughtController;

router.route('/')
  .get(getThoughts)
  .post(createThought);

router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
