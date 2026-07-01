// Base de données des poissons - Catégorie Standard
const FISH_DATA_STANDARD = [
    {
        nom: "Petite Grosse Baleine",
        numero: 1,
        numero2: "1G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord", "Grand Lac", "Petits Lacs"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Nuageux"]
    },
    {
        nom: "Pfister Fish",
        numero: 2,
        numero2: "1D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Barrycuda",
        numero: 3,
        numero2: "2G",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Angry Fish",
        numero: 4,
        numero2: "2D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Cristalfish",
        numero: 5,
        numero2: "3G",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Rivières", "Bords de mer"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Le Poulpe Thor",
        numero: 6,
        numero2: "3D",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord", "Bords de mer"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Glowriffy",
        numero: 7,
        numero2: "4G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord", "Bords de mer"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux"]
    },
    {
        nom: "Carpe Diam",
        numero: 8,
        numero2: "4D",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Petits Lacs", "Rivières"],
        moment: ["Journée", "Crépuscule"],
        meteo: ["Dégagé", "Brumeux"]
    },
    {
        nom: "Chibhippocampe",
        numero: 9,
        numero2: "5G",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Bords de mer", "Rivières"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Brumeux"]
    },
    {
        nom: "Stepafou Moustachou",
        numero: 10,
        numero2: "5D",
        etat: ["Sobre"],
        lieu: ["Mer Nord", "Bords de mer", "Mer Sud"],
        moment: ["Journée", "Crépuscule"],
        meteo: ["Nuageux"]
    },
    {
        nom: "Graie Montas",
        numero: 11,
        numero2: "6G",
        etat: ["Sobre"],
        lieu: ["Grand Lac"],
        moment: ["Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Carpotresor",
        numero: 12,
        numero2: "6D",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Aube"],
        meteo: ["Nuageux", "Tempêtueux"]
    },
    {
        nom: "Hypnoisson",
        numero: 13,
        numero2: "7G",
        etat: ["Bourré"],
        lieu: ["Mer Sud"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Brumeux"]
    },
    {
        nom: "Meduze De Fe De La Morre Qui Tu",
        numero: 14,
        numero2: "7D",
        etat: ["Sobre"],
        lieu: ["Grand Lac"],
        moment: ["Nuit"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Marine",
        numero: 15,
        numero2: "8G",
        etat: ["Sobre"],
        lieu: ["Canaux", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Purple Omen",
        numero: 16,
        numero2: "8D",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord"],
        moment: ["Nuit"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Bigornoob",
        numero: 17,
        numero2: "9G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Grand Lac", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Le Sunny",
        numero: 18,
        numero2: "9D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Croaky Froggy",
        numero: 19,
        numero2: "10G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Petits Lacs", "Rivières"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Chaxo",
        numero: 20,
        numero2: "10D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Grand Lac", "Canaux"],
        moment: ["Nuit"],
        meteo: ["Brumeux", "Tempêtueux"]
    },
    {
        nom: "Morpheus Somnolent",
        numero: 21,
        numero2: "11G",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Canaux"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Portinet",
        numero: 22,
        numero2: "11D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Nord", "Mer Sud"],
        moment: ["Journée"],
        meteo: ["Dégagé", "Brumeux"]
    },
    {
        nom: "La Clebsouille",
        numero: 23,
        numero2: "12G",
        etat: ["Défoncé"],
        lieu: ["Canaux", "Petits Lacs", "Rivières"],
        moment: ["Nuit"],
        meteo: ["Brumeux", "Tempêtueux"]
    },
    {
        nom: "Fichouette",
        numero: 24,
        numero2: "12D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Nord", "Mer Sud"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Merou Colerique Tachete",
        numero: 25,
        numero2: "13G",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Canaux"],
        moment: ["Aube", "Nuit"],
        meteo: ["Brumeux"]
    },
    {
        nom: "Chromabranchus Virosa",
        numero: 26,
        numero2: "13D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Canaux"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Dégagé", "Nuageux"]
    },
    {
        nom: "Mossiferne",
        numero: 27,
        numero2: "14G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Canaux", "Mer Sud"],
        moment: ["Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Figel",
        numero: 28,
        numero2: "14D",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Nuit"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Rosailee",
        numero: 29,
        numero2: "15G",
        etat: ["Bourré"],
        lieu: ["Mer Sud"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé"]
    },
    {
        nom: "Le Perlea",
        numero: 30,
        numero2: "15D",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Grand Lac", "Rivières"],
        moment: ["Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Sanajvit",
        numero: 31,
        numero2: "16G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Simone",
        numero: 32,
        numero2: "16D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Pluvieux", "Nuageux"]
    },
    {
        nom: "Axowin Dragonnet Splendide",
        numero: 33,
        numero2: "17G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord", "Bords de mer"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Fire Plouf",
        numero: 34,
        numero2: "17D",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Rivières", "Petits Lacs"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Aquatic Wood Runner",
        numero: 35,
        numero2: "18G",
        etat: ["Sobre"],
        lieu: ["Rivières", "Grand Lac"],
        moment: ["Nuit"],
        meteo: ["Brumeux"]
    },
    {
        nom: "Squalopoisson",
        numero: 36,
        numero2: "18D",
        etat: ["Sobre"],
        lieu: ["Rivières", "Grand Lac", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Pluvieux"]
    },
    {
        nom: "Rastortue",
        numero: 37,
        numero2: "19G",
        etat: ["Sobre"],
        lieu: ["Rivières", "Bords de mer"],
        moment: ["Crépuscule"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Voile Souvenir",
        numero: 38,
        numero2: "19D",
        etat: ["Sobre"],
        lieu: ["Rivières", "Petits Lacs", "Canaux"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Neigeux", "Tempêtueux", "Brumeux"]
    },
    {
        nom: "Sandre Florale",
        numero: 39,
        numero2: "20G",
        etat: ["Sobre"],
        lieu: ["Rivières", "Grand Lac", "Canaux"],
        moment: ["Crépuscule"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Pinky Punky Fish",
        numero: 40,
        numero2: "20D",
        etat: ["Défoncé"],
        lieu: ["Rivières", "Grand Lac", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Tempêtueux"]
    },
    {
        nom: "Electropoulpe",
        numero: 41,
        numero2: "21G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud", "Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Verdipoulpe",
        numero: 42,
        numero2: "21D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Nord", "Mer Sud"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Tempêtueux"]
    },
    {
        nom: "Pilulieu",
        numero: 43,
        numero2: "22G",
        etat: ["Sobre"],
        lieu: ["Canaux", "Mer Sud"],
        moment: ["Aube", "Nuit"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Orions Star",
        numero: 44,
        numero2: "22D",
        etat: ["Sobre"],
        lieu: ["Rivières", "Grand Lac", "Mer Sud"],
        moment: ["Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Globenciel",
        numero: 45,
        numero2: "23G",
        etat: ["Bourré"],
        lieu: ["Rivières", "Bords de mer"],
        moment: ["Journée"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Poissoncisson",
        numero: 46,
        numero2: "23D",
        etat: ["Bourré"],
        lieu: ["Canaux", "Rivières"],
        moment: ["Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Le Pipoulpe",
        numero: 47,
        numero2: "24G",
        etat: ["Sobre"],
        lieu: ["Rivières", "Bords de mer"],
        moment: ["Aube"],
        meteo: ["Dégagé", "Brumeux"]
    },
    {
        nom: "Luminosa",
        numero: 48,
        numero2: "24D",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Nuageux", "Pluvieux"]
    },
    {
        nom: "Poulamar",
        numero: 49,
        numero2: "25G",
        etat: ["Sobre"],
        lieu: ["Canaux", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Electraie",
        numero: 50,
        numero2: "25D",
        etat: ["Sobre"],
        lieu: ["Canaux", "Rivières"],
        moment: ["Nuit"],
        meteo: ["Brumeux", "Tempêtueux"]
    },
    {
        nom: "Bolingbroke Fish",
        numero: 51,
        numero2: "26G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Nebulith",
        numero: 52,
        numero2: "26D",
        etat: ["Sobre"],
        lieu: ["Canaux", "Rivières"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Mariusson",
        numero: 53,
        numero2: "27G",
        etat: ["Sobre"],
        lieu: ["Rivières", "Bords de mer"],
        moment: ["Journée"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Dobbry Rok",
        numero: 54,
        numero2: "27D",
        etat: ["Bourré"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Brumeux"]
    },
    {
        nom: "Ablyssus",
        numero: 55,
        numero2: "28G",
        etat: ["Bourré"],
        lieu: ["Mer Sud"],
        moment: ["Nuit"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Zirvine Dracopis",
        numero: 56,
        numero2: "28D",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Aube"],
        meteo: ["Brumeux"]
    },
    {
        nom: "Gobie Vaseux",
        numero: 57,
        numero2: "29G",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Pluvieux", "Brumeux"]
    },
    {
        nom: "Trashark",
        numero: 58,
        numero2: "29D",
        etat: ["Sobre"],
        lieu: ["Canaux", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Nuageux", "Pluvieux", "Nuageux"]
    },
    {
        nom: "Akumaaaa",
        numero: 59,
        numero2: "30G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud", "Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Lantrole",
        numero: 60,
        numero2: "30D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Tempêtueux"]
    },
    {
        nom: "La Crevette Arc En Ciel",
        numero: 61,
        numero2: "31G",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Acuattus",
        numero: 62,
        numero2: "31D",
        etat: ["Bourré"],
        lieu: ["Mer Nord", "Mer Sud"],
        moment: ["Nuit"],
        meteo: ["Nuageux", "Brumeux", "Nuageux"]
    },
    {
        nom: "Crabantine",
        numero: 63,
        numero2: "32G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Canaux"],
        moment: ["Aube", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Blobo Acanthus",
        numero: 64,
        numero2: "32D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Nuit"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Fausse Meduse Haploida",
        numero: 65,
        numero2: "33G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud", "Mer Nord"],
        moment: ["Aube", "Journée"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Bi Queue",
        numero: 66,
        numero2: "33D",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Grand Lac"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Pluvieux"]
    },
    {
        nom: "Reggaetoad",
        numero: 67,
        numero2: "34G",
        etat: ["Défoncé"],
        lieu: ["Grand Lac", "Petits Lacs", "Mer Sud"],
        moment: ["Nuit"],
        meteo: ["Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Hippocon",
        numero: 68,
        numero2: "34D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Nuageux", "Neigeux"]
    },
    {
        nom: "Piranha Clown",
        numero: 69,
        numero2: "35G",
        etat: ["Sobre"],
        lieu: ["Rivières", "Petits Lacs"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Coelacant",
        numero: 70,
        numero2: "35D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Grand Lac"],
        moment: ["Aube", "Nuit"],
        meteo: ["Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Flannochet Zebre",
        numero: 71,
        numero2: "36G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Canaux", "Mer Sud"],
        moment: ["Journée", "Crépuscule"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Baleine Iris",
        numero: 72,
        numero2: "36D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Brumeux"]
    },
    {
        nom: "Crabe Rubis",
        numero: 73,
        numero2: "37G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Carpe Emeraude",
        numero: 74,
        numero2: "37D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Grand Lac", "Petits Lacs"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Nuageux", "Pluvieux"]
    },
    {
        nom: "Calmar Amethyste",
        numero: 75,
        numero2: "38G",
        etat: ["Bourré"],
        lieu: ["Bords de mer", "Mer Sud", "Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Meduse Ambre",
        numero: 76,
        numero2: "38D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Canaux", "Mer Sud"],
        moment: ["Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Etoile Diamant",
        numero: 77,
        numero2: "39G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud", "Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Tortue Saphir",
        numero: 78,
        numero2: "39D",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Crépuscule"],
        meteo: ["Brumeux", "Pluvieux", "Brumeux"]
    },
    {
        nom: "Twinfish",
        numero: 79,
        numero2: "40G",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Petits Lacs", "Canaux"],
        moment: ["Crépuscule"],
        meteo: ["Pluvieux", "Neigeux"]
    },
    {
        nom: "Happygloby",
        numero: 80,
        numero2: "40D",
        etat: ["Défoncé"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Toxiglue",
        numero: 81,
        numero2: "41G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Bords de mer", "Canaux"],
        moment: ["Aube", "Journée", "Crépuscule"],
        meteo: ["Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Octoleon",
        numero: 82,
        numero2: "41D",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Nuageux", "Pluvieux", "Brumeux"]
    },
    {
        nom: "Cryscrab",
        numero: 83,
        numero2: "42G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Dégagé"]
    },
    {
        nom: "Rainbowfish",
        numero: 84,
        numero2: "42D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Lumiscale",
        numero: 85,
        numero2: "43G",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Petits Lacs"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Athenais La Meduse Papillon",
        numero: 86,
        numero2: "43D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud", "Mer Nord"],
        moment: ["Nuit"],
        meteo: ["Nuageux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Uhane",
        numero: 87,
        numero2: "44G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Rubis Des Mers",
        numero: 88,
        numero2: "44D",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Canaux"],
        moment: ["Aube"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Lumeine",
        numero: 89,
        numero2: "45G",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Journée"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Discoelacanthe",
        numero: 90,
        numero2: "45D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Canaux"],
        moment: ["Aube"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Cochon De Mer",
        numero: 91,
        numero2: "46G",
        etat: ["Bourré"],
        lieu: ["Grand Lac"],
        moment: ["Crépuscule"],
        meteo: ["Pluvieux", "Dégagé"]
    },
    {
        nom: "Zeponge De Mer",
        numero: 92,
        numero2: "46D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Goldecrevisse",
        numero: 93,
        numero2: "47G",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Etoile De Merdeeeee Aie Elle Ma Mordu",
        numero: 94,
        numero2: "47D",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Dégagé"]
    },
    {
        nom: "Exocet Bleu",
        numero: 95,
        numero2: "48G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Bords de mer"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Poulpitrol",
        numero: 96,
        numero2: "48D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Grand Lac"],
        moment: ["Nuit"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Nimo",
        numero: 97,
        numero2: "49G",
        etat: ["Bourré"],
        lieu: ["Grand Lac", "Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Tetrotox",
        numero: 98,
        numero2: "49D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Crépuscule"],
        meteo: ["Neigeux", "Tempêtueux", "Pluvieux"]
    },
    {
        nom: "Lapollo",
        numero: 99,
        numero2: "50G",
        etat: ["Défoncé"],
        lieu: ["Mer Nord", "Mer Sud"],
        moment: ["Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Kronk Terreur",
        numero: 100,
        numero2: "50D",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Canaux", "Rivières"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Poulpe Eclair",
        numero: 101,
        numero2: "51G",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Nuit"],
        meteo: ["Brumeux"]
    },
    {
        nom: "Lotushell",
        numero: 102,
        numero2: "51D",
        etat: ["Sobre"],
        lieu: ["Petits Lacs"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Icecrevisse",
        numero: 103,
        numero2: "52G",
        etat: ["Sobre"],
        lieu: ["Petits Lacs"],
        moment: ["Aube", "Crépuscule", "Nuit"],
        meteo: ["Neigeux", "Tempêtueux"]
    },
    {
        nom: "Frostoad",
        numero: 104,
        numero2: "52D",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Neigeux", "Tempêtueux"]
    },
    {
        nom: "Carpxolotl",
        numero: 105,
        numero2: "53G",
        etat: ["Sobre"],
        lieu: ["Rivières", "Petits Lacs"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Clearcrab",
        numero: 106,
        numero2: "53D",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Brumeux", "Nuageux"]
    },
    {
        nom: "Wooden Flight",
        numero: 107,
        numero2: "54G",
        etat: ["Bourré"],
        lieu: ["Grand Lac", "Rivières"],
        moment: ["Crépuscule"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Horaine Argentee",
        numero: 108,
        numero2: "54D",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Rivières"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Doradonut",
        numero: 109,
        numero2: "55G",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Oursin Kipik",
        numero: 110,
        numero2: "55D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Silver Moula",
        numero: 111,
        numero2: "56G",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Golden Huitre",
        numero: 112,
        numero2: "56D",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Journée"],
        meteo: ["Dégagé", "Brumeux", "Nuageux", "Pluvieux"]
    },
    {
        nom: "Crevette Alecto",
        numero: 113,
        numero2: "57G",
        etat: ["Défoncé"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Limasse",
        numero: 114,
        numero2: "57D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Crépuscule"],
        meteo: ["Dégagé", "Brumeux", "Pluvieux"]
    },
    {
        nom: "Poimousse",
        numero: 115,
        numero2: "58G",
        etat: ["Sobre"],
        lieu: ["Rivières", "Canaux"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Nuageux", "Pluvieux"]
    },
    {
        nom: "Goofysh",
        numero: 116,
        numero2: "58D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Carpe Feur",
        numero: 117,
        numero2: "59G",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Carpe A Jouer",
        numero: 118,
        numero2: "59D",
        etat: ["Bourré"],
        lieu: ["Petits Lacs"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Homard Indigo Saxicole",
        numero: 119,
        numero2: "60G",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Nuit"],
        meteo: ["Brumeux"]
    },
    {
        nom: "Flabellina",
        numero: 120,
        numero2: "60D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Comtecombre De Mer",
        numero: 121,
        numero2: "61G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Noctiscale",
        numero: 122,
        numero2: "61D",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Luninja",
        numero: 123,
        numero2: "62G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Saumon",
        numero: 124,
        numero2: "62D",
        etat: ["Sobre"],
        lieu: ["Mer Nord", "Rivières"],
        moment: ["Aube", "Crépuscule"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Greg",
        numero: 125,
        numero2: "63G",
        etat: ["Défoncé"],
        lieu: ["Rivières", "Canaux"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Pleutrisson",
        numero: 126,
        numero2: "63D",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Mousseton",
        numero: 127,
        numero2: "64G",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Cocqueluchard A Crete Rouge",
        numero: 128,
        numero2: "64D",
        etat: ["Sobre"],
        lieu: ["Mer Nord", "Mer Sud"],
        moment: ["Journée", "Crépuscule"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Bar A Thym",
        numero: 129,
        numero2: "65G",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Petits Lacs", "Rivières", "Canaux"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Carassin Tropical",
        numero: 130,
        numero2: "65D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Demoiselle Maraichere",
        numero: 131,
        numero2: "66G",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Kokoro Spumeux",
        numero: 132,
        numero2: "66D",
        etat: ["Défoncé"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Tempêtueux"]
    },
    {
        nom: "Origafish",
        numero: 133,
        numero2: "67G",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Canaux"],
        moment: ["Aube"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Zeta Membraneux",
        numero: 134,
        numero2: "67D",
        etat: ["Bourré"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Tempêtueux"]
    },
    {
        nom: "Dragon Des Mers",
        numero: 135,
        numero2: "68G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Mi-Octo Grandmax",
        numero: 136,
        numero2: "68D",
        etat: ["Sobre"],
        lieu: ["Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Neigeux", "Tempêtueux"]
    },
    {
        nom: "Crobrail",
        numero: 137,
        numero2: "69G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Nord", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Draquaticus",
        numero: 138,
        numero2: "69D",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Rivières"],
        moment: ["Aube", "Journée"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Abherus Le Dentu",
        numero: 139,
        numero2: "70G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Rivières"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Mur Haine",
        numero: 140,
        numero2: "70D",
        etat: ["Sobre"],
        lieu: ["Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Tyrannus Piscis",
        numero: 141,
        numero2: "71G",
        etat: ["Bourré"],
        lieu: ["Mer Nord", "Mer Sud"],
        moment: ["Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Tempêtueux"]
    },
    {
        nom: "Grincheux Cramoisi",
        numero: 142,
        numero2: "71D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Blogogloblo",
        numero: 143,
        numero2: "72G",
        etat: ["Défoncé"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Fishy Duck",
        numero: 144,
        numero2: "72D",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Canaux"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "La Sardynamite",
        numero: 145,
        numero2: "73G",
        etat: ["Défoncé"],
        lieu: ["Mer Nord", "Mer Sud"],
        moment: ["Nuit"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Fluroralia Nocturne",
        numero: 146,
        numero2: "73D",
        etat: ["Sobre"],
        lieu: ["Mer Nord", "Mer Sud"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Petit Poulpe Royal",
        numero: 147,
        numero2: "74G",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Tortue Imperiale",
        numero: 148,
        numero2: "74D",
        etat: ["Sobre"],
        lieu: ["Mer Nord"],
        moment: ["Aube"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Tort Aily",
        numero: 149,
        numero2: "75G",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Mer Sud"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Draceen",
        numero: 150,
        numero2: "75D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Journée"],
        meteo: ["Pluvieux", "Nuageux", "Tempêtueux"]
    },
    {
        nom: "Tribow",
        numero: 151,
        numero2: "76G",
        etat: ["Bourré"],
        lieu: ["Bords de mer", "Mer Nord"],
        moment: ["Journée"],
        meteo: ["Dégagé", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Angryd O",
        numero: 152,
        numero2: "76D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Nuit"],
        meteo: ["Neigeux", "Tempêtueux"]
    },
    {
        nom: "Petit Dragon Des Mers",
        numero: 153,
        numero2: "77G",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Langostazul",
        numero: 154,
        numero2: "77D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Happyd O",
        numero: 155,
        numero2: "78G",
        etat: ["Sobre"],
        lieu: ["Mer Nord"],
        moment: ["Aube"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Le Pasne",
        numero: 156,
        numero2: "78D",
        etat: ["Bourré"],
        lieu: ["Petits Lacs", "Canaux"],
        moment: ["Journée"],
        meteo: ["Brumeux", "Nuageux"]
    },
    {
        nom: "Chelonienseparables",
        numero: 157,
        numero2: "79G",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Yuko",
        numero: 158,
        numero2: "79D",
        etat: ["Bourré"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Reinette",
        numero: 159,
        numero2: "80G",
        etat: ["Bourré"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Crépuscule"],
        meteo: ["Brumeux", "Tempêtueux"]
    },
    {
        nom: "Arguyere Bicephale",
        numero: 160,
        numero2: "80D",
        etat: ["Bourré"],
        lieu: ["Rivières", "Canaux"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Tempêtueux"]
    },
    {
        nom: "Berger De Floride",
        numero: 161,
        numero2: "81G",
        etat: ["Sobre"],
        lieu: ["Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Elicie Californien",
        numero: 162,
        numero2: "81D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Nord"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Exocet Colibri",
        numero: 163,
        numero2: "82G",
        etat: ["Bourré"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Exocet Oriental",
        numero: 164,
        numero2: "82D",
        etat: ["Sobre"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Exocet Sardine",
        numero: 165,
        numero2: "83G",
        etat: ["Sobre"],
        lieu: ["Mer Nord", "Mer Sud"],
        moment: ["Aube", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Finette",
        numero: 166,
        numero2: "83D",
        etat: ["Bourré"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Hampe-Noire Albinos",
        numero: 167,
        numero2: "84G",
        etat: ["Bourré"],
        lieu: ["Mer Nord"],
        moment: ["Nuit"],
        meteo: ["Neigeux", "Tempêtueux", "Nuageux"]
    },
    {
        nom: "Iridesce Cyclope",
        numero: 168,
        numero2: "84D",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Jolicoeur Smaragdin",
        numero: 169,
        numero2: "85G",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Rivières"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Mouchi Papillon",
        numero: 170,
        numero2: "85D",
        etat: ["Sobre"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Perche Leopard",
        numero: 171,
        numero2: "86G",
        etat: ["Sobre"],
        lieu: ["Grand Lac"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Qazoar Antique",
        numero: 172,
        numero2: "86D",
        etat: ["Sobre"],
        lieu: ["Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Rondouille Gibeuse",
        numero: 173,
        numero2: "87G",
        etat: ["Sobre"],
        lieu: ["Canaux"],
        moment: ["Nuit"],
        meteo: ["Dégagé", "Tempêtueux"]
    },
    {
        nom: "Saumon D Andreas",
        numero: 174,
        numero2: "87D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Rivières"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Tribion Carrele",
        numero: 175,
        numero2: "88G",
        etat: ["Sobre"],
        lieu: ["Mer Sud", "Canaux"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Neigeux", "Tempêtueux", "Brumeux"]
    },
    {
        nom: "Urgule",
        numero: 176,
        numero2: "88D",
        etat: ["Bourré"],
        lieu: ["Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Vannole Cameleon",
        numero: 177,
        numero2: "89G",
        etat: ["Défoncé"],
        lieu: ["Petits Lacs", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Neigeux", "Tempêtueux"]
    },
    {
        nom: "William",
        numero: 178,
        numero2: "89D",
        etat: ["Défoncé"],
        lieu: ["Grand Lac"],
        moment: ["Crépuscule"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Xazatas",
        numero: 179,
        numero2: "90G",
        etat: ["Défoncé"],
        lieu: ["Mer Nord"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Silverfish",
        numero: 180,
        numero2: "90D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Nord"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "L Aubergine Marine",
        numero: 181,
        numero2: "91G",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Canaux"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Le Poisson Prismatique",
        numero: 182,
        numero2: "91D",
        etat: ["Bourré"],
        lieu: ["Mer Sud"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé", "Pluvieux", "Nuageux"]
    },
    {
        nom: "Le Nageoires D Azur",
        numero: 183,
        numero2: "92G",
        etat: ["Sobre"],
        lieu: ["Grand Lac", "Rivières"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "La Petite Gemme Marine",
        numero: 184,
        numero2: "92D",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Mer Nord", "Mer Sud"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Pluvieux", "Nuageux", "Tempêtueux"]
    },
    {
        nom: "Hotfeather",
        numero: 185,
        numero2: "93G",
        etat: ["Sobre"],
        lieu: ["Mer Nord", "Mer Sud"],
        moment: ["Crépuscule"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Grab",
        numero: 186,
        numero2: "93D",
        etat: ["Sobre"],
        lieu: ["Bords de mer"],
        moment: ["Aube", "Nuit"],
        meteo: ["Brumeux"]
    },
    {
        nom: "Tardaud",
        numero: 187,
        numero2: "94G",
        etat: ["Défoncé"],
        lieu: ["Bords de mer", "Canaux"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Nuageux"]
    },
    {
        nom: "Anemone Printaniere",
        numero: 188,
        numero2: "94D",
        etat: ["Sobre"],
        lieu: ["Bords de mer", "Mer Nord"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Amalgatine",
        numero: 189,
        numero2: "95G",
        etat: ["Bourré"],
        lieu: ["Grand Lac", "Petits Lacs"],
        moment: ["Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Ourou Beerus",
        numero: 190,
        numero2: "95D",
        etat: ["Bourré"],
        lieu: ["Bords de mer", "Grand Lac"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Poisson Pourri",
        numero: 191,
        numero2: "96G",
        etat: [],
        lieu: [],
        moment: [],
        meteo: []
    }
    // Ajoute tes autres poissons ici
];