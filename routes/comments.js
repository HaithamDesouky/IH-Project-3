const express = require('express');

const Comment = require('./../models/comments');
const Post = require('./../models/post');

const commentsRouter = new express.Router();

commentsRouter.post('/create', (request, response, next) => {
  const { creator, content, post } = request.body;

  Comment.create({
    creator,
    content,
    post
  })
    .then(comment => {
      return Post.findByIdAndUpdate(
        post,
        {
          $push: { comments: comment._id }
        },
        { new: true }
      );
    })
    .then(comment => {
      response.json({ comment });
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

// commentsRouter.get('/:id', (request, response, next) => {
//   const post = request.params;
//   console.log(post);
//   Comment.find({ post: post })
//     .populate('creator')
//     .then(posts => {
//       response.json({ posts });
//     })
//     .catch(error => {
//       next(error);
//     });
// });
// commentRouter.get('/list', (request, response, next) => {
//   Comment.find()
//     .populate('creator')
//     .then(comments => {
//       response.json({ comments });
//     })
//     .catch(error => {
//       next(error);
//     });
// });

// commentRouter.get('/:id', async (request, response, next) => {
//   const id = request.params.id;
//   try {
//     const comment = await comment.findById(id).populate('creator');
//     if (comment) {
//       response.json({ comment });
//     } else {
//       next();
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// commentRouter.delete(
//   '/:id',
//   routeAuthenticationGuard,
//   async (request, response, next) => {
//     const id = request.params.id;

//     comment.findOneAndDelete({ _id: id, creator: request.user._id })
//       .then(() => {
//         response.json({});
//       })
//       .catch(error => {
//         next(error);
//       });
//   }
// );

// commentRouter.patch(
//   '/:id',
//   routeAuthenticationGuard,
//   (request, response, next) => {
//     const id = request.params.id;

//     comment.findOneAndUpdate(
//       { _id: id, creator: request.user._id },
//       { content: request.body.content },
//       { new: true }
//     )
//       .then(comment => {
//         response.json({ comment });
//       })
//       .catch(error => {
//         next(error);
//       });
//   }
// );

module.exports = commentsRouter;
