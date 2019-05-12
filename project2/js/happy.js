var entryCount = 0;
var displayCount = 0;

$(document).ready(function() {

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters
    //https://unicodelookup.com/

    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is an enter
    if (e.which == 13){
      console.log("enter");
      var elem = $('#cursor');
      elem.before('<div class="newline"></div>');
    }

    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement(); }

    if (e.which == 37){
      console.log("left");
      var elem = $('#cursor');
      // $(".word").prevAll().before(elem);
      var last_word = $(".word").last();
      elem.detach().insertBefore(last_word);
    }

    if (e.which == 39){
      console.log("right");
      var elem = $('#cursor');
      $(".word").after(elem);
    }

    });

});

function createElement(k) {
  var elem = $('#cursor');
  if (k == "a" || k == "A") {
    var a= [
      "a ",
      "a ",
      "are ",
      "at ",
      "as ",
      "am ",
      "a ",
      "are ",
      "at ",
      "as ",
      "am ",
      "and ",
      "and ",
      "and ",
      "and ",
      "and ",
      "away ",
      "air ",
      "afternoon ",
      "aware ",
      "again ",
      "after ",

      "angels ",
      "alive ",
      // "ambient ",

    ]

    var a2=[
      "a ",
      "are ",
      "at ",
      "as ",
      "and ",
      "away ",
      "air ",
      "afternoon ",
      "aware ",
      "again ",
      "after ",

      "alone ",
      "aching ",
      "abandoned ",

    ]

    // if ('background-color' == 'white') {
    var number = Math.floor(Math.random() * 23);
    elem.before('<span class="word">' + a[number] + '</span>');

    // if ('background-color' == 'black') {
    //   var number = Math.floor(Math.random() * 14);
    //   elem.before('<span class="word">' + a2[number] + '</span>');
    // }


   }

  if (k == "b" || k == "B") {
    var b= [
      "by ",
      "being ",
      "began ",
      "by ",
      "being ",
      "began ",
      "beautiful ",
      "brilliant ",
      // "blood ",
      // "broken ",
      "blue ",
      // "blurry ",
      "butterflies ",
      "bubbling ",
      "blossom ",
      "beauty ",
      "beyond ",
      "burning ",
      "burns ",
      // "bad ",
      // "break ",
      "birds ",
      // "blind ",
      // "bitter ",
      "body ",
    ]

    var number = Math.floor(Math.random() * 18);
    elem.before('<span class="word">' + b[number] + '</span>');}

  if (k == "c" || k == "C") {
    var c=[
      "can ",
      "can ",
      "curious ",
      "closed ",
      "cold ",
      "clear ",
      "clouds ",
      "crystal ",
      "city ",
      // "cosmos ",
      "cycle ",
      "cities ",
    ]

    var number = Math.floor(Math.random() * 11);
    elem.before('<span class="word">' + c[number] + '</span>'); }

  if (k == "d" || k == "D") {
    var d=[
      // "dark ",
      // "dead ",
      // "dying ",
      // "death ",
      // "destructive ",
      "day ",
      "dusk ",
      "dust ",
      "dreaming ",
      "during ",
      // "devil ",
      // "dangerous ",
      "dancing ",
      "delicate ",
      "dripping ",
      // "disappearing ",
    ]

    var number = Math.floor(Math.random() * 8);
    elem.before('<span class="word">' + d[number] + '</span>'); }

  if (k == "e" || k == "E") {
    var e=[
      "ecstasy ",
      "endless ",
      // "eyes ",
      "even ",
      // "evil ",
      "empty ",
      "everything ",
      "energizes ",
      "entire ",
    ]

    var number = Math.floor(Math.random() * 7);
    elem.before('<span class="word">' + e[number] + '</span>'); }

  if (k == "f" || k == "F") {
    var f=[
      "few ",
      "floating ",
      "forest ",
      "flowers ",
      "filled ",
      "far ",
      "from ",
      "from ",
      "from ",
      "fading ",
      // "fields ",
      "falling ",
      "for ",
      "for ",
      "for ",
      "further ",
      "finding ",
      "fool ",
    ]

    var number = Math.floor(Math.random() * 17);
    elem.before('<span class="word">' + f[number] + '</span>');;
  }

  if (k == "g" || k == "G") {
    var g=[
      "glass ",
      "green ",
      "grass ",
      "glowing ",
      "good ",
      "goes ",
      "going ",
      "gently ",
      "glittering ",
      "ghosts ",
      "gracious ",
      "give ",
    ]

    var number = Math.floor(Math.random() * 12);
    elem.before('<span class="word">' + g[number] + '</span>');;
  }

  if (k == "h" || k == "H") {
    var h=[
      "huge ",
      "home ",
      // "hot ",
      "here ",
      "have ",
      "hope ",
      // "hands ",
      // "hurt ",
      "honey ",
      "holy ",
      "heart ",
    ]

    var number = Math.floor(Math.random() * 8);
    elem.before('<span class="word">' + h[number] + '</span>'); }

  if (k == "i" || k == "I") {
    var i=[
      "i ",
      "i ",
      "i ",
      "is ",
      "is ",
      "is ",
      "in ",
      "into ",
      "inside ",
      "illuminate ",
      // "irreversible ",
      "incredible ",
      "intruded ",
    ]

    var number = Math.floor(Math.random() * 12);
    elem.before('<span class="word">' + i[number] + '</span>');}

  if (k == "j" || k == "J") {
    var j=[
      "just ",
      "journey ",
      // "jewels ",
    ]

    var number = Math.floor(Math.random() * 2);
    elem.before('<span class="word">' + j[number] + '</span>');}

  if (k == "k" || k == "K") {
    var k=[
      // "kingdom ",
      "kissing ",
      "kids ",
      // "killing ",
    ]

      var number = Math.floor(Math.random() * 2);
      elem.before('<span class="word">' + k[number] + '</span>'); }

  if (k == "l" || k == "L") {
    var l=[
      "like ",
      "land ",
      "light ",
      "lust ",
      "life ",
      "love ",
      // "lights ",
      "large ",
      "leaving ",
      // "lavender ",
      "lovely ",
      "lovers ",
      "look ",
      "looking ",
      "lying ",
    ]

    var number = Math.floor(Math.random() * 13);
    elem.before('<span class="word">' + l[number] + '</span>'); }

  if (k == "m" || k == "M") {
    var m=[
      "metal ",
      "many ",
      "melting ",
      "morning ",
      "midsummer ",
      "mind ",
      "moon ",
      "moonlight ",
      "man ",
      // "mysterious ",
      "magic ",
      "magical ",
      "make ",
      "me ",
    ]

    var number = Math.floor(Math.random() * 13);
    elem.before('<span class="word">' + m[number] + '</span>');}

  if (k == "n" || k == "N") {
    var n=[
      "nature ",
      "naked ",
      "night ",
      "not ",
      "noon ",
      "next ",
    ]

    var number = Math.floor(Math.random() * 6);
    elem.before('<span class="word">' + n[number] + '</span>');}

  if (k == "o" || k == "O") {
    var o=[
      // "open ",
      "out ",
      "of ",
      // "opaque ",
      "oasis ",
      "once ",
      "over ",
    ]

    var number = Math.floor(Math.random() * 5);
    elem.before('<span class="word">' + o[number] + '</span>'); }

  if (k == "p" || k == "P") {
    var p=[
      "precious ",
      "peaceful ",
      "pure ",
      "pink ",
      "pale ",
      "petals ",
      "perfect ",
      "people ",
      "person ",
      // "pain ",
      // "pearls ",
      "past ",
      // "prism ",
      // "petrified ",
      // "pathetic ",
    ]

    var number = Math.floor(Math.random() * 10);
    elem.before('<span class="word">' + p[number] + '</span>'); }

  if (k == "q" || k == "Q") {
    var q=[
      "quiet ",
      // "questioning ",
      // "quest ",
    ]

    var number = Math.floor(Math.random() * 1);
    elem.before('<span class="word">' + q[number] + '</span>'); }

  if (k == "r" || k == "R") {
    var r=[
      "red ",
      "rough ",
      "roses ",
      "run ",
      "reflecting ",
      "religion ",
      "ringing ",
      "running ",
      "rising ",
    ]

    var number = Math.floor(Math.random() * 9)
    elem.before('<span class="word">' + r[number] + '</span>'); }

  if (k == "s" || k == "S") {
    var s=[
      "shadows ",
      "sun ",
      // "sunlight ",
      "sparkling ",
      "stars ",
      "soft ",
      "start ",
      "strange ",
      "serene ",
      // "swans ",
      // "stream ",
      "small ",
      "stay ",
      // "sadness ",
      "sky ",
      "stolen ",
      "sweet ",
      "so ",
      "sad ",
      "seeking ",
      "someplace ",
      "sacred ",
      "somewhere ",
      "see ",
      "someone ",
      "summon ",
    ]

    var number = Math.floor(Math.random() * 22)
    elem.before('<span class="word">' + s[number] + '</span>'); }

  if (k == "t" || k == "T") {
    var t=[
      "the ",
      "they ",
      "the ",
      "they ",
      "the ",
      "they ",
      "there ",
      "then ",
      "trees ",
      "tranquil ",
      "traveling ",
      // "tired ",
      "tomorrow ",
      // "tall ",
      "truth ",
      "time ",
      "take ",
      "taken ",
      "tender ",
      "taste ",
      "transform ",
      "turn ",
    ]

    var number = Math.floor(Math.random() * 20)
    elem.before('<span class="word">' + t[number] + '</span>');}

  if (k == "u" || k == "U") {
    var u=[
      // "universe ",
      "unusual ",
      "under ",
      "upon ",
      "underneath ",
    ]

    var number = Math.floor(Math.random() * 4)
    elem.before('<span class="word">' + u[number] + '</span>'); }

  if (k == "v" || k == "V") {
    var v=[
      "very ",
      "vibrating ",
      // "violence ",
      // "vital ",
      "vessel ",
      "view ",
      "velvet ",
      "violet ",
    ]

    var number = Math.floor(Math.random() * 6)
    elem.before('<span class="word">' + v[number] + '</span>'); }

  if (k == "w" || k == "W") {
    var w=[
      "white ",
      "world ",
      "was ",
      "water ",
      "warm ",
      "waves ",
      "with ",
      "within ",
      "wind ",
      "which ",
      "went ",
      "wanting ",
      "woman ",
      // "wilting ",
    ]

    var number = Math.floor(Math.random() * 13)
    elem.before('<span class="word">' + w[number] + '</span>'); }

  // if (k == "x" || k == "X") {
  // }

  if (k == "y" || k == "Y") {
    var y=[
      "yellow ",
      "yesterday ",
      "you ",
      "you ",
      "you ",
      "your ",
      "yours ",
    ]

    var number = Math.floor(Math.random() * 7)
    elem.before('<span class="word">' + y[number] + '</span>'); }

  if (k == "z" || k == "Z") {
    var z=[
      "zion ",
      "zealot ",
      // "zirconia ",
      // "zinfandel ",
    ]

    var number = Math.floor(Math.random() * 2)
    elem.before('<span class="word">' + z[number] + '</span>'); }

  if (k == " ") { elem.before('<span class="word">&nbsp;</span>') };

}

function deleteElement() {
  $(".word").last().remove();
}

$("#happy").click(function () {
  $('body').css('background-color', 'white');
});

$("#sad").click(function () {
  $('body').css('background-color', 'black');
  $('p, a').css('color', 'white');

});
