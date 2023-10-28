import smtplib
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.header import Header
from loguru import logger


class EmailTool:
    """封装邮箱功能"""

    def __init__(self, host, user, password, _from='邮件提醒', **kwargs):
        """
        host: smtp.exmail.qq.com
        """
        self.user = user
        self._from = _from
        try:
            self.smtp = smtplib.SMTP_SSL(host, **kwargs)
            self.smtp.login(user, password)
        except smtplib.SMTPException as e:
            logger.error(e)

    @staticmethod
    def _from_to_user(to_user):
        receivers = []
        if isinstance(to_user, str):
            if ',' in to_user:
                receivers = to_user.split(',')
            else:
                receivers.append(to_user)
        elif isinstance(to_user, list):
            receivers = to_user
        else:
            raise TypeError('Type error, receiver should be list or str')
        return receivers

    def send_text(self, to_user, subject, content):
        """
        发送文本
        to_user: 对方邮箱
        subject: 邮件主体
        content: 邮件内容
        """
        receivers = self._from_to_user(to_user)
        msg = MIMEText(content, _subtype='plain', _charset='utf-8')
        msg['From'] = Header(self._from, 'utf-8')
        msg['To'] = Header(','.join(receivers), 'utf-8')
        msg['Subject'] = Header(subject, 'utf-8')
        self.smtp.send_message(msg, from_addr=self.user, to_addrs=receivers)

    def send_file(self, to_user, subject, content, file_path, file_name):
        """
        发送文件
        to_user: 对方邮箱
        subject: 邮件主体
        content: 邮件内容
        file_path: 文件路径
        file_name: 文件名称
        """
        receivers = self._from_to_user(to_user)
        msg = MIMEMultipart()
        msg['From'] = Header(self._from, 'utf-8')
        msg['To'] = Header(','.join(receivers), 'utf-8')
        msg['Subject'] = Header(subject, 'utf-8')

        msg_text = MIMEText(content, _subtype='plain', _charset='utf-8')
        msg.attach(msg_text)

        with open(file_path, 'rb') as f:
            file_content = f.read()

        msg_file = MIMEApplication(file_content)
        msg_file.add_header('Content-Disposition', 'attachment', filename=file_name)
        msg.attach(msg_file)

        self.smtp.send_message(msg, from_addr=to_user, to_addrs=receivers)


# 初始化邮件
# email = EmailTool('smtp.exmail.qq.com', 'aaa', 'bbb')