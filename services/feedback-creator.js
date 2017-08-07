import models from '../models';

export default function FeedbackCreator(data) {
  const { subject, message, userId } = data;
  if (!message) {
    throw { status: 400, message: 'feedback_message_required' };
  }
  return models.feedback
    .create({ subject, message, userId });
}
