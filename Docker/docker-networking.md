### Bridge Networking

    * This is default Networking.
    * This bridge driver creates an internal network within a single Docker host.
    * Containers placed within this network can communicate with each other but are isolated from containers,
        not on the internal network.
    * Bridge is the default driver when running single containers or when using "docker-compose".

### Host Networking

    * When using the host driver, the container shares the network stack of the Docker host- appearing
        as if the container is the host itself, from a networking perspective.

### None Networking

    * The none driver simply disables networking for a container, making it isolated from other containers.

### Netwoking Commands

-`docker network ls`
this will show all the networks availble

-`docker run -d --name <custome_name> -p <locap-port>:<dockerport> <image_name>`
This will give port to the container

-`docker inspect network bridge`
With this we can inspect Networks in Bridge like which containers are there in the bridge and which Ip address assigned to the containers

-`docker run -d --name <custome_name> --net <host or none or bridge or any> <image_name> `
This will specify the network which is assigned to the container.
