/* eslint-disable no-console */
import { mail as helper} from 'sendgrid';
import sendgrid from 'sendgrid';
import P from 'bluebird';

// Docs on how to use templates with sendgrid and nodejs:
// https://github.com/sendgrid/sendgrid-nodejs/blob/master/USE_CASES.md#transactional_templates

function Mailer(recipient, subject, template, params) {
  function isSendgridConfigured() {
    return process.env.SENDGRID_API_KEY && process.env.SENDGRID_SENDER;
  }

  this.perform = () => {
    return new P((resolve, reject) => {
      if (isSendgridConfigured()) {
        const fromEmail = new helper.Email(process.env.SENDGRID_SENDER);
        const toEmail = new helper.Email(recipient);
        const content = new helper.Content(
          'text/html',
          'Good luck with your studies! You can contact us any time if you have any question or comment regarding the Chinese language or ChineseMe.' // Replaces the body that is required by Sendgrid
        );
        const mail = new helper.Mail(fromEmail, subject, toEmail, content);
        params.forEach(param => {
          mail.personalizations[0].addSubstitution(
            new helper.Substitution(param[0], param[1])
          );
        });
        mail.setTemplateId(template);

        const sg = sendgrid(process.env.SENDGRID_API_KEY);
        const request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON()
        });

        sg.API(request, (error, response) => {
          if (error) {
            console.log('Error response received');
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
            return reject(error);
          }
          console.log('Email sent to: ' + recipient);
          console.log('TemplateId: ' + template);
          return resolve();
        });
      } else {
        resolve();
      }
    });
  };
}

export default Mailer;
