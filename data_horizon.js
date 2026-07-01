// Base de données des poissons - Catégorie Horizon
const FISH_DATA_HORIZON = [
    {
        nom: "Glaciot",
        numero: 1,
        numero2: "1G",
        etat: ["Sobre"],
        lieu: ["Côtes gelées"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Neigeux"]
    },
    {
        nom: "Glagla",
        numero: 2,
        numero2: "1D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Poulpolar",
        numero: 3,
        numero2: "2G",
        etat: ["Défoncé"],
        lieu: ["Crique de glace", "Fleuves Cristallisés"],
        moment: ["Crépuscule"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Glacianguille",
        numero: 4,
        numero2: "2D",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Nuageux", "Neigeux"]
    },
    {
        nom: "Givrétoile",
        numero: 5,
        numero2: "3G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Nuit"],
        meteo: ["Tempêtueux", "Brumeux", "Neigeux"]
    },
    {
        nom: "Krillige",
        numero: 6,
        numero2: "3D",
        etat: ["Bourré"],
        lieu: ["Désert de givre", "Quartiers Figés"],
        moment: ["Crépuscule"],
        meteo: ["Tempêtueux", "Nuageux"]
    },
    {
        nom: "Floconquille",
        numero: 7,
        numero2: "4G",
        etat: ["Sobre"],
        lieu: ["Etendues givrées", "Fleuves Cristallisés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Brumeux", "Neigeux"]
    },
    {
        nom: "Cryostèle",
        numero: 8,
        numero2: "4D",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule"],
        meteo: ["Tempêtueux", "Brumeux", "Neigeux"]
    },
    {
        nom: "Pierre noir",
        numero: 9,
        numero2: "5G",
        etat: ["Défoncé"],
        lieu: ["Côtes gelées"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Lundralith",
        numero: 10,
        numero2: "5D",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées"],
        moment: ["Crépuscule"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Polipluche",
        numero: 11,
        numero2: "6G",
        etat: ["Défoncé"],
        lieu: ["Fleuves Cristallisés", "Quartiers Figés"],
        moment: ["Aube"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Cryonéon",
        numero: 12,
        numero2: "6D",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Flocibulle",
        numero: 13,
        numero2: "7G",
        etat: ["Bourré"],
        lieu: ["Fleuves Cristallisés"],
        moment: ["Aube", "Journée"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Frigorath",
        numero: 14,
        numero2: "7D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Pluvieux", "Neigeux"]
    },
    {
        nom: "Frystal",
        numero: 15,
        numero2: "8G",
        etat: ["Défoncé"],
        lieu: ["Désert de givre", "Etendues givrées"],
        moment: ["Journée"],
        meteo: ["Brumeux", "Pluvieux"]
    },
    {
        nom: "Frisalis",
        numero: 16,
        numero2: "8D",
        etat: ["Bourré"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Frostusque",
        numero: 17,
        numero2: "9G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées"],
        moment: ["Journée"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Glacélion",
        numero: 18,
        numero2: "9D",
        etat: ["Sobre"],
        lieu: ["Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Glacérin",
        numero: 19,
        numero2: "10G",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Désert de givre"],
        moment: ["Aube", "Crépuscule", "Nuit"],
        meteo: ["Nuageux", "Brumeux"]
    },
    {
        nom: "Neosquilla",
        numero: 20,
        numero2: "10D",
        etat: ["Bourré"],
        lieu: ["Côtes gelées", "Etendues givrées"],
        moment: ["Aube", "Journée"],
        meteo: ["Tempêtueux", "Nuageux", "Neigeux"]
    },
    {
        nom: "Polyglacis",
        numero: 21,
        numero2: "11G",
        etat: ["Défoncé"],
        lieu: ["Côtes gelées", "Fleuves Cristallisés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Turtarctis",
        numero: 22,
        numero2: "11D",
        etat: ["Bourré"],
        lieu: ["Côtes gelées", "Crique de glace"],
        moment: ["Aube", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Brumeux"]
    },
    {
        nom: "Blobivern",
        numero: 23,
        numero2: "12G",
        etat: ["Bourré"],
        lieu: ["Désert de givre", "Etendues givrées"],
        moment: ["Journée", "Crépuscule"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Glaglaféfroid",
        numero: 24,
        numero2: "12D",
        etat: ["Sobre"],
        lieu: ["Désert de givre", "Fleuves Cristallisés"],
        moment: ["Journée", "Crépuscule"],
        meteo: ["Tempêtueux", "Dégagé", "Neigeux"]
    },
    {
        nom: "Turboscargot",
        numero: 25,
        numero2: "13G",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Fleuves Cristallisés"],
        moment: ["Aube", "Journée", "Crépuscule"],
        meteo: ["Tempêtueux", "Dégagé", "Neigeux"]
    },
    {
        nom: "Frosted Eyebrow",
        numero: 26,
        numero2: "13D",
        etat: ["Sobre"],
        lieu: ["Désert de givre", "Etendues givrées"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Neigeux"]
    },
    {
        nom: "Cryoplancton",
        numero: 27,
        numero2: "14G",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Laboreale",
        numero: 28,
        numero2: "14D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées"],
        moment: ["Crépuscule"],
        meteo: ["Tempêtueux"]
    },
    {
        nom: "Mélusine",
        numero: 29,
        numero2: "15G",
        etat: ["Bourré"],
        lieu: ["Crique de glace"],
        moment: ["Aube"],
        meteo: ["Neigeux"]
    },
    {
        nom: "Crabicy",
        numero: 30,
        numero2: "15D",
        etat: ["Sobre"],
        lieu: ["Crique de glace"],
        moment: ["Journée"],
        meteo: ["Nuageux"]
    },
    {
        nom: "Cryono",
        numero: 31,
        numero2: "16G",
        etat: ["Défoncé"],
        lieu: ["Baie des Brumes Gelées"],
        moment: ["Crépuscule"],
        meteo: ["Neigeux"]
    },
    {
        nom: "Temptotis",
        numero: 32,
        numero2: "16D",
        etat: ["Bourré"],
        lieu: ["Désert de givre"],
        moment: ["Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Crocgivre",
        numero: 33,
        numero2: "17G",
        etat: ["Défoncé"],
        lieu: ["Crique de glace"],
        moment: ["Crépuscule"],
        meteo: ["Tempêtueux", "Neigeux"]
    },
    {
        nom: "Ecrin de gel",
        numero: 34,
        numero2: "17D",
        etat: ["Bourré"],
        lieu: ["Côtes gelées", "Fleuves Cristallisés"],
        moment: ["Aube", "Journée"],
        meteo: ["Tempêtueux", "Nuageux", "Neigeux"]
    },
    {
        nom: "Luminara",
        numero: 35,
        numero2: "18G",
        etat: ["Défoncé"],
        lieu: ["Etendues givrées", "Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Pluvieux", "Neigeux"]
    },
    {
        nom: "Blizzarck",
        numero: 36,
        numero2: "18D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Dégagé"]
    },
    {
        nom: "Astralux",
        numero: 37,
        numero2: "19G",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Givrela",
        numero: 38,
        numero2: "19D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Fleuves Cristallisés"],
        moment: ["Journée", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Poisson Glacique",
        numero: 39,
        numero2: "20G",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Désert de givre"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Neigeux"]
    },
    {
        nom: "Lucyole",
        numero: 40,
        numero2: "20D",
        etat: ["Bourré"],
        lieu: ["Quartiers Figés"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Fulgora",
        numero: 41,
        numero2: "21G",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Baie des Brumes Gelées"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Pluvieux"]
    },
    {
        nom: "Aile de Givre",
        numero: 42,
        numero2: "21D",
        etat: ["Défoncé"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Nuageux", "Neigeux"]
    },
    {
        nom: "Croc de givre",
        numero: 43,
        numero2: "22G",
        etat: ["Sobre"],
        lieu: ["Désert de givre", "Fleuves Cristallisés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Dégagé", "Neigeux"]
    },
    {
        nom: "Louphoque de glace",
        numero: 44,
        numero2: "22D",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Journée"],
        meteo: ["Tempêtueux", "Brumeux", "Neigeux"]
    },
    {
        nom: "Aqualios",
        numero: 45,
        numero2: "23G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Désert de givre"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Brumeux", "Neigeux"]
    },
    {
        nom: "Griffe des glaces",
        numero: 46,
        numero2: "23D",
        etat: ["Bourré"],
        lieu: ["Côtes gelées", "Désert de givre"],
        moment: ["Aube", "Crépuscule"],
        meteo: ["Tempêtueux", "Brumeux", "Neigeux"]
    },
    {
        nom: "Cryomedusa",
        numero: 47,
        numero2: "24G",
        etat: ["Sobre"],
        lieu: ["Quartiers Figés", "Crique de glace"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Nuageux"]
    },
    {
        nom: "Cryospina",
        numero: 48,
        numero2: "24D",
        etat: ["Défoncé"],
        lieu: ["Côtes gelées", "Etendues givrées"],
        moment: ["Aube", "Nuit"],
        meteo: ["Nuageux", "Brumeux"]
    },
    {
        nom: "Petit iceberg",
        numero: 49,
        numero2: "25G",
        etat: ["Défoncé"],
        lieu: ["Désert de givre", "Etendues givrées"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Etoile polaire",
        numero: 50,
        numero2: "25D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Baie des Brumes Gelées"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Dégagé", "Neigeux"]
    },
    {
        nom: "Artocrabe",
        numero: 51,
        numero2: "26G",
        etat: ["Sobre"],
        lieu: ["Quartiers Figés", "Etendues givrées"],
        moment: ["Journée"],
        meteo: ["Tempêtueux", "Nuageux", "Neigeux"]
    },
    {
        nom: "Nymphe Cristaline",
        numero: 52,
        numero2: "26D",
        etat: ["Bourré"],
        lieu: ["Fleuves Cristallisés", "Quartiers Figés"],
        moment: ["Crépuscule"],
        meteo: ["Tempêtueux", "Brumeux", "Neigeux"]
    },
    {
        nom: "Glacivena Serpens",
        numero: 53,
        numero2: "27G",
        etat: ["Bourré"],
        lieu: ["Côtes gelées"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Nuageux"]
    },
    {
        nom: "Crylobite",
        numero: 54,
        numero2: "27D",
        etat: ["Défoncé"],
        lieu: ["Fleuves Cristallisés", "Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux"]
    },
    {
        nom: "Polaris Borealis",
        numero: 55,
        numero2: "28G",
        etat: ["Bourré"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Brumeux"]
    },
    {
        nom: "Abyssios",
        numero: 56,
        numero2: "28D",
        etat: ["Sobre"],
        lieu: ["Etendues givrées", "Fleuves Cristallisés"],
        moment: ["Nuit"],
        meteo: ["Tempêtueux", "Nuageux"]
    },
    {
        nom: "Abyssis",
        numero: 57,
        numero2: "29G",
        etat: ["Sobre"],
        lieu: ["Etendues givrées", "Fleuves Cristallisés"],
        moment: ["Nuit"],
        meteo: ["Tempêtueux", "Nuageux"]
    },
    {
        nom: "Iceoloth",
        numero: 58,
        numero2: "29D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Etendues givrées"],
        moment: ["Nuit"],
        meteo: ["Tempêtueux", "Dégagé", "Neigeux"]
    },
    {
        nom: "Glacius Rex",
        numero: 59,
        numero2: "30G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Neigeux"]
    },
    {
        nom: "Araignée de mer",
        numero: 60,
        numero2: "30D",
        etat: ["Bourré"],
        lieu: ["Côtes gelées", "Crique de glace"],
        moment: ["Aube", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Permafrost",
        numero: 61,
        numero2: "31G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Nuageux", "Pluvieux", "Brumeux", "Neigeux", "Tempêtueux"]
    },
    {
        nom: "Caerulius",
        numero: 62,
        numero2: "31D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Piraglagla",
        numero: 63,
        numero2: "32G",
        etat: ["Sobre"],
        lieu: ["Fleuves Cristallisés", "Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Solarius",
        numero: 64,
        numero2: "32D",
        etat: ["Bourré"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Journée"],
        meteo: ["Dégagé"]
    },
    {
        nom: "Aurorine",
        numero: 65,
        numero2: "33G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Frigoris",
        numero: 66,
        numero2: "33D",
        etat: ["Bourré"],
        lieu: ["Côtes gelées", "Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Torticube",
        numero: 67,
        numero2: "34G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Neigeux"]
    },
    {
        nom: "Frygobyte",
        numero: 68,
        numero2: "34D",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Neigeux"]
    },
    {
        nom: "Abysalite",
        numero: 69,
        numero2: "35G",
        etat: ["Sobre"],
        lieu: ["Désert de givre", "Etendues givrées"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Poulpice",
        numero: 70,
        numero2: "35D",
        etat: ["Bourré"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Nuagette",
        numero: 71,
        numero2: "36G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Désert de givre"],
        moment: ["Aube", "Journée"],
        meteo: ["Tempêtueux", "Dégagé", "Neigeux"]
    },
    {
        nom: "Pirapaténis",
        numero: 72,
        numero2: "36D",
        etat: ["Sobre"],
        lieu: ["Etendues givrées", "Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Crysalon",
        numero: 73,
        numero2: "37G",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Fleuves Cristallisés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Dégagé"]
    },
    {
        nom: "Glacérai argenté",
        numero: 74,
        numero2: "37D",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Axofrost",
        numero: 75,
        numero2: "38G",
        etat: ["Bourré"],
        lieu: ["Fleuves Cristallisés", "Quartiers Figés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Nuageux", "Brumeux"]
    },
    {
        nom: "Ice Athan",
        numero: 76,
        numero2: "38D",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Fleuves Cristallisés"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Dégagé", "Brumeux"]
    },
    {
        nom: "Orelys",
        numero: 77,
        numero2: "39G",
        etat: ["Sobre"],
        lieu: ["Baie des Brumes Gelées", "Crique de glace"],
        moment: ["Crépuscule", "Nuit"],
        meteo: ["Tempêtueux", "Neigeux"]
    },
    {
        nom: "Givreluisant",
        numero: 78,
        numero2: "39D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Vagabond Abyssal",
        numero: 79,
        numero2: "40G",
        etat: ["Sobre"],
        lieu: ["Désert de givre", "Etendues givrées"],
        moment: ["Crépuscule"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    },
    {
        nom: "Cryosquelette",
        numero: 80,
        numero2: "40D",
        etat: ["Sobre"],
        lieu: ["Côtes gelées", "Etendues givrées"],
        moment: ["Aube", "Journée", "Crépuscule", "Nuit"],
        meteo: ["Brumeux", "Dégagé", "Neigeux", "Nuageux", "Pluvieux", "Tempêtueux"]
    }
    // Ajoute tes autres poissons ici
];