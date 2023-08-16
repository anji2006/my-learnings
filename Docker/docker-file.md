### Dockerfile

Docker File is uses for Build the Images with our own content

### Docker file Attributes

---

### FROM

defines the base image used to start the build process.
ex:-- NGINX,MYSQL ...

### ADD

copies the files from a source on the host into the <container's> Own
filesystem at the set destination.

Using ADD we can copy the source with <source_url> in COPY It won't work.
If we ADD .zip file it will extract the file and push it into image.

### COPY

copies the files from a source on the host into the <container's> Own
filesystem at the set destination.

This command should be used with if the content is present in the local host machine.
If we COPY .zip file it will push it into image directly.

### CMD

can be used for executing specific command within the container.

### ENTRYPOINT

set's a default application to be used every time a container is created with the image.

### ENV

set's Environment varibles.

### EXPOSE

Uses to assosiate a specific port to enable networking between container and outside.

### MAINTAINER

This defines Full name email address of the image creator.

### LABEL

allows you to add a lable to your docker Image.

### RUN

    This is the central executing directive for Dockerfiles.

### USER

set UID (username) which is to run the container.

### VOLUME

This is used to enable the access from Container to host machine directory.

### WORKDIR

sets the Path where the command, defined with <CMD> is to be executed.
