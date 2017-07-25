# README

This is the Instanews app, a news client for the nyt API.

![homepage](https://cdn.pbrd.co/images/GCtydpl.png)

Technology summary:

- created the < li > grid using flexbox across media-query breakpoints

- used the nyt API to dynamically fetch data with $.ajax

- on branch hn-getter also fetched stories form hn API. Just the title and hrefs to top stories atm, still working on getting the images, YQL?

## ToDo

- change the no-console value in .eslintrc back to 1 :)

- finish styles and animations (header, both branches)

- change the .css method at top of -getter files to use a class to hide elements instead: .removeClass() .hide()

- try to replace the $.each() if already inside .forEach()

- on index.html can't use <ul> without <li>, add element and get rid of it to stay compliant

- step-up loader game with spinkit tobiasahlin.com/spinkit

- class-naming conventions suck, use BEM http://getbem.com/introduction/

- <p> Choose a selection: should be a label with for attribute

### branch hn-getter ToDo

- try another methode to get the first img on hn storyURL 
