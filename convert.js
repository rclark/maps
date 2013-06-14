var fs = require("fs"),
    contents = fs.readFileSync("colors").toString(),
    re = /rgb\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}\)/g,
    matches = contents.match(re);

for (var i = 1; i < matches.length; i++) {
    var bits = matches[i]
            .split("rgb(")[1]
            .replace(")", "")
            .split(", "),
        output = '"#' + rgbToHex(bits[0], bits[1], bits[2]) + '"',
        pattern = matches[i]
                    .replace("(", "\\(")
                    .replace(")", "\\)")    
        re = RegExp(pattern, "g");
    //console.log(re);
    //console.log(contents.match(re).length);
    contents = contents.replace(re, output);
}

console.log(contents);

function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}

function toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}