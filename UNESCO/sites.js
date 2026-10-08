/**
 * my little UNESCO - sites.js
 * World Heritage Sites Database
 * Includes landmark keywords (Colosseum, Ggantija, Parthenon, etc.) for high-precision search.
 * Format: [id, name, country, 2-letter ISO code, region, year, description_with_landmarks]
 */

const RAW_UNESCO_DATA = [
  // =========================================================================
  // ITALY (IT) - Top 48 sites
  // =========================================================================
  ["it-1", "Historic Centre of Rome and Vatican Properties", "Italy", "IT", "Lazio", 1980, "Ancient Roman capital featuring the Colosseum, Roman Forum, Pantheon, Palatine Hill, Piazza Navona, and extraterritorial Holy See basilicas"],
  ["it-2", "Venice and its Lagoon", "Italy", "IT", "Veneto", 1987, "Canals, gondolas, and Gothic-Renaissance palaces across 118 lagoon islands including St. Mark's Basilica, Grand Canal, Rialto Bridge, and Doge's Palace"],
  ["it-3", "Historic Centre of Florence", "Italy", "IT", "Tuscany", 1982, "Cradle of Renaissance art and architecture with Florence Cathedral Duomo (Santa Maria del Fiore), Uffizi Gallery, Ponte Vecchio, and Palazzo Vecchio"],
  ["it-4", "Piazza del Duomo, Pisa", "Italy", "IT", "Tuscany", 1987, "Marble religious complex in the Campo dei Miracoli featuring the Leaning Tower of Pisa campanile, Pisa Cathedral, and Baptistery"],
  ["it-5", "Pompeii, Herculaneum and Torre Annunziata", "Italy", "IT", "Campania", 1997, "Ancient Roman cities buried and preserved under volcanic ash by the AD 79 eruption of Mount Vesuvius with intact villas and mosaics"],
  ["it-6", "Costiera Amalfitana (Amalfi Coast)", "Italy", "IT", "Campania", 1997, "Dramatic Mediterranean cliffside coastline with picturesque pastel vertical towns including Positano, Amalfi, and Ravello"],
  ["it-7", "The Dolomites", "Italy", "IT", "Trentino-Alto Adige / Veneto", 2009, "Spectacular alpine mountain range with 18 limestone peaks, sheer cliffs, and pinnacles across Tre Cime di Lavaredo and Marmolada"],
  ["it-8", "Cinque Terre and Portovenere", "Italy", "IT", "Liguria", 1997, "Five colorful fishing villages of Monterosso, Vernazza, Corniglia, Manarola, and Riomaggiore perched on rugged terraced cliffs"],
  ["it-9", "Historic Centre of Naples", "Italy", "IT", "Campania", 1995, "Centuries of Greco-Roman to Bourbon royal heritage along the Gulf of Naples with Spaccanapoli, Castel dell'Ovo, and Sansevero Chapel"],
  ["it-10", "Sassi and Rupestrian Churches of Matera", "Italy", "IT", "Basilicata", 1993, "Ancient troglodyte cave dwellings and rock-hewn Byzantine frescoed churches carved into limestone ravine cliffs"],
  ["it-11", "Historic Centre of Siena", "Italy", "IT", "Tuscany", 1995, "Medieval Gothic city centered around the shell-shaped Piazza del Campo, site of the Palio horse race, and Siena Cathedral Duomo"],
  ["it-12", "Archaeological Area of Agrigento (Valley of the Temples)", "Italy", "IT", "Sicily", 1997, "Magnificent classical Doric Greek temples lining the Sicilian ridge including Temple of Concordia, Hera, and Olympian Zeus"],
  ["it-13", "Villa d'Este, Tivoli", "Italy", "IT", "Lazio", 2001, "Italian Renaissance palace celebrated for its terraced water garden, hydraulic organ fountain, and the Hundred Fountains"],
  ["it-14", "Historic Centre of San Gimignano", "Italy", "IT", "Tuscany", 1990, "Medieval feudal village rising over the Elsa valley, preserved with 14 iconic medieval aristocratic stone tower houses"],
  ["it-15", "Castel del Monte", "Italy", "IT", "Puglia", 1996, "Unique 13th-century octagonal limestone fortress with eight octagonal towers built by Holy Roman Emperor Frederick II"],
  ["it-16", "Church of Santa Maria delle Grazie (The Last Supper)", "Italy", "IT", "Lombardy", 1980, "Dominican convent in Milan housing Leonardo da Vinci's monumental Renaissance mural fresco The Last Supper (Il Cenacolo)"],
  ["it-17", "Early Christian Monuments of Ravenna", "Italy", "IT", "Emilia-Romagna", 1996, "Breathtaking 5th- and 6th-century Byzantine gold mosaics inside Basilica of San Vitale and Mausoleum of Galla Placidia"],
  ["it-18", "Su Nuraxi di Barumini", "Italy", "IT", "Sardinia", 1997, "Megalithic Bronze Age defensive fortress and prehistoric stone village built by the ancient Nuragic civilization"],
  ["it-19", "Villa Adriana (Hadrian's Villa), Tivoli", "Italy", "IT", "Lazio", 1999, "Roman Emperor Hadrian's imperial palace estate synthesizing Greek, Egyptian, and Roman architecture with the Canopus pool"],
  ["it-20", "Verona (Historic City)", "Italy", "IT", "Veneto", 2000, "Roman Arena amphitheatre, historic Roman bridges, and medieval city famous as the setting for Shakespeare's Romeo and Juliet with Juliet's Balcony"],
  ["it-21", "Aeolian Islands (Isole Eolie)", "Italy", "IT", "Sicily", 2000, "Volcanic archipelago off northern Sicily showcasing ongoing volcanic study with active Stromboli and Vulcano"],
  ["it-22", "Val d'Orcia", "Italy", "IT", "Tuscany", 2004, "Quintessential Tuscan rural landscape of rolling clay hills, cypress-lined drives, Pienza, and Brunello di Montalcino vineyards"],
  ["it-23", "Genoa: Le Strade Nuove and Palazzi dei Rolli", "Italy", "IT", "Liguria", 2006, "First European modern urban planning project featuring aristocratic Renaissance and Baroque palaces along Via Garibaldi"],
  ["it-24", "Mount Etna", "Italy", "IT", "Sicily", 2013, "Europe's tallest and most active stratovolcano, legendary in Greek mythology with summit craters, lava flows, and ash plumes"],
  ["it-25", "Vineyard Landscape of Piedmont: Langhe-Roero and Monferrato", "Italy", "IT", "Piedmont", 2014, "Historic terraced hills producing world-renowned Barolo and Barbaresco wines with medieval hilltop castles"],
  ["it-26", "Palermo Arab-Norman and Cathedrals of Cefalu and Monreale", "Italy", "IT", "Sicily", 2015, "Synthesis of Western, Islamic, and Byzantine traditions with gold mosaics in Monreale Cathedral, Cappella Palatina, and Cefalu"],
  ["it-27", "Venetian Works of Defence 16th-17th Centuries (Bergamo, Peschiera, Palmanova)", "Italy", "IT", "Multi-region", 2017, "State-of-the-art bastion fortifications of the Serenissima Venetian Republic including star-fort Palmanova"],
  ["it-28", "Ivrea, Industrial City of the 20th Century", "Italy", "IT", "Piedmont", 2018, "Visionary modern company town developed by the Olivetti typewriter and computer corporation combining industry with social welfare"],
  ["it-29", "Le Colline del Prosecco di Conegliano e Valdobbiadene", "Italy", "IT", "Veneto", 2019, "Hogback steep hills and grassy vineyard terraces cultivating Glera grapes for sparkling Prosecco wine"],
  ["it-30", "Padua's 14th-Century Fresco Cycles (Giotto's Scrovegni Chapel)", "Italy", "IT", "Veneto", 2021, "Revolutionary early Renaissance fresco cycles painted by Giotto inside the Scrovegni Chapel pioneering perspective"],
  ["it-31", "The Porticoes of Bologna", "Italy", "IT", "Emilia-Romagna", 2021, "Expansive covered wooden and stone arcade portico network stretching over 62 kilometers through the medieval university city"],
  ["it-32", "Modena: Cathedral, Torre Civica and Piazza Grande", "Italy", "IT", "Emilia-Romagna", 1997, "Masterpiece of Romanesque architecture designed by Lanfranco and Wiligelmo with the Ghirlandina bell tower"],
  ["it-33", "Crespi d'Adda", "Italy", "IT", "Lombardy", 1995, "Pristine late 19th-century company model town built by the Crespi family for cotton textile mill workers along the Adda River"],
  ["it-34", "Ferrara, City of the Renaissance, and its Po Delta", "Italy", "IT", "Emilia-Romagna", 1995, "Este ducal Renaissance planned city with Castello Estense, Palazzo dei Diamanti, and marshlands"],
  ["it-35", "Royal Palace of Caserta with Park and Aqueduct", "Italy", "IT", "Campania", 1997, "Monumental Bourbon royal palace (Reggia di Caserta) designed by Luigi Vanvitelli rivaling Versailles with cascading grand fountains"],
  ["it-36", "Botanical Garden (Orto Botanico), Padua", "Italy", "IT", "Veneto", 1997, "The world's oldest academic botanical garden founded in 1545, preserving its circular layout and rare historical medicinal herbs"],
  ["it-37", "City of Vicenza and the Palladian Villas of the Veneto", "Italy", "IT", "Veneto", 1994, "Classical architectural masterworks designed by Andrea Palladio including Villa La Rotonda, Teatro Olimpico, and Basilica Palladiana"],
  ["it-38", "Residences of the Royal House of Savoy (Turin)", "Italy", "IT", "Piedmont", 1997, "Baroque royal palaces and hunting lodges built around Turin including Palazzo Reale, Venaria Reale, and Palazzina di Stupinigi"],
  ["it-39", "Historic Centre of Urbino", "Italy", "IT", "Marche", 1998, "Hilltop Renaissance ducal town centered on the Palazzo Ducale of Federico da Montefeltro and birthplace of master painter Raphael"],
  ["it-40", "Villa Romana del Casale, Piazza Armerina", "Italy", "IT", "Sicily", 1997, "Imperial Roman villa famous for the richest and largest collection of polychrome Roman floor mosaics including Bikini Girls"],
  ["it-41", "Cilento National Park, Paestum and Velia", "Italy", "IT", "Campania", 1998, "Ancient Greek colony of Elea-Velia and monumental Doric stone temples of Paestum (Temple of Neptune, Hera, Athena)"],
  ["it-42", "Late Baroque Towns of the Val di Noto (Noto, Ragusa, Modica)", "Italy", "IT", "Sicily", 2002, "Eight southeastern Sicilian towns rebuilt in Sicilian Baroque architectural style after the 1693 earthquake"],
  ["it-43", "Sacri Monti of Piedmont and Lombardy", "Italy", "IT", "Piedmont / Lombardy", 2003, "Nine religious pilgrimage chapels and shrines perched on alpine hills with life-size terra-cotta statues"],
  ["it-44", "Etruscan Necropolises of Cerveteri and Tarquinia", "Italy", "IT", "Lazio", 2004, "Thousands of pre-Roman Etruscan mound tumuli and rock-cut painted chamber tombs portraying daily life and banquets"],
  ["it-45", "Syracuse and the Rocky Necropolis of Pantalica", "Italy", "IT", "Sicily", 2005, "Greek and Roman ruins on Ortygia island, the Ear of Dionysius, and over 5,000 prehistoric rock-cut limestone tomb caves"],
  ["it-46", "Mantua and Sabbioneta", "Italy", "IT", "Lombardy", 2008, "Gonzaga dynasty Renaissance court city with Palazzo Te frescoes and Sabbioneta, the ideal planned fortified town"],
  ["it-47", "Prehistoric Pile Dwellings around the Alps (Italian sites)", "Italy", "IT", "Northern Italy", 2011, "Submerged wooden stilt houses preserving organic artifacts, tools, and textiles from the Neolithic and Bronze Age"],
  ["it-48", "Medici Villas and Gardens in Tuscany", "Italy", "IT", "Tuscany", 2013, "Country estates and formal Renaissance gardens demonstrating the cultural and political patronage of the Medici dynasty"]
];

// Helper to register the global database
if (typeof window !== 'undefined') {
  window.UNESCO_DATABASE = RAW_UNESCO_DATA.map(r => ({
    id: r[0],
    name: r[1],
    country: r[2],
    code: r[3],
    region: r[4],
    year: r[5],
    desc: r[6]
  }));
}
