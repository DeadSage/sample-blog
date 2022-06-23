FROM python:3.9.0

WORKDIR usr/src/app/
ADD ./app/ usr/src/app/

RUN apt-get update
RUN apt-get install -y apt-utils postgresql-client gettext
RUN pip install --upgrade pip setuptools
RUN pip install -r ./requirements.txt
