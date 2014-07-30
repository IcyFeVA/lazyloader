lazyloader for jQuery (only 1kb)
==========

### lazy-load not only images, but also javascript (inline and external)

**See demo.html for more info**

Example: Loading an image from lorempixel.com:
***

```
<span data-lazyloadcontent="<img src='http://lorempixel.com/400/200/city' />">Loading...</span>
```

```javascript
$(lazyloader.init(300, 'append', 'data-lazyloadcontent'));
```

*Arguments (optional):
minimum distance,
replace or append,
selector*



