Sample-app React

## Demo

https://icezatoo.github.io/app-movie/

You want to look Project :
git clone https://github.com/icezatoo/app-movie.git

## Table of Contents

- [Structure](#structure)
- [Run Docker](#run-docker)

## Structure

```
API : https://www.themoviedb.org/
Middleware  : redux-saga
etc  :  recompose , slick-carousel react-player , react-lazyload ,react-loadable ...
styled : styled-components , bulma , material
```

## Run Docker

you want run bulid project

```
cd  docker
docker bulid -t react/reactmovie .
docker run -p 81:80  -d react/reactmovie

#-------------
Run in Browser
localhost:81
```
