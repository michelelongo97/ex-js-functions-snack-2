// Snack 1
//Crea una funzione che somma due numeri.

//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma(num1, num2) {
  return console.log(num1 + num2);
}
somma(2, 3);

const somma1 = function (num1, num2) {
  return num1 + num2;
};

const somma2 = (num1, num2) => num1 + num2;

// Snack 2
//Crea una arrow function che calcola il quadrato di un numero.

//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (num) => num * num;

// Snack 3
//Crea una funzione eseguiOperazione

//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const eseguiOperazione = (num1, num2, operatore) => {
  operatore(num1, num2);
};

// Snack 4
//Crea un generatore di funzioni creaTimer

//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(tempo) {
  return () => {
    setTimeout(() => {
      console.log("Tempo scaduto!");
    }, tempo);
  };
}

const timer1s = creaTimer(1000);
const timer5s = creaTimer(5000);
timer5s();

// Snack 5
//Crea una funzione stampaOgniSecondo con setInterval.

//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
//Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(message) {
  setInterval(() => {
    console.log(message);
  }, 1000);
}
//stampaOgniSecondo("Ciao");

// Snack 6
//Crea un contatore automatico con setInterval

//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(tempo) {
  let counter = 0;
  return () => {
    setInterval(() => {
      counter++;
      console.log(`${counter}`);
    }, tempo);
  };
}

const contaOgniTot = creaContatoreAutomatico(2000);
//contaOgniTot();

// Snack 7
//Crea una funzione che ferma un timer dopo un certo tempo

//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

// Snack 8 (Bonus)
//Crea una funzione che simula un conto alla rovescia

//Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// Snack 9 (Bonus)
//Creare una funzione che esegue una sequenza di operazioni con ritardi

//Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
//Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

//Snack 10 (Bonus)
//Creare un throttler per limitare l’esecuzione di una funzione

//Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
//Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
