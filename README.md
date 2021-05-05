# Calculator server made by Pako Portalo

Implementation of a Calculator browser aplication made with node js in a Docker container
I thought that could be useful to implement the calculator in a docker container because
it would be possible to use in any enviroment (and also because I wouldn't be able to install
node js in the school computer)

# What do you need?

👉 Docker installed

👉 A Browser (Chrome, Mozilla, Opera...)

# How to use:
1. First of all you have to build the docker image by going to the repository and writing the next line of code in your terminal

``` docker build . -t calculator ```

2. Then, you have to run the container with the next line of code:

``` docker run -it -p 3000:3000 --name app calculator /bin/sh```

3. Once you are inside the container paste the next line of code. You will see the messagge "Server started on port 3000", this means that the app is ready to use.

```cd calculator/ && node calculator.js```

4. The last step is go to your browser and navigate to "localhost:3000" and there you will have your brand new calculator!

5. To stop your Calculator, you have to press ctrl + z, then write "exit" and finally stop your Docker container with the next command

```docker stop app && docker rm app```

🍏 We do it like this because is easy if you don't know about how to use docker, and with this way
is less tricky to restart the calculator just following the step 2

⚠️ Note: I did not program the Calculator but the NodeJS Server and the Docker Container
If you want to thank the Calculator creator for his work, you can suscribe in his Youtube channel

https://www.youtube.com/watch?v=j59qQ7YWLxw

And here you have his code

https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator

Thanks for calculate with me! 

Pako 🐸 (fportalo)
