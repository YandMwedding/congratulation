// あたりか？
var _isLot = function() {
    // #other-people: ハズレ
    // #lucky: アタリ
    return location.hash === '#lucky';
}

var Question = function() {};
Question.prototype.getElements = function() {
    var elements = [];
    // 問題番号
    var $index = $('<img>').attr('src', './images/q_j.png');
    elements.push($index);

    // 問題文
    if  (_isLot()) {
        var $title = $('<h1>').text('問題'); 
        var $text = $('<h1>').text('新郎の下の名前は？');
        elements.push($title);
        elements.push($text);
    }　else {
        var $losingMsg = $('<h1>').text('はずれ〜〜〜〜');
        var $ghostImg = $('<img>').addClass('ghost').attr('src', './images/ghost.png');
        var $otherMsg = $('<h1>').text('他の人の名札を確認しよう！');

        elements.push($losingMsg);
        elements.push($ghostImg);
        elements.push($otherMsg);
    }

    return elements;
};

window.Question = Question;