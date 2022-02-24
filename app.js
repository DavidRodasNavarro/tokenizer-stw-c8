function Tokenizer(){
    this.dictionary = [];

    this.run = function(list) {
      list.forEach((item) => {
        if(this.dictionary[item] == undefined) {
          console.log(item);
          this.dictionary["onDefault"]();
        } else {
          this.dictionary[item]();
        }
      });
    }

    this.on = function(item, f) {
      this.dictionary[item] = f;
    }

    this.onDefault = function(f) {
      this.on("onDefault", f);
    }
}


function testTokenizer(){

  var t = new Tokenizer();
  var countA = 0;
  var countC = 0;
  var countGeneral = 0;
  var testString = ['H','o','l','a',' ','c','o','m',' ','a','n','e','u','?'];

  t.on('a', function() {
    countA++;
  });
  t.on('c', function() {
    countC++;
  });
  t.onDefault(function() {
    countGeneral++;
  });

  t.run(testString);

  //here goes the code to run the test over testString

  console.log("numero de a's: " + countA);
  console.log("numero de c's: " + countC);
  console.log("numero d'altres caracters: " + countGeneral);
}

testTokenizer();
