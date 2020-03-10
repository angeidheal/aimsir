"use strict";

function join_with_shared_prefix(a, b, joiner) {
  let i = 0;

  while(i !== a.length &&
        i !== b.length &&
        a.charCodeAt(i) === b.charCodeAt(i))
    ++i;

  while(i && a.charCodeAt(i - 1) !== 32)
    --i;

  return a + joiner + b.slice(i);
}

module.exports = {
  //"clear": "soilleir",
  //"no-precipitation": "gun sileadh",
  "mixed-precipitation": "frasaíocht éagsúil",
  "possible-very-light-precipitation": "seans ar frasaíocht an-éadrom",
  "very-light-precipitation": "frasaíocht an-éadrom",
  "possible-light-precipitation": "seans ar frasaíocht éadrom",
  "light-precipitation": "frasaíocht éadrom",
  "medium-precipitation": "frasaíocht",
  "heavy-precipitation": "frasaíocht throm",
  "possible-very-light-rain": "seans ar fearthainn an-éadrom",
  "very-light-rain": "fearthainn an-éadrom",
  "possible-light-rain": "seans ar fearthainn éadrom",
  "light-rain": "fearthainn éadrom",
  "medium-rain": "fearthainn",
  "heavy-rain": "fearthainn throm",
  "possible-very-light-sleet": "seans ar flichshneachta an-éadrom",
  "very-light-sleet": "flichshneachta an-éadrom",
  "possible-light-sleet": "seans ar flichshneachta éadrom",
  "light-sleet": "flichshneachta éadrom",
  "medium-sleet": "flichshneachta",
  "heavy-sleet": "flichshneachta trom",
  //"possible-very-light-snow": "ma dh'fhaoidte gum bi frasan sneachda",
  //"very-light-snow": "frasan sneachda",
  "possible-light-snow": "seans ar sneachta éadrom",
  "light-snow": "sneachta éadrom",
  "medium-snow": "sneachta",
  "heavy-snow": "sneachta trom",
  //"possible-thunderstorm": "ma dh'fhaoidte gum bi stoirmean tàirneanaich",
  //"thunderstorm": "stoirmean tàirneanaich",
  //"light-wind": "oiteag shocair",
  //"medium-wind": "gaoth",
  //"heavy-wind": "gaoth làidir",
  //"low-humidity": "tioram",
  //"high-humidity": "tais",
  //"fog": "ceòthach",
  //"light-clouds": "sgothan aotruime",
  //"medium-clouds": "sgothach",
  //"heavy-clouds": "sgothan truime",
  //"today-morning": "madainn an-diugh",
  //"later-today-morning": "nas anmoiche madainn an-diugh",
  //"today-afternoon": "tràth feasgar an-diugh",
  //"later-today-afternoon": "nas anmoiche feasgar an-diugh",
  //"today-evening": "anmoch feasgar an-diugh",
  //"later-today-evening": "nas anmoiche feasgar an-diugh",
  "today-night": "anocht",
  //"later-today-night": "nas anmoiche a-nochd",
  //"tomorrow-morning": "madainn a-màireach",
  //"tomorrow-afternoon": "tràth feasgar a-màireach",
  //"tomorrow-evening": "anmoch feasgar a-màireach",
  //"tomorrow-night": "an ath oidhche",
  //"morning": "anns a' mhadainn",
  //"afternoon": "tràth san fheasgar",
  //"evening": "anmoch san fheasgar",
  //"night": "a-nochd",
//  "today": "an-diugh",
//  "tomorrow": "a-màireach",
//  "sunday": "Didòmhnaich",
//  "monday": "Diluain",
//  "tuesday": "Dimàirt",
//  "wednesday": "Diciadain",
//  "thursday": "Diardaoin",
//  "friday": "Dihaoine",
//  "saturday": "Disathairne",
//  "next-sunday": "Didòmhnaich an ath sheachdain",
//  "next-monday": "Diluain an ath sheachdain",
//  "next-tuesday": "Dimàirt an ath sheachdain",
//  "next-wednesday": "Diciadain an ath sheachdain",
//  "next-thursday": "Diardaoin an ath sheachdain",
//  "next-friday": "Dihaoine an ath sheachdain",
//  "next-saturday": "Disathairne an ath sheachdain",
//  "minutes": "$1 mion.",
  "fahrenheit": "$1\u00B0F",
  "celsius": "$1\u00B0C",
//  "inches": "$1 òir.",
//  "centimeters": "$1 cm.",
  "less-than": "< $1",
  "and": function(a, b) {
    return join_with_shared_prefix(
      a,
      b,
      a.indexOf(",") !== -1 ? ", agus " : " agus "
    );
  },
//  "through": function(a, b) {
//    return join_with_shared_prefix(a, b, " tro ");
  },
//  "with": "$1, le $2",
//  "range": "$1\u2013$2",
//  "parenthetical": "$1 ($2)",
//  "for-hour": "$1 fad uair a thìde",
//  "starting-in": "$1 a' tòiseachadh ann an $2",
//  "stopping-in": "$1 a' stad ann an $2",
//  "starting-then-stopping-later": "$1 a' tòiseachadh ann an $2, a' stad as dèidh $3",
//  "stopping-then-starting-later": "$1 a' stad ann an $2, a' tòiseachadh a-rithist as dèidh $3",
//  "for-day": "$1 fad an latha",
//  "starting": "$1 a' tòiseachadh $2",
//  "until": "$1 a' stad $2",
//  "until-starting-again": "$1 a' stad $2, a' tòiseachadh a-rithist $3",
//  "starting-continuing-until": "$1 a' tòiseachadh $2, a' stad $3",
//  "during": "$1 $2",
//  "for-week": "$1 fad na seachdain",
//  "over-weekend": "$1 thairis air an deireadh-sheachdain",
//  "temperatures-peaking": "an teòthachd as àirde a' ruigsinn $1 $2",
//  "temperatures-rising": "an teòthachd as àirde a' ruigsinn $1 $2",
//  "temperatures-valleying": "an teòthachd as àirde a' tuiteam gu $1 $2",
//  "temperatures-falling": "an teòthachd as àirde a' tuiteam gu $1 $2",
  // Capitalize the first letter of every word, except if that word is
  // "and". (This is a very crude bastardization of proper English titling
  // rules, but it is adequate for the purposes of this module.)
  "title": function(str) {
    return str.replace(/\S+/g, function(word) {
      return word === "Agus" ?
        word :
        word.charAt(0).toUpperCase() + word.slice(1);
    });
  },
  /* Capitalize the first word of the sentence and end with a period. */
  "sentence": function(str) {
    /* Capitalize. */
    str = str.charAt(0).toUpperCase() + str.slice(1);

    /* Add a period if there isn't already one. */
    if(str.charAt(str.length - 1) !== ".")
      str += ".";

    return str;
  },
//  "next-hour-forecast-status": "chan eil ro-aithrisean an ath uair $1 air sgàth 's gu bheil $2",
//  "unavailable": "ri fhaoitinn",
//  "temporarily-unavailable": "ri fhaoitinn airson grèis",
//  "partially-unavailable": "ri fhaoitinn gu h-iomlan",
//  "station-offline": "gu bheil a h-uile stèisean-radar a tha faisg air làimh far loidhne",
//  "station-incomplete": "beàrnan anns an fhiosrachadh bho na stèisean-radar a tha faisg air làimh",
};
