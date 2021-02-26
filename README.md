# TodosQuerem.uno: Stacking the deck with Django-REST #

![Image description: Uno cards spread over a wooden desk.](repo/img/uno.jpg)

A blog dedicated to explore social capabilities of this guilty pleasure, with cards dealt by the Django-REST framework.
Live soon at <https://todosquerem.uno>.

## Repository organization ##

* [benchmark](benchmark) - Performance analysis.
* [repo](repo) - Repository files.
* [Pipfile](Pipfile) - Python dependencies.
* [project](project) - Management presentations.
  * [project/nginx/config](project/nginx/config) - Server configuration.
* [uno](uno) - Django project.
  * [uno/api](uno/api) - DRF API endpoints.
  * [uno/blog](uno/blog) - General blog design.
  * [uno/frontend](uno/frontend) - ReactJS plugs for future API.

### Version notes ###

#### 0.0.2 (current) ####

* API endpoints for Users, Posts, Comments and Categories.

#### 0.0.1 ####

* Home page online.
* [Certbot](https://certbot.eff.org/) TLS encryption.
* Now reliant on dependencies:

```javascript
     "@babel/core": "^7.13.1",
     "@babel/preset-env": "^7.13.5",
     "@babel/preset-react": "^7.12.13",
     "babel-loader": "^8.2.2",
     "react": "^17.0.1",
     "react-dom": "^17.0.1",
     "webpack": "^5.24.2",
     "webpack-cli": "^4.5.0"
```

#### 0.0.0 ####

* Repository setup.
* Published under [MIT license](LICENSE).
