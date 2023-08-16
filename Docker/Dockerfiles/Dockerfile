FROM ubuntu:18.04
LABEL maintainer="anji@gmail.com"

RUN apt-get update && apt-get -y install apache2
EXPOSE 88

ENTRYPOINT ["/usr/sbin/apachectl"]
CMD ["D","FOREGROUND"]