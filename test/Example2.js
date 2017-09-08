function replaceSpecials(str) {
    var regex = new RegExp("ä", "g");
    str = str.replace(regex, "ae");
    regex = new RegExp("Ä", "g");
    str = str.replace(regex, "Ae");
    regex = new RegExp("ö", "g");
    str = str.replace(regex, "oe");
    regex = new RegExp("Ö", "g");
    str = str.replace(regex, "Oe");
    regex = new RegExp("ü", "g");
    str = str.replace(regex, "ue");
    regex = new RegExp("Ü", "g");
    str = str.replace(regex , "Ue");
    regex = new RegExp("ß", "g");
    str = str.replace(regex , "ss");
    return str;
}


str = "äüößÄÜÖ";
console.log(replaceSpecials(str));