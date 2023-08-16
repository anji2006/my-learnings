### Docker Volumes

`docker volumes ls`
This will shows the volumes in the docker.

`docker volume inspect <volume_name or volume_id>`
This will shows the detail information of that Volume.

    ==> var/lib/docker/volumes is the default location for docker volumes.

## Removing Volumes

`docker volume rm <volume_id>`
This will remove the volume

`docker volume prune`
This will remove the volumes which are not in used
--->> This will remove anonymous local volumes not used by at least one container.

## creating Volumes

`docker volume create <volume_name>`
This will create the Volume with name <volume_name>

### Mountin volume to container using (-v or --mount)

`docker run -it --name=container --mount source=<volume_name>,destination=/<destinationfoler> <image_name>`

This will Attach <volume_name> To <container_name> with <image_name>

`docker run -it --volumes-from <existing_container> --name=newContainer <image_name> /bin/bash`
This will Attach The Volume to the <newContainer> Which is attached To <existing_container>

`docker run -it --name container1 -v <volume_name>:/data centos`
This is Simple Command to mount A Volume To a Container.

### Mounting A Host Directory as a Volume

`docker run -it --name myCon -v "$(pwd)":/data2 centos`
This mount the volue at pwd (present working directory)
