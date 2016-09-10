
$(document).ready(function($) {
        function load(num) {
            $('#content').load(num +".html");
        }
        $.history.init(function(url) {
                load(url == "" ? "all_orders" : url);
            });

        $('#ajax-links a').live('click', function(e) {
                $('#ajax-links a').removeClass();
                $(this).addClass('current');
                var url = $(this).attr('href');
                url = url.replace(/^.*#/, '');
                $.history.load(url);
                return false;
            });
    });
