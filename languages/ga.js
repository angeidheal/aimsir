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
  "possible-very-light-snow": "seans ar sneachta an-éadrom",
  "very-light-snow": "sneachta an-éadrom",
  "possible-light-snow": "seans ar sneachta éadrom",
  "light-snow": "sneachta éadrom",
  "medium-snow": "sneachta",
  "heavy-snow": "sneachta trom",
  "possible-thunderstorm": "seans ar stoirm thoirní",
  "thunderstorm": "stoirm thoirní",
  "light-wind": "laoithne éadrom",
  "medium-wind": "laoithne mheasarth",
  "heavy-wind": "laoithne láidir",
  "low-humidity": "tiorim",
  //"high-humidity": "tais",
  "fog": "ceoch",
  "light-clouds": "scamaill bhána",
  "medium-clouds": "scamaill mheasartha",
  "heavy-clouds": "scamaill throma",
  "today-morning": "maidin inniu",
  "later-today-morning": "níos déanaí ar maidin inniu",
  "today-afternoon": "iarnóin inniu",
  "later-today-afternoon": "níos déanaí ar iarnóin inniu",
  "today-evening": "tráthnóna inniu",
  "later-today-evening": "níos déanaí ar iarnóin inniu",
  "today-night": "anocht",
  "later-today-night": "níos déanaí anocht",
  "tomorrow-morning": "maidin amárach",
  "tomorrow-afternoon": "iarnóin amárach",
  "tomorrow-evening": "tráthnóna amárach",
  "tomorrow-night": "oiche amárach",
  "morning": "ar maidin",
  "afternoon": "iarnóin",
  "evening": "tráthnóna",
  "night": "anocht",
  "today": "inniu",
  "tomorrow": "amárach",
  "sunday": "Dé Domhnaigh",
  "monday": "Dé Luain",
  "tuesday": "Dé Máirt",
  "wednesday": "Dé Céadaoin",
  "thursday": "Déardaoin",
  "friday": "Dé hAoine",
  "saturday": "Dé Sathairn",
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
  "inches": "$1 orlach",
  "centimeters": "$1 ceintiméadair",
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
  "with": "$1, le $2",
  "range": "$1\u2013$2",
  "parenthetical": "$1 ($2)",
  "for-hour": "$1 ar feadh uair an chloig",
  "starting-in": "$1 ag tosú i $2",
  "stopping-in": "$1 ag stopadh i $2",
  "starting-then-stopping-later": "$1 ag tosú i $2, ag stopadh i $3",
  "stopping-then-starting-later": "$1 ag stopadh i $2, ag tosú i $3",
  "for-day": "$1 ar feadh an lae",
  "starting": "$1 ag tosú $2",
  "until": "$1 ag stopadh $2",
  "until-starting-again": "$1 ag stopadh $2, ag tosú arís $3",
  "starting-continuing-until": "$1 ag tosú $2, ag stopadh $3",
  "during": "$1 $2",
  "for-week": "$1 ar feadh na seachtaine",
  "over-weekend": "$1 ar feadh an deireadh seachtaine",
  "temperatures-peaking": "an teocht dul chomh hard le $1 $2",
  "temperatures-rising": "an teteocht dul chomh hard le $1 $2",
  "temperatures-valleying": "an teocht dul chomh íseal le $1 $2",
  "temperatures-falling": "an teocht dul chomh íseal le $1 $2",
  //Capitalize the first letter of every word, except if that word is
  //"and". (This is a very crude bastardization of proper English titling
  //rules, but it is adequate for the purposes of this module.)
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
