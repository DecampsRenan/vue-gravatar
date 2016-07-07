# GravatarComponentJS

[![Stories in Ready](https://badge.waffle.io/rdecamps/vue-gravatar.svg?label=ready&title=Ready)](http://waffle.io/rdecamps/vue-gravatar)

> A Vue.js gravatar component.

## How to use it ?

Just include the 'gravatar-component.js' file in your web page and
let the magic operates ;)

You can use this component in many way:

```html
<DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
  </head>
  <body>

    <!-- Use your component as a normal html tag -->
    <gravatar href="your@email.here" />
    <!-- That's all you need :D ! -->

  </body>
</html>
```

### Options

You can pass a few parameters to your components:
- href (**required**) : user's email
- default (*optional*): the default prompt image if none is found
  it can be one of the following:
  - URL to an existing picture
  - mm (default) : represent a shadow person
  - retro : an 8 bit arcade picture !
  - 404 : picture not found (default on web pages)
  - identicon : an abstract image
  - monsterid : a random monster face
  - wavatar : a random cartoon person
  - blank : nothing is displayed
- size (*optional*)   : size of the picture (default: 80px)

NB: **All these parameters are provided by Gravatar. If you want to add some, make a pull-request or submit an issue !**

```html
<!-- Example of custo use -->
<gravatar href="your@email.here" default="retro" size="80" />
```
