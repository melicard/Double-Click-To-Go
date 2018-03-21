/*
 Available for use under the MIT License
 */
/**
 * Double-Click-To-Go plugin
 * Copyright 2018
 * @author Bryan Noriega Miguel
 * @version 1.0
 * @see https://github.com/melicard/Double-Click-To-Go
 */
(function ($) {
    $.fn.doubleClickToGo = function () {
        var secondForDoubleClick = .5; //Add more seconds to increase the interval when two click are considered double click
        var firstClickTime = null;
        var secondClickTime = null;
        this.filter("a").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                if ((new Date().getTime() / 1000 - firstClickTime > secondForDoubleClick)){
                    firstClickTime = null;
                }
                if (firstClickTime == null) {
                    firstClickTime = new Date().getTime() / 1000
                    secondClickTime = null;
                } else {          
                    secondClickTime = new Date().getTime() / 1000;
                    console.log((secondClickTime - firstClickTime))
                    if ((secondClickTime - firstClickTime) <= secondForDoubleClick) {
                        firstClickTime = null;
                        secondClickTime = null;
                        var link = $(this);
                        var url = link.attr("href");
                        window.location.href = url;
                    }
                    firstClickTime = null;
                    secondClickTime = null;
                }
            })
        });
        return this;
    };
}(jQuery));
