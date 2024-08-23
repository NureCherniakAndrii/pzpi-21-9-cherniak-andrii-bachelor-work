const { Router } = require('express');
const userRouter = require('./userRouter');
const ticketTypeRouter = require('./ticketTypeRouter');
const ticketStatusRouter = require('./ticketStatusRouter');
const ticketRouter = require('./ticketRouter');
const storeRouter = require('./storeRouter');
const roleRouter = require('./roleRouter');
const promStatusRouter = require('./promStatusRouter');
const promotionRouter = require('./promotionRouter');
const treningRouter = require('./treningRouter');
const productRouter = require('./productRouter');

const indexRouter = Router();

indexRouter.use('/user', userRouter);
indexRouter.use('/ticket-type', ticketTypeRouter);
indexRouter.use('/ticket-status', ticketStatusRouter);
indexRouter.use('/ticket', ticketRouter);
indexRouter.use('/store', storeRouter);
indexRouter.use('/role', roleRouter);
indexRouter.use('/prom-status', promStatusRouter);
indexRouter.use('/promotion', promotionRouter);
indexRouter.use('/trening', treningRouter);
indexRouter.use('/product', productRouter);

module.exports = indexRouter;
