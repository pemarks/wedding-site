var page = null;

$(function() {
    function Page() {
        var _page = this;
            _navList = null;

        function init() {
            $('#main-navigation nav.navbar').affix({
                offset: {
                    top: $('.intro-pic-holder').height()
                }
            });

            //Get the current page from the URL
            location.search;
        }

        function removeActiveLink() {
            if (! _navList) {
                _navList = $('ul.navbar-nav')[0].children; 
            }

            for (var navIndex = 0; navIndex < _navList.length; navIndex++) {
                _navList[navIndex].classList.remove('active');
            }
        }

        _page.changeState = function(event, name) {
            name = name ? name : 'home';

            var curPage = $('.page-content.active')[0],
                nextPage = $('#' + name)[0];

            if (nextPage != curPage) {
                nextPage.classList.add('active');
                curPage.classList.remove('active');
            }

            if (!event.currentTarget.classList.contains('active')) {
                removeActiveLink();

                if (name != 'home') {
                    event.currentTarget.classList.add('active');
                }

                History.pushState(null, null, '?' + name);
            }
        }

        init();
    }

    function PageState() {

    }

    page = new Page();
});