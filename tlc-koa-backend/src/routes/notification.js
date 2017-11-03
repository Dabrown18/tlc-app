const router   = require('koa-router')();
const NotificationService = require('../services/notification-service');
const config = require('../../config');

async function getSingleNotification(ctx) {
  try {
    const { id } = ctx.params;

    const notification = await NotificationService.getById(id);

    if (!notification) {
      return ctx.notFound({
        error: 'Notification not found'
      });
    }

    ctx.body = {
      status: 1,
      notification
    };
  } catch( e ) {
    ctx.log.error('Error on getSingleNotification()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function getNotifications(ctx) {
  try {
    const notifications = await NotificationService.getUserNotifications(ctx.user.id);

    ctx.body = {
      status: 1,
      notifications
    };
  } catch( e ) {
    ctx.log.error('Error on getNotifications()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function deleteNotification(ctx) {
  try {
    const { id } = ctx.params;

    await NotificationService.deleteNotification(id);

    ctx.ok({
      status: 1
    });
  } catch( e ) {
    ctx.log.error('Error on deleteNotification()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function markNotificationAsRead(ctx) {
  try {
    const { id } = ctx.params;

    await NotificationService.markNotificationAsRead(id);

    ctx.ok({
      status: 1
    });
  } catch( e ) {
    ctx.log.error('Error on deleteNotification()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .get('/notifications/:id', getSingleNotification)
  .get('/notifications', getNotifications)
  .post('/notifications/:id/read', markNotificationAsRead)
  .delete('/notifications/:id', deleteNotification);


module.exports = router;