const App = {

    init: function() {
        console.log('ARI Init')
        return this
    },

    highlightSearch: function() {
        $(".search").focus().select();
        return this
    },

    addThis: function() {
        var addThis = document.createElement('script');
        addThis.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#pubid=cschweda');
        document.body.appendChild(addThis);
        return this
    },

    initializeFactsheets: function() {
        $('.selectpicker').selectpicker();
        $('.selectpicker').on('changed.bs.select', function(e) {
            $('.local-program-description').hide()
            $('.factsheet').show();
            var siteTitle = $(".selectpicker option:selected").text()
            var siteURL = e.target.value
            $('.panel-title').html(siteTitle)
            console.log('URL: ', e.target.value)
            $.ajax(siteURL, {
                success: function(data) {
                    $('.panel-body').html(data)
                },
                error: function() {
                    console.log('Error: ', error)
                }
            });


        });
        return this

    }

}

export { App }