//#region Input 1

document.addEventListener('DOMContentLoaded', function() {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var minDate= year + '-' + month + '-' + day;

    document.getElementById('from').setAttribute('min', minDate);
});

document.getElementById("from").addEventListener('change', function() {
    var minDate= document.getElementById("from").value;
    document.getElementById('To').setAttribute('min', minDate);
});

//#endregion


//#region Input 2
function onChangeFrom() {
   var minDate=document.getElementById("from1").value;
   document.getElementById('To1').setAttribute('min', minDate);
}


function onChangeTo() {
var maxDate=document.getElementById("To1").value;
document.getElementById("from1").setAttribute('max',maxDate);
}
//#endregion