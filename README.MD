# Restaurants API

This is a code challenge for free2move to develop REST API for POIs (in our case restaurants).

### Installation
The project is shipped in a docker container. To install and launch it run the following command:

```
docker-compose build
docker-compose up
```

After that the API is accessible on the localhost:8000, and the database is on localhost:27017 (yes, we have MongoDB there).

### API
* _/get/:id_ - get a restaurant by id
* _/get/viewport/:lon1/:lat1/:lon2/:lat2_ - get list of restaurants within the specified viewport, where _(lon1, lat1)_ is a top-left corner, _(lon2, lat2)_ - a bottom-right corner.
* _/add_ - add a restaurant
* _/update/:id_ - update a restaurant with a certain id