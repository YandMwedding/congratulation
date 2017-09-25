var Question = function() {};
Question.prototype.getElements = function() {
    var elemetns = [];
    // 問題番号
    var $index = $('<img>').attr('src', './images/q_j.png');
    elemetns.push($index);

    // 問題文
    var $text = $('<h1>').text('新郎の下の名前は？');
    elemetns.push($text);

    return elemetns;
};

window.Question = Question;