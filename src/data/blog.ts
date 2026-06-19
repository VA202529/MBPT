import nutritionImg from "@/assets/blog-nutrition.jpg";
import consistencyImg from "@/assets/blog-consistency.jpg";
import muscleImg from "@/assets/blog-muscle.jpg";
import weightlossImg from "@/assets/blog-weightloss.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  image: string;
  readingTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "echt-afvallen-zonder-neppe-tips",
    title: "Echt afvallen zonder neppe social media tips",
    category: "Mindset & Voeding",
    image: weightlossImg,
    readingTime: "6 min lezen",
    intro:
      "Geen detox-thee, geen crashdiëten, geen wonderpillen. Wat afvallen écht is: simpel, traag en moeilijk vol te houden.",
    content: [
      "Open Instagram en je krijgt binnen vijf minuten tien manieren te zien om '10 kilo kwijt te raken in 2 weken'. Detox-thee, sap-kuren, vetverbranders, intermittent fasting, keto, carnivoor — elke influencer roept iets anders. En geen van hen vertelt je het saaie, eerlijke verhaal.",
      "Afvallen is geen mysterie. Het is energie in versus energie uit. Eet je structureel minder calorieën dan je verbrandt, dan val je af. Punt. Welk dieet je daarvoor kiest is grotendeels een kwestie van wat je vol kunt houden — niet welk dieet 'magisch' is.",
      "**De vier pijlers die wél werken:**",
      "**1. Een realistisch calorietekort.** 300 tot 500 kcal onder onderhoud is voor de meeste mensen prima. Te agressief en je verliest spiermassa, slaap je slecht en houd je het twee weken vol.",
      "**2. Voldoende eiwit.** Mik op ongeveer 1,6 tot 2,2 gram eiwit per kilo lichaamsgewicht. Dit beschermt je spiermassa tijdens het afvallen en zorgt dat je langer verzadigd blijft.",
      "**3. Beweging — kracht én cardio.** Krachttraining behoudt spiermassa, cardio en dagelijkse stappen verhogen je verbruik. 8.000 tot 10.000 stappen per dag doet meer dan je denkt.",
      "**4. Slaap en stress.** Slecht slapen verhoogt honger-hormonen en verlaagt je discipline. Zonder zeven tot acht uur slaap saboteer je jezelf voordat je überhaupt begint.",
      "**Wat je níét nodig hebt:** detox-thee (je lever doet dat zelf), 'fatburners' (peperdure cafeïne), juice cleanses (puur suiker), of een 'cheat day' van 5.000 kcal die je hele week tekort wegvreet.",
      "Afvallen is saai. Het is dezelfde keuze, elke dag, een paar maanden lang maken. De mensen die het volhouden zijn niet de meest gemotiveerde — het zijn de meest consistente. En consistentie bouw je op met een aanpak die past bij jouw leven, niet bij dat van een influencer.",
      "Bij MB PT bouwen we precies dat: een schema, voedingsplan en check-ins die jou helpen om die saaie, eerlijke aanpak vol te houden. Geen shortcuts. Wel resultaat.",
    ],
  },
  {
    slug: "consistentie-boven-motivatie",
    title: "Waarom consistentie belangrijker is dan motivatie",
    category: "Mindset",
    image: consistencyImg,
    readingTime: "4 min lezen",
    intro:
      "Motivatie is een gevoel. Consistentie is een gewoonte. Eén bouw je af, de ander op.",
    content: [
      "Motivatie komt en gaat. Op maandag voel je je een atleet, op donderdag wil je alleen je bank. Wie wacht op motivatie traint drie keer per maand en vraagt zich af waarom er geen progressie is.",
      "Consistentie is iets anders: je traint óók als je geen zin hebt. Niet omdat je je 'sterk' voelt, maar omdat het op je schema staat. Dat is geen discipline-superkracht — dat is een systeem.",
      "Bouw je systeem klein. Drie sessies van 45 minuten per week die je écht haalt, doen meer dan vijf sessies van 90 minuten die je twee weken volhoudt en dan dropt.",
      "Bij MB PT bouwen we schema's die in je leven passen, niet andersom. Dát is hoe je over twaalf maanden nog steeds traint.",
    ],
  },
  {
    slug: "spiermassa-opbouwen-beginner",
    title: "Hoe je spiermassa opbouwt als beginner",
    category: "Training",
    image: muscleImg,
    readingTime: "5 min lezen",
    intro:
      "Als beginner heb je één enorm voordeel: alles werkt. Maar alleen als je drie dingen goed doet.",
    content: [
      "Als je voor het eerst serieus traint, reageert je lichaam sterk. Je bouwt sneller spiermassa op dan ooit daarna in je leven. Maar alleen als je de basis op orde hebt.",
      "**1. Progressive overload.** Elke week iets meer gewicht, een herhaling extra, of een nettere uitvoering. Zonder progressie geen groei.",
      "**2. Compound oefeningen.** Squat, deadlift, bench press, row, overhead press. Deze raken het meeste spierweefsel per minuut. Isolatie is leuk, maar zonder een sterke basis bouw je een huis op zand.",
      "**3. Eiwit en herstel.** 1,6–2,2 g eiwit per kilo lichaamsgewicht, zeven tot acht uur slaap, en niet elke dag dezelfde spiergroep hameren.",
      "Drie tot vier krachtsessies per week is voor de meeste beginners ideaal. Meer is niet beter — herstel is waar de groei gebeurt.",
    ],
  },
  {
    slug: "wat-eten-voor-resultaten",
    title: "Wat je moet eten voor betere trainingsresultaten",
    category: "Voeding",
    image: nutritionImg,
    readingTime: "5 min lezen",
    intro:
      "Voeding is geen wetenschap voor genieën. Het is een paar simpele regels, consistent toegepast.",
    content: [
      "Je hoeft geen voedingsdeskundige te zijn om goed te eten. Je hoeft alleen een paar basisregels te volgen — elke dag.",
      "**Eiwit bij elke maaltijd.** 30–40 gram per maaltijd. Kip, vis, eieren, kwark, peulvruchten, tofu. Eiwit verzadigt en beschermt je spiermassa.",
      "**Koolhydraten rond je training.** Rijst, aardappel, havermout, fruit. Je lichaam gebruikt ze als brandstof — vooral op trainingsdagen.",
      "**Vetten voor hormonen.** Olijfolie, noten, avocado, vette vis. Niet bang voor zijn — je hebt ze nodig.",
      "**Groente bij elke maaltijd.** Vezels, vitamines, volume. Helpt verzadiging en spijsvertering.",
      "Geen verboden voedsel. Geen 'clean' versus 'dirty'. Wel: 80% van je calorieën uit onbewerkt, 20% ruimte voor wat je leuk vindt. Dát houd je vol.",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
