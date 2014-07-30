lazyloader for jQuery (only 1kb)
==========

### lazy-load not only images, but also javascript (inline and external)

Example: Loading an image from lorempixel.com:
***

Place one or more div/span elements with the data-lazyloadcontent attribute set to the content you want to load
```
<span data-lazyloadcontent="<img src='http://lorempixel.com/400/200/city' />">Loading...</span>
```

Then initialize the lazyloader at the bottom of your page.
*Arguments (optional):
+ minimum distance (default is set to 400 Pixels)
+ replace or append (default is set to replace)
+ name of the selector (default is data-lazyloadcontent)

```javascript
$(lazyloader.init(300, 'append', 'data-lazyloadcontent'));
```

**See demo.html for more info**
