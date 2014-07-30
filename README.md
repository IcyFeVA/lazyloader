lazyloader for jQuery
==========

### lazy-load not only images, but also javascript (inline and external)

**See demo.html for more info**

Loading an image from lorempixel.com:
***
init(proximity to target, replace or append, jQuery-Selector) -- all arguments are optional
```javascript
$(lazyloader.init(300, 'append', 'data-lazyloadcontent'));
```

index.html
```
<span data-lazyloadcontent="<img src='http://lorempixel.com/400/200/city' />">Loading...</span>
```


