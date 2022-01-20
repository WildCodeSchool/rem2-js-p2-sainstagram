const users = [ {
  "id": 1,
  "name": "Seiya",
  "age": "13",
  "height": "165cm",
  "weight": "53kg",
  "birthday": "1er Décembre",
  "birthplace": "Japon",
  "bloodtype": "B",
  "category": "Chevalier de Bronze",
  "constellation": "Pégase",
  "trainingplace": "Sanctuaire, Grèce",
  "profilepic":
    "https://i.ibb.co/LZNkthX/seiya-profilepic.jpg",
  "description": "Pour la gloire d'Athéna!",
  "abilities": [
    "les Météores de Pégase",
    "la Comète de Pégase",
    "le Tourbillon de Pégase"
  ]
  },
  {
    "id": 2,
    "name": "Shiryu",
    "age": "14",
    "height": "172cm",
    "weight": "53kg",
    "birthday": "4 Octobre",
    "birthplace": "Japon",
    "bloodtype": "A",
    "category": "Chevalier de Bronze",
    "constellation": "Dragon",
    "trainingplace": "Lianxi, Chine",
    "profilepic":
      "https://i.ibb.co/MSyXpJw/shiryu-profilepic.jpg",
    "description": "Je donnerais ma vie pour protéger mes amis",
    "abilities": [
      "la Colère du Dragon",
      "l'Ultime Dragon",
      "les Cent Dragons Suprêmes de Rozan",
      "Excalibur"
    ]
  },
  {
    "id": 3,
    "name": "Hyôga",
    "age": "14",
    "height": "173cm",
    "weight": "60kg",
    "birthday": "23 Janvier",
    "birthplace": "Russie",
    "bloodtype": "O",
    "category": "Chevalier de Bronze",
    "constellation": "Cygne",
    "trainingplace": "Sibérie orientale",
    "profilepic":
      "https://i.ibb.co/cvKXYwy/hyoga-profilepic.jpg",
    "description":
      "Penser qu'un rêve est une chose irréalisable, c'est être tel un vieillard qui a renoncé à vivre.",
    "abilities": [
      "la Poussière de Diamant",
      "Tonnerre de l'Aube",
      "l'Execution de l'Aurore"
    ]
  },
  {
    "id": 4,
    "name": "Shun",
    "age": "13",
    "height": "165cm",
    "weight": "51kg",
    "birthday": "9 Septembre",
    "birthplace": "Japon",
    "bloodtype": "A",
    "category": "Chevalier de Bronze",
    "constellation": "Andromède",
    "trainingplace": "Ile d'Andromède, Somalie",
    "profilepic":
      "https://i.ibb.co/sspBTpf/shun-profilepic.jpg",
    "description":
      "Je n'aime pas me battre mais je ferai tout pour protéger ceux que j'aime",
    "abilities": [
      "Chaîne Nébulaire",
      "Cercles de Défense",
      "Vague de Tonnerre",
      "Tornade Nébulaire",
      " Tempête Nébulaire"
    ]
  },
  {
    "id": 5,
    "name": "Ikki",
    "age": "15",
    "height": "175cm",
    "weight": "62kg",
    "birthday": "15 Août",
    "birthplace": "Japon",
    "bloodtype": "AB",
    "category": "Chevalier de Bronze",
    "constellation": "Phénix",
    "trainingplace": "Ile de la Reine Morte, Pacifique Sud",
    "profilepic":
      "https://i.ibb.co/y5QBGNq/ikki-profilepic.jpg",
    "description":
      "Je n'ai d'ordres à recevoir de personne, pas même d'une déesse !",
    "abilities": ["l'Illusion du Phénix", "les Ailes du Phénix"]
  },
  {
    "id": 6,
    "name": "Saori Kido",
    "age": "13",
    "height": "155cm",
    "weight": "44kg",
    "birthday": "1er Septembre",
    "birthplace": "Sanctuaire, Grèce",
    "bloodtype": "A",
    "category": "Déesse",
    "constellation": null,
    "trainingplace": null,
    "profilepic":
      "https://i.ibb.co/5402THJ/saori-profilepic.jpg",
    "description": "Je suis la réincarnation d'Athéna!",
    "abilities": [ ]
  },
  {
    "id": 7,
    "name": "Jabu",
    "age": "13",
    "height": "165cm",
    "weight": "55kg",
    "birthday": "3 Novembre",
    "birthplace": "Japon",
    "bloodtype": "B",
    "category": "Chevalier de Bronze",
    "constellation": "Licorne",
    "trainingplace": "Oran, Algérie",
    "profilepic":
      "https://i.ibb.co/YbLDttn/jabu-profilepic.jpg",
    "description": "Je suis prêt à tous les sacrifice pour Saori",
    "abilities": ["Galop de la Licorne"]
  },
  {
    "id": 8,
    "name": "Geki",
    "age": "15",
    "height": "188cm",
    "weight": "102kg",
    "birthday": "15 Mai",
    "birthplace": "Japon",
    "bloodtype": "A",
    "category": "Chevalier de Bronze",
    "constellation": "Grande Ourse",
    "trainingplace": "Montagnes Rocheuses, Canada",
    "profilepic":
      "https://i.ibb.co/BzdJCXZ/geki-profilepic.jpg",
    "description": "Rien ne vaut la force brute",
    "abilities": ["Prise de l'Ours"]
  },
  {
    "id": 9,
    "name": "Ichi",
    "age": "14",
    "height": "170cm",
    "weight": "56kg",
    "birthday": "10 Février",
    "birthplace": "Japon",
    "bloodtype": "B",
    "category": "Chevalier de Bronze",
    "constellation": "Hydre",
    "trainingplace": "Lake Holtz, Finlande",
    "profilepic":
      "https://i.ibb.co/LZ5z989/ichi-profilepic.jpg",
    "description": "Je l'aurai un jour, je l'aurai",
    "abilities": ["Griffes de l'Hydre"]
  },
  {
    "id": 10,
    "name": "Ban",
    "age": "15",
    "height": "181cm",
    "weight": "83kg",
    "birthday": "30 Décembre",
    "birthplace": "Japon",
    "bloodtype": "B",
    "category": "Chevalier de Bronze",
    "constellation": "Lionet",
    "trainingplace": "Kilimandjaro, Tanzanie",
    "profilepic":
      "https://i.ibb.co/2n3dLvw/ban-profilepic.jpg",
    "description": "Je suis là parce que je n'ai pas eu le choix",
    "abilities": ["le Sursaut du Lionnet"]
  },
  {
    "id": 11,
    "name": "Nachi",
    "age": "14",
    "height": "171cm",
    "weight": "57kg",
    "birthday": "20 Juillet",
    "birthplace": "Japon",
    "bloodtype": "AB",
    "category": "Chevalier de Bronze",
    "constellation": "Loup",
    "trainingplace": "Bomihills, Libéria",
    "profilepic":
      "https://i.ibb.co/mC8Q1r9/nachi-profilepic.jpg",
    "description": "Je suis sûr que je peux le faire",
    "abilities": ["Hurlement Mortel"]
  },
  {
    "id": 12,
    "name": "June",
    "age": "14",
    "height": "160cm",
    "weight": "45kg",
    "birthday": "17 Avril ",
    "birthplace": "Ethiopie",
    "bloodtype": "O",
    "category": "Chevalier de Bronze",
    "constellation": "Caméléon",
    "trainingplace": "Ile d'Andromède, Somalie",
    "profilepic":
      "https://i.ibb.co/K9dx5tH/june-profilepic.jpg",
    "description": "Je suis quelqu'un d'obstiné, sachez-le",
    "abilities": []
  },
  {
    "id": 13,
    "name": "Marine de l'Aigle",
    "age": "16",
    "height": "167cm",
    "weight": "51kg",
    "birthday": "18 Mars",
    "birthplace": "Japon",
    "bloodtype": "A",
    "category": "Chevalier d'Argent",
    "constellation": "l'Aigle",
    "trainingplace": "Sanctuaire, Grèce",
    "profilepic": "https://i.ibb.co/6gDW8Cv/marin-profilepic.jpg",
    "description": "Jeune prof japonaise expat en Grèce, toujours là pour toi Seiya!",
    "abilities": [
      "La précipitation aigle",
      "Le poing météore",
    ]
  },
  {
    "id": 14,
    "name": "Shina du Serpentaire",
    "age": "16",
    "height": "166cm",
    "weight": "49kg",
    "birthday": "24 mars",
    "birthplace": "Italie",
    "bloodtype": "B",
    "category": "Chevalier d'Argent",
    "constellation": "Serpentaire",
    "trainingplace": "Sanctuaire, Grèce",
    "profilepic": "https://i.ibb.co/256gvbP/shina-profilepic.jpg",
    "description": "Tempérament de feu :flame",
    "abilities": [
      "Le soleil noir",
    ]
  },
  {
    "id": 15,
    "name": "Misty du Lézard",
    "age": "16",
    "height": "180cm",
    "weight": "68kg",
    "birthday": "11 Octobre",
    "birthplace": "France",
    "bloodtype": "O",
    "category": "Chevalier d'Argent",
    "constellation": "le Lézard",
    "trainingplace": "France, Côte d'Azur",
    "profilepic": "https://i.ibb.co/1rKjb77/misty1.jpg",
    "description": "Feel CUTE, will NOT delete later",
    "abilities": [
      "Le voyageur de marbre",
    ]
  },
  {
    "id": 16,
    "name": "Babel du Centaure",
    "age": "17",
    "height": "185cm",
    "weight": "80kg",
    "birthday": "20 février",
    "birthplace": "Irak",
    "bloodtype": "B",
    "category": "Chevalier d'Argent",
    "constellation": "le Centaure",
    "trainingplace": "Ile du Centaure",
    "profilepic": "https://i.ibb.co/HHzkT5L/Babel-profilepic.jpg",
    "description": "",
    "abilities": [
      "Le vortex de flammes",
    ]
  },
  {
    "id": 17,
    "name": "Moses de la Baleine",
    "age": "17",
    "height": "205cm",
    "weight": "130kg",
    "birthday": "2 Août",
    "birthplace": "Nouvelle Zélande",
    "bloodtype": "A",
    "category": "Chevalier d'Argent",
    "constellation": "la Baleine",
    "trainingplace": "Nouvelle Zélande",
    "profilepic": "https://i.ibb.co/pRyRPm9/t-l-chargement.jpg",
    "description": "Puissant comme une baleine, je t'envoie en l'air comme une plume. ",
    "abilities":[
      "Le bombardier jaillissant",
    ]     
  },
  {
    "id": 18,
    "name": "Astérion du Chien",
    "age": "16",
    "height": "183cm",
    "weight": "75kg",
    "birthday": "20 février",
    "birthplace": "Danemark",
    "bloodtype": "B",
    "category": "Chevalier d'Argent",
    "constellation": "le Chien",
    "trainingplace": "Autriche, Brocken",
    "profilepic": "https://i.ibb.co/545gqsN/images-1.jpg",
    "description": "Lis dans les coeurs depuis 2005.",
    "abilities":[
      "Le million d'attaques fantômes",
    ] 
  },
  {
    "id": 19,
    "name": "Jamian du Corbeau",
    "age": "17",
    "height": "166cm",
    "weight": "56kg",
    "birthday": "27 Juillet",
    "birthplace": "Angleterre",
    "bloodtype": "A",
    "category": "Chevalier d'Argent",
    "constellation": "le Corbeau",
    "trainingplace": "Angleterre/ Ecosse",
    "profilepic": "https://i.ibb.co/H4H7f63/jamian-profilepic.jpg",
    "description": "Un peu émo, un peu punk",
    "abilities": [
      "L' arbre d'ailes noir'",
    ] 
  },
  {
    "id": 20,
    "name": "Dante du Cerbère",
    "age": "17",
    "height": "185cm",
    "weight": "93kg",
    "birthday": "29 Mars",
    "birthplace": "Italie",
    "bloodtype": "AB",
    "category": "Chevalier d'Argent",
    "constellation": "le Cerbère",
    "trainingplace": "Italie, Sicile",
    "profilepic": "https://i.ibb.co/3Rn8TyY/t-l-chargement.jpg",
    "description": "Je t'emmènerai aux portes de l'enfer et bien plus loin encore",
    "abilities": [
      "La chaîne  infernale à billes d'acier",
    ] 
  },
  {
    "id": 21,
    "name": "Capella du Cocher",
    "age": "17",
    "height": "183cm",
    "weight": "80kg",
    "birthday": "21 Août",
    "birthplace": "Grèce",
    "bloodtype": "B",
    "category": "Chevalier d'Argent",
    "constellation": "le Cocher",
    "trainingplace": "Sanctuaire, Grèce",
    "profilepic": "https://i.ibb.co/TM4zJP5/t-l-chargement-1.jpg",
    "description": "Tu peux pas test. Tout pour mon bro Dante.",
    "abilities": [
      "L'attaque de disque",
    ], 
  },
  {
    "id": 22,
    "name": "Algol de Persée",
    "age": "17",
    "height": "188cm",
    "weight": "83kg",
    "birthday": "11 Novembre",
    "birthplace": "Arabie Saoudite",
    "bloodtype": "A",
    "category": "Chevalier d'Argent",
    "constellation": "Persée",
    "trainingplace": "Autriche",
    "profilepic": "https://i.ibb.co/Xsggcc2/t-l-chargement-6.jpg",
    "description": "La puissance - ROHFF",
    "abilities": [
      "La Gorgone de Ra's al Ghul",
    ]
  },
  {
    "id": 23,
    "name": "Sirius du grand Chien",
    "age": "17",
    "height": "185cm",
    "weight": "86kg",
    "birthday": "6 Janvier",
    "birthplace": "Allemagne de l'Est",
    "bloodtype": "O",
    "category": "Chevalier d'Argent",
    "constellation": "le grand Chien",
    "trainingplace": "Sanctuaire, Grèce",
    "profilepic": "https://i.ibb.co/9VJRV9Y/t-l-chargement.jpg",
    "description": "Work hard, play hard",
    "abilities": [
      "Le grand descructeur de montagnes"
    ]
  },
  {
    "id": 24,
    "name": "Algethi d'Héraclès",
    "age": "17",
    "height": "240cm",
    "weight": "180kg",
    "birthday": "15 Août",
    "birthplace": "Afrique",
    "bloodtype": "O",
    "category": "Chevalier d'Argent",
    "constellation": "Héraclès",
    "trainingplace": "Ouganda",
    "profilepic": "https://i.ibb.co/vZwKy0m/t-l-chargement.jpg",
    "description": "Fitlife, prise de masse, je ne manque jamais le leg day",
    "abilities": [
      "Le Kornéhoros"
    ]
  },
  {
    "id": 25,
    "name": "Mü",
    "age": "20",
    "height": "182cm",
    "weight": "75kg",
    "birthday": "27 mars",
    "birthplace": "Tibet",
    "bloodtype": "A",
    "category": "Chevalier d'Or",
    "constellation": "Bélier",
    "trainingplace": "Jamir",
    "profilepic": "https://fr.web.img5.acsta.net/r_1920_1080/newsv7/18/02/09/15/08/54593460.jpg",
    "description": "",
    "abilities": [
      "Crystal Wall",
      "Starlight Extinction",
      "Stardust Revolution",
      "Crystal Net"
    ]
  },

  {
    "id": 26,
    "name": "Aldébaran",
    "age": "20",
    "height": "210cm",
    "weight": "130kg",
    "birthday": "4 octobre",
    "birthplace": "Tibet",
    "bloodtype": "B",
    "category": "Chevalier d'Or",
    "constellation": "Taureau",
    "trainingplace": "Brésil",
    "profilepic": "https://fr.web.img4.acsta.net/r_1920_1080/newsv7/18/02/09/14/53/01081260.jpg",
    "description": "",
    "abilities": ["Great Horn"]
  },

  {
    "id": 27,
    "name": "Saga",
    "age": "28",
    "height": "188cm",
    "weight": "87kg",
    "birthday": "30 mai",
    "birthplace": "Grèce",
    "bloodtype": "B",
    "category": "Chevalier d'Or",
    "constellation": "Gémeaux",
    "trainingplace": "Grèce",
    "profilepic": "https://fr.web.img5.acsta.net/r_1920_1080/newsv7/18/02/09/15/09/45719120.jpg",
    "description": "",
    "abilities": [
      "Galaxian Explosion",
      "Another Dimension",
      "Genrô Maô Ken"
    ]
  },

  {
    "id": 28,
    "name": "Masque de Mort",
    "age": "23",
    "height": "184cm",
    "weight": "82kg",
    "birthday": "24 juin",
    "birthplace": "Italie",
    "bloodtype": "A",
    "category": "Chevalier d'Or",
    "constellation": "Cancer",
    "trainingplace": "Sicile",
    "profilepic": "https://fr.web.img2.acsta.net/r_1920_1080/newsv7/18/02/09/14/53/00862510.jpg",
    "description": "",
    "abilities": [
      "Seki Shi Ki Mei Kai Ha",
      "Tseih She Ke"
    ]
  },

  {
    "id": 29,
    "name": "Aiolia",
    "age": "20",
    "height": "185cm",
    "weight": "85kg",
    "birthday": "16 Aout",
    "birthplace": "Grèce",
    "bloodtype": "O",
    "category": "Chevalier d'Or",
    "constellation": "Lion",
    "trainingplace": "Grèce",
    "profilepic": "https://fr.web.img6.acsta.net/r_1920_1080/newsv7/18/02/09/15/29/26317460.jpg",
    "description": "",
    "abilities": [
      "Lightning Plasma",
      "Lightning Bolt",
      "le Photon Burst"
    ]
  },

  {
    "id": 30,
    "name": "Shaka",
    "age": "20",
    "height": "182cm",
    "weight": "81kg",
    "birthday": "19 Septembre",
    "birthplace": "Inde",
    "bloodtype": "AB",
    "category": "Chevalier d'Or",
    "constellation": "Vierge",
    "trainingplace": "Inde",
    "profilepic": "https://fr.web.img2.acsta.net/r_1920_1080/newsv7/18/02/09/14/51/20486220.jpg",
    "description": "",
    "abilities": [
      "Ten Bu Hô Rin",
      "Roku Dô Rin Ne",
      "Ten Ma Kô Fuku",
      "Tenkuhaja Chimimoryo",
      "Kân",
      "Ohm"
    ]
  },

  {
    "id": 31,
    "name": "Dohko",
    "age": "261",
    "height": "140-180cm",
    "weight": "??kg",
    "birthday": "20 Octobre",
    "birthplace": "Chine",
    "bloodtype": "A",
    "category": "Chevalier d'Or",
    "constellation": "Balance",
    "trainingplace": "Chine",
    "profilepic": "https://fr.web.img5.acsta.net/r_1920_1080/newsv7/18/02/09/15/29/55656480.jpg",
    "description": "",
    "abilities": [
      "Le Dragon Ascendant", 
      "les Cent Dragons de Rozan"
    ]
  },

  {
    "id": 32,
    "name": "Milo",
    "age": "20",
    "height": "185cm",
    "weight": "84kg",
    "birthday": "8 Novembre",
    "birthplace": "Grèce",
    "bloodtype": "B",
    "category": "Chevalier d'Or",
    "constellation": "Scorpion",
    "trainingplace": "Grèce",
    "profilepic": "https://fr.web.img6.acsta.net/r_1920_1080/newsv7/18/02/09/14/53/26057000.jpg",
    "description": "",
    "abilities": [
      "Restriction",
      "Scarlet Needle"
    ]
  },

  {
    "id": 33,
    "name": "Aiolos",
    "age": "28",
    "height": "187cm",
    "weight": "85kg",
    "birthday": "30 Novembre",
    "birthplace": "Grèce",
    "bloodtype": "O",
    "category": "Chevalier d'Or",
    "constellation": "Sagittaire",
    "trainingplace": "Grèce",
    "profilepic": "https://fr.web.img6.acsta.net/r_1920_1080/newsv7/18/02/09/14/53/00971880.jpg",
    "description": "",
    "abilities": ["Atomic Thunder Bolt"]
  },
  {
    "id": 34,
    "name": "Shura",
    "age": "23",
    "height": "186cm",
    "weight": "83kg",
    "birthday": "12 Janvier",
    "birthplace": "Espagne",
    "bloodtype": "B",
    "category": "Chevalier d'Or",
    "constellation": "Capricorne",
    "trainingplace": "Espagne",
    "profilepic": "https://fr.web.img4.acsta.net/r_1920_1080/newsv7/18/02/09/15/30/17609890.jpg",
    "description": "",
    "abilities": [
      "Excalibur", 
      "Jumping Stone"
    ]
  },
  {
    "id": 35,
    "name": "Camus",
    "age": "20",
    "height": "184cm",
    "weight": "76kg",
    "birthday": "7 Février",
    "birthplace": "France",
    "bloodtype": "A",
    "category": "Chevalier d'Or",
    "constellation": "Verseau",
    "trainingplace": "Sibérie",
    "profilepic": "https://fr.web.img4.acsta.net/r_1920_1080/newsv7/18/02/09/15/31/13579350.jpg",
    "description": "",
    "abilities": [
      "Aurora Execution",
      "Freezing Cuffin",
      "Diamond Dust"
    ]
  },

  {
    "id": 36,
    "name": "Aphrodite",
    "age": "22",
    "height": "183cm",
    "weight": "10 mars",
    "birthplace": "Suede",
    "bloodtype": "O",
    "category": "Chevalier d'Or",
    "constellation": "Poissons",
    "trainingplace": "Groenland",
    "profilepic": "https://fr.web.img2.acsta.net/r_1920_1080/newsv7/18/02/09/14/55/48026660.jpg",
    "description": "",
    "abilities": [
      "Crystal Wall", 
      "Stardust Revolution",
      "Starlight exctinction"
    ]
  },
  
]
export default users;
