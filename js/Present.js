var Present = function() {};
Present.prototype.getElements = function() {
    var elements = [];

    // お礼メッセージ
    var $message = $('<img>').addClass('thxMsg').attr('src', './images/thanks.png');
    elements.push($message);

    // アルバムへのボタン
    var $button = $('<a>')
        .addClass('square_btn')
        .attr('href', 'http://30d.jp/ay-m-wedding/2')
        .text('WEDDING PHOTO ALBUM');
    elements.push($button);

    // アルバムヒント
    var $pass = $('<div>').text('合い言葉は4桁の半角数字');
    elements.push($pass);
    var $hint = $('<div>').text('ヒントは『ニュウセキビ』');
    elements.push($hint);
    
    return elements
};

window.Present = Present;