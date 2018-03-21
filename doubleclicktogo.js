(function ($) {
    $.fn.doubleClickToGo = function () {
        var secondForDoubleClick = .5; //Add more seconds to increase the interval when two click are considered double click
        var firstClickTime = null;
        var secondClickTime = null;
        this.filter("a").each(function () {
            $(this).click(function () {
                if (firstClickTime == null) {
                    firstClickTime = new Date().getTime() / 1000
                    secondClickTime = null;
                } else {
                    secondClickTIme = new Date().getTime() / 1000;
                    if ((secondClickTIme - firstClickTime) <= secondForDoubleClick) {
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