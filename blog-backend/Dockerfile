# pull official base image
FROM python:3.8.2-alpine

# set work directory
WORKDIR /usr/src/app/



# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1



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
ADD ./blog-backend/ /usr/src/app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
