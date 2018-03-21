Double-Click-To-Go
============

Double-click on a <a> tag to follow the link. Built as jQuery Plugin.

Dependencies
============
- jQuery: http://jquery.com/

Installation
============

```html
<!-- 1. Create your navigation menu -->
<nav class="menu">
    <ul>
        <li><a href="#">First level</a></li>
        <li><a href="#" class="has-child">First level</a>
            <ul>
                <li><a href="#">Second level</a></li>
                <li><a href="#">Second level</a></li>
            </ul>
        </li>
    </ul>
</nav>

<!-- 2. Include jQuery -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
crossorigin="anonymous"></script>

<!-- 3. Include plugin -->
<script src="dist/jquery.dcd.doubleclicktogo.js" type="text/javascript"></script>

<!-- 4. Bind plugin to each a tag where you want to require double click to follow the link -->
<script type="text/javascript">
    $(function () {
        $('.has-child').doubleClickToGo();
    });
</script>
```

Changelog
============

1.0.0 Initial Release
---------------------
