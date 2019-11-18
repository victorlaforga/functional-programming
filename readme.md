## War&WeaponTreasures

In this course we are going to visualize data from the NMVW. The main goal is to make a concept which also can visually be presented in reality.

### Concept

Voor het concept hadden we de keuze om een applicatie te maken voor Rik, of iets met geo locaties te doen. Ik heb ervoor gekozen om voor Rik aan de slag te gaan omdat ik persoonlijk vond dat geo locaties iets algemeens is, en ik wou me meer focussen op een bepaalde categorie.

Ik begon met het zoeken naar objecten die interessant waren om te bekijken voor meerdere of een specifieke doelgroep.

Mijn concept heet _**War&WeaponTreasures**_. Ik wil de gebruiker de verschillende lengte's van de objecten tonen en het vergelijken met objecten waar we dagelijks mee te maken hebben om een goed beeld ervan te krijgen. Ik ga hierbij 3 verschillende categorieën gebruiken: **_wapens, vechten and oorlog_**.

_EDIT: Uiteindelijk heb ik het gehouden bij wapens omdat dit al genoeg objecten waren om te tonen, door de andere categorieen erbij te doen zou het een overvloed aan objecten worden._

![](https://user-images.githubusercontent.com/37700441/68128160-7b54da80-ff17-11e9-8bd5-fde5f8dffdb2.png)

## Waar komt de data vandaan?
Deze 4 musea hebben 1 grote database samen waarin bijna alle voorwerpen in staan die hierbij horen.

![](https://user-images.githubusercontent.com/37700441/67966655-91efee80-fc04-11e9-9d4b-543a5d4df321.png)

De NMVW werkt met sparql als database omgeving.
Om de collectie te bekijken verwijs ik je naar: [https://collectie.wereldculturen.nl/](https://collectie.wereldculturen.nl/)

## Wat moet je doen om het project werkend te krijgen op je eigen laptop? :computer:
1. Open je terminal
2. Kopier de volgende regel en zet die in je terminal `git clone https://github.com/victorlaforga/functional-programming.git`
3. Ga naar je folder doormiddel van `cd functional-programming`
4. Om de applicatie te runnen typ open het bestan index.html

## Leerdoelen
* Kennis maken met functional programming
 * Kennis maken met de ES6 javascript syntax
 * Kennis maken met D3
 * Het maken van datavisualisaties met D3 door middel van data
 * Het opschonen van opgehaalde data

## Mijn Wiki :notebook_with_decorative_cover:
Als je meer wilt weten over mijn keuzes en mijn proces van dit project, verwijs ik je naar [Mijn Wiki](https://github.com/victorlaforga/functional-programming/wiki)

## Functioneel programmeren in mijn project

Voor dit project heb ik data moeten schoonmaken, voor mijn applicatie had ik de lengte's nodig van alle objecten binnen mijn categorie. Deze data was erg vies en had heel veel verschillende uitdrukkingen. Hierdoor werd het lastig om alleen de lengte specifiek eruit te halen. Uiteindelijk heb ik met veel struggles een map functie aangemaakt die door alle lengtes heen loopt en alleen de lengte eruit haalt, en op basis van mijn if functies, worden die toegepast. Voor meer info over het data opschonen verwijs ik je naar mijn wiki.

**Soorten strings die er zijn**

* "l 159 x br 5 x h 3.2 cm"
* "l 176.3 x br 2.8 x h 1.4 cm & speerpunt: l 22.4 x br 2.8 cm"
* "15 x 8,6 x 3,6 cm"
* "Dm 4,8 cm"
* "L 4,5 cm"
* "circa 31,5 x 42,5cm (12 3/8 x 16 3/4in.)"
* "l 223 x br 6 x dikte 2 cm"
* "hoogte 14,5cm, bXd 19,5 x 21,5"
* "l 111 x diam 2.7 cm"
* "zwaard: l 91 x br 12 x dikte 4.6  cm↵schede: l 78,5 x br 63 x h 2,4 cm"
* "diam 11 x h 12.5 cm"

## Mijn clean-up functie

```javascript
export const cleanData = lengthObjects.map(size => {
  size = size.toLowerCase();
  
  // regex expression which matches all characters except in between ()
  size = size.replace(size.match(/\(.*?\)/g), "")
  // regex expression which matches all characters except: l, numbers, '.' , whitespace & x
  size = size.replace(/[^l0-9\d\sx.]/g, "");

  if (typeof size === "string") {
    size = size.replace(/,/g, "."); 

    if (size.match("l")) {
      return size.slice(0, 7).replace(/[^0-9/.]/g, "");
    } 
    if (size.match(/[ˆ(\d|+|\-)]/g) === null) {
        return size.replace(size, "");
    }

    // if first character of string is a number, slice vanaf het 3de character (omdat er geen lengtes zij van meer dan 4 cijfers)
    if (size.charAt(0) != NaN) {
      return size.slice(0, 3);
    }
  }
});
```

Ik map eerst door de array om vervolgens alleen de lengte's in een string te krijgen. Daarna vervang ik size door mijn 'standaard' replace functies: zoals to lowercase, replace everything between () & verwijder bepaalde characters.

Onderaan heb ik nog een for loop die ervoor zorgt dat alle numbers van dataIntoNumber als property size worden meegeven per object. Hierdoor krijgt elk object een size (wat dus de opgeschoonde data is). 
