# module federation example served with express, for server side render.

please go to the diferents apps and execute npm install 

``` 
    cd dashboard/    
    npm install
    cd ..
    cd hello-world/ 
    npm install
    cd ..
    cd kiwi/ 
    npm install
```

run for every project the build process for generate the remote entry for each federated module.

``` 
    cd dashboard/    
    npm run build
    cd ..
    cd hello-world/ 
    npm run build
    cd ..
    cd kiwi/ 
    npm run build
```

run the project with the start command, take into account this is server side render(express) not with import maps into the browser.

``` 
    cd dashboard/    
    npm run start
    cd ..
    cd hello-world/ 
    npm run start
    cd ..
    cd kiwi/ 
    npm run start
```

go to http://localhost:9000/hello-world
and http://localhost:9000/kiwi-page