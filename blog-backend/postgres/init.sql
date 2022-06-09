CREATE USER app_user with password 'tes1_passw0rd';
CREATE DATABASE app_db;
GRANT ALL PRIVILEGES ON DATABASE app_db TO app_user;
ALTER USER app_user CREATEDB;
