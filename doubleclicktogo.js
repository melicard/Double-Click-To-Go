/*
 Available for use under the MIT License
 */
/**
 * Double-Click-To-Go plugin
 * Copyright 2018 Bryan Noriega Miguel
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
                var currentTime = new Date().getTime() / 1000;
                if ((currentTime - firstClickTime > secondForDoubleClick)){
                    firstClickTime = null;
                }
                if (firstClickTime == null) {
                    firstClickTime = currentTime
                    secondClickTime = null;
                } else {          
                    secondClickTime = currentTime
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
