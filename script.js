const indicatori = document.querySelectorAll('#time span'),
    scadenza = new Date(2021, 8, 9,19,50,0),
    ms_scadenza = scadenza.getTime(),
    ms_giorno = 24*60*60*1000,
    ms_in_ora= 60*60*1000,
    ms_in_minuto = 60*1000;

function countdown() {
    const data_corrente = new Date(),
        ms_corrente = data_corrente.getTime(),
        ms_rimanenti = ms_scadenza - ms_corrente;

       

    let giorni = Math.floor(ms_rimanenti/ ms_giorno),
        ore = Math.floor((ms_rimanenti % ms_giorno) / ms_in_ora),
        minuti = Math.floor((ms_rimanenti % ms_in_ora) / ms_in_minuto),
        secondi = Math.floor((ms_rimanenti% ms_in_minuto)/1000);
    let time = [giorni,ore,minuti,secondi];

     if (ms_rimanenti <= 0 ) {
            document.getElementById('event').textContent = "Evento iniziato";
            // document.getElementById('time').style.display = "none";
            clearInterval(countdownInterval);
            return;
        }
        else{
            indicatori.forEach((span,index) => {
                span.textContent = time[index]
                })
        }

    
}

const countdownInterval = setInterval(countdown, 1000);
countdown();