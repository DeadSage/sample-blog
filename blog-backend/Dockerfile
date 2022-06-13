# pull official base image
FROM python:3.8.2-alpine


# set work directory
WORKDIR /usr/src/app



# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1



# install libraries
RUN apk add --no-cache \
--update \
g++ \
gcc \
git \
jpeg-dev \
zlib-dev \
musl-dev \
openssl \
libffi-dev \
libressl-dev \
postgresql-dev \
libstdc++ \
libxslt-dev \
freetype-dev \
linux-headers \
python3-dev



# install dependencies
COPY ./requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt



# copy entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh


# copy our django project
COPY ./app .



## run entrypoint.sh
#RUN chmod +x /usr/src/app/entrypoint.sh
#ENTRYPOINT ["/usr/src/app/entrypoint.sh"]