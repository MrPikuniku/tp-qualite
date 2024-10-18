import {test, describe, expect } from 'vitest'; 
import {ligne_complete, supprimer_ligne } from '../src/tetris';

const tab = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,1],
    [1,1,1,1,1,1,1,1],
];


         
describe("La grille ", () =>{
    test("Détection de lignes complètes", () =>{
        expect(ligne_complete(tab, tab[0][6])).toEqual(1);
        expect(ligne_complete(tab, tab[0][8])).toEqual(1);
        expect(ligne_complete(tab, tab[0][10])).toEqual(1);
        expect(ligne_complete(tab, tab[0][2])).toEqual(0);
        expect(ligne_complete(tab, tab[0][5])).toEqual(0);
    });

    test("Suppressions de lignes complètes ", ()=>{
        expect(supprimer_ligne(tab, tab[0][6])).toEqual(6);
        expect(supprimer_ligne(tab, tab[0][8])).toEqual(8);
        expect(supprimer_ligne(tab, tab[0][10])).toEqual(10);

    } )



});



