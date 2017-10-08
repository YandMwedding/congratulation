$(document).ready(function() {
    var now = new Date();
    var present_date = new Date('2017/10/01 20:00:00');
    
    // ゲーム終了後にはプレゼント用ページを表示する
    var pagename = present_date >= now ? 'Question' : 'Present';
    
    var Page = window[pagename];
    
    var page = new Page();
    
    $('#content').append($('<center>').addClass('center'));
    var $target = $('#content .center');
    page.getElements().forEach(function($element) {
        $target.append($element);
    }, this);
});
