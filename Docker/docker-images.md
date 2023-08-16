### Docker Images

--- Images will give writeble layer to write the code in local

- `docker history <image>`

this command is to get the history of Image layees

- `docker pull <image>`
  this is used to pull the image

  1. docker pull NGINX
  2. docker pull mysql:latest

- `docker rmi <image>`
  this will remove all the layers of the image

### Pushing images to docker hub

`docker tag <tag_name> <image_name>:<version>`
This will create a TAG to our image.

`docker push <tag_name>`
This will push the docker images to docker hug which is having tag name <tag_name>
