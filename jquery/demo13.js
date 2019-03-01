if(!window.jQuery){
    throw new Error ("配合jquery使用");
}
jQuery.fn.max = function () {
    var max = this[0].innerHTML;
    max = parseFloat(max);
    for(var i = 1;i < this.length;i++){
        var v = parseFloat(this[i].innerHTML)
        if(v > max){
            max = v;
        }
    }
    return max;
}

jQuery.fn.min = function () {
    var min = this[0].innerHTML;
    min = parseFloat(min);
    for(var i = 1;i < this.length;i++){
        var v = parseFloat(this[i].innerHTML)
        if(v < min){
            min = v;
        }
    }
    return min;
}
jQuery.fn.add10 = function () {

}