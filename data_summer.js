// Base de données des poissons - Catégorie Summer
const FISH_DATA_SUMMER = [
                {
                    nom: "Bernartorite",
                    numero: 1,
                    numero2: "1G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud", "Bords de mer"],
                    moment: ["Nuit"],
                    meteo: ["Nuageux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Dunequartz Fossilfin",
                    numero: 2,
                    numero2: "1D",
                    etat: ["Sobre"],
                    lieu: ["Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Brumeux"]
                },
                {
                    nom: "Crabicruz",
                    numero: 3,
                    numero2: "2G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Crépuscule", "Nuit"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Angrille Flamboyante",
                    numero: 4,
                    numero2: "2D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Nuit"],
                    meteo: ["Neigeux", "Pluvieux", "Tempêtueux"]
                },
                {
                    nom: "Amberichthys Crystallinus",
                    numero: 5,
                    numero2: "3G",
                    etat: ["Défoncé"],
                    lieu: ["Grand Lac", "Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Caillouflage",
                    numero: 6,
                    numero2: "3D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Rivières"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Brumeux", "Pluvieux"]
                },
                {
                    nom: "Épavomorphus",
                    numero: 7,
                    numero2: "4G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Pluvieux", "Nuageux"]
                },
                {
                    nom: "Moule Quartzine",
                    numero: 8,
                    numero2: "4D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Le Lavaloup",
                    numero: 9,
                    numero2: "5G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Canaux"],
                    moment: ["Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Éponge Dunaire",
                    numero: 10,
                    numero2: "5D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Corallium Cementatus",
                    numero: 11,
                    numero2: "6G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Grand Lac"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Pluvieux"]
                },
                {
                    nom: "Négador Sableux",
                    numero: 12,
                    numero2: "6D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Journée"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Spectrocarne",
                    numero: 13,
                    numero2: "7G",
                    etat: ["Défoncé"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Trilobitrix Fatalis",
                    numero: 14,
                    numero2: "7D",
                    etat: ["Bourré"],
                    lieu: ["Bords de mer", "Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Brumeux", "Nuageux"]
                },
                {
                    nom: "Escaflamme",
                    numero: 15,
                    numero2: "8G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer"],
                    moment: ["Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Smaragdus Tristulus",
                    numero: 16,
                    numero2: "8D",
                    etat: ["Sobre"],
                    lieu: ["Petits Lacs", "Rivières"],
                    moment: ["Nuit", "Aube"],
                    meteo: ["Dégagé", "Pluvieux"]
                },
                {
                    nom: "Cendrier",
                    numero: 17,
                    numero2: "9G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud", "Bords de mer"],
                    moment: ["Aube", "Journée", "Crépuscule"],
                    meteo: ["Brumeux", "Nuageux"]
                },
                {
                    nom: "Koi-sandré",
                    numero: 18,
                    numero2: "9D",
                    etat: ["Défoncé"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Crabctus",
                    numero: 19,
                    numero2: "10G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Rivières"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Pagurus Quarziticus",
                    numero: 20,
                    numero2: "10D",
                    etat: ["Bourré"],
                    lieu: ["Mer Nord", "Bords de mer"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Cactifish",
                    numero: 21,
                    numero2: "11G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Grand Lac"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Lithogemme",
                    numero: 22,
                    numero2: "11D",
                    etat: ["Défoncé"],
                    lieu: ["Mer Sud"],
                    moment: ["Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Cristallus Hermitus",
                    numero: 23,
                    numero2: "12G",
                    etat: ["Défoncé"],
                    lieu: ["Mer Nord", "Bords de mer"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Maugrim fluorescent",
                    numero: 24,
                    numero2: "12D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Brumeux"]
                },
                {
                    nom: "Jellylava",
                    numero: 25,
                    numero2: "13G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Cactobulle",
                    numero: 26,
                    numero2: "13D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Canaux"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Terracripte",
                    numero: 27,
                    numero2: "14G",
                    etat: ["Bourré"],
                    lieu: ["Mer Sud", "Grand Lac"],
                    moment: ["Nuit"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Ecrelice",
                    numero: 28,
                    numero2: "14D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Astrocarnis",
                    numero: 29,
                    numero2: "15G",
                    etat: ["Défoncé"],
                    lieu: ["Grand Lac", "Canaux"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Pluvieux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Cutilice",
                    numero: 30,
                    numero2: "15D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Nord", "Mer Sud"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Tortoasis",
                    numero: 31,
                    numero2: "16G",
                    etat: ["Défoncé"],
                    lieu: ["Mer Nord", "Grand Lac"],
                    moment: ["Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Shelly Fish",
                    numero: 32,
                    numero2: "16D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Rivières"],
                    moment: ["Nuit", "Aube"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Cactiblob",
                    numero: 33,
                    numero2: "17G",
                    etat: ["Bourré"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Aube", "Crépuscule"],
                    meteo: ["Brumeux", "Pluvieux"]
                },
                {
                    nom: "Sabléon",
                    numero: 34,
                    numero2: "17D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Aube", "Crépuscule"],
                    meteo: ["Pluvieux", "Nuageux"]
                },
                {
                    nom: "L'Ancre de Dune",
                    numero: 35,
                    numero2: "18G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud", "Bords de mer"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Mirage des Dunes",
                    numero: 36,
                    numero2: "18D",
                    etat: ["Bourré"],
                    lieu: ["Grand Lac", "Petits Lacs", "Rivières", "Canaux"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Sandtigerius Sableux",
                    numero: 37,
                    numero2: "19G",
                    etat: ["Défoncé"],
                    lieu: ["Mer Nord", "Mer Sud", "Grand Lac", "Petits Lacs"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Cactaceaphis Echinus",
                    numero: 38,
                    numero2: "19D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs", "Rivières", "Canaux"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Quartzarctos Sableux",
                    numero: 39,
                    numero2: "20G",
                    etat: ["Bourré"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Arenaphis Sédimentarius",
                    numero: 40,
                    numero2: "20D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Sablonneux Cristallin",
                    numero: 41,
                    numero2: "21G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Croc-Sable Abyssal",
                    numero: 42,
                    numero2: "21D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Grand Lac"],
                    moment: ["Nuit"],
                    meteo: ["Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Érodeur Cristallin",
                    numero: 43,
                    numero2: "22G",
                    etat: ["Bourré"],
                    lieu: ["Mer Sud", "Petits Lacs"],
                    moment: ["Crépuscule"],
                    meteo: ["Nuageux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Mirage-Fossile Vorace",
                    numero: 44,
                    numero2: "22D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Brumeux"]
                },
                {
                    nom: "Limon-Caverne Dévoreur",
                    numero: 45,
                    numero2: "23G",
                    etat: ["Défoncé"],
                    lieu: ["Mer Nord", "Grand Lac"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Nuageux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Sablivor",
                    numero: 46,
                    numero2: "23D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Petits Lacs"],
                    moment: ["Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Pluvieux"]
                },
                {
                    nom: "Ravageur Abyssal",
                    numero: 47,
                    numero2: "24G",
                    etat: ["Défoncé"],
                    lieu: ["Mer Sud", "Grand Lac"],
                    moment: ["Journée", "Crépuscule"],
                    meteo: ["Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Mirage Vorace",
                    numero: 48,
                    numero2: "24D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Pluvieux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Verrequartz Spectral",
                    numero: 49,
                    numero2: "25G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Journée"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Verméduse",
                    numero: 50,
                    numero2: "25D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord"],
                    moment: ["Aube"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Crabolith",
                    numero: 51,
                    numero2: "26G",
                    etat: ["Bourré"],
                    lieu: ["Bords de mer", "Grand Lac"],
                    moment: ["Crépuscule"],
                    meteo: ["Brumeux", "Nuageux"]
                },
                {
                    nom: "Nasty Gator",
                    numero: 52,
                    numero2: "26D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Eclastae",
                    numero: 53,
                    numero2: "27G",
                    etat: ["Bourré"],
                    lieu: ["Rivières"],
                    moment: ["Nuit"],
                    meteo: ["Pluvieux", "Nuageux"]
                },
                {
                    nom: "Oracle Gluant",
                    numero: 54,
                    numero2: "27D",
                    etat: ["Bourré"],
                    lieu: ["Petits Lacs", "Rivières"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Dégagé", "Brumeux"]
                },
                {
                    nom: "Biblob",
                    numero: 55,
                    numero2: "28G",
                    etat: ["Défoncé"],
                    lieu: ["Petits Lacs", "Canaux"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Clairétoile",
                    numero: 56,
                    numero2: "28D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Driffy",
                    numero: 57,
                    numero2: "29G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Ocre Topus",
                    numero: 58,
                    numero2: "29D",
                    etat: ["Bourré"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Shineel",
                    numero: 59,
                    numero2: "30G",
                    etat: ["Sobre"],
                    lieu: ["Petits Lacs", "Rivières"],
                    moment: ["Nuit", "Journée", "Crépuscule", "Aube"],
                    meteo: ["Brumeux", "Nuageux"]
                },
                {
                    nom: "Fosshelix",
                    numero: 60,
                    numero2: "30D",
                    etat: ["Défoncé"],
                    lieu: ["Petits Lacs", "Canaux"],
                    moment: ["Aube"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Hippocorn",
                    numero: 61,
                    numero2: "31G",
                    etat: ["Bourré"],
                    lieu: ["Bords de mer", "Grand Lac"],
                    moment: ["Nuit", "Journée", "Crépuscule", "Aube"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Mariusorite",
                    numero: 62,
                    numero2: "31D",
                    etat: ["Sobre"],
                    lieu: ["Rivières"],
                    moment: ["Nuit", "Aube"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Kayou",
                    numero: 63,
                    numero2: "32G",
                    etat: ["Bourré"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Crépuscule", "Nuit"],
                    meteo: ["Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "McShellface",
                    numero: 64,
                    numero2: "32D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Petits Lacs"],
                    moment: ["Nuit"],
                    meteo: ["Dégagé", "Brumeux"]
                },
                {
                    nom: "Delphini Viera",
                    numero: 65,
                    numero2: "33G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer"],
                    moment: ["Aube", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Medusa Galactica",
                    numero: 66,
                    numero2: "33D",
                    etat: ["Bourré"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Aube", "Crépuscule"],
                    meteo: ["Brumeux"]
                },
                {
                    nom: "Sandstormy",
                    numero: 67,
                    numero2: "34G",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Radiambra",
                    numero: 68,
                    numero2: "34D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Aube", "Crépuscule"],
                    meteo: ["Dégagé", "Brumeux"]
                },
                {
                    nom: "Obscurafangus",
                    numero: 69,
                    numero2: "35G",
                    etat: ["Bourré"],
                    lieu: ["Bords de mer"],
                    moment: ["Aube", "Crépuscule"],
                    meteo: ["Pluvieux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Savantus",
                    numero: 70,
                    numero2: "35D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Brumeux", "Nuageux"]
                },
                {
                    nom: "Carbo Brachyura",
                    numero: 71,
                    numero2: "36G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Dégagé", "Nuageux"]
                },
                {
                    nom: "Eunice aphroditois Argentum",
                    numero: 72,
                    numero2: "36D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Pluvieux", "Nuageux"]
                },
                {
                    nom: "Rubrum Ferrum",
                    numero: 73,
                    numero2: "37G",
                    etat: ["Sobre"],
                    lieu: ["Rivières", "Canaux"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Pitris Aeris",
                    numero: 74,
                    numero2: "37D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Pluvieux", "Nuageux"]
                },
                {
                    nom: "Aurum Asterias",
                    numero: 75,
                    numero2: "38G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Canaux"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Bismuth Testa",
                    numero: 76,
                    numero2: "38D",
                    etat: ["Bourré"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Brumeux", "Nuageux"]
                },
                {
                    nom: "Balaenidae Mineralis",
                    numero: 77,
                    numero2: "39G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Nuit"],
                    meteo: ["Brumeux", "Pluvieux"]
                },
                {
                    nom: "Fongiflou",
                    numero: 78,
                    numero2: "39D",
                    etat: ["Défoncé"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Brumeux", "Pluvieux"]
                },
                {
                    nom: "Sonochino Sadame",
                    numero: 79,
                    numero2: "40G",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Dégagé", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Escargoldorak",
                    numero: 80,
                    numero2: "40D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord"],
                    moment: ["Nuit"],
                    meteo: ["Pluvieux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Quartzillon",
                    numero: 81,
                    numero2: "41G",
                    etat: ["Bourré"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Nuit"],
                    meteo: ["Brumeux"]
                },
                {
                    nom: "Octorok",
                    numero: 82,
                    numero2: "41D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Canaux"],
                    moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
                    meteo: ["Brumeux", "Nuageux"]
                },
                {
                    nom: "Aridokraken",
                    numero: 83,
                    numero2: "42G",
                    etat: ["Bourré"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Kipikoku",
                    numero: 84,
                    numero2: "42D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Globlune",
                    numero: 85,
                    numero2: "43G",
                    etat: ["Défoncé"],
                    lieu: ["Rivières", "Canaux"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Rectus Rictus",
                    numero: 86,
                    numero2: "43D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "John-à-tan",
                    numero: 87,
                    numero2: "44G",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Journée", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "L'Astérocoque",
                    numero: 88,
                    numero2: "44D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Rivières"],
                    moment: ["Journée", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Géant Vert des sables à piquants",
                    numero: 89,
                    numero2: "45G",
                    etat: ["Défoncé"],
                    lieu: ["Petits Lacs"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé", "Brumeux", "Nuageux", "Pluvieux", "Tempêtueux"]
                },
                {
                    nom: "Floracanthus",
                    numero: 90,
                    numero2: "45D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud", "Bords de mer"],
                    moment: ["Journée", "Crépuscule"],
                    meteo: ["Brumeux", "Pluvieux", "Nuageux"]
                },
                {
                    nom: "Woody",
                    numero: 91,
                    numero2: "46G",
                    etat: ["Sobre"],
                    lieu: ["Rivières", "Canaux"],
                    moment: ["Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Brumeux", "Nuageux", "Pluvieux", "Tempêtueux"]
                },
                {
                    nom: "Shiny McTentacles",
                    numero: 92,
                    numero2: "46D",
                    etat: ["Défoncé"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Brumeux", "Pluvieux", "Tempêtueux"]
                },
                {
                    nom: "Sedimentor",
                    numero: 93,
                    numero2: "47G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Journée", "Crépuscule"],
                    meteo: ["Pluvieux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Géocryne",
                    numero: 94,
                    numero2: "47D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Brumeux", "Pluvieux"]
                },
                {
                    nom: "Sandy",
                    numero: 95,
                    numero2: "48G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Bétippocampe",
                    numero: 96,
                    numero2: "48D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Sud"],
                    moment: ["Nuit"],
                    meteo: ["Brumeux", "Pluvieux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Spikybulle",
                    numero: 97,
                    numero2: "49G",
                    etat: ["Défoncé"],
                    lieu: ["Grand Lac", "Petits Lacs", "Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Quartzine",
                    numero: 98,
                    numero2: "49D",
                    etat: ["Sobre"],
                    lieu: ["Canaux"],
                    moment: ["Nuit"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Karmonite",
                    numero: 99,
                    numero2: "50G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Le Faux-Mignon",
                    numero: 100,
                    numero2: "50D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Limabus",
                    numero: 101,
                    numero2: "51G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Canaux"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Pluvieux", "Nuageux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Fossilodon",
                    numero: 102,
                    numero2: "51D",
                    etat: ["Sobre"],
                    lieu: ["Mer Nord", "Mer Sud"],
                    moment: ["Nuit", "Crépuscule"],
                    meteo: ["Brumeux", "Pluvieux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Blue Crystal",
                    numero: 103,
                    numero2: "52G",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Sablonide",
                    numero: 104,
                    numero2: "52D",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Pluvieux", "Nuageux"]
                },
                {
                    nom: "Duneshark",
                    numero: 105,
                    numero2: "53G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer"],
                    moment: ["Aube", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Cristarin",
                    numero: 106,
                    numero2: "53D",
                    etat: ["Bourré"],
                    lieu: ["Rivières", "Canaux"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Gustfish",
                    numero: 107,
                    numero2: "54G",
                    etat: ["Sobre"],
                    lieu: ["Rivières"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Delphini Aora",
                    numero: 108,
                    numero2: "54D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer"],
                    moment: ["Aube", "Journée"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Cristalina",
                    numero: 109,
                    numero2: "55G",
                    etat: ["Sobre"],
                    lieu: ["Rivières", "Canaux"],
                    moment: ["Nuit"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Sédicendre",
                    numero: 110,
                    numero2: "55D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Nord"],
                    moment: ["Nuit"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Coquroche",
                    numero: 111,
                    numero2: "56G",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Mer Nord"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Sablefin",
                    numero: 112,
                    numero2: "56D",
                    etat: ["Défoncé"],
                    lieu: ["Rivières", "Canaux"],
                    moment: ["Aube", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Lord Keos",
                    numero: 113,
                    numero2: "57G",
                    etat: ["Bourré"],
                    lieu: ["Grand Lac"],
                    moment: ["Journée"],
                    meteo: ["Brumeux", "Nuageux", "Tempêtueux", "Neigeux"]
                },
                {
                    nom: "Abyssocavernus ocrelimonensis",
                    numero: 114,
                    numero2: "57D",
                    etat: ["Sobre"],
                    lieu: ["Bords de mer", "Canaux"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
                },
                {
                    nom: "Pépéronius Fumantis",
                    numero: 115,
                    numero2: "58G",
                    etat: ["Sobre"],
                    lieu: ["Grand Lac", "Petits Lacs"],
                    moment: ["Nuit", "Aube", "Journée", "Crépuscule"],
                    meteo: ["Dégagé"]
                },
                {
                    nom: "Blossom Fisherry",
                    numero: 116,
                    numero2: "58D",
                    etat: ["Défoncé"],
                    lieu: ["Rivières"],
                    moment: ["Nuit"],
                    meteo: ["Dégagé", "Brumeux"]
                },
    // Ajoute tes autres poissons ici
];
