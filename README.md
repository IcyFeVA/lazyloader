lazyloader for jQuery
==========

### lazy-load not only images, but also javascript (inline and external)

**See demo.html for more info**

Loading an image from lorempixel.com:
***

index.html
```
<span data-lazyloadcontent="<img src='http://lorempixel.com/400/200/city' />">Loading...</span>
```

```javascript
$(lazyloader.init(300, 'append', 'data-lazyloadcontent'));
```

*Arguments:*
minimum distance,
replace or append,
jQuery-Selector

all arguments are optional



