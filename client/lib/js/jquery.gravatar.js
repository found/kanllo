/*
 * jQuery.gravatar, 2009,2013
 *
 * Written by Zach Leatherman
 * http://zachleat.com
 * Modified by Eduardo Robles Elvira
 * http://www.wadobo.com
 *
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/)
 *
 * Requires jQuery http://jquery.com (1.2.6 at time of release)
 * Requires http://pajhome.org.uk/crypt/md5/md5.js
 */

(function($)
{
    $.gravatar_url = function(emailAddress, overrides)
    {
        var options = $.extend({
            // Defaults are not hardcoded here in case gravatar changes them on their end.
            // integer size: between 1 and 512, default 80 (in pixels)
            size: '',
            // rating: g (default), pg, r, x
            rating: '',
            // url to define a default image (can also be one of: identicon, monsterid, wavatar)
            image: '',
            // secure
            secure: false,
        }, overrides);

        var baseUrl = options.secure ? 'https://secure.gravatar.com/avatar/' : 'http://www.gravatar.com/avatar/';

        return baseUrl +
            hex_md5(emailAddress) +
            '.jpg?' +
            (options.size ? 's=' + options.size + '&' : '') +
            (options.rating ? 'r=' + options.rating + '&' : '') +
            (options.image ? 'd=' + encodeURIComponent(options.image) : '');
    };
})(jQuery);
