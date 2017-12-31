import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import TeacherCommentGetter from '../services/teacherComment-getter';

function get(request, response, next) {
  TeacherCommentGetter(request.params)
    .then(teacherComment => response.send(teacherComment))
    .catch(next);
}

module.exports = app => {
  app.get('/api/teacherComment/:exerciseId/:userAnswer', ensureAuthenticated, get);
};
