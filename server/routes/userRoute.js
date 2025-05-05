import express from 'express';
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavorites, toFav } from '../controllers/userController.js';

const router = express.Router()

router.post('/register', createUser);
router.post('/bookVisit/:id',bookVisit);
router.get('/allBookings', getAllBookings);
router.post('/removeBooking/:id', cancelBooking);
router.post('/toFav/:rid', toFav);
router.get('/allFav', getAllFavorites);

export {router as userRoute};