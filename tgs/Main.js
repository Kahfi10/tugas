$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-car').show('1000')
        }
        else{
            $('.post-car').not('.' + value)
            .hide('1000')
            $('.post-car').filter('.' + value)
            .show('1000')
        }
    });
    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    })
});
