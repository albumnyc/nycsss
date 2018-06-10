export const  setDate = function  (date) {
    var oldDate = new Date(date).getTime();
    var newDate = new Date().getTime();
    if(newDate<oldDate) {
        alert("受不了啦！日期不能比今天更往后啦！");
    } else {
        var day = Math.ceil((newDate - oldDate)/1000/60/60/24);
        console.log(day);
    }
}
// setDate("2018/06/09");