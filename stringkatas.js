/**
 * Created by andrewdmo on 9/23/16.
 */

//var stringKatas = new stringKatas();

console.log("String Katas \n   ");

//
function Kata() {

    this.explode = function (yo) {

        var temp = "";
        for (var i = 0; i < yo.length, i++;) {
            temp += yo.length(i);

            if (i < yo.length - 1) temp += " "; //exclude last space

        }

        return temp;
    }

    this.notString = function (a) {

        {
            if ((a.length >= 3) && (a.substring(0, 3) == ("not"))) {
                return a;
            }
            else {
                var b = "not";
                b += " " + a;
                return b;
            }
        }
    }

    this.missChar = function (a, b) {
        var partA = a.substring(0, b);
        var partB = a.substring(b + 1, a.length);

        return partA + partB;
    }

    this.frontBack = function (a) {
        var sub = "";
        var first = a.charAt(0);
        var last = a.charAt(a.length - 1);
        if (a.length == 1) {
            return a
        }
        else if (a.length > 2) {
            sub = a.substring(1, a.length - 1);
        }
        var switched = last + sub + first;
        return switched
    }

    this.front3 = function (a) {
        var front = "";
        if (a.length < 3) front = a;
        else front = a.substring(0, 3);
        front = front + front + front;

        return front;
    }

    this.backAround = function (a) {
        var b = a.charAt(a.length - 1);
        var c = b + a + b;
        return c;
    }

    this.front22 = function (a) {
        var b;
        if (a.length < 2) b = a;
        else b = a.substring(0, 2);
        var c = b + a + b;
        return c;
    }

    this.delDel = function (a) {
        if (a.substring(1, 4) == ("del")) {
            return a.charAt(0) + a.substring(4, a.length)
        }
        else return a;
    }

    this.startOz = function (a) {
        var b = "";

        if (a.length >= 2) {
            if (a.charAt(0) == 'o') b = "" + "o";
            if (a.charAt(1) == 'z') b += 'z';
            else return (a.substring(0, 2))
        }
        return b;
    }

    this.endUp = function (a) {
        if (a.length < 3) {
            return a.toUpperCase()
        }
        else {
            var b = a.toUpperCase()
            return a.substring(0, a.length - 3) + b.substring(a.length - 3, a.length)
        }
    }

}

var Kata = new Kata();


console.log("Kata.explode");

console.log("Kata.explode(\"example\") -> " + Kata.explode("example")); // "e x a m p l e"
console.log("Kata.explode(\"example\") -> " + Kata.explode("cat")); // "c a t"
console.log("Kata.explode(\"\") -> " + Kata.explode("")); // ""
console.log("Kata.explode(\"c\") -> " + Kata.explode("c\n")); // "c"

// 2. call notString
console.log("Kata.notString(\"candy\") -> " + Kata.notString("candy")); // "not candy"
console.log("Kata.notString(\"x\") -> " + Kata.notString("x")); // "not x"
console.log("Kata.notString(\"not bad\") -> " + Kata.notString("not bad")); // "not bad"


// 3. call missingChar
console.log("Kata.missingChar(\"kitten\", 1) -> " + Kata.missChar("kitten", 1)); // "ktten"
console.log("Kata.missingChar(\"kitten\", 0) -> " + Kata.missChar("kitten", 0)); // "itten"
console.log("Kata.missingChar(\"kitten\", 4) -> " + Kata.missChar("kitten", 4)); // "kittn"
console.log();

// 4. call frontBack
console.log("Kata.frontBack(\"code\") -> " + Kata.frontBack("code")); // "eodc"
console.log("Kata.frontBack(\"a\") -> " + Kata.frontBack("a")); // "a"
console.log("Kata.frontBack(\"ab\") -> " + Kata.frontBack("ab")); // "ba"
console.log();

// 5. call front3
console.log("Kata.front3(\"Java\") -> " + Kata.front3("Java")); // "JavJavJav"
console.log("Kata.front3(\"Chocolate\") -> " + Kata.front3("Chocolate")); // "ChoChoCho"
console.log("Kata.front3(\"abc\") -> " + Kata.front3("abc")); // "abcabcabc"
console.log();

// 6. call backAround
console.log("Kata.backAround(\"cat\") -> " + Kata.backAround("cat")); // "tcatt"
console.log("Kata.backAround(\"Hello\") -> " + Kata.backAround("Hello")); // "oHelloo"
console.log("Kata.backAround(\"a\") -> " + Kata.backAround("a")); // "aaa"
console.log();

// 7. call front22
console.log("Kata.front22(\"kitten\") -> " + Kata.front22("kitten")); // "kikittenki"
console.log("Kata.front22(\"Ha\") -> " + Kata.front22("Ha")); // "HaHaHa"
console.log("Kata.front22(\"abc\") -> " + Kata.front22("abc")); // "ababcab"
console.log("Kata.front22(\"boogada\") -> "+ Kata.front22("boogada")); //boboogado

// 8. call delDel
console.log("Kata.delDel(\"adelbc\") -> " + Kata.delDel("adelbc")); // "abc"
console.log("Kata.delDel(\"adelHello\") -> " + Kata.delDel("adelHello")); // "aHello"
console.log("Kata.delDel(\"adedbc\") -> " + Kata.delDel("adedbc")); // "adedbc"
console.log("Kata.delDel(\"adelsings\") -> " + Kata.delDel("adelsings"));

// 9. call startOz
console.log("Kata.startOz(\"ozymandias\") -> " + Kata.startOz("ozymandias")); // "oz"
console.log("Kata.startOz(\"bzoo\") -> " + Kata.startOz("bzoo")); // "z"
console.log("Kata.startOz(\"oxx\") -> " + Kata.startOz("oxx")); // "o"
console.log("Kata.startOz(\"kitten\") -> " + Kata.startOz("kitten")); // "ki"
console.log("Kata.startOz(\"oozle\") -> " + Kata.startOz("oozle")); // "oo"

// 10. call endUp
console.log("Kata.endUp(\"Hello\") -> " + Kata.endUp("Hello")); // "HeLLO"
console.log("Kata.endUp(\"hi there\") ->" + Kata.endUp("hi there")); // "hi thERE"
console.log("Kata.endUp(\"hi\") ->" + Kata.endUp("hi")); // "HI"\
console.log("Kata.endup(\"32one\") ->" + Kata.endUp("32one")); //32ONE


console.log("laFin!");





