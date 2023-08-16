### docker operaitions

`docker login <url[optional]>`

-`docker search <imagename>`
this will search the docker images

-`docker pull <image>`
this will pull the image to docker engine

- `docker inspect <image | volume | network> <imagename>`
  this will inspect the image for specific use

- `docker images`
  this will show all images in the local

- `docker create <image_id>`
  this will create containe from image

- `docker start <container_id or conatainerName>`
  this will start the container

- `docker stop <container_id or container_name>`
  this will stop the container

- `docker create --name <Custom_name> <image_id>`
  this will create a container with custome name

## docker run --name <custome_name> <image>

this will create and start the container for the image and login into container

## docker run -d --name <custome_name> <image>

this will create and start the container in detached mode

## docker kill <container>

this will stop container with forcefull shut down

# docker exec -it <container_name> /bin/bash

-`exec` this will execution for the container -`-it` i--> interactive t--> terminal -`/bin/bash` this where we need to interact

## removiing conatiner and images

-`docker rm <container_name>`
this will remove contaienr which is stop state -`docker rmi <image_id>`
this will remove image which is not reff ..
to remove this image we need to remove the container which is taking ref from that image.

## Removing Multiple Image, Containers or Volumes

`docker rmi $(docker images -f "dangling=true" -q)`
docker rmi $(<result of loop>)

