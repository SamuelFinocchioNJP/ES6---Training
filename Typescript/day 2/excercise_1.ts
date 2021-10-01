// Strutturare ad oggetti l'architettura di un software che gestisce un laboratorio medico
// Il laboratorio gestisce:
// Medici, specializzazioni, patologie relative a specializzazioni, pazienti, creando prenotazioni in fasce di un ora data una data

// Medici e pazienti hanno dei field in comune evitiamo di ripetere i campi

// Funzionalità necessarie:
// 1) dato un paziente e la relativa patologia schedularlo prima possibile con un medico 
// con una specializzazione tale da poter gestire la sua patologia

// 2) Data una patologia restituire tutti i medici in grado di trattare la patologia
// 3) Dato un medico restituire tutte le patologie da loro trattabili

// 4) Modificare il programma per schedulare in base a priorità
// 5) Quale potrebbe essere una struttura dati adatta a gestire le prenotazioni in base alla priorità