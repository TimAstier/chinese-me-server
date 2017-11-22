import models from '../models';

export default function FeedbackCreator(data, userId) {
  const { email, subject, message } = data;
  if (!message) {
    throw { status: 400, message: 'feedback_message_required' };
  }
  return models.feedback
    .create({ email, subject, message, userId });
}
