

//write first method
function sleep_in(weekday,vacation) {
    if (weekday == true && vacation == false) {
        return false;
    }
    if (vacation == true){
        return true
    }else{
        return true
    }
}



//write second method
function monkey_trouble(param1, param2) {
    if (param1 == true && param2 == true) {
        return true;
    }
    if (param1 == false && param2 == false){
        return true
    }else{
        return false
    }

}
function string_times(x,y){
    var z = "";
    for (var i = 0; i < y; i++){
        z = z + x;
    }
    return z

}
function front_times(x,y){
    var b = ""
    var z = x.substring(0,3)
    for(var i = 0; i < y; i++){
        b = b + z
    }
    return b;
}
function string_bits(str){
    var b = ""
    for(var i = 0; i < str.length; i++){
        if(i % 2 == 0){
            b += str.substring(i,i + 1)
        }
    }
    return b;
}
function caughtSpeeding(speed,y){
    if (y == false && speed > 60 && speed < 81){
        return 1
    }
    if (y == false && speed > 80){
        return 2
    }
    if (y == true && speed > 65 && speed < 86){
        return 1
    }
    if (y == false && speed > 85){
        return 2
    }else{
        return 0
    }
}
function fizz_buzz(x) {
    var b = ""
    if (x % 3 == 0 && x % 5 == 0) {
        b = "FizzBuzz"
        return b;
    }
    if(x % 3 > 0 && x % 5 > 0){
        b = x + "!"
        return b;
    }else if(x % 3 == 0) {
        b = "Fizz"
        return b;
    }
    if(x % 5 == 0){
        b = "Buzz"
        return b;

    } else{
        return x;
    }
}
function teaParty(x,y){
    if(x >= 2 * y && x >= 5 && y>= 5 || y >= 2 * x && x >= 5 && y>= 5){
        return 2;
    }
    if(x< 5 || y < 5){
        return 0;
    }
    if(x >= 5 && y>= 5){
        return 1
    }
}
function blackjack(x,y) {
    if(x>21 && y > 21){
        return 0;
    }
    if (x > 21){
        return y;
    }
    if (y > 21){
        return x;
    }
    if (y < x && x <= 21){
        return x;
    }
    if (x < y && y <= 21){
        return y;
    }
}
function loneSum(a,b,c){
    if(a == b && b == c){
        return 0;
    }
    if (a == b){
        return c
    }
    if(b == c){
        return a
    }

    if (a == c){
        return b
    }else{
        return a + b + c;
    }
}

function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(x, y);
    document.getElementById("output").innerHTML += front_times(x,y);
    document.getElementById("output").innerHTML +=string_bits(str);
    document.getElementById("output").innerHTML +=caughtSpeeding(speed,y);
    document.getElementById("output").innerHTML +=fizz_buzz(x);
    document.getElementById("output").innerHTML +=teaParty(x,y);
    document.getElementById("output").innerHTML +=blackjack(x,y);
    document.getElementById("output").innerHTML +=loneSum(a,b,c);

}

