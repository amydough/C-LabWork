function temperature() {
    //converting celcius to fahrenheit
    //(C *9/5)+32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f
}

function weight() {
    //convert kg to lb
    //kg * 2.2
    var kg = document.getElementById("kg").value;
    var p = kg * 2.2;
    document.getElementById("lbs").value = p
}

function distance() {
    //convert km to miles
    //km * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137;
    document.getElementById("m").value = m
}