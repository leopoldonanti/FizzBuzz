/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*Consigli del giorno:*
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come se lo facessimo “a mano” */


/* creo una variabile che ad ogni ciclo si sommi a se stessa per tutte le volte che dura il mio ciclo */

/* creo un'azione che all'interno del mio ciclo stabilisca che quando la mia variabile assuma un valore divisibile per 3 e 5 allora conosol.log "fizzbuzz", oppure se è solo divisibile per 3 allora consol.log "fizz", oppure se è solo divisibile per 5 allora consol.log "buzz" altrimenti consol.log "valore della variabile all'interno del ciclo */

var j = 0;

for (i=0; i<100; i++){
  j = i+1;
  if (j%3 == 0 && j%5 == 0){
      console.log("FizzBuzz")
  }else if(j%3 == 0){
      console.log("Fizz")
  }else if(j%5 == 0){
      console.log("Buzz")
  }else{
      console.log(j);
  }
}
