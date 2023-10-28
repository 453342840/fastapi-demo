FROM python:3.9

WORKDIR /demo
COPY ./requirements.txt /demo/requirements.txt
RUN pip install --no-cache-dir -r /demo/requirements.txt -i https://mirrors.aliyun.com/pypi/simple/

ENV TZ=Asia/Shanghai

CMD ["uvicorn", "apps.user.main:app", "--host", "0.0.0.0", "--port", "8080"]





