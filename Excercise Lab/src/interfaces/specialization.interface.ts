export interface ISpecialization {
    name: string;
    // Elenco malattie trattabili da questa specializzazione
    treatablePathologies: Array<string>;
}