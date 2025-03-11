# LinkedIn Clone Project

## Descrizione
Il LinkedIn Clone Project è una replica parziale di LinkedIn, sviluppata durante una build week come parte di un progetto di gruppo. Durante la build week, il docente ci ha fornito delle linee guida generali su come procedere con il progetto, ma la gestione delle pagine e la selezione delle funzionalità da sviluppare era sotto la nostra responsabilità.

Il progetto è stato realizzato con React e include le funzionalità essenziali di LinkedIn, come la visualizzazione di un header, una pagina principale con le icone e i nomi del team, e un footer con link fittizi.

Quando l'utente clicca su uno dei membri del team, viene visualizzata la pagina personale di quel membro con un'immagine di copertura, un'immagine del profilo, una sezione "disponibile per..." e una lista delle esperienze lavorative. La parte più complessa del progetto è stata la gestione delle esperienze lavorative, poiché dovevamo associare correttamente ogni esperienza al profilo selezionato, evitando che le esperienze si replicassero sugli altri utenti.

## Tecnologie utilizzate
- React
- JavaScript
- Boostrap
- React Router (per la navigazione tra le pagine)
- State management (per la gestione dei dati e delle esperienze degli utenti)

## Installazione e utilizzo
Clona il repository:

git clone https://github.com/tuo-username/linkedin-clone.git
Vai nella cartella del progetto e installa le dipendenze:
- npm install
  
Avvia l'applicazione:
- npm start

Puoi navigare tra la pagina principale, visualizzare i profili individuali e scoprire le esperienze lavorative dei membri del team.

## Struttura del progetto
La struttura del progetto è la seguente:

## Funzionalità implementate
- Pagina principale con un header simile a quello di LinkedIn, che mostra le icone dei membri del team.
- Navigazione tra profili: cliccando su un membro del team, viene aperta una pagina personale che mostra:
   - Immagine di copertura e immagine del profilo.
   - Sezione "disponibile per..." che descrive la disponibilità professionale.
   - Esperienze lavorative associate a ciascun membro del team, visibili solo sul proprio profilo.
- State management per gestire i dati dei membri del team e le loro esperienze lavorative, evitando che le esperienze vengano replicate sugli altri profili.
- Footer con link fittizi per riprodurre una struttura simile a quella di LinkedIn.
- Routing tramite React Router per passare dalla homepage alla pagina del profilo personale di ciascun membro del team.
