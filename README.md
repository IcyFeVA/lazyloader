lazyloader for jQuery (only 1kb)
==========

### lazy-load not only images, but also javascript (inline and external)

Examples: Loading an image or inline/external javascript:
***

Place one or more div/span elements with the data-lazyloadcontent attribute set to the content you want to load
```
<span data-lazyloadcontent="<img src='myimage.jpg' />">Loading...</span>
```

or

```
<span data-lazyloadcontent="<script language='javascript' src='myscript.js'></script>"></span>
```

or

```
<span data-lazyloadcontent="<script>alert('Hello there!');</script>"></span>
```


Initialize the lazyloader at the bottom of your page.
```javascript
$(lazyloader.init(300, 'append', 'data-lazyloadcontent'));
```

these arguments are optional
+ minimum distance (default is set to 400 Pixels)
+ replace or append (default is set to replace)
+ name of the selector (default is data-lazyloadcontent)

**See demo.html for more info**
