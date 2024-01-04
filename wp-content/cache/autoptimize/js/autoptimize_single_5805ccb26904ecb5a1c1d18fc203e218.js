jQuery(document).ready(function($) {
    setTimeout(cf_added_image, 2500);

    function cf_added_image() {
        $('.cf-image').each(function() {
            if ($(this).find('.cf-file__preview').length == 0) {
                var input = $(this).find('input[type="hidden"]');
                var img = input.attr('value');
                var html = name = '';
                if (img != undefined && img != '') {
                    data = img.split('/');
                    name = data[data.length - 1];
                    html = '<div class="cf-file__content"><div class="cf-file__preview"><img src="' + img + '" class="cf-file__image"><button type="button" class="cf-file__remove dashicons-before dashicons-no-alt"></button></div><span class="cf-file__name" title="' + name + '">' + name + '</span></div>';
                    input.after(html);
                }
            }
        });
    }
});