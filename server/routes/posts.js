import express from 'express';
import { getPost, getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost); //patch is used to update existing documents
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

router.get('/search', getPostsBySearch);

router.get('/:id', getPost);

export default router;