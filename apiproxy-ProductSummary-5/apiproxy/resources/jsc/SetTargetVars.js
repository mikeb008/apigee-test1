function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

//pad zeroes for numbers less than 10
function padZeroes(number) {
    if(number < 10) {
        return "0" + number;
    }
    return number;
}

function getFormattedUtcDateTime() {
    var d = new Date();
    var yyyy = d.getUTCFullYear();
    var MM = padZeroes(d.getUTCMonth() + 1);
    var dd = padZeroes(d.getUTCDate());
    var HH = padZeroes(d.getUTCHours());
    var mm = padZeroes(d.getUTCMinutes());
    var ss = padZeroes(d.getUTCSeconds());
    
    var formattedDate = yyyy + "-" + MM + "-" + dd + "T" + HH + ":" + mm + ":" + ss + "Z";
    //print(formattedDate);
    return formattedDate;
}

context.setVariable("sap.target.uuid",guid());
context.setVariable("sap.target.createDateTime",getFormattedUtcDateTime());

