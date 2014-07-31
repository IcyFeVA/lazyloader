lazy-load not only images, but also javascript (inline and external)
for jQuery (only 1kb)
==========

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
+ minimum distance in Pixels  (default: 400)
+ replace or append content   (default: replace)
+ name of the selector        (default: data-lazyloadcontent)

**See demo.html for more info**
