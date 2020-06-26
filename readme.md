# Docker Example

This is a really simple example of off how to create a docker image

1. Build Image 
    
    Run: `docker build https://github.com/kevineaton603/DockerExample.git -t myapp`

2. Check if Images Exist 
    
    Run: `docker images`

3. Run Docker Image
   
   Run: `docker run -p 6969:8080 -d  myapp`

4. Check if Image is running
   
   `docker ps`

To kill a running image, run `docker kill imageid`

delete all unused images `docker system prune -a`