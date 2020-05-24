# Content Stack Job App

Small site for Al Beuscher's job application at contentstack. 

Built on top of Gatsby starter.

To run:
  1. install docker and docker-compose
  2. populate.env file with these variables:
    
    SERVER_HOSTNAME= <- Server hostname
    PATH_TO_CONF= <- path to Nginx config. Sample configs in /proxy/config/
    PATH_TO_CERTS= <- path to SSL Certs.

  3. docker-compose up -d