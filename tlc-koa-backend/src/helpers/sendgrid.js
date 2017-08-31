const config = require('../../config');
const sendgrid = require('sendgrid');
const FileUtils = require('../helpers/files');

const sg = sendgrid(config.SENDGRID_KEY);

module.exports = {
  async sendEmail({ from, to, subject, text, html, attachments}) {
    const helper = sendgrid.mail;

    const mail = new helper.Mail();
    mail.setFrom(new helper.Email(from));
    mail.setSubject(subject);
    if (html) {
      mail.addContent(new helper.Content('text/html', html));
    } else {
      mail.addContent(new helper.Content('text/plain', text));
    }

    const personalization = new helper.Personalization();

    const email = new helper.Email(to, "");
    personalization.addTo(email);
    mail.addPersonalization(personalization);

    if (attachments && attachments.length) {
      for (let i = 0; i < attachments.length; i++) {
        const { path, type, filename } = attachments[i];
        const attachment = new helper.Attachment();
        const content = await FileUtils.fileAsBase64(path);

        attachment.setContent(content);
        attachment.setType(type);
        attachment.setFilename(filename);
        attachment.setDisposition("attachment");
        mail.addAttachment(attachment);
      }
    }

    return await this.send(mail);
  },

  send(mail) {
    return new Promise((resolve, reject) => {
      const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
      });
      sg.API(request, function(error, response) {
        if (error) return reject(error);

        resolve(response);
      });
    });
  }
};