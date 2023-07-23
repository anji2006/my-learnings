





docker-compose.yaml is configuration file
which is used to manage multi-container docker appliaction.
this file is allowd to specify the services,volueme,network which are required for application.
this makes easier to deploy and manage the complex container applicatoin.


It has mainly three components
	1) service
	2) volumes
	3) Network
	


===> Services
	services are defined as list under "services" section of YAML fle.
	each service is configure with //images,ports,volumes,env_varibles,......more
	Each service is corsponding to a container that runs a "applicaion" or "service"


===> Networks
	the networks section is allowed to specify the custom network to connect the container.
	By Default "Docker compose" creates new bridge network to the services provided in the //docker-compose.yaml file
	enabling them to comunicate each other.
	
===> Volumes
	voluemes are used to save the data or persist the data used by the containers.
	the "volumes" section in YAML file allows you to specify named volumes  or bind mounts to store data in """host machine"""
	
	
simple example:-----

	version: '3.9'  (version of Docker compose file used based on version only we need use syntax and structure)
		services:   //this is services section which is having two services web and backed
		  web:   // this is service name web used to run "NGINX" container to run the nginx:latest image.
		    image: nginx:latest "image: <image_name>:<version>" // (specify the Docker image that will be used to run the containers) 
		    ports:
		      - "8000:80"  "host_port:container_port"  //used to publish a container's port to the host system when the container is started 
		      			...when someone starts accesses port "8000" on "host-machine" the request will be forword to web service container with port "80"
		      			...we can access the service from own host machine using "http://localhost" and we can access the service using host_ip where docker container is running
						"http://<your_host_ip>" example:- 'http://192.168.1.100' 
						//make sure both devices should have common network connection like (wifi) 
					... we can access the service from other network also for that we need to use "Port Forwarding(Public IP/Domain)"  or "cloud Hosting Platforms" 
						//you typically use a load balancer or ingress controller to route incoming traffic to your containerized service. 
		    volumes:
		      - ./web-content:/usr/share/nginx/html  "host_path:container_path"  //sharing the data present in ./web-content to container /usr/share/nginx/html 

		  backend:
		    image: node:latest
		    ports:
		      - "3000:3000"
		    volumes:
		      - ./backend-app:/app
		    environment:    `		
		      - NODE_ENV=production ///used to set Environment varibles and values.
		      
		      
		      
		      
		      
taking example of telephony service code.
version: "3"
networks:
  default:
    name: telephony  //This line sets the custom name for the network
    driver: bridge   // type of network driver used for this custome network in this case it is bridge.	
services:
  telephony-service:
    image: harbor.nouveau-labs.in/dolphinvc/telephony-service:latest
    container_name: telephony-service
    ports:
      - 1000:1000
    restart: unless-stopped
    volumes:
      - ../../logs:/var/logs/
    env_file:
      - ../../config/.env
    depends_on:
      - telephony-db
  telephony-db:
    image: mysql:8.0
    container_name: telephony-db
    ports:
      - 1001:3306
    restart: unless-stopped
    volumes:
      - ../../db/mysql/conf:/etc/mysql/conf.d
      - ../../db/mysql/schema:/docker-entrypoint-initdb.d
      - telephony-db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=password

volumes:
  telephony-db:
  

