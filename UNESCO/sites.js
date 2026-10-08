/**
 * my little UNESCO - sites.js
 * Comprehensive Global UNESCO World Heritage Database
 * 
 * Format: [id, official_name, country, iso_code, region, year, searchable_description_with_landmarks]
 */

const RAW_UNESCO_DATA = [
  // =========================================================================
  // ITALY (IT) - Top 45 Sites
  // =========================================================================
  ["it-1", "Historic Centre of Rome and Vatican Properties", "Italy", "IT", "Lazio", 1980, "Ancient Roman capital featuring the Colosseum, Roman Forum, Pantheon, Palatine Hill, Trevi Fountain, Piazza Navona, and Holy See extraterritorial basilicas"],
  ["it-2", "Venice and its Lagoon", "Italy", "IT", "Veneto", 1987, "Canals and Renaissance palaces across 118 lagoon islands including St. Mark's Basilica, Grand Canal, Rialto Bridge, and Doge's Palace"],
  ["it-3", "Historic Centre of Florence", "Italy", "IT", "Tuscany", 1982, "Heart of the Renaissance with Florence Cathedral Duomo (Santa Maria del Fiore), Uffizi Gallery, Ponte Vecchio, and Giotto's Campanile"],
  ["it-4", "Piazza del Duomo, Pisa", "Italy", "IT", "Tuscany", 1987, "Marble architectural ensemble in Campo dei Miracoli featuring the world-famous Leaning Tower of Pisa campanile, Pisa Cathedral, and Baptistery"],
  ["it-5", "Pompeii, Herculaneum and Torre Annunziata", "Italy", "IT", "Campania", 1997, "Ancient Roman cities preserved intact under volcanic ash by the AD 79 Mount Vesuvius eruption with Roman villas and mosaics"],
  ["it-6", "Costiera Amalfitana (Amalfi Coast)", "Italy", "IT", "Campania", 1997, "Dramatic cliffside Mediterranean coastline with pastel vertical villages including Positano, Amalfi, and Ravello"],
  ["it-7", "The Dolomites", "Italy", "IT", "Trentino / Veneto", 2009, "Spectacular alpine mountain range with 18 limestone peaks, sheer cliffs, and pinnacles across Tre Cime di Lavaredo and Marmolada"],
  ["it-8", "Cinque Terre and Portovenere", "Italy", "IT", "Liguria", 1997, "Five colorful coastal fishing villages of Monterosso, Vernazza, Corniglia, Manarola, and Riomaggiore perched on rugged terraced cliffs"],
  ["it-9", "Historic Centre of Naples", "Italy", "IT", "Campania", 1995, "Two millennia of Greco-Roman to Bourbon royal heritage along the Bay of Naples with Spaccanapoli, Castel dell'Ovo, and Sansevero Chapel"],
  ["it-10", "Sassi and Rupestrian Churches of Matera", "Italy", "IT", "Basilicata", 1993, "Ancient troglodyte cave dwellings and rock-cut Byzantine frescoed churches carved into limestone ravine canyon cliffs"],
  ["it-11", "Historic Centre of Siena", "Italy", "IT", "Tuscany", 1995, "Medieval Gothic city centered around the shell-shaped Piazza del Campo, site of the Palio horse race, and Siena Cathedral Duomo"],
  ["it-12", "Archaeological Area of Agrigento (Valley of the Temples)", "Italy", "IT", "Sicily", 1997, "Magnificent classical Doric Greek temples lining the Sicilian ridge including Temple of Concordia, Hera, and Olympian Zeus"],
  ["it-13", "Villa d'Este, Tivoli", "Italy", "IT", "Lazio", 2001, "Renaissance palace famed for its terraced Italian water garden, hydraulic organ fountain, and the Hundred Fountains"],
  ["it-14", "Historic Centre of San Gimignano", "Italy", "IT", "Tuscany", 1990, "Medieval feudal village preserved with 14 iconic aristocratic stone tower houses rising over the Tuscan rolling hills"],
  ["it-15", "Castel del Monte", "Italy", "IT", "Puglia", 1996, "Unique 13th-century octagonal limestone fortress with eight octagonal towers built by Holy Roman Emperor Frederick II"],
  ["it-16", "Church of Santa Maria delle Grazie (The Last Supper)", "Italy", "IT", "Lombardy", 1980, "Dominican convent in Milan housing Leonardo da Vinci's monumental Renaissance mural fresco The Last Supper (Il Cenacolo)"],
  ["it-17", "Early Christian Monuments of Ravenna", "Italy", "IT", "Emilia-Romagna", 1996, "Breathtaking 5th- and 6th-century Byzantine gold mosaics in Basilica of San Vitale and Mausoleum of Galla Placidia"],
  ["it-18", "Su Nuraxi di Barumini", "Italy", "IT", "Sardinia", 1997, "Megalithic Bronze Age defensive fortress and prehistoric stone village built by the ancient Sardinian Nuragic civilization"],
  ["it-19", "Villa Adriana (Hadrian's Villa), Tivoli", "Italy", "IT", "Lazio", 1999, "Roman Emperor Hadrian's imperial estate synthesizing Greek, Egyptian, and Roman architecture with the Canopus pool and Caryatids"],
  ["it-20", "Verona (Historic City)", "Italy", "IT", "Veneto", 2000, "Roman Arena amphitheatre, historic Roman stone bridges, and setting for Shakespeare's Romeo and Juliet with Juliet's Balcony"],
  ["it-21", "Aeolian Islands (Isole Eolie)", "Italy", "IT", "Sicily", 2000, "Volcanic archipelago off northern Sicily showcasing ongoing volcanology with active stratovolcanoes Stromboli and Vulcano"],
  ["it-22", "Val d'Orcia", "Italy", "IT", "Tuscany", 2004, "Classic Tuscan rural landscape of rolling clay hills, cypress-lined avenues, Pienza, and Brunello di Montalcino vineyards"],
  ["it-23", "Genoa: Le Strade Nuove and Palazzi dei Rolli", "Italy", "IT", "Liguria", 2006, "First European modern urban planning project featuring aristocratic Renaissance and Baroque palaces along Via Garibaldi"],
  ["it-24", "Mount Etna", "Italy", "IT", "Sicily", 2013, "Europe's tallest and most active iconic stratovolcano with summit craters, cinder cones, and lava flows"],
  ["it-25", "Vineyard Landscape of Piedmont: Langhe-Roero and Monferrato", "Italy", "IT", "Piedmont", 2014, "Historic terraced vineyard hills cultivating Nebbiolo grapes for world-famous Barolo and Barbaresco wines"],
  ["it-26", "Palermo Arab-Norman and Cathedrals of Cefalu and Monreale", "Italy", "IT", "Sicily", 2015, "Synthesis of Western, Islamic, and Byzantine traditions with gold mosaics in Monreale Cathedral and Cappella Palatina"],
  ["it-27", "Venetian Works of Defence 16th-17th Centuries", "Italy", "IT", "Multi-region", 2017, "Bastion fortifications of the Serenissima Venetian Republic including star-fort town Palmanova and Bergamo walls"],
  ["it-28", "Ivrea, Industrial City of the 20th Century", "Italy", "IT", "Piedmont", 2018, "Model industrial town engineered by the Olivetti typewriter and computer corporation blending modern architecture and social welfare"],
  ["it-29", "Le Colline del Prosecco di Conegliano e Valdobbiadene", "Italy", "IT", "Veneto", 2019, "Hogback steep hills and grassy vineyard terraces cultivating Glera grapes for sparkling Prosecco wine"],
  ["it-30", "Padua's 14th-Century Fresco Cycles (Giotto's Scrovegni Chapel)", "Italy", "IT", "Veneto", 2021, "Revolutionary early Renaissance fresco cycles painted by Giotto inside the Scrovegni Chapel pioneering three-dimensional perspective"],
  ["it-31", "The Porticoes of Bologna", "Italy", "IT", "Emilia-Romagna", 2021, "Extensive network of covered pedestrian porticoes extending over 62 kilometers through the medieval university city"],
  ["it-32", "Cathedral, Torre Civica and Piazza Grande, Modena", "Italy", "IT", "Emilia-Romagna", 1997, "Masterpiece of Romanesque architecture designed by Lanfranco and Wiligelmo with the Ghirlandina bell tower"],
  ["it-33", "Crespi d'Adda", "Italy", "IT", "Lombardy", 1995, "Pristine late 19th-century company model town built by the Crespi family for cotton textile mill workers along the Adda River"],
  ["it-34", "Ferrara, City of the Renaissance, and its Po Delta", "Italy", "IT", "Emilia-Romagna", 1995, "Este ducal Renaissance court city with Castello Estense, Palazzo dei Diamanti, and scenic river marshlands"],
  ["it-35", "Royal Palace of Caserta with Park and Aqueduct", "Italy", "IT", "Campania", 1997, "Monumental Bourbon royal palace (Reggia di Caserta) designed by Luigi Vanvitelli rivaling Versailles with cascading grand fountains"],
  ["it-36", "Botanical Garden (Orto Botanico), Padua", "Italy", "IT", "Veneto", 1997, "The world's oldest academic botanical garden founded in 1545 preserving its circular medicinal garden layout"],
  ["it-37", "City of Vicenza and the Palladian Villas of the Veneto", "Italy", "IT", "Veneto", 1994, "Classical architectural masterworks designed by Andrea Palladio including Villa La Rotonda, Teatro Olimpico, and Basilica Palladiana"],
  ["it-38", "Residences of the Royal House of Savoy", "Italy", "IT", "Piedmont", 1997, "Grand palaces and hunting lodges built across Turin including Palazzo Reale, Venaria Reale, and Palazzina di Stupinigi"],
  ["it-39", "Historic Centre of Urbino", "Italy", "IT", "Marche", 1998, "Hilltop Renaissance city centered on the Palazzo Ducale of Duke Federico da Montefeltro and birthplace of painter Raphael"],
  ["it-40", "Villa Romana del Casale, Piazza Armerina", "Italy", "IT", "Sicily", 1997, "Luxurious imperial Roman villa famed for pristine polychrome floor mosaics including the famous Bikini Girls"],
  ["it-41", "Cilento National Park with Paestum and Velia", "Italy", "IT", "Campania", 1998, "Magnificent Doric Greek stone temples of Paestum (Temple of Neptune, Hera, Athena) and Elea-Velia ruins"],
  ["it-42", "Late Baroque Towns of the Val di Noto", "Italy", "IT", "Sicily", 2002, "Eight southeastern Sicilian towns rebuilt after the 1693 earthquake in dramatic Sicilian Baroque (Noto, Ragusa, Modica)"],
  ["it-43", "Sacri Monti of Piedmont and Lombardy", "Italy", "IT", "Piedmont / Lombardy", 2003, "Nine religious pilgrimage chapels and shrines perched on alpine hills with life-size terra-cotta statues"],
  ["it-44", "Etruscan Necropolises of Cerveteri and Tarquinia", "Italy", "IT", "Lazio", 2004, "Tumulus rock-cut painted chamber tombs illustrating pre-Roman Etruscan daily life, banquets, and mythology"],
  ["it-45", "Syracuse and the Rocky Necropolis of Pantalica", "Italy", "IT", "Sicily", 2005, "Greek and Roman theatre ruins on Ortygia island, the Ear of Dionysius cave, and 5,000 prehistoric rock-cut chamber tombs"],

  // =========================================================================
  // FRANCE (FR) - Top 42 Sites
  // =========================================================================
  ["fr-1", "Paris, Banks of the Seine", "France", "FR", "Île-de-France", 1991, "Riverside monuments including the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, Musée d'Orsay, Sainte-Chapelle, and Pont Neuf"],
  ["fr-2", "Palace and Park of Versailles", "France", "FR", "Île-de-France", 1979, "Royal seat of the Sun King Louis XIV featuring the Hall of Mirrors, Grand Trianon, and formal French gardens by Le Nôtre"],
  ["fr-3", "Mont-Saint-Michel and its Bay", "France", "FR", "Normandy", 1979, "Gothic Benedictine abbey perched dramatically on a tidal rocky island surrounded by shifting sandbanks and tides"],
  ["fr-4", "Chartres Cathedral", "France", "FR", "Centre-Val de Loire", 1979, "Masterpiece of High Gothic architecture famed for original 12th-century blue stained-glass windows and labyrinth"],
  ["fr-5", "Prehistoric Sites of the Vézère Valley (Lascaux Caves)", "France", "FR", "Nouvelle-Aquitaine", 1979, "Paleolithic cave art sanctuaries with 17,000-year-old animal wall paintings in the Lascaux Cave complex"],
  ["fr-6", "Pont du Gard (Roman Aqueduct)", "France", "FR", "Occitanie", 1985, "Colossal three-tiered ancient Roman stone aqueduct bridge spanning the Gardon river, engineered to supply water to Nîmes"],
  ["fr-7", "Historic Fortified City of Carcassonne", "France", "FR", "Occitanie", 1997, "Double-walled medieval citadel with 52 conical stone towers, drawbridges, and Château Comtal overlooking the Aude"],
  ["fr-8", "The Loire Valley Châteaux", "France", "FR", "Centre-Val de Loire", 2000, "Renaissance royal castles including Château de Chambord, Chenonceau, Amboise, and Blois along the Loire river"],
  ["fr-9", "Amiens Cathedral", "France", "FR", "Hauts-de-France", 1981, "One of the largest 13th-century High Gothic cathedrals in the world with soaring stone rib vaults and sculpture"],
  ["fr-10", "Palace and Park of Fontainebleau", "France", "FR", "Île-de-France", 1981, "Royal residence used by French monarchs from Francis I to Napoleon Bonaparte featuring Italian Renaissance Mannerist decor"],
  ["fr-11", "Roman Theatre and Triumphal Arch of Orange", "France", "FR", "Provence-Alpes-Côte d'Azur", 1981, "Ancient Roman theatre with imperial stage wall, statue of Augustus, and triumphal arch of the Roman legion"],
  ["fr-12", "Arles, Roman and Romanesque Monuments", "France", "FR", "Provence-Alpes-Côte d'Azur", 1981, "Roman amphitheatre (Arles Arena), ancient theatre, Alyscamps necropolis, and Romanesque Church of Saint-Trophime"],
  ["fr-13", "Cistercian Abbey of Fontenay", "France", "FR", "Bourgogne-Franche-Comté", 1981, "Austerely beautiful 12th-century Romanesque Cistercian monastery founded by St Bernard of Clairvaux"],
  ["fr-14", "Strasbourg: Grand-Île and Neustadt", "France", "FR", "Grand Est", 1988, "Alsatian capital showcasing Strasbourg Cathedral (Notre-Dame), Petite France half-timbered houses, and Prussian imperial quarter"],
  ["fr-15", "Cathedral of Notre-Dame, Reims and Palace of Tau", "France", "FR", "Grand Est", 1991, "Gothic coronation cathedral where kings of France were crowned, famed for the Smiling Angel statue and stained glass"],
  ["fr-16", "Canal du Midi", "France", "FR", "Occitanie", 1996, "Seventeenth-century engineering triumph designed by Pierre-Paul Riquet connecting the Atlantic Ocean to the Mediterranean Sea"],
  ["fr-17", "Historic Site of Lyon", "France", "FR", "Auvergne-Rhône-Alpes", 1998, "Roman ruins of Fourvière, Renaissance Vieux Lyon, silk-weaving traboules passageways, and Presqu'île district"],
  ["fr-18", "Jurisdiction of Saint-Émilion", "France", "FR", "Nouvelle-Aquitaine", 1999, "Bordeaux viticultural landscape, terraced vineyards, and subterranean monolithic rock-hewn church"],
  ["fr-19", "Belfries of Belgium and France", "France", "FR", "Hauts-de-France", 1999, "Civic bell towers symbolizing municipal freedom and town autonomy across northern France (Lille, Douai, Arras)"],
  ["fr-20", "Provins, Town of Medieval Fairs", "France", "FR", "Île-de-France", 2001, "Preserved 12th-century fortified trading city featuring the César Tower, underground vaulted cellars, and ramparts"],
  ["fr-21", "Le Havre, City Rebuilt by Auguste Perret", "France", "FR", "Normandy", 2005, "Pioneering post-WWII reconstruction using prefabricated reinforced concrete, St Joseph's Church tower, and sea port"],
  ["fr-22", "Bordeaux, Port of the Moon", "France", "FR", "Nouvelle-Aquitaine", 2007, "Enlightenment neoclassical urban ensemble along the Garonne river including Place de la Bourse and Grand Théâtre"],
  ["fr-23", "Fortifications of Vauban", "France", "FR", "Multi-region", 2008, "Twelve groups of military bastion fortresses and citadels engineered by King Louis XIV's military architect Vauban"],
  ["fr-24", "Episcopal City of Albi", "France", "FR", "Occitanie", 2010, "Red brick Gothic cathedral fortress of Sainte-Cécile and Palais de la Berbie overlooking the Tarn river"],
  ["fr-25", "The Causses and the Cévennes", "France", "FR", "Occitanie", 2011, "Mediterranean agro-pastoral cultural landscape shaped by deep limestone gorges and traditional sheep pastoralism"],
  ["fr-26", "Decorated Cave of Pont d'Arc (Chauvet Cave)", "France", "FR", "Auvergne-Rhône-Alpes", 2014, "Earliest known figurative cave drawings dating back 36,000 years depicting lions, mammoths, horses, and rhinos"],
  ["fr-27", "Champagne Hillsides, Houses and Cellars", "France", "FR", "Grand Est", 2015, "Avenue de Champagne in Épernay, chalk crayères cellars in Reims, and vineyards pioneering sparkling wine production"],
  ["fr-28", "The Climats, terroirs of Burgundy", "France", "FR", "Bourgogne-Franche-Comté", 2015, "Demarcated vineyard plots on the slopes of the Côte de Nuits and Beaune producing premier Pinot Noir and Chardonnay"],
  ["fr-29", "Architectural Work of Le Corbusier (France)", "France", "FR", "Multi-region", 2016, "Modernist architecture including Villa Savoye in Poissy, Ronchamp Chapel, and Unité d'Habitation in Marseille"],
  ["fr-30", "Chaîne des Puys - Limagne Fault", "France", "FR", "Auvergne-Rhône-Alpes", 2018, "Alignment of volcanic cinder cones, maars, and Puy de Dôme revealing continental breakup rifting"],
  ["fr-31", "Cordouan Lighthouse", "France", "FR", "Nouvelle-Aquitaine", 2021, "Monumental Renaissance stone lighthouse standing tall in the open sea at the entrance of the Gironde estuary"],
  ["fr-32", "Nice, Winter Resort Town of the Riviera", "France", "FR", "Provence-Alpes-Côte d'Azur", 2021, "Cosmopolitan seaside resort shaped by European winter aristocracy including the Promenade des Anglais"],
  ["fr-33", "Maison Carrée of Nîmes", "France", "FR", "Occitanie", 2023, "One of the best-preserved ancient Roman temple facades in the world, dedicated to Gaius and Lucius Caesar"],
  ["fr-34", "Volcanoes and Forests of Mount Pelée, Martinique", "France", "FR", "Martinique", 2023, "Lush tropical rainforests and volcano that erupted in 1902 destroying the town of Saint-Pierre"],
  ["fr-35", "Gulf of Porto: Calanche of Piana and Scandola", "France", "FR", "Corsica", 1983, "Red porphyry cliffs, crystal waters, and marine reserve harboring ospreys, falcons, and dolphins"],
  ["fr-36", "Pyrénées - Mont Perdu", "France", "FR", "Occitanie", 1997, "Dramatic limestone mountain massifs, Cirque de Gavarnie, and pastoral transhumance shared with Spain"],
  ["fr-37", "Lagoons of New Caledonia", "France", "FR", "New Caledonia", 2008, "Spectacular reef systems and rich marine biodiversity in the South Pacific Ocean"],
  ["fr-38", "Pitons, Cirques and Remparts of Reunion Island", "France", "FR", "Réunion", 2010, "Towering volcanic peaks (Piton de la Fournaise) and dramatic natural amphitheater cirques in the Indian Ocean"],
  ["fr-39", "French Austral Lands and Seas", "France", "FR", "Sub-Antarctic", 2019, "Immense marine sanctuary harboring massive king penguin colonies, albatrosses, and seals"],
  ["fr-40", "Taputapuātea", "France", "FR", "French Polynesia", 2017, "Sacred political and ceremonial marae complex on the island of Raiatea in the Polynesian heartland"],
  ["fr-41", "Place Stanislas, Nancy", "France", "FR", "Grand Est", 1983, "Monumental urban ensemble of Enlightenment rococo architecture and gilded wrought-iron gates in Nancy"],
  ["fr-42", "The Great Spa Towns of Europe (Vichy)", "France", "FR", "Auvergne-Rhône-Alpes", 2021, "Thermal mineral springs resort town known for its parks, casinos, Napoleon III chalets, and cure culture"],

  // =========================================================================
  // SPAIN (ES) - Top 40 Sites
  // =========================================================================
  ["es-1", "Works of Antoni Gaudí", "Spain", "ES", "Catalonia", 1984, "Modernisme architectural masterworks in Barcelona including Sagrada Família basilica, Park Güell, Casa Batlló, and Casa Milà (La Pedrera)"],
  ["es-2", "Alhambra, Generalife and Albayzín, Granada", "Spain", "ES", "Andalusia", 1984, "Moorish Nasrid palace citadel, Court of the Lions, and fragrant Generalife gardens facing the Sierra Nevada"],
  ["es-3", "Historic Centre of Cordoba", "Spain", "ES", "Andalusia", 1984, "The Great Mosque of Cordoba (Mezquita) with its forest of two-tier red-and-white horseshoe arches and Jewish Quarter"],
  ["es-4", "Santiago de Compostela (Old Town)", "Spain", "ES", "Galicia", 1985, "Historic terminus of the Saint James pilgrimage route (Camino de Santiago) with Romanesque-Baroque Cathedral and Praza do Obradoiro"],
  ["es-5", "Old Town of Segovia and its Aqueduct", "Spain", "ES", "Castile and León", 1985, "Un-mortared Roman aqueduct bridge towering over Segovia alongside the fairy-tale Alcázar castle"],
  ["es-6", "Historic City of Toledo", "Spain", "ES", "Castilla-La Mancha", 1986, "Ancient walled capital where Christian, Islamic, and Jewish cultures flourished, featuring Toledo Cathedral and El Greco's works"],
  ["es-7", "Burgos Cathedral", "Spain", "ES", "Castile and León", 1984, "Grand Spanish Gothic cathedral housing the tomb of legendary Castilian warrior El Cid"],
  ["es-8", "Monastery and Site of El Escorial, Madrid", "Spain", "ES", "Madrid", 1984, "Monumental Renaissance monastery palace built by King Philip II as royal pantheon and center of the Spanish Empire"],
  ["es-9", "Cave of Altamira and Paleolithic Cave Art", "Spain", "ES", "Cantabria", 1985, "Polychrome bison cave paintings dubbed the Sistine Chapel of Prehistoric Art dating back 14,000 years"],
  ["es-10", "Old Town of Ávila with its Extramuros Churches", "Spain", "ES", "Castile and León", 1985, "Complete medieval city enclosed by intact granite defensive walls with 88 semicircular towers"],
  ["es-11", "Historic City of Salamanca", "Spain", "ES", "Castile and León", 1988, "Golden sandstone Plaza Mayor and historic university founded in 1218 with plateresque facade and frog relief"],
  ["es-12", "Poblet Monastery", "Spain", "ES", "Catalonia", 1991, "One of the largest Cistercian royal abbeys containing tombs of the Kings of the Crown of Aragon"],
  ["es-13", "Cathedral, Alcázar and Archivo de Indias in Seville", "Spain", "ES", "Andalusia", 1987, "Giralda bell tower, Seville Cathedral with Columbus tomb, and Mudéjar Real Alcázar royal palace"],
  ["es-14", "Archaeological Ensemble of Mérida", "Spain", "ES", "Extremadura", 1993, "Remarkable Roman theatre, amphitheatre, Roman circus, and Puente Romano bridge of ancient Emerita Augusta"],
  ["es-15", "Doñana National Park", "Spain", "ES", "Andalusia", 1994, "Crucial wetland delta where the Guadalquivir river meets the Atlantic, home to Iberian lynx and Spanish imperial eagles"],
  ["es-16", "Historic Walled Town of Cuenca", "Spain", "ES", "Castilla-La Mancha", 1996, "Medieval fortified town famed for the Hanging Houses (Casas Colgadas) cantilevered over sheer river gorges"],
  ["es-17", "La Lonja de la Seda de Valencia", "Spain", "ES", "Valencia", 1996, "Late Gothic silk exchange masterpiece with twisted spiraling stone columns in the Hall of the Columns"],
  ["es-18", "Palau de la Música Catalana and Hospital de Sant Pau", "Spain", "ES", "Catalonia", 1997, "Pinnacle of Catalan modernisme designed by architect Lluís Domènech i Montaner in Barcelona"],
  ["es-19", "San Millán Yuso and Suso Monasteries", "Spain", "ES", "La Rioja", 1997, "Cradle where the Spanish Castilian and Basque languages were first recorded in written form"],
  ["es-20", "University and Historic Precinct of Alcalá de Henares", "Spain", "ES", "Madrid", 1998, "First planned university city in the world and birthplace of Don Quixote author Miguel de Cervantes"],
  ["es-21", "Ibiza, Biodiversity and Culture", "Spain", "ES", "Balearic Islands", 1999, "Dalt Vila renaissance fortified upper town and endemic Posidonia oceanica underwater seagrass meadows"],
  ["es-22", "San Cristóbal de La Laguna", "Spain", "ES", "Canary Islands", 1999, "First non-fortified grid-plan town in the Canaries that served as architectural model for colonial Spanish America"],
  ["es-23", "Archaeological Ensemble of Tárraco (Tarragona)", "Spain", "ES", "Catalonia", 1990, "Roman coastal capital with seaside Roman amphitheatre, circus, and Les Ferreres aqueduct (Devil's Bridge)"],
  ["es-24", "Palmeral of Elche", "Spain", "ES", "Valencia", 2000, "Intricate oasis irrigation system of date palm groves cultivated since Moorish rule"],
  ["es-25", "Roman Walls of Lugo", "Spain", "ES", "Galicia", 2000, "The only fully intact ancient Roman defensive circuit wall still standing around a European city"],
  ["es-26", "Catalan Romanesque Churches of the Vall de Boí", "Spain", "ES", "Catalonia", 2000, "Nine slender Romanesque stone churches with bell towers tucked into a Pyrenean valley (Sant Climent de Taüll)"],
  ["es-27", "Archaeological Site of Atapuerca", "Spain", "ES", "Castile and León", 2000, "Caves revealing the earliest known human hominin fossil remains in Western Europe (Homo antecessor)"],
  ["es-28", "Aranjuez Cultural Landscape", "Spain", "ES", "Madrid", 2001, "Royal Palace of Aranjuez with ornate gardens along the Tagus and Jarama rivers"],
  ["es-29", "Renaissance Monumental Ensembles of Úbeda and Baeza", "Spain", "ES", "Andalusia", 2003, "Flourishing 16th-century Italian Renaissance palaces, plazas, and churches designed by Andrés de Vandelvira"],
  ["es-30", "Vizcaya Bridge (Puente Colgante)", "Spain", "ES", "Basque Country", 2006, "World's oldest iron transporter bridge carrying gondolas over the Nervión estuary near Bilbao"],
  ["es-31", "Teide National Park", "Spain", "ES", "Canary Islands", 2007, "Mount Teide volcano rising to 3,718 meters, Spain's highest peak, with striking volcanic caldera landscapes"],
  ["es-32", "Tower of Hercules", "Spain", "ES", "Galicia", 2009, "Ancient Roman stone lighthouse standing guard over the Atlantic Ocean in A Coruña since the 1st century AD"],
  ["es-33", "Cultural Landscape of the Serra de Tramuntana", "Spain", "ES", "Balearic Islands", 2011, "Dry-stone terraced olive hillsides, water mills, and mountain villages in northwestern Mallorca"],
  ["es-34", "Antequera Dolmens Site", "Spain", "ES", "Andalusia", 2016, "Megalithic stone chambers (Menga, Viera, El Romeral) aligned toward sacred limestone mountains (Peña de los Enamorados)"],
  ["es-35", "Caliphate City of Medina Azahara", "Spain", "ES", "Andalusia", 2018, "Grand 10th-century Umayyad caliphate palace city unearthed outside Cordoba with marble halls"],
  ["es-36", "Paseo del Prado and Buen Retiro Park, Madrid", "Spain", "ES", "Madrid", 2021, "Enlightenment cultural tree-lined boulevard featuring the Prado Museum, Cibeles fountain, and El Retiro Park Crystal Palace"],
  ["es-37", "Risco Caído and Sacred Mountains of Gran Canaria", "Spain", "ES", "Canary Islands", 2019, "Pre-Hispanic troglodyte cave sanctuaries, temples, and astronomical solstitial markers"],
  ["es-38", "Monuments of Oviedo and Kingdom of Asturias", "Spain", "ES", "Asturias", 1985, "Pre-Romanesque churches including Santa María del Naranco and San Miguel de Lillo"],
  ["es-39", "Mudéjar Architecture of Aragon", "Spain", "ES", "Aragon", 1986, "Bell towers decorated in glazed ceramic tiles reflecting Christian-Islamic fusion in Teruel and Zaragoza"],
  ["es-40", "Old Town of Cáceres", "Spain", "ES", "Extremadura", 1986, "Medieval fortified town featuring defensive stone towers fought over by Moors and Christians"],

  // =========================================================================
  // GERMANY (DE) - Top 38 Sites
  // =========================================================================
  ["de-1", "Aachen Cathedral", "Germany", "DE", "North Rhine-Westphalia", 1978, "Charlemagne's Palatine Chapel octagonal dome and imperial coronation cathedral of 30 German kings"],
  ["de-2", "Cologne Cathedral", "Germany", "DE", "North Rhine-Westphalia", 1996, "High Gothic twin-spired cathedral on the Rhine holding the golden Shrine of the Three Holy Kings"],
  ["de-3", "Würzburg Residence with Court Gardens", "Germany", "DE", "Bavaria", 1981, "Baroque prince-bishop palace famed for Giovanni Battista Tiepolo's monumental unsupported ceiling staircase fresco"],
  ["de-4", "Pilgrimage Church of Wies", "Germany", "DE", "Bavaria", 1983, "Bavarian Rococo masterpiece sanctuary nestled in an alpine meadow with swirling stucco decoration"],
  ["de-5", "Castles of Augustusburg and Falkenlust at Brühl", "Germany", "DE", "North Rhine-Westphalia", 1984, "Rococo residences and formal French gardens of the Archbishop-Elector of Cologne with Balthasar Neumann staircase"],
  ["de-6", "St Mary's Cathedral and St Michael's Church, Hildesheim", "Germany", "DE", "Lower Saxony", 1985, "Ottonian Romanesque bronze doors of Bishop Bernward, the Christ column, and thousand-year-old rosebush"],
  ["de-7", "Roman Monuments, Cathedral and Church of Our Lady, Trier", "Germany", "DE", "Rhineland-Palatinate", 1986, "Porta Nigra Roman gate, imperial thermal baths, amphitheatre, and Constantine's throne room basilica"],
  ["de-8", "Hanseatic City of Lübeck", "Germany", "DE", "Schleswig-Holstein", 1987, "Queen of the Hanseatic League featuring the Holstentor brick twin-tower gate and seven church steeples"],
  ["de-9", "Palaces and Parks of Potsdam and Berlin (Sanssouci)", "Germany", "DE", "Brandenburg / Berlin", 1990, "Frederick the Great's Rococo Sanssouci palace, vineyard terraces, and extensive landscaped royal parks"],
  ["de-10", "Abbey and Altenmünster of Lorsch", "Germany", "DE", "Hesse", 1991, "Carolingian gatehouse Torhalle representing rare intact pre-Romanesque architecture from the Charlemagne era"],
  ["de-11", "Mines of Rammelsberg and Historic Town of Goslar", "Germany", "DE", "Lower Saxony", 1992, "Millennium of continuous silver mining in the Harz mountains and Imperial Palace of Goslar"],
  ["de-12", "Town of Bamberg", "Germany", "DE", "Bavaria", 1993, "Intact medieval layout with Old Town Hall perched atop the Regnitz river bridge and Bamberg Cathedral with the Rider statue"],
  ["de-13", "Collegiate Church, Castle and Old Town of Quedlinburg", "Germany", "DE", "Saxony-Anhalt", 1994, "Over 1,300 historic half-timbered timber-framed houses beneath the Romanesque collegiate church of St Servatius"],
  ["de-14", "Völklingen Ironworks", "Germany", "DE", "Saarland", 1994, "Only intact historic pig-iron smelting plant from the industrial era preserved as industrial monument"],
  ["de-15", "Messel Pit Fossil Site", "Germany", "DE", "Hesse", 1995, "Pristine Eocene lake shale fossils preserving early mammals with stomach contents, hair, and soft tissue"],
  ["de-16", "Bauhaus Sites in Weimar, Dessau and Bernau", "Germany", "DE", "Multi-region", 1996, "Birthplace of 20th-century modernist design and architecture engineered by Walter Gropius and Mies van der Rohe"],
  ["de-17", "Luther Memorials in Eisleben and Wittenberg", "Germany", "DE", "Saxony-Anhalt", 1996, "Castle Church door where Martin Luther posted the 95 Theses launching the Protestant Reformation"],
  ["de-18", "Classical Weimar", "Germany", "DE", "Thuringia", 1998, "Golden age of German literature led by Goethe, Schiller, and Herder with Anna Amalia Library"],
  ["de-19", "Museumsinsel (Museum Island), Berlin", "Germany", "DE", "Berlin", 1999, "Ensemble of five world-renowned museums including the Pergamon Museum, Neues Museum with Nefertiti bust, and Altes Museum"],
  ["de-20", "Wartburg Castle", "Germany", "DE", "Thuringia", 1999, "Feudal fortress where Martin Luther translated the New Testament into German and site of the Minstrels' Contest"],
  ["de-21", "Garden Kingdom of Dessau-Wörlitz", "Germany", "DE", "Saxony-Anhalt", 2000, "First English landscape garden on the European continent with classical temples, lakes, and bridges"],
  ["de-22", "Monastic Island of Reichenau", "Germany", "DE", "Baden-Württemberg", 2000, "Benedictine monastery on Lake Constance famed for Ottonian scriptorium manuscript illumination"],
  ["de-23", "Zollverein Coal Mine Industrial Complex, Essen", "Germany", "DE", "North Rhine-Westphalia", 2001, "Bauhaus-style coal mine Shaft 12 in the Ruhr valley, dubbed the most beautiful coal mine in the world"],
  ["de-24", "Upper Middle Rhine Valley", "Germany", "DE", "Rhineland-Palatinate", 2002, "Romantic gorge lined with 40 hilltop castles, terraced Riesling vineyards, and the legendary Lorelei rock"],
  ["de-25", "Historic Centres of Stralsund and Wismar", "Germany", "DE", "Mecklenburg-Vorpommern", 2002, "Hanseatic coastal trading centers characterized by soaring Brick Gothic churches and gabled merchant houses"],
  ["de-26", "Old Town of Regensburg with Stadtamhof", "Germany", "DE", "Bavaria", 2006, "Best-preserved medieval city in Germany with Stone Bridge over the Danube and Gothic Regensburg Cathedral"],
  ["de-27", "Bergpark Wilhelmshöhe", "Germany", "DE", "Hesse", 2013, "Monumental baroque hillside water cascades and gravity fountains crowned by the colossal Hercules statue in Kassel"],
  ["de-28", "Speicherstadt and Kontorhaus District with Chilehaus", "Germany", "DE", "Hamburg", 2015, "World's largest historic warehouse district on oak piles with red-brick expressionist architecture in Hamburg"],
  ["de-29", "Caves and Ice Age Art in the Swabian Jura", "Germany", "DE", "Baden-Württemberg", 2017, "Earliest figurative carvings including the mammoth-ivory Lion-man (Löwenmensch) and bone flutes (40,000 BP)"],
  ["de-30", "ShUM Sites of Speyer, Worms and Mainz", "Germany", "DE", "Rhineland-Palatinate", 2021, "Cradle of Ashkenazi Jewish culture featuring medieval synagogues, mikveh ritual baths, and Jewish cemeteries"],
  ["de-31", "Fagus Factory in Alfeld", "Germany", "DE", "Lower Saxony", 2011, "Walter Gropius glass-curtain wall shoe last factory pioneering modern functionalist industrial architecture"],
  ["de-32", "Margravial Opera House Bayreuth", "Germany", "DE", "Bavaria", 2012, "Finest surviving baroque court opera theatre built for Princess Wilhelmine with wood-carved tiered boxes"],
  ["de-33", "Carolingian Westwork and Civitas Corvey", "Germany", "DE", "North Rhine-Westphalia", 2014, "Original preserved 9th-century monastic westwork facade along the Weser river with ancient frescoes"],
  ["de-34", "Naumburg Cathedral", "Germany", "DE", "Saxony-Anhalt", 2018, "Masterpiece of medieval art featuring life-sized donor statues including the world-famous stone portrait of Uta"],
  ["de-35", "Erzgebirge/Krušnohoří Mining Region", "Germany", "DE", "Saxony", 2019, "Ore mountain landscape mined for silver, tin, cobalt, and uranium since the 12th century"],
  ["de-36", "Water Management System of Augsburg", "Germany", "DE", "Bavaria", 2019, "Cascading canal networks, historic water towers, and hydro-power works providing water since the 14th century"],
  ["de-37", "Mathildenhöhe Darmstadt", "Germany", "DE", "Hesse", 2021, "Art Nouveau (Jugendstil) artists' colony featuring the iconic Wedding Tower and Russian Orthodox Chapel"],
  ["de-38", "The Great Spa Towns of Europe (Baden-Baden)", "Germany", "DE", "Baden-Württemberg", 2021, "Elite international mineral thermal bathing resort celebrating 19th-century Belle Époque casino and spa cure culture"],

  // =========================================================================
  // CHINA (CN) - Top 40 Sites
  // =========================================================================
  ["cn-1", "The Great Wall", "China", "CN", "Northern China", 1987, "Vast military defense rampart spanning mountain ridges across thousands of miles including Badaling, Mutianyu, Simatai, and Jiayuguan"],
  ["cn-2", "Imperial Palaces of Ming and Qing Dynasties (Forbidden City)", "China", "CN", "Beijing", 1987, "Massive palatial complex with 9,999 rooms that housed 24 Chinese emperors over 500 years and Shenyang Palace"],
  ["cn-3", "Mausoleum of the First Qin Emperor (Terracotta Army)", "China", "CN", "Shaanxi", 1987, "Thousands of lifelike terracotta warriors, archers, and horses guarding Emperor Qin Shi Huang's subterranean tomb in Xi'an"],
  ["cn-4", "Mogao Caves, Dunhuang", "China", "CN", "Gansu", 1987, "Silk Road Buddhist cave temples containing thousands of square meters of vibrant wall mural frescoes and statues"],
  ["cn-5", "Mount Taishan", "China", "CN", "Shandong", 1987, "Most revered of China's five sacred Taoist mountains, climbing 6,000 stone stairs through the South Gate to Heaven"],
  ["cn-6", "Mount Huangshan (Yellow Mountain)", "China", "CN", "Anhui", 1990, "Granite peaks, ancient twisted pines, and sea of clouds that inspired classical Chinese ink-wash landscape paintings"],
  ["cn-7", "Jiuzhaigou Valley Scenic and Historic Interest Area", "China", "CN", "Sichuan", 1992, "Multi-tiered turquoise mineral lakes, travertine waterfalls (Pearl Shoal), and snow-capped peaks on the Tibetan plateau"],
  ["cn-8", "Huanglong Scenic and Historic Interest Area", "China", "CN", "Sichuan", 1992, "Golden travertine terraced pools and cascades shaped like a yellow dragon, habitat of the giant panda"],
  ["cn-9", "Wulingyuan Scenic Area (Zhangjiajie)", "China", "CN", "Hunan", 1992, "Thousands of dramatic quartzite sandstone karst pillars towering over forest, inspiration for the floating mountains in Avatar"],
  ["cn-10", "Mountain Resort and Outlying Temples, Chengde", "China", "CN", "Hebei", 1994, "Qing summer palace blending Han, Tibetan, and Mongolian architecture including the mini Potala Palace"],
  ["cn-11", "Historic Ensemble of the Potala Palace, Lhasa", "China", "CN", "Tibet", 1994, "Sacred winter residence of the Dalai Lama perched high on the Tibetan plateau with Jokhang Temple and Norbulingka"],
  ["cn-12", "Temple and Cemetery of Confucius, Qufu", "China", "CN", "Shandong", 1994, "Memorial complex commemorating Confucius, father of Chinese philosophical thought, and Kong family mansion"],
  ["cn-13", "Mount Emei Scenic Area and Leshan Giant Buddha", "China", "CN", "Sichuan", 1996, "Colossal 71-meter stone Buddha carved into river cliffside facing sacred Buddhist Mount Emei"],
  ["cn-14", "Lushan National Park", "China", "CN", "Jiangxi", 1996, "Sacred cultural mountain blending Buddhist, Taoist, and modern political conference history amid mist"],
  ["cn-15", "Ancient City of Ping Yao", "China", "CN", "Shanxi", 1997, "Traditional Han Chinese walled banking city preserved with complete defensive ramparts and Rishengchang draft bank"],
  ["cn-16", "Classical Gardens of Suzhou", "China", "CN", "Jiangsu", 1997, "Scholarly miniature landscapes recreating nature with rocks, water, and pavilions (Humble Administrator's Garden)"],
  ["cn-17", "Summer Palace, an Imperial Garden in Beijing", "China", "CN", "Beijing", 1998, "Masterpiece of royal landscape design centering around Kunming Lake, Longevity Hill, and the Long Corridor"],
  ["cn-18", "Temple of Heaven, Beijing", "China", "CN", "Beijing", 1998, "Circular ceremonial altar and Hall of Prayer for Good Harvests where emperors prayed for agricultural abundance"],
  ["cn-19", "Dazu Rock Carvings", "China", "CN", "Chongqing", 1999, "Steep cliffside grottoes depicting harmonious Buddhist, Taoist, and Confucian statues including the Reclining Buddha"],
  ["cn-20", "Mount Wuyi", "China", "CN", "Fujian", 1999, "Dramatic river gorge, Nine-Bend Stream, cradle of Neo-Confucianism, and Da Hong Pao tea plantations"],
  ["cn-21", "Ancient Villages in Southern Anhui – Xidi and Hongcun", "China", "CN", "Anhui", 2000, "Traditional Huizhou residential water-mirror villages with black tiles and white horse-head walls"],
  ["cn-22", "Longmen Grottoes, Luoyang", "China", "CN", "Henan", 2000, "Thousands of Buddhist stone statues carved into limestone cliffs along the Yi River including the colossal Vairocana Buddha"],
  ["cn-23", "Imperial Tombs of Ming and Qing Dynasties", "China", "CN", "Multi-region", 2000, "Monumental burial grounds designed according to feng shui principles including the Ming Tombs outside Beijing"],
  ["cn-24", "Yungang Grottoes, Datong", "China", "CN", "Shanxi", 2001, "Early Buddhist rock-cut cave art reflecting Silk Road Greco-Indian artistic influences in Northern Wei dynasty"],
  ["cn-25", "Three Parallel Rivers of Yunnan Protected Areas", "China", "CN", "Yunnan", 2003, "Yangtze, Mekong, and Salween rivers converging through deep mountain gorges and biodiversity hotspots"],
  ["cn-26", "Historic Centre of Macao", "China", "CN", "Macao", 2005, "East-meets-West colonial Portuguese architecture, Ruins of St. Paul's church facade, and ancient A-Ma Temple"],
  ["cn-27", "Sichuan Giant Panda Sanctuaries", "China", "CN", "Sichuan", 2006, "Wolong, Mt Siguniang and Jiajin Mountains harboring more than 30 percent of the world's wild giant pandas"],
  ["cn-28", "Yin Xu", "China", "CN", "Henan", 2006, "Capital of the ancient Shang dynasty where Oracle Bone inscriptions (earliest Chinese writing) and Fu Hao tomb were unearthed"],
  ["cn-29", "South China Karst", "China", "CN", "Guizhou / Guangxi", 2007, "Tower karst, Shilin Stone Forest, and spectacular underground river caves in Guilin, Libo, and Wulong"],
  ["cn-30", "Fujian Tulou", "China", "CN", "Fujian", 2008, "Large multi-story circular fortified earthen clan compounds built by the Hakka people in mountainous villages"],
  ["cn-31", "Mount Sanqingshan National Park", "China", "CN", "Jiangxi", 2008, "Granite pillars shaped like human and animal silhouettes enveloped by mist and ancient Taoist shrines"],
  ["cn-32", "Mount Wutai", "China", "CN", "Shanxi", 2009, "Sacred Buddhist peak dedicated to Bodhisattva Manjushri with dozens of ancient timber temple monasteries"],
  ["cn-33", "West Lake Cultural Landscape of Hangzhou", "China", "CN", "Zhejiang", 2011, "Scenic lake with causeways, pagodas (Leifeng), and lotus ponds that inspired poets and painters for a millennium"],
  ["cn-34", "The Grand Canal", "China", "CN", "Eastern China", 2014, "World's longest ancient artificial waterway connecting Beijing and Hangzhou, constructed since the 5th century BC"],
  ["cn-35", "Archaeological Ruins of Liangzhu City", "China", "CN", "Zhejiang", 2019, "5,000-year-old jade culture demonstrating early hydraulic urban civilization and water reservoirs"],
  ["cn-36", "Kaiping Diaolou and Villages", "China", "CN", "Guangdong", 2007, "Multi-storied defensive village watchtowers fusing Chinese and Western architectural styles"],
  ["cn-37", "Silk Roads: Routes Network of Chang'an-Tianshan", "China", "CN", "Shaanxi / Xinjiang", 2014, "Strategic 5,000 km trading artery linking Chang'an to Central Asia including Giant Wild Goose Pagoda"],
  ["cn-38", "Hani Rice Terraces of Honghe", "China", "CN", "Yunnan", 2013, "Cascading mountain paddy terrace systems engineered by the Hani people over 1,300 years"],
  ["cn-39", "Quanzhou: Emporium of the World in Song-Yuan China", "China", "CN", "Fujian", 2021, "Thriving medieval maritime trading gateway facilitating Silk Road sea commerce with Kaiyuan Temple"],
  ["cn-40", "Beijing Central Axis", "China", "CN", "Beijing", 2024, "Grand 7.8 km imperial urban axis ordering the layout of the capital through the Drum Tower, Forbidden City, and Tiananmen"],

  // =========================================================================
  // UNITED KINGDOM (GB) - All 33 Inscribed Sites
  // =========================================================================
  ["gb-1", "Stonehenge, Avebury and Associated Sites", "United Kingdom", "GB", "England", 1986, "Prehistoric megalithic stone circles, trilithons aligned with solstices, Avebury henge, and Silbury Hill on Salisbury Plain"],
  ["gb-2", "Tower of London", "United Kingdom", "GB", "England", 1988, "Concentric fortress and royal castle built by William the Conqueror housing the Crown Jewels, White Tower, and Traitors' Gate"],
  ["gb-3", "Palace of Westminster and Westminster Abbey", "United Kingdom", "GB", "England", 1987, "Seat of the British Parliament with Big Ben Elizabeth Tower, Westminster Hall, and coronation abbey of British monarchs"],
  ["gb-4", "Old and New Towns of Edinburgh", "United Kingdom", "GB", "Scotland", 1995, "Medieval Old Town crowned by Edinburgh Castle and Royal Mile contrasted with Georgian neoclassical New Town"],
  ["gb-5", "Giant's Causeway and Causeway Coast", "United Kingdom", "GB", "Northern Ireland", 1986, "40,000 interlocking polygonal black basalt columns formed by ancient volcanic activity on the Antrim coast"],
  ["gb-6", "City of Bath", "United Kingdom", "GB", "England", 1987, "Natural hot thermal Roman Baths, Georgian sweeping Royal Crescent, The Circus, and Pulteney Bridge"],
  ["gb-7", "Blenheim Palace", "United Kingdom", "GB", "England", 1987, "English Baroque palace designed by John Vanbrugh, home of the Dukes of Marlborough and birthplace of Sir Winston Churchill"],
  ["gb-8", "Durham Castle and Cathedral", "United Kingdom", "GB", "England", 1987, "Norman Romanesque cathedral on the river Wear holding relics of St Cuthbert and the Venerable Bede"],
  ["gb-9", "Canterbury Cathedral, St Augustine's Abbey, St Martin's", "United Kingdom", "GB", "England", 1988, "Mother church of the worldwide Anglican Communion and site of Archbishop Thomas Becket's martyrdom in 1170"],
  ["gb-10", "Ironbridge Gorge", "United Kingdom", "GB", "England", 1986, "Cradle of the Industrial Revolution featuring the world's first cast-iron arch bridge constructed over the River Severn in 1779"],
  ["gb-11", "Castles and Town Walls of King Edward in Gwynedd", "United Kingdom", "GB", "Wales", 1986, "Concentric medieval fortifications including Caernarfon Castle, Conwy Castle, Harlech, and Beaumaris"],
  ["gb-12", "St Kilda", "United Kingdom", "GB", "Scotland", 1986, "Isolated volcanic archipelago in the North Atlantic with sea stacs, stone cleits, and immense gannet and puffin seabird colonies"],
  ["gb-13", "Maritime Greenwich", "United Kingdom", "GB", "England", 1997, "Royal Observatory marking the Prime Meridian (0° Longitude), Greenwich Mean Time, Queen's House, and Old Royal Naval College"],
  ["gb-14", "Heart of Neolithic Orkney", "United Kingdom", "GB", "Scotland", 1999, "Skara Brae preserved stone village, Ring of Brodgar, Standing Stones of Stenness, and Maeshowe chambered tomb"],
  ["gb-15", "Blaenavon Industrial Landscape", "United Kingdom", "GB", "Wales", 2000, "Nineteenth-century coal and iron production site with Big Pit National Coal Museum and ironworks"],
  ["gb-16", "Derwent Valley Mills", "United Kingdom", "GB", "England", 2001, "Richard Arkwright's water-powered cotton spinning mill system at Cromford, origin of the modern factory system"],
  ["gb-17", "Dorset and East Devon Coast (Jurassic Coast)", "United Kingdom", "GB", "England", 2001, "Coastal cliffs exposing 185 million years of Mesozoic geological history with Durdle Door and Lyme Regis ammonite fossils"],
  ["gb-18", "New Lanark", "United Kingdom", "GB", "Scotland", 2001, "Utopian industrial cotton mill village founded by socialist reformer Robert Owen with worker housing and schools"],
  ["gb-19", "Saltaire", "United Kingdom", "GB", "England", 2001, "Victorian model industrial village built for textile mill workers by Sir Titus Salt alongside Salts Mill in Yorkshire"],
  ["gb-20", "Royal Botanic Gardens, Kew", "United Kingdom", "GB", "England", 2003, "World-renowned botanical gardens with historic Victorian Palm House, Temperate House, and botanical research collections"],
  ["gb-21", "Cornwall and West Devon Mining Landscape", "United Kingdom", "GB", "England", 2006, "Deep tin and copper beam engine houses transforming steam technology and mining landscapes in Poldark country"],
  ["gb-22", "Pontcysyllte Aqueduct and Canal", "United Kingdom", "GB", "Wales", 2009, "Thomas Telford's 18-arch cast-iron canal trough carrying boats 126 feet above the River Dee in Llangollen"],
  ["gb-23", "The Forth Bridge", "United Kingdom", "GB", "Scotland", 2015, "Pioneering multi-span steel cantilever railway bridge spanning the Firth of Forth near Edinburgh, opened in 1890"],
  ["gb-24", "The English Lake District", "United Kingdom", "GB", "England", 2017, "Picturesque glaciated mountain valley landscape of Windermere, Helvellyn, and Derwentwater inspiring Romantic poets"],
  ["gb-25", "Jodrell Bank Observatory", "United Kingdom", "GB", "England", 2019, "Lovell radio telescope pioneer exploring astrophysics, quasars, and tracking early deep-space missions"],
  ["gb-26", "Slate Landscape of Northwest Wales", "United Kingdom", "GB", "Wales", 2021, "Quarrying landscapes of Dinorwic and Penrhyn that roofed the nineteenth-century industrial world"],
  ["gb-27", "The Great Spa Towns of Europe (City of Bath)", "United Kingdom", "GB", "England", 2021, "Historic mineral spring healing resort, Pump Room, and Georgian urban spa architecture"],
  ["gb-28", "Flow Country", "United Kingdom", "GB", "Scotland", 2024, "Vast blanket bog peatland ecosystem storing billions of tonnes of carbon across Caithness and Sutherland"],
  ["gb-29", "Gracehill Moravian Church Settlement", "United Kingdom", "GB", "Northern Ireland", 2024, "Historic 18th-century planned egalitarian religious community with central square and church"],
  ["gb-30", "Bermuda Historic Town of St George", "United Kingdom", "GB", "Bermuda", 2000, "Oldest continuously inhabited English urban settlement in the New World with King's Square and coastal stone forts"],
  ["gb-31", "Henderson Island", "United Kingdom", "GB", "Pitcairn Islands", 1988, "Isolated raised coral atoll in the South Pacific with endemic flightless Henderson rails and fruit doves"],
  ["gb-32", "Gough and Inaccessible Islands", "United Kingdom", "GB", "Tristan da Cunha", 1995, "Pristine sub-Antarctic oceanic wilderness holding endemic Tristan albatrosses and flightless rails"],
  ["gb-33", "Gorham's Cave Complex", "United Kingdom", "GB", "Gibraltar", 2016, "Sea caves at the base of the Rock of Gibraltar offering evidence of the final Neanderthal occupations on Earth"],

  // =========================================================================
  // UNITED STATES (US) - All 26 Inscribed Sites
  // =========================================================================
  ["us-1", "Yellowstone National Park", "United States", "US", "Wyoming / Montana / Idaho", 1978, "Old Faithful geyser, Grand Prismatic Spring, Yellowstone Caldera, and grizzly bear and bison wilderness"],
  ["us-2", "Grand Canyon National Park", "United States", "US", "Arizona", 1979, "Mile-deep colorful rock gorge carved over millions of years by the Colorado River exposing ancient geological strata"],
  ["us-3", "Statue of Liberty", "United States", "US", "New York", 1984, "Colossal copper statue (Liberty Enlightening the World) on Liberty Island in New York Harbor, gift from France"],
  ["us-4", "Yosemite National Park", "United States", "US", "California", 1984, "Glacier-carved granite monoliths of El Capitan and Half Dome, Yosemite Falls, and Mariposa Grove giant sequoia trees"],
  ["us-5", "Independence Hall", "United States", "US", "Pennsylvania", 1979, "Historic hall in Philadelphia where the Declaration of Independence and United States Constitution were debated and signed"],
  ["us-6", "Mesa Verde National Park", "United States", "US", "Colorado", 1978, "Ancestral Puebloan cliff dwellings constructed under sandstone alcoves including Cliff Palace and Balcony House"],
  ["us-7", "Glacier Bay / Wrangell-St. Elias / Kluane", "United States", "US", "Alaska", 1979, "Vast international subarctic wilderness boundary with tidewater glaciers, Mount Saint Elias, and grizzly habitat"],
  ["us-8", "Everglades National Park", "United States", "US", "Florida", 1979, "Subtropical slow-moving river of grass supporting alligators, American crocodiles, manatees, and Florida panthers"],
  ["us-9", "Redwood National and State Parks", "United States", "US", "California", 1980, "Tallest living trees on Earth (coast redwoods) lining the foggy Pacific coast in northern California"],
  ["us-10", "Mammoth Cave National Park", "United States", "US", "Kentucky", 1981, "World's longest known limestone cave system extending over 400 miles of surveyed underground passageways"],
  ["us-11", "Olympic National Park", "United States", "US", "Washington", 1981, "Hoh temperate rainforest, glacier-clad Mount Olympus, and wild Pacific coastline in the Pacific Northwest"],
  ["us-12", "Cahokia Mounds State Historic Site", "United States", "US", "Illinois", 1982, "Largest pre-Columbian Mississippian earthen mound city in North America centered on Monks Mound"],
  ["us-13", "Great Smoky Mountains National Park", "United States", "US", "North Carolina / Tennessee", 1983, "Ancient misty Appalachian mountain ridges renowned for world-class salamander and temperate plant biodiversity"],
  ["us-14", "La Fortaleza and San Juan National Historic Site", "United States", "US", "Puerto Rico", 1983, "Massive Spanish colonial bastions of Castillo San Felipe del Morro and San Cristóbal guarding San Juan harbor"],
  ["us-15", "Chaco Culture", "United States", "US", "New Mexico", 1987, "Monumental stone masonry Great Houses (Pueblo Bonito) built by Ancestral Puebloans aligned with astronomical events"],
  ["us-16", "Hawaii Volcanoes National Park", "United States", "US", "Hawaii", 1987, "Kilauea and Mauna Loa active shield volcanoes reshaping the Big Island with active lava flows and craters"],
  ["us-17", "Monticello and University of Virginia", "United States", "US", "Virginia", 1987, "Neoclassical plantation mansion and Academical Village designed by Founding Father Thomas Jefferson in Charlottesville"],
  ["us-18", "Taos Pueblo", "United States", "US", "New Mexico", 1992, "Continuously inhabited multi-storied adobe pueblo settlement over 1,000 years old beneath the Sangre de Cristo Mountains"],
  ["us-19", "Carlsbad Caverns National Park", "United States", "US", "New Mexico", 1995, "Immense subterranean Permian limestone Big Room decorated with stalactites, stalagmites, and Mexican free-tailed bats"],
  ["us-20", "Waterton-Glacier International Peace Park (US)", "United States", "US", "Montana", 1995, "Going-to-the-Sun Road, alpine glaciers, and Rocky Mountain international peace park border shared with Canada"],
  ["us-21", "Papahānaumokuākea", "United States", "US", "Hawaii", 2010, "Vast marine national monument encompassing coral atolls, green sea turtles, and monk seals in Northwestern Hawaiian Islands"],
  ["us-22", "Monumental Earthworks of Poverty Point", "United States", "US", "Louisiana", 2014, "Concentric semi-elliptical earthen ridges engineered by hunter-gatherers 3,400 years ago along Bayou Macon"],
  ["us-23", "San Antonio Missions", "United States", "US", "Texas", 2015, "Five Spanish colonial frontier Franciscan mission complexes including the Alamo and Mission San José"],
  ["us-24", "The 20th-Century Architecture of Frank Lloyd Wright", "United States", "US", "Multi-region", 2019, "Eight iconic buildings including Fallingwater in Pennsylvania, Guggenheim Museum in New York, and Unity Temple"],
  ["us-25", "Hopewell Ceremonial Earthworks", "United States", "US", "Ohio", 2023, "Vast precision geometric earthen enclosures and mounds constructed 2,000 years ago along the Scioto river valley"],
  ["us-26", "Moravian Church Settlements (Bethlehem)", "United States", "US", "Pennsylvania", 2024, "Historic 18th-century communal Moravian German settlement founded along the Lehigh River in 1741"],

  // =========================================================================
  // JAPAN (JP) - All 26 Inscribed Sites
  // =========================================================================
  ["jp-1", "Historic Monuments of Ancient Kyoto", "Japan", "JP", "Kansai", 1994, "Kinkaku-ji (Golden Pavilion), Ginkaku-ji, Kiyomizu-dera, Ryoan-ji zen rock garden, and Arashiyama bamboo forest"],
  ["jp-2", "Mount Fuji (Fujisan)", "Japan", "JP", "Chubu", 2013, "Iconic snow-capped stratovolcano celebrated as sacred place of Shinto pilgrimage and artistic inspiration"],
  ["jp-3", "Himeji-jo (Himeji Castle)", "Japan", "JP", "Kansai", 1993, "White Heron castle, Japan's finest surviving feudal wood-and-stone samurai stronghold with defensive baileys"],
  ["jp-4", "Hiroshima Peace Memorial (Genbaku Dome)", "Japan", "JP", "Chugoku", 1996, "Ruins of the Industrial Exhibition Hall preserved standing at ground zero as universal symbol of peace"],
  ["jp-5", "Historic Monuments of Ancient Nara", "Japan", "JP", "Kansai", 1998, "Todai-ji temple housing the colossal bronze Daibutsu (Great Buddha), Kasuga Taisha shrine, and Nara deer park"],
  ["jp-6", "Shrines and Temples of Nikko", "Japan", "JP", "Kanto", 1999, "Ornate Toshogu shrine complex honoring Tokugawa Ieyasu with the Three Wise Monkeys and Yomeimon gate"],
  ["jp-7", "Itsukushima Shinto Shrine", "Japan", "JP", "Chugoku", 1996, "Floating vermilion Torii gate and pier shrine rising out of the sea on Miyajima island in the Seto Inland Sea"],
  ["jp-8", "Buddhist Monuments in the Horyu-ji Area", "Japan", "JP", "Kansai", 1993, "World's oldest surviving wooden buildings dating to the 7th century, founded by Prince Shotoku in Asuka"],
  ["jp-9", "Historic Villages of Shirakawa-go and Gokayama", "Japan", "JP", "Chubu", 1995, "Steep thatched-roof gassho-zukuri farmhouses built like hands in prayer to withstand heavy alpine snowfall"],
  ["jp-10", "Yakushima", "Japan", "JP", "Kyushu", 1993, "Subtropical island home to ancient Yaku-sugi cedar trees (Jomon Sugi) thousands of years old inspiring Princess Mononoke"],
  ["jp-11", "Shirakami-Sanchi", "Japan", "JP", "Tohoku", 1993, "Last virgin Siebold's beech forest wilderness covering rugged northern mountain slopes on Honshu"],
  ["jp-12", "Gusuku Sites of the Kingdom of Ryukyu", "Japan", "JP", "Okinawa", 2000, "Ruins of stone Ryukyuan castles including Shuri Castle and Sefa-utaki sacred site reflecting maritime trade"],
  ["jp-13", "Sacred Sites and Pilgrimage Routes in the Kii Mountain Range", "Japan", "JP", "Kansai", 2004, "Kumano Kodo ancient mountain trails connecting Shinto shrines, Nachi Falls, and Mount Koya (Koyasan) Buddhist monasteries"],
  ["jp-14", "Shiretoko", "Japan", "JP", "Hokkaido", 2005, "Pristine northern peninsula with brown bears, sea ice floes in the Sea of Okhotsk, and rich marine ecology"],
  ["jp-15", "Iwami Ginzan Silver Mine", "Japan", "JP", "Chugoku", 2007, "Historic mountain silver mines that produced one-third of the world's silver in the 16th and 17th centuries"],
  ["jp-16", "Hiraizumi – Temples and Gardens of the Pure Land", "Japan", "JP", "Tohoku", 2011, "Chuson-ji Konjikido (Golden Hall) and Pure Land Buddhist gardens built by the Northern Fujiwara clan"],
  ["jp-17", "Ogasawara Islands", "Japan", "JP", "Tokyo (Pacific)", 2011, "Subtropical Bonin oceanic islands displaying unique evolutionary biology dubbed the Galapagos of the Orient"],
  ["jp-18", "Tomioka Silk Mill", "Japan", "JP", "Kanto", 2014, "Pioneering 1872 modern brick silk-reeling factory transitioning Japan into an industrial manufacturing power"],
  ["jp-19", "Sites of Japan's Meiji Industrial Revolution", "Japan", "JP", "Kyushu / Multi-region", 2015, "Gunkanjima (Hashima coal island), Yahata steel works, and Glover Garden shipyards in Nagasaki"],
  ["jp-20", "The Architectural Work of Le Corbusier (Museum of Western Art)", "Japan", "JP", "Tokyo", 2016, "National Museum of Western Art in Ueno Park designed by modernist architect Le Corbusier"],
  ["jp-21", "Sacred Island of Okinoshima", "Japan", "JP", "Kyushu", 2017, "Sacred island in the Genkai Sea where ancient maritime rituals were preserved with strict religious taboos"],
  ["jp-22", "Hidden Christian Sites in the Nagasaki Region", "Japan", "JP", "Kyushu", 2018, "Villages and Oura Cathedral where secret Kakure Kirishitan Christians preserved faith through Tokugawa bans"],
  ["jp-23", "Mozu-Furuichi Kofun Group: Mounded Tombs", "Japan", "JP", "Kansai", 2019, "Giant keyhole-shaped earthen tumuli tombs of ancient Japanese emperors including Daisen Kofun (Emperor Nintoku)"],
  ["jp-24", "Amami-Oshima, Tokunoshima, Northern Okinawa, Iriomote", "Japan", "JP", "Ryukyu Islands", 2021, "Subtropical laurel rainforests holding endemic endangered Amami rabbit, Okinawa rail, and Iriomote wildcat"],
  ["jp-25", "Jomon Prehistoric Sites in Northern Japan", "Japan", "JP", "Tohoku / Hokkaido", 2021, "Sannai-Maruyama neolithic hunter-gatherer settlement, pit dwellings, and circular stone arrangements"],
  ["jp-26", "Sado Island Gold Mines", "Japan", "JP", "Chubu", 2024, "Edo-period silver and gold extraction mine complex using unmechanized traditional metallurgy"],

  // =========================================================================
  // GREECE (GR) - All 19 Inscribed Sites
  // =========================================================================
  ["gr-1", "Acropolis, Athens", "Greece", "GR", "Attica", 1987, "Parthenon marble temple, Erechtheion with Porch of the Caryatids, Propylaea, and Temple of Athena Nike overlooking Athens"],
  ["gr-2", "Archaeological Site of Delphi", "Greece", "GR", "Central Greece", 1987, "Pan-Hellenic sanctuary of Apollo on Mount Parnassus, seat of the Pythian oracle, ancient theatre, and tholos"],
  ["gr-3", "Meteora", "Greece", "GR", "Thessaly", 1988, "Eastern Orthodox monasteries balanced atop towering natural sandstone rock pillars (Grand Meteoron, Varlaam)"],
  ["gr-4", "Mount Athos", "Greece", "GR", "Central Macedonia", 1988, "Autonomous holy mountain with 20 fortified Eastern Orthodox monasteries on the Chalkidiki peninsula"],
  ["gr-5", "Medieval City of Rhodes", "Greece", "GR", "South Aegean", 1988, "Palace of the Grand Master and Street of the Knights of Saint John enclosed by massive defensive stone walls"],
  ["gr-6", "Archaeological Site of Olympia", "Greece", "GR", "Western Greece", 1989, "Birthplace of the Olympic Games featuring the ancient running stadium, Temple of Zeus, and Temple of Hera"],
  ["gr-7", "Archaeological Site of Mystras", "Greece", "GR", "Peloponnese", 1989, "Fortified Byzantine capital of the Despotate of the Morea overlooking ancient Sparta with frescoed churches"],
  ["gr-8", "Delos", "Greece", "GR", "South Aegean", 1990, "Sacred Cycladic island birthplace of Apollo and Artemis featuring the Terrace of the Lions and marble ruins"],
  ["gr-9", "Monasteries of Daphni, Hosios Loukas and Nea Moni", "Greece", "GR", "Multi-region", 1990, "Middle Byzantine churches adorned with brilliant golden mosaic cycles in central Greece and Chios"],
  ["gr-10", "Pythagoreion and Heraion of Samos", "Greece", "GR", "North Aegean", 1992, "Sanctuary of Hera and Tunnel of Eupalinos, ancient 1-kilometer water aqueduct tunnel carved through rock"],
  ["gr-11", "Archaeological Site of Aigai (Vergina)", "Greece", "GR", "Central Macedonia", 1996, "Ancient capital of Macedonia holding the intact royal golden tomb of King Philip II, father of Alexander the Great"],
  ["gr-12", "Archaeological Sites of Mycenae and Tiryns", "Greece", "GR", "Peloponnese", 1999, "Bronze Age Mycenaean citadels famed for the Lion Gate, Cyclopean stone walls, and the Treasury of Atreus beehive tomb"],
  ["gr-13", "Historic Centre with Monastery of Saint-John, Patmos", "Greece", "GR", "South Aegean", 1999, "Cave of the Apocalypse where Saint John the Theologian composed the Book of Revelation and fortified abbey"],
  ["gr-14", "Old Town of Corfu", "Greece", "GR", "Ionian Islands", 2007, "Venetian fortress harbor town with Liston promenade and neoclassical pastel arches on the Ionian Sea"],
  ["gr-15", "Archaeological Site of Philippi", "Greece", "GR", "Eastern Macedonia", 2016, "Walled city on the Via Egnatia where Apostle Paul founded the first Christian church on European soil"],
  ["gr-16", "Zagori Cultural Landscape", "Greece", "GR", "Epirus", 2023, "Traditional dry-stone villages (Zagorochoria), Vikos Gorge, and arched stone bridges in the Pindus mountains"],
  ["gr-17", "Temple of Apollo Epicurius at Bassae", "Greece", "GR", "Peloponnese", 1986, "Remote classical stone temple designed by Parthenon architect Iktinos featuring the earliest Corinthian column capital"],
  ["gr-18", "Paleochristian and Byzantine Monuments of Thessalonika", "Greece", "GR", "Central Macedonia", 1988, "Rotunda of Galerius, Hagia Sophia church, and Saint Demetrios mosaics in Thessaloniki"],
  ["gr-19", "Sanctuary of Asklepios at Epidaurus", "Greece", "GR", "Peloponnese", 1988, "Ancient Greek healing sanctuary and theatre of Epidaurus renowned for acoustics"],

  // =========================================================================
  // MALTA (MT) - All 3 Inscribed Sites
  // =========================================================================
  ["mt-1", "City of Valletta", "Malta", "MT", "Valletta", 1980, "Fortified Renaissance city built by Grand Master Jean de Valette and the Knights of Saint John on Mount Sceberras, St John's Co-Cathedral, Caravaggio paintings, and Grand Harbour"],
  ["mt-2", "Megalithic Temples of Malta", "Malta", "MT", "Malta & Gozo", 1980, "Seven prehistoric monumental stone temples including Ġgantija on Gozo Island (older than the Egyptian Pyramids), Ħaġar Qim, Mnajdra, Tarxien, Ta' Ħaġrat, and Skorba"],
  ["mt-3", "Ħal Saflieni Hypogeum", "Malta", "MT", "Paola", 1980, "Underground prehistoric rock-cut burial sanctuary and oracle chamber on three subterranean levels carved into globigerina limestone (3600 BC)"],

  // =========================================================================
  // EGYPT (EG) - All 7 Inscribed Sites
  // =========================================================================
  ["eg-1", "Memphis and its Necropolis – Pyramids from Giza to Dahshur", "Egypt", "EG", "Cairo / Giza", 1979, "Great Pyramid of Giza (Khufu/Cheops), Khafre, Menkaure, the Great Sphinx, Step Pyramid of Djoser at Saqqara, and Dahshur Bent Pyramid"],
  ["eg-2", "Ancient Thebes with its Necropolis (Luxor)", "Egypt", "EG", "Luxor", 1979, "Karnak Temple complex, Luxor Temple, Avenue of Sphinxes, Valley of the Kings (Tutankhamun tomb), Valley of the Queens, and Hatshepsut Temple"],
  ["eg-3", "Nubian Monuments from Abu Simbel to Philae", "Egypt", "EG", "Aswan", 1979, "Colossal rock-cut sun temples of Ramesses II and Nefertari at Abu Simbel and Temple of Isis at Philae, rescued by UNESCO"],
  ["eg-4", "Historic Cairo", "Egypt", "EG", "Cairo", 1979, "City of a Thousand Minarets featuring Al-Azhar Mosque, Sultan Hassan Madrasa, Khan el-Khalili bazaar, and Cairo Citadel of Saladin"],
  ["eg-5", "Saint Catherine Area", "Egypt", "EG", "South Sinai", 2002, "Orthodox monastery at the foot of Mount Sinai holding the Chapel of the Burning Bush and world's oldest continuous library"],
  ["eg-6", "Wadi Al-Hitan (Whale Valley)", "Egypt", "EG", "Faiyum", 2005, "Desert valley containing fossil skeletons of Basilosaurus revealing the evolutionary transition of whales from land mammals"],
  ["eg-7", "Abu Mena", "Egypt", "EG", "Alexandria", 1979, "Early Christian pilgrimage holy city and tomb of Saint Menas in the desert with basilica and baths"],

  // =========================================================================
  // TURKEY (TR) - All 21 Inscribed Sites
  // =========================================================================
  ["tr-1", "Historic Areas of Istanbul", "Turkey", "TR", "Marmara", 1985, "Hagia Sophia (Ayasofya), Blue Mosque (Sultanahmet), Topkapi Palace, Grand Bazaar, Basilica Cistern, and Theodosian land walls"],
  ["tr-2", "Göreme National Park and Cappadocia", "Turkey", "TR", "Central Anatolia", 1985, "Fairy chimney rock spires, volcanic tuff landscape, cave churches with Byzantine frescoes, and subterranean underground cities (Derinkuyu)"],
  ["tr-3", "Hierapolis-Pamukkale", "Turkey", "TR", "Aegean", 1988, "Glowing white travertine mineral terraces and thermal pools alongside Greco-Roman thermal spa ruins, necropolis, and theatre"],
  ["tr-4", "Ephesus", "Turkey", "TR", "Aegean", 2015, "Classical Greco-Roman coastal metropolis featuring the Library of Celsus facade, Great Theatre, Terrace Houses, and Temple of Artemis ruins"],
  ["tr-5", "Göbekli Tepe", "Turkey", "TR", "Southeastern Anatolia", 2018, "World's oldest known monumental temple architecture featuring megalithic T-shaped stone pillars with carved animal reliefs (9600 BC)"],
  ["tr-6", "Nemrut Dağ (Mount Nemrut)", "Turkey", "TR", "Southeastern Anatolia", 1987, "Colossal stone statue heads of gods and King Antiochus I crowning a 2,134-meter mountain tumulus summit for sunrise rituals"],
  ["tr-7", "Archaeological Site of Troy", "Turkey", "TR", "Marmara", 1998, "Nine stratigraphic levels of Homeric legend including the Bronze Age Troy VI/VII defended by Hector in the Iliad"],
  ["tr-8", "Pergamon Multi-Layered Cultural Landscape", "Turkey", "TR", "Aegean", 2014, "Hellenistic mountaintop acropolis with the steepest ancient stone theatre in the world, Trajan temple, and Asklepion sanctuary"],
  ["tr-9", "Neolithic Site of Çatalhöyük", "Turkey", "TR", "Central Anatolia", 2012, "One of the world's earliest agricultural proto-cities (7400 BC) featuring mudbrick houses entered through rooftop doors and bull murals"],
  ["tr-10", "Hattusha: the Hittite Capital", "Turkey", "TR", "Black Sea", 1986, "Ancient Bronze Age capital of the Hittite Empire with the Lion Gate, Royal Gate, and Yazılıkaya rock sanctuary reliefs"],
  ["tr-11", "Selimiye Mosque and its Social Complex, Edirne", "Turkey", "TR", "Marmara", 2011, "Pinnacle of Ottoman classical architecture engineered by royal master architect Mimar Sinan with four slender minarets"],
  ["tr-12", "Aphrodisias", "Turkey", "TR", "Aegean", 2017, "Greco-Roman city dedicated to goddess Aphrodite famed for pristine white marble quarries and world-class sculpture school"],
  ["tr-13", "Bursa and Cumalıkızık", "Turkey", "TR", "Marmara", 2014, "First capital of the Ottoman Empire illustrating early Ottoman commercial han trading districts and rural Ottoman timber village"],
  ["tr-14", "Diyarbakır Fortress and Hevsel Gardens", "Turkey", "TR", "Southeastern Anatolia", 2015, "Black basalt stone defensive circuit walls along the Tigris River fertile agricultural valley"],
  ["tr-15", "Archaeological Site of Ani", "Turkey", "TR", "Eastern Anatolia", 2016, "Medieval Armenian 'City of 1,001 Churches' perched above the steep Arpa river gorge on the Silk Road"],
  ["tr-16", "Great Mosque and Hospital of Divriği", "Turkey", "TR", "Eastern Anatolia", 1985, "High Anatolian Seljuk stone architecture featuring intricately carved three-dimensional stone portal gates"],
  ["tr-17", "City of Safranbolu", "Turkey", "TR", "Black Sea", 1994, "Preserved Ottoman residential timber-frame mansions, cobblestone streets, and caravanserai along the trade route"],
  ["tr-18", "Xanthos-Letoon", "Turkey", "TR", "Mediterranean", 1988, "Ancient capital of Lycia with rock-cut pillar tombs and bilingual inscriptions that decoded the Lycian language"],
  ["tr-19", "Arslantepe Mound", "Turkey", "TR", "Eastern Anatolia", 2021, "Mudbrick palace complex yielding early bronze metallurgy, swords, and administrative clay sealings (4000 BC)"],
  ["tr-20", "Gordion", "Turkey", "TR", "Central Anatolia", 2023, "Ancient capital of Phrygia, seat of King Midas (Midas Mound Tumulus), and location where Alexander severed the Gordian Knot"],
  ["tr-21", "Wooden Hypostyle Mosques of Medieval Anatolia", "Turkey", "TR", "Central Anatolia", 2023, "Seljuk timber-column hypostyle mosques featuring hand-carved cedar pillars and ceilings (Eşrefoğlu Mosque)"],

  // =========================================================================
  // PERU (PE) - All 13 Inscribed Sites
  // =========================================================================
  ["pe-1", "Historic Sanctuary of Machu Picchu", "Peru", "PE", "Cusco", 1983, "Inca cloud-forest stone citadel between Huayna Picchu peaks featuring the Intihuatana sundial stone, Temple of the Sun, and Sacred Valley"],
  ["pe-2", "City of Cuzco", "Peru", "PE", "Cusco", 1983, "Imperial capital of the Inca Empire with Spanish Baroque churches built atop Inca polygonal stonework (Twelve-Angled Stone) and Coricancha"],
  ["pe-3", "Lines and Geoglyphs of Nasca and Palpa", "Peru", "PE", "Ica", 1994, "Enormous desert geoglyphs of the hummingbird, spider, monkey, and geometric lines etched into arid coastal plateaus"],
  ["pe-4", "Chan Chan Archaeological Zone", "Peru", "PE", "La Libertad", 1986, "Largest adobe mud city in the Americas, ancient capital of the Chimu kingdom with friezes near Trujillo"],
  ["pe-5", "Chavín (Archaeological Site)", "Peru", "PE", "Ancash", 1985, "Pre-Inca ceremonial stone temple center in the high Andes with subterranean galleries, Lanzón monolith, and tenon heads"],
  ["pe-6", "Huascarán National Park", "Peru", "PE", "Ancash", 1985, "Cordillera Blanca mountain range featuring Mount Huascarán (6,768 m), turquoise glacial lakes (Llanganuco), and spectacled bears"],
  ["pe-7", "Manu National Park", "Peru", "PE", "Madre de Dios / Cusco", 1987, "Vast Amazon basin rainforest biosphere reserve descending from high Andes puna grasslands to tropical lowland jungle"],
  ["pe-8", "Historic Centre of Lima", "Peru", "PE", "Lima", 1988, "Spanish colonial City of the Kings with Plaza Mayor, San Francisco Monastery catacombs, and ornate wooden balconies"],
  ["pe-9", "Historical Centre of the City of Arequipa", "Peru", "PE", "Arequipa", 2000, "White volcanic sillar stone colonial architecture framed by Misti volcano and Santa Catalina Monastery citadel"],
  ["pe-10", "Caral-Supe Sacred City", "Peru", "PE", "Lima Region", 2009, "5,000-year-old monumental earthen pyramid city, oldest known civilization in the Americas (Norte Chico)"],
  ["pe-11", "Qhapaq Ñan, Andean Road System", "Peru", "PE", "Andes", 2014, "Vast Inca communication and trade road network connecting mountain peaks, stone causeways, and rope bridges"],
  ["pe-12", "Río Abiseo National Park", "Peru", "PE", "San Martín", 1990, "Andean cloud forest sanctuary preserving the yellow-tailed woolly monkey and pre-Inca circular stone ruins of Gran Pajatén"],
  ["pe-13", "Chankillo Archaeoastronomical Complex", "Peru", "PE", "Ancash", 2021, "Thirteen stone towers marking solar calendar positions and equinoxes along a desert ridge (4th century BC)"],

  // =========================================================================
  // MEXICO (MX) - Top 30 Sites
  // =========================================================================
  ["mx-1", "Pre-Hispanic City of Chichen-Itza", "Mexico", "MX", "Yucatán", 1988, "Mayan-Toltec center dominated by the El Castillo equinox serpent shadow pyramid, Great Ballcourt, Temple of the Warriors, and Sacred Cenote"],
  ["mx-2", "Pre-Hispanic City of Teotihuacan", "Mexico", "MX", "State of Mexico", 1987, "Monumental holy city featuring the Pyramid of the Sun, Pyramid of the Moon, Avenue of the Dead, and Temple of Quetzalcoatl"],
  ["mx-3", "Historic Centre of Mexico City and Xochimilco", "Mexico", "MX", "Mexico City", 1987, "Aztec Templo Mayor ruins, Metropolitan Cathedral on the Zócalo, and traditional Aztec floating garden canals (chinampas)"],
  ["mx-4", "Pre-Hispanic City and National Park of Palenque", "Mexico", "MX", "Chiapas", 1987, "Classical Mayan forest temple city and Temple of the Inscriptions holding the jade-laden crypt of King K'inich Janaab' Pakal"],
  ["mx-5", "Historic Centre of Oaxaca and Monte Albán", "Mexico", "MX", "Oaxaca", 1987, "Zapotec mountaintop ceremonial terraces overlooking colonial baroque Oaxaca, Santo Domingo church, and Hierve el Agua"],
  ["mx-6", "Historic Centre of Puebla", "Mexico", "MX", "Puebla", 1987, "Spanish colonial city renowned for Talavera ceramic tile facades, Baroque Rosario Chapel, and Puebla Cathedral"],
  ["mx-7", "Historic Town of Guanajuato and Adjacent Mines", "Mexico", "MX", "Guanajuato", 1988, "Subterranean roadway tunnels, pastel baroque hillside streets, Teatro Juárez, and rich silver mine shafts (La Valenciana)"],
  ["mx-8", "Sian Ka'an", "Mexico", "MX", "Quintana Roo", 1987, "Tropical coastal biosphere reserve of coral barrier reefs, mangroves, lagoons, and cenotes along the Caribbean coast"],
  ["mx-9", "Pre-Hispanic Town of Uxmal", "Mexico", "MX", "Yucatán", 1996, "Puuc architectural style Mayan masterworks including the rounded Pyramid of the Magician and Governor's Palace"],
  ["mx-10", "Historic Centre of Morelia", "Mexico", "MX", "Michoacán", 1991, "Pink quarry stone colonial architecture and sweeping monumental stone arches aqueduct built across the valley"],
  ["mx-11", "El Tajin, Pre-Hispanic City", "Mexico", "MX", "Veracruz", 1992, "Classic pre-Columbian center famed for the 365-niche Pyramid of the Niches and voladores ceremonial ball courts"],
  ["mx-12", "Historic Centre of Zacatecas", "Mexico", "MX", "Zacatecas", 1993, "High-altitude silver mining city with churrigueresque sandstone cathedral and Cerro de la Bufa cable car"],
  ["mx-13", "Rock Paintings of Sierra de San Francisco", "Mexico", "MX", "Baja California Sur", 1993, "Monumental prehistoric cave paintings of human figures, deer, and marine life in desert mountain shelters"],
  ["mx-14", "Whale Sanctuary of El Vizcaino", "Mexico", "MX", "Baja California Sur", 1993, "Coastal desert lagoons where gray whales and blue whales migrate from the Arctic to mate and calf"],
  ["mx-15", "Hospicio Cabañas, Guadalajara", "Mexico", "MX", "Jalisco", 1997, "Neoclassical hospital complex home to monumental dome ceiling murals by José Clemente Orozco (The Man of Fire)"],
  ["mx-16", "Monarch Butterfly Biosphere Reserve", "Mexico", "MX", "Michoacán", 2008, "Oyamel fir cloud forests where hundreds of millions of monarch butterflies overwinter after migrating from Canada"],
  ["mx-17", "San Miguel de Allende and Sanctuary of Atotonilco", "Mexico", "MX", "Guanajuato", 1998, "Baroque hillside cobblestone town with pink neo-Gothic Parroquia church and 'Sistine Chapel of Mexico' pilgrimage murals"],
  ["mx-18", "Agave Landscape and Facilities of Tequila", "Mexico", "MX", "Jalisco", 2006, "Blue agave cactus fields and historic distilleries cultivating Mexico's national spirit beneath the Tequila Volcano"],
  ["mx-19", "Central University City Campus of UNAM", "Mexico", "MX", "Mexico City", 2007, "Modernist university campus with vibrant mosaic stone murals by Juan O'Gorman and David Alfaro Siqueiros"],
  ["mx-20", "Historic Fortified Town of Campeche", "Mexico", "MX", "Campeche", 1999, "Hexagonal walled colonial Caribbean port city with seaside bastions built to defend against pirate raids"],
  ["mx-21", "Maya City and Tropical Forests of Calakmul", "Mexico", "MX", "Campeche", 2002, "Powerful ancient Mayan jungle metropolis surrounded by the Petén tropical rainforest biome with twin pyramid peaks"],
  ["mx-22", "Islands and Protected Areas of the Gulf of California", "Mexico", "MX", "Baja / Sonora", 2005, "The 'Aquarium of the World' (Sea of Cortez) holding the endangered vaquita porpoise, manta rays, and whale sharks"],
  ["mx-23", "Archaeological Monuments Zone of Xochicalco", "Mexico", "MX", "Morelos", 1999, "Fortified post-Teotihuacan hilltop civic center featuring the Temple of the Feathered Serpent with stone reliefs"],
  ["mx-24", "Prehistoric Caves of Yagul and Mitla in Oaxaca", "Mexico", "MX", "Oaxaca", 2010, "Caves revealing 10,000-year-old domesticated squash and maize seeds, earliest evidence of Mesoamerican agriculture"],
  ["mx-25", "Archipiélago de Revillagigedo", "Mexico", "MX", "Colima (Pacific)", 2016, "Volcanic oceanic islands in the Pacific teeming with giant mantas, hammerhead sharks, and humpback whales"],
  ["mx-26", "Tehuacán-Cuicatlán Valley: Originary Habitat", "Mexico", "MX", "Puebla / Oaxaca", 2018, "Dense columnar cactus forests and birthplace of Mesoamerican agriculture in deep arid mountain valleys"],
  ["mx-27", "Aqueduct of Padre Tembleque Hydraulic System", "Mexico", "MX", "Hidalgo", 2015, "Sixteenth-century Renaissance arcade stone bridge spanning across arid ravines designed by Franciscan friar Tembleque"],
  ["mx-28", "Franciscan Missions in the Sierra Gorda of Querétaro", "Mexico", "MX", "Querétaro", 2003, "Ornate mestizo baroque mission facades built by Junípero Serra blending European and indigenous motifs"],
  ["mx-29", "Luis Barragán House and Studio", "Mexico", "MX", "Mexico City", 2004, "Pioneering modernist home fusing traditional Mexican light, vibrant color walls, and reflective water fountains"],
  ["mx-30", "Camino Real de Tierra Adentro", "Mexico", "MX", "Multi-region", 2010, "Historic Royal Inland Silver Road extending 2,600 km from Mexico City to Santa Fe, New Mexico"],

  // =========================================================================
  // BRAZIL (BR) - All 24 Inscribed Sites
  // =========================================================================
  ["br-1", "Iguaçu National Park", "Brazil", "BR", "Paraná", 1986, "Spectacular 2.7 km semicircular waterfalls plunging into the Devil's Throat gorge surrounded by subtropical rainforest"],
  ["br-2", "Rio de Janeiro: Carioca Landscapes between Mountain and Sea", "Brazil", "BR", "Rio de Janeiro", 2012, "Christ the Redeemer statue atop Corcovado mountain, Sugarloaf Mountain cable car, Copacabana and Ipanema beaches"],
  ["br-3", "Historic Town of Ouro Preto", "Brazil", "BR", "Minas Gerais", 1980, "Colonial gold-rush boomtown filled with Aleijadinho's baroque soapstone churches and cobblestone alleys"],
  ["br-4", "Brasília", "Brazil", "BR", "Federal District", 1987, "Oscar Niemeyer and Lúcio Costa's visionary airplane-shaped planned modernist capital, Cathedral of Brasília, and Congress"],
  ["br-5", "Historic Centre of Salvador de Bahia", "Brazil", "BR", "Bahia", 1985, "First colonial capital of Brazil with Pelourinho cobblestone colonial streets, colorful mansions, and Afro-Brazilian culture"],
  ["br-6", "Historic Centre of Olinda", "Brazil", "BR", "Pernambuco", 1982, "Colonial sugar-trade capital with pastel hillside churches facing the Atlantic Ocean and vibrant carnival traditions"],
  ["br-7", "Sanctuary of Bom Jesus do Congonhas", "Brazil", "BR", "Minas Gerais", 1985, "Rococo pilgrimage basilica adorned with 12 soapstone Old Testament prophet statues carved by master Aleijadinho"],
  ["br-8", "Serra da Capivara National Park", "Brazil", "BR", "Piauí", 1991, "Thousands of prehistoric cave rock art depictions in arid caatinga canyons documenting ancient human occupation in the Americas"],
  ["br-9", "Historic Centre of São Luís", "Brazil", "BR", "Maranhão", 1997, "Colonial city famed for Portuguese hand-painted blue ceramic tile facades (azulejos) on the Atlantic coast"],
  ["br-10", "Historic Centre of the Town of Diamantina", "Brazil", "BR", "Minas Gerais", 1999, "Baroque diamond-mining town nestled among rocky crags preserving 18th-century timber architecture"],
  ["br-11", "Central Amazon Conservation Complex (Jaú)", "Brazil", "BR", "Amazonas", 2000, "Vast blackwater flooded forests (igapó) and Amazon basin biodiversity sanctuary home to river dolphins and manatees"],
  ["br-12", "Pantanal Conservation Area", "Brazil", "BR", "Mato Grosso", 2000, "World's largest tropical wetland ecosystem home to the densest wild jaguar population, giant otters, and hyacinth macaws"],
  ["br-13", "Fernando de Noronha and Atol das Rocas", "Brazil", "BR", "Pernambuco (Atlantic)", 2001, "Tropical volcanic archipelago breeding sanctuary for spinner dolphins, sea turtles, and pelagic seabirds"],
  ["br-14", "Discovery Coast Atlantic Forest Reserves", "Brazil", "BR", "Bahia", 1999, "Endangered Atlantic rainforest where Portuguese explorer Pedro Álvares Cabral made landfall in Brazil in 1500"],
  ["br-15", "Atlantic Forest South-East Reserves", "Brazil", "BR", "São Paulo / Paraná", 1999, "Mountainous coastal rainforest corridors harboring golden lion tamarins and jaguar habitats"],
  ["br-16", "Cerrado Protected Areas: Chapada dos Veadeiros and Emas", "Brazil", "BR", "Goiás", 2001, "Ancient savannas, quartz rock formations, crystal waterfalls, and rare giant anteater and maned wolf habitats"],
  ["br-17", "Historic Centre of the Town of Goiás", "Brazil", "BR", "Goiás", 2001, "Preserved 18th-century mining settlement adapted to local clay conditions and vernacular materials"],
  ["br-18", "São Francisco Square in São Cristóvão", "Brazil", "BR", "Sergipe", 2010, "Colonial square harmonizing Franciscan convent, provincial palace, and municipal architecture"],
  ["br-19", "Jesuit Missions of the Guaranis (São Miguel das Missões)", "Brazil", "BR", "Rio Grande do Sul", 1983, "Red sandstone ruins of the Jesuit Guarani mission church designed by Gian Battista Primoli in the pampas"],
  ["br-20", "Valongo Wharf Archaeological Site", "Brazil", "BR", "Rio de Janeiro", 2017, "Old stone wharf where nearly one million enslaved Africans arrived in the Americas, symbol of African heritage"],
  ["br-21", "Paraty and Ilha Grande – Culture and Biodiversity", "Brazil", "BR", "Rio de Janeiro", 2019, "Coastal gold-trail colonial town preserved with flooded streets nestled between forested mountains and island waters"],
  ["br-22", "Sítio Roberto Burle Marx", "Brazil", "BR", "Rio de Janeiro", 2021, "Visionary estate of modernist landscape architect Roberto Burle Marx who revolutionized tropical botanical gardening"],
  ["br-23", "Pampulha Modern Ensemble", "Brazil", "BR", "Minas Gerais", 2016, "Belo Horizonte garden suburb designed by Oscar Niemeyer around an artificial lake with Saint Francis of Assisi Church"],
  ["br-24", "Lençóis Maranhenses National Park", "Brazil", "BR", "Maranhão", 2024, "Rolling white sand dunes filled with seasonal freshwater crystal rain lagoons forming an otherworldly desert-lake landscape"],

  // =========================================================================
  // INDIA (IN) - Top 35 Sites
  // =========================================================================
  ["in-1", "Taj Mahal", "India", "IN", "Uttar Pradesh", 1983, "White marble mausoleum in Agra built by Mughal Emperor Shah Jahan for his wife Mumtaz Mahal along the Yamuna River, pinnacle of Mughal art"],
  ["in-2", "Agra Fort", "India", "IN", "Uttar Pradesh", 1983, "Red sandstone imperial fortified residence of the Mughal dynasty with Sheesh Mahal and Jahangiri Mahal near the Taj Mahal"],
  ["in-3", "Ajanta Caves", "India", "IN", "Maharashtra", 1983, "Rock-cut Buddhist cave monuments dating from 2nd century BCE adorned with classical tempera mural paintings and sculptures"],
  ["in-4", "Ellora Caves", "India", "IN", "Maharashtra", 1983, "Monolithic Kailash temple (Cave 16) carved from a single basalt cliff, harmonizing Hindu, Buddhist, and Jain cave temples"],
  ["in-5", "Sun Temple, Konârak", "India", "IN", "Odisha", 1984, "Colossal 13th-century stone chariot temple of the sun god Surya with 24 carved stone wheels pulled by seven horses"],
  ["in-6", "Group of Monuments at Mahabalipuram", "India", "IN", "Tamil Nadu", 1984, "Shore Temple and monolithic rock-cut rathas carved into Coromandel coastline with Arjuna's Penance bas-relief"],
  ["in-7", "Kaziranga National Park", "India", "IN", "Assam", 1985, "Brahmaputra alluvial grasslands holding the world's largest population of the great Indian one-horned rhinoceros"],
  ["in-8", "Manas Wildlife Sanctuary", "India", "IN", "Assam", 1985, "Himalayan foothills biosphere reserve sheltering endangered wild water buffalo, pygmy hogs, and tigers"],
  ["in-9", "Keoladeo National Park (Bharatpur)", "India", "IN", "Rajasthan", 1985, "Premier avian wetland sanctuary hosting thousands of migratory wintering waterbirds including Siberian cranes"],
  ["in-10", "Churches and Convents of Goa", "India", "IN", "Goa", 1986, "Portuguese colonial Manueline basilicas in Old Goa holding the sacred relics of Saint Francis Xavier (Basilica of Bom Jesus)"],
  ["in-11", "Khajuraho Group of Monuments", "India", "IN", "Madhya Pradesh", 1986, "Chandela dynasty nagara-style stone temples renowned for intricate erotic sculptures and Kandariya Mahadeva temple"],
  ["in-12", "Group of Monuments at Hampi", "India", "IN", "Karnataka", 1986, "Spectacular ruins of the grand Vijayanagara Empire across boulder hills with Virupaksha Temple and stone chariot"],
  ["in-13", "Fatehpur Sikri", "India", "IN", "Uttar Pradesh", 1986, "Emperor Akbar's red sandstone royal capital featuring the Buland Darwaza victory gate, Jama Masjid, and Panch Mahal"],
  ["in-14", "Group of Monuments at Pattadakal", "India", "IN", "Karnataka", 1987, "Chalukya dynasty architectural synthesis of northern Nagara and southern Dravidian stone temple styles on the Malaprabha"],
  ["in-15", "Elephanta Caves", "India", "IN", "Maharashtra", 1987, "Rock-cut island cave sculptures dedicated to Shiva in Mumbai Harbour featuring the colossal three-headed Trimurti relief"],
  ["in-16", "Great Living Chola Temples", "India", "IN", "Tamil Nadu", 1987, "Brihadisvara Temple at Thanjavur and Gangaikonda Cholapuram celebrating southern Dravidian stone architecture and bronze arts"],
  ["in-17", "Sundarbans National Park", "India", "IN", "West Bengal", 1987, "World's largest mangrove forest delta home to swimming Royal Bengal tigers, estuarine crocodiles, and Ganges dolphins"],
  ["in-18", "Nanda Devi and Valley of Flowers National Parks", "India", "IN", "Uttarakhand", 1988, "Alpine meadows carpeted in endemic high-altitude wildflowers below glaciated Himalayan peaks"],
  ["in-19", "Buddhist Monuments at Sanchi", "India", "IN", "Madhya Pradesh", 1989, "Emperor Ashoka's Great Stupa with carved stone torana gateways illustrating Jataka tales (3rd century BC)"],
  ["in-20", "Humayun's Tomb, Delhi", "India", "IN", "Delhi", 1993, "First garden-tomb on the Indian subcontinent, red sandstone precursor that inspired the architectural design of the Taj Mahal"],
  ["in-21", "Qutb Minar and its Monuments, Delhi", "India", "IN", "Delhi", 1993, "73-meter fluted red sandstone minaret tower, Quwwat-ul-Islam mosque, and non-rusting ancient Iron Pillar of Delhi"],
  ["in-22", "Mountain Railways of India", "India", "IN", "Multi-region", 1999, "Darjeeling Himalayan toy train with loops, Nilgiri Mountain Railway rack system, and Kalka-Shimla alpine line"],
  ["in-23", "Mahabodhi Temple Complex at Bodh Gaya", "India", "IN", "Bihar", 2002, "Sacred stone temple marking the spot where the historical Gautama Buddha attained supreme enlightenment under the Bodhi Tree"],
  ["in-24", "Rock Shelters of Bhimbetka", "India", "IN", "Madhya Pradesh", 2003, "Stone Age rock art drawings spanning 30,000 years inside sandstone bluffs depicting hunting, dancing, and daily life"],
  ["in-25", "Chhatrapati Shivaji Terminus (Victoria Terminus)", "India", "IN", "Maharashtra", 2004, "Victorian Gothic Revival railway terminus in Mumbai fused with traditional Indian stone domes and gargoyles"],
  ["in-26", "Red Fort Complex (Lal Qila)", "India", "IN", "Delhi", 2007, "Palace fort of Mughal emperor Shah Jahan in Old Delhi, national symbol of Indian independence at the Lahori Gate"],
  ["in-27", "The Jantar Mantar, Jaipur", "India", "IN", "Rajasthan", 2010, "Astronomical stone observation instruments built by Maharaja Jai Singh II including the world's largest stone sundial"],
  ["in-28", "Western Ghats", "India", "IN", "Multi-state", 2012, "Mountain range older than the Himalayas acting as a global biological hotspot with cloud montane rainforests"],
  ["in-29", "Hill Forts of Rajasthan", "India", "IN", "Rajasthan", 2013, "Six massive Rajput forts including Chittorgarh, Kumbhalgarh with its great wall, and Amber Fort in Jaipur"],
  ["in-30", "Rani-ki-Vav (Queen's Stepwell) at Patan", "India", "IN", "Gujarat", 2014, "Subterranean seven-level inverted water stepwell temple adorned with 500 major sculptures dedicated to Vishnu"],
  ["in-31", "Archaeological Site of Nalanda Mahavihara", "India", "IN", "Bihar", 2016, "Ancient monastic university that flourished from 5th to 12th century educating scholars across Asia in Buddhist philosophy"],
  ["in-32", "Historic City of Ahmadabad", "India", "IN", "Gujarat", 2017, "Sultanate walled city characterized by pols (gated residential neighborhoods) and wooden bird feeders"],
  ["in-33", "Victorian Gothic and Art Deco Ensembles of Mumbai", "India", "IN", "Maharashtra", 2018, "Oval Maidan urban ensemble of 19th-century Victorian public buildings and 20th-century Art Deco seafront apartments"],
  ["in-34", "Jaipur City, Rajasthan", "India", "IN", "Rajasthan", 2019, "The 'Pink City' founded on a grid plan in 1727 featuring Hawa Mahal (Palace of Winds) and City Palace"],
  ["in-35", "Dholavira: a Harappan City", "India", "IN", "Gujarat", 2021, "Bronze Age Indus Valley Civilization city in the Rann of Kutch with advanced stone water reservoirs and drainage"],

  // =========================================================================
  // AUSTRALIA (AU) - All 20 Inscribed Sites
  // =========================================================================
  ["au-1", "Great Barrier Reef", "Australia", "AU", "Queensland", 1981, "World's largest coral reef ecosystem stretching 2,300 km along the coast with clownfish, sea turtles, and manta rays"],
  ["au-2", "Sydney Opera House", "Australia", "AU", "New South Wales", 2007, "Jørn Utzon's 20th-century architectural masterpiece with billowing white shell roofs on Sydney Harbour beside Harbour Bridge"],
  ["au-3", "Uluṟu-Kata Tjuṯa National Park", "Australia", "AU", "Northern Territory", 1987, "Sacred red sandstone monolith Uluru (Ayers Rock) and domed Kata Tjuta (The Olgas) in the Red Centre desert"],
  ["au-4", "Kakadu National Park", "Australia", "AU", "Northern Territory", 1981, "Aboriginal rock art galleries at Ubirr and Burrungkuy, tropical wetlands, and saltwater crocodiles in the Top End"],
  ["au-5", "Tasmanian Wilderness", "Australia", "AU", "Tasmania", 1982, "Gondwanan ancient temperate rainforests, Cradle Mountain, Lake St Clair, and wild Gordon and Franklin river valleys"],
  ["au-6", "Willandra Lakes Region", "Australia", "AU", "New South Wales", 1981, "Pleistocene dried lakebeds where 40,000-year-old Mungo Man and Mungo Lady cremation burials were discovered"],
  ["au-7", "Lord Howe Island Group", "Australia", "AU", "New South Wales (Tasman)", 1982, "Isolated volcanic island with the world's southernmost coral reef and Mount Gower rising from the Tasman Sea"],
  ["au-8", "Gondwana Rainforests of Australia", "Australia", "AU", "New South Wales / QLD", 1986, "Ancient caldera subtropical rainforests holding living fossil plant lineages from the supercontinent Gondwana"],
  ["au-9", "Wet Tropics of Queensland", "Australia", "AU", "Queensland", 1988, "Ancient tropical rainforests descending to the sea including Daintree Rainforest and endemic cassowary habitats"],
  ["au-10", "Shark Bay, Western Australia", "Australia", "AU", "Western Australia", 1991, "Living fossil marine stromatolites at Hamelin Pool, dugong populations, and Shell Beach in the Indian Ocean"],
  ["au-11", "K'gari (Fraser Island)", "Australia", "AU", "Queensland", 1992, "World's largest sand island featuring perched freshwater dune lakes (Lake McKenzie) and rainforests growing in sand"],
  ["au-12", "Australian Fossil Mammal Sites (Riversleigh / Naracoorte)", "Australia", "AU", "QLD / SA", 1994, "Caves preserving the evolutionary record of Australia's unique marsupials including giant wombat and marsupial lions"],
  ["au-13", "Heard and McDonald Islands", "Australia", "AU", "Sub-Antarctic", 1997, "Only volcanically active sub-Antarctic islands free of introduced species with Big Ben volcano and glaciers"],
  ["au-14", "Macquarie Island", "Australia", "AU", "Tasmania (Southern Ocean)", 1997, "Only place on Earth where rocks from the mantle are exposed above sea level, home to royal penguin colonies"],
  ["au-15", "Greater Blue Mountains Area", "Australia", "AU", "New South Wales", 2000, "Vast sandstone canyon plateau wilderness dominated by diverse eucalyptus forests and the Three Sisters rock formation"],
  ["au-16", "Purnululu National Park (Bungle Bungle Range)", "Australia", "AU", "Western Australia", 2003, "Beehive-striped black-and-orange sandstone cone karst towers in the remote Kimberley region"],
  ["au-17", "Royal Exhibition Building and Carlton Gardens", "Australia", "AU", "Victoria", 2004, "Historic 1880 Great Hall in Melbourne built for the international exhibition movement with dome"],
  ["au-18", "Australian Convict Sites", "Australia", "AU", "Multi-state", 2010, "Eleven penal sites documenting British transportation including Port Arthur in Tasmania and Fremantle Prison"],
  ["au-19", "Ningaloo Coast", "Australia", "AU", "Western Australia", 2011, "Fringing coral reef where whale sharks aggregate alongside Cape Range limestone gorges and turquoise waters"],
  ["au-20", "Budj Bim Cultural Landscape", "Australia", "AU", "Victoria", 2019, "Aboriginal aquaculture system of volcanic basalt channels engineered to harvest short-finned eels (6,600 years old)"],

  // =========================================================================
  // CANADA (CA) - All 22 Inscribed Sites
  // =========================================================================
  ["ca-1", "L'Anse aux Meadows National Historic Site", "Canada", "CA", "Newfoundland", 1978, "Only authenticated 11th-century Norse Viking timber-and-sod settlement in North America, Vinland base of Leif Erikson"],
  ["ca-2", "Nahanni National Park", "Canada", "CA", "Northwest Territories", 1978, "Virginia Falls (twice the height of Niagara), deep river canyons, and limestone karst caves in the subarctic north"],
  ["ca-3", "Dinosaur Provincial Park", "Canada", "CA", "Alberta", 1979, "World's richest collection of Cretaceous dinosaur fossil skeletons in badlands topography along the Red Deer River"],
  ["ca-4", "Kluane / Wrangell-St. Elias / Glacier Bay (Canada)", "Canada", "CA", "Yukon / BC", 1979, "Vast international icefield wilderness boundary with Mount Logan (Canada's highest peak) and tidewater glaciers"],
  ["ca-5", "Head-Smashed-In Buffalo Jump", "Canada", "CA", "Alberta", 1981, "Sandstone cliff where indigenous Blackfoot hunters drove bison herds over precipices for over 5,500 years"],
  ["ca-6", "SGang Gwaay (Anthony Island)", "Canada", "CA", "British Columbia", 1981, "Haida village in Haida Gwaii with weathered cedar mortuary totem poles and longhouse ruins facing the Pacific"],
  ["ca-7", "Wood Buffalo National Park", "Canada", "CA", "Alberta / NWT", 1983, "Canada's largest national park holding wild wood bison herds and the only natural nesting grounds for whooping cranes"],
  ["ca-8", "Canadian Rocky Mountain Parks", "Canada", "CA", "Alberta / BC", 1984, "Banff, Jasper, Yoho, and Kootenay parks with Lake Louise, Columbia Icefield, Moraine Lake, and Burgess Shale fossils"],
  ["ca-9", "Historic District of Old Québec", "Canada", "CA", "Quebec", 1985, "Only fortified walled colonial city north of Mexico with intact ramparts, Château Frontenac, and Place Royale"],
  ["ca-10", "Gros Morne National Park", "Canada", "CA", "Newfoundland", 1987, "Tablelands where Earth's oceanic mantle is exposed by plate tectonics beside deep freshwater fjords (Western Brook Pond)"],
  ["ca-11", "Old Town Lunenburg", "Canada", "CA", "Nova Scotia", 1995, "Best surviving British colonial planned wooden settlement with colourful timber houses and Bluenose schooner heritage"],
  ["ca-12", "Waterton Lakes National Park (Waterton-Glacier)", "Canada", "CA", "Alberta", 1995, "International Peace Park where prairie grasslands meet Rocky Mountain peaks without foothills on the US border"],
  ["ca-13", "Miguasha National Park", "Canada", "CA", "Quebec", 1999, "Devonian fossil site illustrating the evolutionary transition from lobe-finned fish to four-legged land tetrapods"],
  ["ca-14", "Rideau Canal", "Canada", "CA", "Ontario", 2007, "Nineteenth-century slackwater canal and stone defensive blockhouses connecting Ottawa to Kingston on Lake Ontario"],
  ["ca-15", "Joggins Fossil Cliffs", "Canada", "CA", "Nova Scotia", 2008, "Carboniferous fossil cliff exposing the world's earliest reptiles fossilized inside upright lycopsid tree trunks"],
  ["ca-16", "Landscape of Grand Pré", "Canada", "CA", "Nova Scotia", 2012, "Acadian dyke-and-sluice marsh agricultural system and memorial of the 1755 Acadian Deportation in Minas Basin"],
  ["ca-17", "Red Bay Basque Whaling Station", "Canada", "CA", "Newfoundland and Labrador", 2013, "Sixteenth-century Basque coastal and underwater whale-oil rendering archaeology in the Strait of Belle Isle"],
  ["ca-18", "Mistaken Point", "Canada", "CA", "Newfoundland", 2016, "Coastal sea ledges holding 565-million-year-old Ediacaran fossils of the earliest large, complex multicellular life on Earth"],
  ["ca-19", "Pimachiowin Aki", "Canada", "CA", "Manitoba / Ontario", 2018, "First Nations boreal forest landscape upholding the ancestral Anishinaabe cultural tradition of 'keeping the land'"],
  ["ca-20", "Writing-on-Stone / Áísínai'pi", "Canada", "CA", "Alberta", 2019, "Milk River valley sandstone hoodoos carved with sacred Blackfoot rock art petroglyphs and pictographs"],
  ["ca-21", "Tr'ondëk-Hwëch'in / Klondike", "Canada", "CA", "Yukon", 2023, "Klondike Gold Rush landscape around Dawson City coexisting with indigenous Tr'ondëk Hwëch'in ancestral camps"],
  ["ca-22", "Anticosti", "Canada", "CA", "Quebec", 2023, "Complete marine fossil record of the Late Ordovician mass extinction event preserved in coastal sea cliffs"],

  // =========================================================================
  // RUSSIA (RU) - All 33 Inscribed Sites
  // =========================================================================
  ["ru-1", "Kremlin and Red Square, Moscow", "Russia", "RU", "Central", 1990, "Heart of Russian statehood featuring Saint Basil's Cathedral colorful onion domes, Spasskaya Tower, and Kremlin palaces"],
  ["ru-2", "Historic Centre of Saint Petersburg and Monuments", "Russia", "RU", "Northwestern", 1990, "Venice of the North with the Winter Palace (Hermitage Museum), Peter and Paul Fortress, Peterhof fountains, and canals"],
  ["ru-3", "Lake Baikal", "Russia", "RU", "Siberia", 1996, "World's deepest, oldest, and most voluminous freshwater lake holding 20% of Earth's unfrozen surface freshwater and nerpa seals"],
  ["ru-4", "Volcanoes of Kamchatka", "Russia", "RU", "Far East", 1996, "Pristine wilderness of active stratovolcanoes (Klyuchevskaya Sopka), Valley of Geysers, and Kamchatka brown bears"],
  ["ru-5", "Kizhi Pogost", "Russia", "RU", "Karelia", 1990, "Island on Lake Onega famed for the 22-domed Church of the Transfiguration built entirely of interlocking wood without nails"],
  ["ru-6", "Historic Monuments of Novgorod and Surroundings", "Russia", "RU", "Northwestern", 1992, "Cradle of Russian democracy on the Volkhov River featuring the Novgorod Kremlin (Detinets) and St. Sophia Cathedral"],
  ["ru-7", "Solovetsky Islands (Cultural and Historic Ensemble)", "Russia", "RU", "Northwestern", 1992, "Fortified White Sea monastery fortress that served as an Arctic religious bastion and later 20th-century Gulag camp"],
  ["ru-8", "White Monuments of Vladimir and Suzdal", "Russia", "RU", "Central", 1992, "Golden Ring medieval white-stone limestone churches including Church of the Intercession on the Nerl and Golden Gate"],
  ["ru-9", "Trinity Sergius Lavra in Sergiyev Posad", "Russia", "RU", "Central", 1993, "Spiritual center of the Russian Orthodox Church founded by St Sergius with blue star-spangled domes and Rublev icons"],
  ["ru-10", "Church of the Ascension, Kolomenskoye", "Russia", "RU", "Central", 1994, "First tent-roofed stone church built in 1532 on imperial country estate in Moscow to celebrate the birth of Ivan the Terrible"],
  ["ru-11", "Virgin Komi Forests", "Russia", "RU", "Northwestern", 1995, "Vast virgin boreal taiga forest in the Northern Urals, the largest remaining pristine primary forest in Europe"],
  ["ru-12", "Golden Mountains of Altai", "Russia", "RU", "Siberia", 1998, "Mount Belukha, Lake Teletskoye, and Ukok Plateau where the ancient Scythian 'Ice Maiden' mummy was discovered"],
  ["ru-13", "Western Caucasus", "Russia", "RU", "Southern", 1999, "Mountain wilderness preserving intact habitats for the endangered Caucasian wisent (European bison) and leopards"],
  ["ru-14", "Historic and Architectural Complex of the Kazan Kremlin", "Russia", "RU", "Volga", 2000, "Citadel blending Russian Orthodox Annunciation Cathedral and Tatar Islamic Kul Sharif Mosque on the Volga"],
  ["ru-15", "Curonian Spit (Russian section)", "Russia", "RU", "Kaliningrad", 2000, "Thin curved sand dune peninsula separating the Curonian Lagoon from the Baltic Sea with migrating sand dunes"],
  ["ru-16", "Ensemble of the Ferapontov Monastery", "Russia", "RU", "Northwestern", 2000, "Northern Russian monastery holding the pristine 1502 wall frescoes of master medieval painter Dionisius"],
  ["ru-17", "Central Sikhote-Alin", "Russia", "RU", "Far East", 2001, "Temperate forest mountain range in the Russian Far East providing crucial refuge for the endangered Amur tiger"],
  ["ru-18", "Uvs Nuur Basin (Russian section)", "Russia", "RU", "Siberia", 2003, "Endorheic shallow saline lake basin surrounded by desert, steppe, and glaciated mountains on the Mongolian border"],
  ["ru-19", "Citadel, Ancient City and Fortress Buildings of Derbent", "Russia", "RU", "North Caucasus", 2003, "Ancient Persian Sasanian stone fortress walls (Naryn-Kala) guarding the Caspian Sea corridor since the 6th century"],
  ["ru-20", "Natural System of Wrangel Island Reserve", "Russia", "RU", "Chukotka", 2004, "Isolated Arctic island boasting the world's highest density of polar bear ancestral dens and last surviving woolly mammoths"],
  ["ru-21", "Ensemble of the Novodevichy Convent, Moscow", "Russia", "RU", "Central", 2004, "Moscow Baroque convent fortress where aristocratic women took the veil and resting place of Russian luminaries"],
  ["ru-22", "Historical Centre of the City of Yaroslavl", "Russia", "RU", "Central", 2005, "Golden Ring trading town at the confluence of the Volga and Kotorosl rivers with 17th-century frescoed churches"],
  ["ru-23", "Struve Geodetic Arc (Russian section)", "Russia", "RU", "Northwestern", 2005, "Survey triangulation markers on Gogland island in the Gulf of Finland measuring the exact shape of the Earth"],
  ["ru-24", "Putorana Plateau", "Russia", "RU", "Siberia", 2010, "Basalt stepped trap plateau in northern Siberia dissected by massive canyons, waterfalls, and thousands of lakes"],
  ["ru-25", "Lena Pillars Nature Park", "Russia", "RU", "Yakutia", 2012, "Dramatic 150-meter-tall limestone rock pillars lining the banks of the Lena River formed by extreme continental freeze-thaw"],
  ["ru-26", "Bolgar Historical and Archaeological Complex", "Russia", "RU", "Volga", 2014, "Medieval capital of Volga Bulgaria where Islam was officially adopted by the Volga Tatars in AD 922"],
  ["ru-27", "Landscapes of Dauria", "Russia", "RU", "Siberia", 2017, "Grassland steppe, wetlands, and lakes on the Mongolian border supporting millions of migrating migratory birds"],
  ["ru-28", "Assumption Cathedral and Monastery of Sviyazhsk", "Russia", "RU", "Volga", 2017, "Island fortress town on the Volga founded by Ivan the Terrible featuring rare 16th-century Ivan IV frescoes"],
  ["ru-29", "Churches of the Pskov School of Architecture", "Russia", "RU", "Northwestern", 2019, "Ten medieval churches characterized by cubic volumes, whitewashed walls, and bell gables dating to 12th century"],
  ["ru-30", "Petroglyphs of Lake Onega and the White Sea", "Russia", "RU", "Karelia", 2021, "Neolithic rock carvings depicting boats, swans, elk, beluga whales, and humans dating to 4500 BC"],
  ["ru-31", "Astronomical Observatories of Kazan Federal University", "Russia", "RU", "Volga", 2023, "Historic 19th-century urban and suburban Engelhardt celestial observatories pioneering astrometry"],
  ["ru-32", "Historic Centre of Kostroma", "Russia", "RU", "Central", 2024, "Ipatiev Monastery where Mikhail Romanov was offered the Russian crown in 1613 launching the Romanov dynasty"],
  ["ru-33", "Kenozero National Park", "Russia", "RU", "Northwestern", 2024, "Traditional rural northern Russian wooden church architecture, wooden chapels, and sacred groves"],

  // =========================================================================
  // IRAN (IR) - All 28 Inscribed Sites
  // =========================================================================
  ["ir-1", "Persepolis", "Iran", "IR", "Fars", 1979, "Ceremonial capital of the Achaemenid Empire built by Darius the Great with the Gate of All Nations and Apadana stairway reliefs"],
  ["ir-2", "Meidan Emam, Esfahan (Naqsh-e Jahan Square)", "Iran", "IR", "Isfahan", 1979, "Massive royal square in Isfahan featuring Shah Mosque (Masjed-e Abbasi), Sheikh Lotfollah Mosque, and Ali Qapu Palace"],
  ["ir-3", "Tchogha Zanbil", "Iran", "IR", "Khuzestan", 1979, "Best-preserved ancient Elamite brick ziggurat temple complex in the world, dedicated to Inshushinak (1250 BC)"],
  ["ir-4", "Takht-e Soleyman", "Iran", "IR", "West Azerbaijan", 2003, "Fortified Zoroastrian fire temple sanctuary perched around a volcanic artesian crater lake in northwestern Iran"],
  ["ir-5", "Pasargadae", "Iran", "IR", "Fars", 2004, "First capital of the Achaemenid Empire featuring the limestone gabled tomb of Cyrus the Great, founder of the Persian Empire"],
  ["ir-6", "Bam and its Cultural Landscape", "Iran", "IR", "Kerman", 2004, "World's largest mudbrick citadel (Arg-e Bam) along the desert Silk Road with traditional qanat irrigation"],
  ["ir-7", "Soltaniyeh", "Iran", "IR", "Zanjan", 2005, "Mausoleum of Ilkhanid ruler Oljaytu boasting a double-shelled turquoise tiled dome that inspired the Taj Mahal"],
  ["ir-8", "Bisotun", "Iran", "IR", "Kermanshah", 2006, "Multilingual cuneiform inscription carved high on a limestone cliff by Darius the Great that unlocked cuneiform script"],
  ["ir-9", "Armenian Monastic Ensembles of Iran", "Iran", "IR", "West Azerbaijan", 2008, "Saint Thaddeus Monastery (Black Church), Saint Stepanos, and Dzordzor Chapel in mountain valleys"],
  ["ir-10", "Shushtar Historical Hydraulic System", "Iran", "IR", "Khuzestan", 2009, "Ancient engineering masterpiece of watermills, tunnels, canals, and cascading waterfalls operating since Darius I"],
  ["ir-11", "Tabriz Historic Bazaar Complex", "Iran", "IR", "East Azerbaijan", 2010, "World's largest covered brick bazaar complex with vaulted halls, caravanserai, and Persian rug merchants"],
  ["ir-12", "Sheikh Safi al-din Khānegāh and Shrine Ensemble", "Iran", "IR", "Ardabil", 2010, "Sufi spiritual retreat and tomb of Safavid dynasty progenitor with blue porcelain tilework"],
  ["ir-13", "The Persian Garden", "Iran", "IR", "Multi-region", 2011, "Nine classical walled chahar bagh paradise gardens illustrating water pavilions and cypress trees (Bagh-e Fin in Kashan)"],
  ["ir-14", "Masjed-e Jāmé of Isfahan", "Iran", "IR", "Isfahan", 2012, "Grand congregational mosque displaying 12 centuries of Islamic architecture, brick domes, and stucco mihrabs"],
  ["ir-15", "Golestan Palace, Tehran", "Iran", "IR", "Tehran", 2013, "Qajar dynasty royal residence adorned with mirrored halls, marble throne, and Persian landscaped palace gardens"],
  ["ir-16", "Shahr-i Sokhta (Burnt City)", "Iran", "IR", "Sistan and Baluchestan", 2014, "Bronze Age urban settlement in the desert revealing earliest artificial eyeball and animation bowl (3200 BC)"],
  ["ir-17", "Cultural Landscape of Maymand", "Iran", "IR", "Kerman", 2015, "Semi-nomadic troglodyte village where residents live in hand-carved cave homes carved out of soft rock"],
  ["ir-18", "Susa", "Iran", "IR", "Khuzestan", 2015, "Multi-layered ancient city of Elamite, Persian, and Parthian civilizations and Palace of Darius with glazed brick reliefs"],
  ["ir-19", "The Persian Qanat", "Iran", "IR", "Multi-region", 2016, "Eleven ancient gravity-driven underground subterranean water aqueduct systems bringing mountain water to arid deserts"],
  ["ir-20", "Lut Desert (Dasht-e Lut)", "Iran", "IR", "Kerman / Sistan", 2016, "Hyper-arid desert recorded as one of the hottest surface temperatures on Earth featuring giant yardang wind towers (Kaluts)"],
  ["ir-21", "Historic City of Yazd", "Iran", "IR", "Yazd", 2017, "Mudbrick desert city characterized by badgir windcatcher cooling towers, Zoroastrian Towers of Silence, and fire temples"],
  ["ir-22", "Sasanian Archaeological Landscape of Fars", "Iran", "IR", "Fars", 2018, "Fortified palaces, rock reliefs, and circular city of Gur constructed by Ardashir I and Shapur I (Bishapur, Firuzabad)"],
  ["ir-23", "Hyrcanian Forests (Iran section)", "Iran", "IR", "Northern Iran", 2019, "Ancient deciduous temperate forest stretching along the Caspian Sea that survived the Quaternary Ice Age glaciations"],
  ["ir-24", "Trans-Iranian Railway", "Iran", "IR", "Multi-region", 2021, "Engineering marvel connecting the Caspian Sea to the Persian Gulf crossing 174 tunnels and the Veresk Bridge"],
  ["ir-25", "Cultural Landscape of Hawraman/Uramanat", "Iran", "IR", "Kurdistan / Kermanshah", 2021, "Tiered stone mountain villages built into steep slopes where the roof of one house serves as the yard for the house above"],
  ["ir-26", "The Persian Caravanserai", "Iran", "IR", "Multi-region", 2023, "Network of 54 historic fortified roadside inns along desert Silk Road routes providing shelter to merchant caravans"],
  ["ir-27", "Hegmataneh (Ecbatana)", "Iran", "IR", "Hamadan", 2024, "Ancient capital of the Medes and summer palace of Achaemenid kings unearthed beneath modern Hamadan"],
  ["ir-28", "Palace of Ardashir", "Iran", "IR", "Fars", 2018, "Early Sasanian limestone palace featuring dome architecture and sacred spring pool built in AD 224"],

  // =========================================================================
  // SOUTH AFRICA (ZA) - All 12 Inscribed Sites
  // =========================================================================
  ["za-1", "Robben Island", "South Africa", "ZA", "Western Cape", 1999, "Island prison off Cape Town where Nelson Mandela was incarcerated for 18 years, universal symbol of the triumph of human spirit over oppression"],
  ["za-2", "Fossil Hominid Sites of South Africa (Cradle of Humankind)", "South Africa", "ZA", "Gauteng", 1999, "Sterkfontein caves where Mrs. Ples and Little Foot hominin fossils documenting early human evolution were discovered"],
  ["za-3", "iSimangaliso Wetland Park", "South Africa", "ZA", "KwaZulu-Natal", 1999, "Coastal wetland haven containing estuaries, coral reefs, hippos, Nile crocodiles, and nesting loggerhead sea turtles"],
  ["za-4", "Maloti-Drakensberg Park (uKhahlamba Drakensberg)", "South Africa", "ZA", "KwaZulu-Natal", 2000, "Towering basalt ramparts, Amphitheatre cliff, and thousands of rock art paintings created by the San (Bushmen) people"],
  ["za-5", "Mapungubwe Cultural Landscape", "South Africa", "ZA", "Limpopo", 2003, "Iron Age kingdom at the confluence of the Shashe and Limpopo rivers famed for the golden rhinoceros burial artifact"],
  ["za-6", "Cape Floral Region Protected Areas", "South Africa", "ZA", "Western Cape", 2004, "Biodiversity hotspot harboring endemic fynbos vegetation, King Protea flowers, and Table Mountain National Park"],
  ["za-7", "Vredefort Dome", "South Africa", "ZA", "Free State / North West", 2005, "Oldest and largest recognized meteorite impact structure on Earth, formed by an asteroid collision two billion years ago"],
  ["za-8", "Richtersveld Cultural and Botanical Landscape", "South Africa", "ZA", "Northern Cape", 2007, "Arid mountainous desert stewarded by the semi-nomadic Nama pastoralists practicing transhumance in reed huts"],
  ["za-9", "ǂKhomani Cultural Landscape", "South Africa", "ZA", "Northern Cape", 2017, "Kalahari desert red sand dunes holding the cultural traditions, desert survival ethnobotany, and memory of the ǂKhomani San"],
  ["za-10", "Barberton Makhonjwa Mountains", "South Africa", "ZA", "Mpumalanga", 2018, "Greenstone belt preserving Earth's earliest crustal rocks and evidence of earliest meteorite bombardments (3.6 Ga)"],
  ["za-11", "Human Rights, Liberation and Reconciliation: Nelson Mandela Legacy Sites", "South Africa", "ZA", "Multi-region", 2024, "Constitution Hill, Sharpeville massacre memorial, Liliesleaf Farm, and Walter Sisulu square in Soweto"],
  ["za-12", "The Emergence of Modern Human Behaviour: The Pleistocene Occupation Sites", "South Africa", "ZA", "Western Cape", 2024, "Diepkloof Rock Shelter and Pinnacle Point caves holding evidence of earliest ochre use and engraved ostrich eggshells"],

  // =========================================================================
  // ETHIOPIA (ET) - All 12 Inscribed Sites
  // =========================================================================
  ["et-1", "Rock-Hewn Churches, Lalibela", "Ethiopia", "ET", "Amhara", 1978, "Eleven monolithic medieval rock-cut churches carved out of volcanic tuff including the cross-shaped Church of Saint George (Biete Ghiorgis)"],
  ["et-2", "Simien National Park", "Ethiopia", "ET", "Amhara", 1978, "Spectacular jagged mountain escarpments and Ras Dejen peak harboring endemic Gelada baboons, Walia ibex, and Ethiopian wolves"],
  ["et-3", "Fasil Ghebbi, Gondar Region", "Ethiopia", "ET", "Amhara", 1979, "Fortified royal castle compound of Emperor Fasilides blending Hindu, Arab, and Jesuit Baroque architectural influences"],
  ["et-4", "Aksum", "Ethiopia", "ET", "Tigray", 1980, "Ancient capital of the Aksumite Empire featuring towering carved granite obelisk stelae, royal tombs, and Church of Our Lady Mary of Zion"],
  ["et-5", "Lower Valley of the Awash", "Ethiopia", "ET", "Afar", 1980, "Paleoanthropological site in the Afar Depression where the 3.2-million-year-old fossil skeleton 'Lucy' (Australopithecus afarensis) was found"],
  ["et-6", "Lower Valley of the Omo", "Ethiopia", "ET", "SNNPR", 1980, "Fossil-bearing sedimentary layers near Lake Turkana yielding earliest Homo sapiens fossil skulls (Omo I and II)"],
  ["et-7", "Tiya", "Ethiopia", "ET", "Central Ethiopia", 1980, "Prehistoric megalithic burial site marked by 36 standing stone stelae engraved with sword and enigmatic biological symbols"],
  ["et-8", "Harar Jugol, the Fortified Historic Town", "Ethiopia", "ET", "Harari", 2006, "Fourth holy city of Islam surrounded by 16th-century walls, featuring 82 mosques and night-time hyena feeding traditions"],
  ["et-9", "Konso Cultural Landscape", "Ethiopia", "ET", "SNNPR", 2011, "Stone-walled agricultural hillside terracing, fortified hilltop settlements, and carved wooden grave marker statues (waga)"],
  ["et-10", "Bale Mountains National Park", "Ethiopia", "ET", "Oromia", 2023, "Afro-alpine Sanetti Plateau cloud forests harboring the world's largest population of the endangered Ethiopian wolf and giant mole-rat"],
  ["et-11", "Gedeo Cultural Landscape", "Ethiopia", "ET", "SNNPR", 2023, "Agroforestry polyculture system combining enset (false banana) cultivation with ancient phallic megalithic stone monuments"],
  ["et-12", "Melka Kunture and Balchit", "Ethiopia", "ET", "Oromia", 2024, "Paleolithic archaeological complex in the Upper Awash basin yielding Acheulean stone tools and volcanic obsidian quarries"],

  // =========================================================================
  // INDONESIA (ID) - All 10 Inscribed Sites
  // =========================================================================
  ["id-1", "Borobudur Temple Compounds", "Indonesia", "ID", "Central Java", 1991, "World's largest Buddhist temple monument (9th century) featuring stepped pyramid, 504 Buddha statues, and bell-shaped perforated stupas"],
  ["id-2", "Prambanan Temple Compounds", "Indonesia", "ID", "Central Java", 1991, "Soaring towering Hindu stone temples dedicated to the Trimurti (Shiva, Brahma, Vishnu) adorned with Ramayana bas-reliefs"],
  ["id-3", "Komodo National Park", "Indonesia", "ID", "East Nusa Tenggara", 1991, "Volcanic rugged islands (Komodo, Rinca) harboring the world's largest living lizard, the predatory Komodo dragon"],
  ["id-4", "Ujung Kulon National Park", "Indonesia", "ID", "Banten", 1991, "Southwestern tip of Java containing primary lowland rainforest, Krakatoa volcano island, and the last surviving Javan rhinoceroses"],
  ["id-5", "Sangiran Early Man Site", "Indonesia", "ID", "Central Java", 1996, "Fossil beds along the Solo River yielding half of all known Homo erectus hominin fossils (Java Man)"],
  ["id-6", "Lorentz National Park", "Indonesia", "ID", "Papua", 1999, "Largest national park in Southeast Asia extending from snow-capped equatorial glaciers (Puncak Jaya) to mangrove seas"],
  ["id-7", "Tropical Rainforest Heritage of Sumatra", "Indonesia", "ID", "Sumatra", 2004, "Gunung Leuser, Kerinci Seblat, and Bukit Barisan Selatan harboring wild Sumatran orangutans, tigers, and Rafflesia flowers"],
  ["id-8", "Cultural Landscape of Bali Province: Subak System", "Indonesia", "ID", "Bali", 2012, "Tiered emerald-green rice paddy terraces (Jatiluwih) operated by the egalitarian water temple cooperative irrigation philosophy Tri Hita Karana"],
  ["id-9", "Ombilin Coal Mining Heritage of Sawahlunto", "Indonesia", "ID", "West Sumatra", 2019, "Deep-shaft coal extraction, mountain railway tunnels, and company town built by the Dutch East Indies colonial administration"],
  ["id-10", "The Cosmological Axis of Yogyakarta and its Historic Landmarks", "Indonesia", "ID", "Yogyakarta", 2023, "Six-kilometer north-south urban axis connecting Mount Merapi volcano, Kraton royal sultan palace, and the Indian Ocean"],

  // =========================================================================
  // JORDAN (JO) - All 7 Inscribed Sites
  // =========================================================================
  ["jo-1", "Petra", "Jordan", "JO", "Ma'an", 1985, "Ancient Nabataean rose-red rock-cut city accessed through the narrow Siq gorge, featuring Al-Khazneh (The Treasury) facade, Royal Tombs, and Ad Deir Monastery"],
  ["jo-2", "Wadi Rum Protected Area", "Jordan", "JO", "Aqaba", 2011, "Valley of the Moon desert landscape of red sand dunes, natural sandstone rock bridges, canyons, and Lawrence of Arabia petroglyphs"],
  ["jo-3", "Quseir Amra", "Jordan", "JO", "Zarqa", 1985, "Eighth-century Umayyad desert hunting lodge famed for early Islamic figurative wall frescoes depicting zodiac constellations and royal portraits"],
  ["jo-4", "Um er-Rasas (Kastrom Mefa'a)", "Jordan", "JO", "Madaba", 2004, "Roman military camp that evolved into an early Christian town, famed for the intact mosaic floor of the Church of Saint Stephen"],
  ["jo-5", "Bethany Beyond the Jordan (Al-Maghtas)", "Jordan", "JO", "Balqa", 2015, "Baptism Archaeological Site on the east bank of the Jordan River revered as the historical site of the Baptism of Jesus by John the Baptist"],
  ["jo-6", "As-Salt - The Place of Tolerance and Urban Hospitality", "Jordan", "JO", "Balqa", 2021, "Yellow stone hillside Ottoman city showcasing inter-religious tolerance, arched facades, and shared Madafah guesthouses"],
  ["jo-7", "Umm al-Jimal", "Jordan", "JO", "Mafraq", 2024, "Black basalt stone desert trading settlement and Byzantine military outpost with preserved cantilevered stone architecture"],

  // =========================================================================
  // PORTUGAL (PT) - All 17 Inscribed Sites
  // =========================================================================
  ["pt-1", "Monastery of the Hieronymites and Tower of Belém in Lisbon", "Portugal", "PT", "Lisbon", 1983, "Pinnacle of maritime Manueline Gothic stone architecture celebrating Vasco da Gama's sea voyage to India on the Tagus River"],
  ["pt-2", "Monastery of Batalha", "Portugal", "PT", "Centro", 1983, "Dominican Gothic-Manueline royal abbey built to commemorate the 1385 Battle of Aljubarrota victory featuring the Unfinished Chapels"],
  ["pt-3", "Convent of Christ in Tomar", "Portugal", "PT", "Centro", 1983, "Templar castle stronghold and headquarters of the Order of Christ featuring the famous Manueline Chapterhouse window"],
  ["pt-4", "Historic Centre of Évora", "Portugal", "PT", "Alentejo", 1986, "Golden age walled city featuring the Roman Temple of Diana, Gothic Évora Cathedral, and macabre Chapel of Bones (Capela dos Ossos)"],
  ["pt-5", "Monastery of Alcobaça", "Portugal", "PT", "Centro", 1989, "Monumental Cistercian Gothic abbey housing the ornate carved stone royal tombs of tragic lovers King Pedro I and Inês de Castro"],
  ["pt-6", "Cultural Landscape of Sintra", "Portugal", "PT", "Lisbon", 1995, "Fairytale Romanticist mountaintop Pena Palace with pastel towers, mystical Quinta da Regaleira initiation wells, and Moorish Castle"],
  ["pt-7", "Historic Centre of Oporto, Luiz I Bridge and Monastery of Serra do Pilar", "Portugal", "PT", "Norte", 1996, "Ribeira Douro riverfront, metal double-deck Dom Luís I arch bridge, Clérigos Tower, and historic Port wine cellars in Gaia"],
  ["pt-8", "Prehistoric Rock Art in the Côa Valley", "Portugal", "PT", "Norte / Centro", 1998, "Open-air Paleolithic animal rock carvings of horses, ibex, and aurochs along the Côa River canyon"],
  ["pt-9", "Laurisilva of Madeira", "Portugal", "PT", "Madeira", 1999, "Last surviving primary laurel rainforest covering steep volcanic island valleys, sustained by historic levada irrigation channels"],
  ["pt-10", "Alto Douro Wine Region", "Portugal", "PT", "Norte", 2001, "Steep schist stone terraced valley slopes producing world-renowned Port wine and Douro table wines for two millennia"],
  ["pt-11", "Historic Centre of Guimarães", "Portugal", "PT", "Norte", 2001, "Cradle of Portuguese national identity where first king Afonso Henriques was born, medieval castle, and Palace of the Dukes"],
  ["pt-12", "Landscape of the Pico Island Vineyard Culture", "Portugal", "PT", "Azores", 2004, "Grid network of black volcanic basalt stone currais protecting grapevines from Atlantic ocean wind on Pico volcano"],
  ["pt-13", "Garrison Border Town of Elvas and its Fortifications", "Portugal", "PT", "Alentejo", 2012, "World's largest dry-ditch bulwarked star fortification complex with Amoreira Aqueduct defending the Spanish frontier"],
  ["pt-14", "University of Coimbra – Alta and Sofia", "Portugal", "PT", "Centro", 2013, "Historic hilltop university founded in 1290 featuring the opulent gilded Joanina Baroque library and academic traditions"],
  ["pt-15", "Royal Building of Mafra", "Portugal", "PT", "Lisbon", 2019, "Colossal Baroque palace-monastery complex financed by Brazilian gold featuring 1,200 rooms, twin carillons, and bat library"],
  ["pt-16", "Sanctuary of Bom Jesus do Monte in Braga", "Portugal", "PT", "Norte", 2019, "Baroque hillside pilgrimage sanctuary featuring a monumental granite zigzag staircase with allegorical fountains of the Five Senses"],
  ["pt-17", "Central Zone of the Town of Angra do Heroismo in the Azores", "Portugal", "PT", "Azores", 1983, "Mid-Atlantic port stopover for Spanish and Portuguese treasure fleets sailing from the Americas and East Indies"],

  // =========================================================================
  // POLAND (PL) - All 17 Inscribed Sites
  // =========================================================================
  ["pl-1", "Historic Centre of Kraków", "Poland", "PL", "Lesser Poland", 1978, "Europe's largest medieval market square (Rynek Główny), Sukiennice Cloth Hall, St Mary's Basilica, and Wawel Royal Castle on the Vistula"],
  ["pl-2", "Wieliczka and Bochnia Royal Salt Mines", "Poland", "PL", "Lesser Poland", 1978, "Thirteenth-century subterranean salt mine featuring the colossal Chapel of Saint Kinga carved entirely from rock salt"],
  ["pl-3", "Auschwitz Birkenau German Nazi Concentration Camp", "Poland", "PL", "Lesser Poland", 1979, "Preserved brick barracks, gas chamber ruins, and railway watchtower ramp honoring 1.1 million victims of the Holocaust"],
  ["pl-4", "Białowieża Forest (Polish section)", "Poland", "PL", "Podlaskie", 1979, "Last primeval lowland European forest harboring free-ranging wild European bison (żubr) on the Belarus border"],
  ["pl-5", "Historic Centre of Warsaw", "Poland", "PL", "Masovia", 1980, "Remarkable total post-WWII reconstruction of Old Town palaces, churches, and Market Square from 18th-century paintings by Canaletto"],
  ["pl-6", "Old City of Zamość", "Poland", "PL", "Lublin", 1992, "Renaissance 'ideal city' planned by Italian architect Bernardo Morando for Jan Zamoyski with arcaded merchant townhouses"],
  ["pl-7", "Castle of the Teutonic Order in Malbork", "Poland", "PL", "Pomerania", 1997, "World's largest brick Gothic castle fortress by land area built on the Nogat river by Teutonic Knights (13th century)"],
  ["pl-8", "Medieval Town of Toruń", "Poland", "PL", "Kuyavia-Pomerania", 1997, "Birthplace of astronomer Nicolaus Copernicus with pristine Brick Gothic Town Hall, leaning tower, and gingerbread heritage"],
  ["pl-9", "Kalwaria Zebrzydowska Architectural Landscape", "Poland", "PL", "Lesser Poland", 1999, "Mannerist pilgrimage park landscaped with 42 symbolic Calvary chapels set across rolling hills"],
  ["pl-10", "Churches of Peace in Jawor and Świdnica", "Poland", "PL", "Lower Silesia", 2001, "Largest half-timbered timber-and-clay Protestant churches in Europe, constructed without nails after the 1648 Treaty of Westphalia"],
  ["pl-11", "Wooden Churches of Southern Little Poland", "Poland", "PL", "Lesser Poland", 2003, "Six medieval horizontal log-cabin Gothic Catholic churches with shingled roofs (Binarowa, Dębno)"],
  ["pl-12", "Muskauer Park / Park Mużakowski", "Poland", "PL", "Lubusz", 2004, "Pioneering European landscape garden created along the Lusatian Neisse river by Prince Hermann von Pückler-Muskau"],
  ["pl-13", "Centennial Hall in Wrocław (Hala Stulecia)", "Poland", "PL", "Lower Silesia", 2006, "Max Berg's monumental reinforced concrete dome masterpiece engineered in 1913, milestone in modern architecture"],
  ["pl-14", "Wooden Tserkvas of the Carpathian Region", "Poland", "PL", "Subcarpathia", 2013, "Sixteen corner-timbered Orthodox wooden churches built by Boyko and Lemko communities across the mountains"],
  ["pl-15", "Tarnowskie Góry Lead-Silver-Zinc Mine", "Poland", "PL", "Silesia", 2017, "Extensive underground mining galleries and pioneering steam-driven water drainage system in Upper Silesia"],
  ["pl-16", "Krzemionki Prehistoric Striped Flint Mining Region", "Poland", "PL", "Świętokrzyskie", 2019, "Neolithic underground flint extraction shafts and chambers dating to 3900 BC with intact prehistoric mining tools"],
  ["pl-17", "Ancient and Primeval Beech Forests (Bieszczady)", "Poland", "PL", "Subcarpathia", 2021, "Pristine old-growth European beech forest stands in Bieszczady National Park harboring brown bears and lynx"],

  // =========================================================================
  // SWITZERLAND (CH) - All 13 Inscribed Sites
  // =========================================================================
  ["ch-1", "Old City of Berne", "Switzerland", "CH", "Bern", 1983, "Medieval city on the Aare river peninsula preserved with 6 kilometers of limestone arcades, Zytglogge clock tower, and bear pit"],
  ["ch-2", "Convent of St Gall", "Switzerland", "CH", "St. Gallen", 1983, "Carolingian monastery featuring one of the world's richest medieval libraries with 170,000 historic volumes and manuscripts"],
  ["ch-3", "Benedictine Convent of Saint John at Müstair", "Switzerland", "CH", "Graubünden", 1983, "Exceptional series of Carolingian figurative wall frescoes dating to AD 800 preserved inside an alpine monastery"],
  ["ch-4", "Three Castles of Bellinzona", "Switzerland", "CH", "Ticino", 2000, "Only surviving example of medieval military fortification architecture along the Alpine passes (Castelgrande, Montebello, Sasso Corbaro)"],
  ["ch-5", "Swiss Alps Jungfrau-Aletsch", "Switzerland", "CH", "Bern / Valais", 2001, "Great Aletsch Glacier (longest glacier in Eurasia), flanked by the iconic Eiger, Mönch, and Jungfrau peaks"],
  ["ch-6", "Monte San Giorgio", "Switzerland", "CH", "Ticino", 2003, "Fossil-rich Triassic marine limestone yielding pristine prehistoric marine reptiles, ichthyosaurs, and fossils above Lake Lugano"],
  ["ch-7", "Lavaux, Vineyard Terraces", "Switzerland", "CH", "Vaud", 2007, "Stone-walled wine terraces climbing steeply above Lake Geneva cultivating Chasselas grapes since the 11th century"],
  ["ch-8", "Swiss Tectonic Arena Sardona", "Switzerland", "CH", "Glarus", 2008, "Mountain thrust fault where older 250-million-year-old Permian rock was shoved 35 kilometers over younger limestone"],
  ["ch-9", "La Chaux-de-Fonds / Le Locle, Watchmaking Town Planning", "Switzerland", "CH", "Neuchâtel", 2009, "Urban grid designed specifically to optimize natural light for artisan watchmakers and the Swiss horological industry"],
  ["ch-10", "Rhaetian Railway in the Albula / Bernina Landscapes", "Switzerland", "CH", "Graubünden", 2008, "Landwasser Viaduct and engineering triumph traversing transalpine passes on narrow-gauge tracks toward Italy"],
  ["ch-11", "Prehistoric Pile Dwellings (Swiss section)", "Switzerland", "CH", "Multi-canton", 2011, "Lakeshore stilt dwellings dating back to 5000 BC preserving organic artifacts, fabrics, and canoes"],
  ["ch-12", "Architectural Work of Le Corbusier (Villa Le Lac & Clarté)", "Switzerland", "CH", "Vaud / Geneva", 2016, "Early modernist residential works designed by Le Corbusier beside Lake Geneva"],
  ["ch-13", "Ancient and Primeval Beech Forests (Swiss section)", "Switzerland", "CH", "Ticino", 2021, "Intact post-glacial European beech forests in Bettlachstock and Lodano valleys"],

  // =========================================================================
  // NETHERLANDS (NL) - All 13 Inscribed Sites
  // =========================================================================
  ["nl-1", "Seventeenth-Century Canal Ring Area of Amsterdam", "Netherlands", "NL", "North Holland", 2010, "Concentric network of urban canals (Herengracht, Keizersgracht, Prinsengracht), narrow gabled merchant houses, and Anne Frank House area"],
  ["nl-2", "Mill Network at Kinderdijk-Elshout", "Netherlands", "NL", "South Holland", 1997, "Nineteen historic 18th-century drainage windmills pumping water from the polders into the river Alblasserwaard"],
  ["nl-3", "Rietveld Schröder House, Utrecht", "Netherlands", "NL", "Utrecht", 2000, "Manifesto of De Stijl modern architecture designed by Gerrit Rietveld in 1924 using primary colors, dynamic sliding walls"],
  ["nl-4", "Wadden Sea (Dutch section)", "Netherlands", "NL", "North Sea", 2009, "World's largest unbroken intertidal sand and mudflat ecosystem supporting harbour seals, migratory birds, and barrier islands"],
  ["nl-5", "Schokland and Surroundings", "Netherlands", "NL", "Flevoland", 1995, "Former Zuiderzee island reclaimed from the sea illustrating centuries of heroic Dutch struggle against rising North Sea waters"],
  ["nl-6", "Defence Line of Amsterdam (Stelling van Amsterdam)", "Netherlands", "NL", "North Holland", 1996, "Ring of 45 forts engineered with an ingenious water inundation hydraulic defense system to protect the capital"],
  ["nl-7", "Historic Area of Willemstad, Curaçao", "Netherlands", "NL", "Curaçao", 1997, "Dutch Caribbean trading port featuring colorful pastel Dutch colonial gable architecture along Santa Anna Bay and Queen Emma Bridge"],
  ["nl-8", "Ir.D.F. Woudagemaal (D.F. Wouda Steam Pumping Station)", "Netherlands", "NL", "Friesland", 1998, "World's largest operational coal-fired steam pumping station, opened in 1920 to protect Friesland from flooding"],
  ["nl-9", "Droogmakerij de Beemster (Beemster Polder)", "Netherlands", "NL", "North Holland", 1999, "First reclaimed land polder laid out in a strict Renaissance mathematical landscape grid with farms and drainage canals"],
  ["nl-10", "Van Nellefabriek, Rotterdam", "Netherlands", "NL", "South Holland", 2014, "Modernist steel-and-glass curtain wall factory icon of 20th-century industrial architecture dubbed a poem in steel and glass"],
  ["nl-11", "Colonies of Benevolence (Dutch section)", "Netherlands", "NL", "Drenthe", 2021, "Nineteenth-century agrarian social reform colonies established in Frederiksoord to alleviate urban poverty through farming"],
  ["nl-12", "Frontiers of the Roman Empire – Lower German Limes", "Netherlands", "NL", "Utrecht", 2021, "Roman frontier military boundary fortifications, watchtowers, and naval bases along the Rhine River"],
  ["nl-13", "Eise Eisinga Planetarium, Franeker", "Netherlands", "NL", "Friesland", 2023, "Oldest continuously operating mechanical ceiling planetarium in the world, constructed by an amateur wool comber in 1781"],

  // =========================================================================
  // BELGIUM (BE) - All 16 Inscribed Sites
  // =========================================================================
  ["be-1", "La Grand-Place, Brussels", "Belgium", "BE", "Brussels", 1998, "Monumental central square of Brussels surrounded by guildhalls, the Town Hall (Hôtel de Ville), and King's House (Maison du Roi)"],
  ["be-2", "Historic Centre of Brugge (Bruges)", "Belgium", "BE", "Flanders", 2000, "Medieval Gothic canal city with the Belfry of Bruges, Church of Our Lady holding Michelangelo's Madonna, and tranquil Beguinage"],
  ["be-3", "Belfries of Belgium and France (Belgian section)", "Belgium", "BE", "Multi-region", 1999, "Civic bell towers and carillons symbolizing medieval municipal freedom across Ghent, Bruges, Antwerp, and Ypres Cloth Hall"],
  ["be-4", "Major Town Houses of the Architect Victor Horta", "Belgium", "BE", "Brussels", 2000, "Art Nouveau architectural masterpieces in Brussels featuring curved ironwork, stained glass, and organic light wells (Hôtel Tassel)"],
  ["be-5", "Flemish Béguinages", "Belgium", "BE", "Flanders", 1998, "Thirteen enclosed communities of religious laywomen (Beguines) combining residential brick houses, courtyards, and chapels"],
  ["be-6", "Plantin-Moretus House-Workshops-Museum Complex", "Belgium", "BE", "Antwerp", 2005, "Sixteenth-century Renaissance printing press and publishing house holding the world's two oldest printing presses and typographies"],
  ["be-7", "Stoclet House, Brussels", "Belgium", "BE", "Brussels", 2009, "Vienna Secession palace designed by Josef Hoffmann featuring Gustav Klimt mosaic friezes in the dining room"],
  ["be-8", "Major Mining Sites of Wallonia", "Belgium", "BE", "Wallonia", 2012, "Four industrial coal colliery sites documenting the early Industrial Revolution in continental Europe (Bois du Cazier)"],
  ["be-9", "Neolithic Flint Mines at Spiennes (Mons)", "Belgium", "BE", "Wallonia", 2000, "Vast network of underground shafts and galleries excavated by Neolithic miners to extract quality flint tools (4000 BC)"],
  ["be-10", "Notre-Dame Cathedral in Tournai", "Belgium", "BE", "Wallonia", 2000, "Distinguished Romanesque nave and five soaring towers combining early Gothic choir along the Scheldt river"],
  ["be-11", "The Four Lifts on the Canal du Centre", "Belgium", "BE", "Wallonia", 1998, "Hydraulic boat canal lifts near La Louvière engineered in the 19th century that raise barges without electrical power"],
  ["be-12", "Architectural Work of Le Corbusier (Maison Guiette)", "Belgium", "BE", "Antwerp", 2016, "Early modernist residence and studio in Antwerp embodying Le Corbusier's Five Points of Architecture"],
  ["be-13", "The Great Spa Towns of Europe (Spa)", "Belgium", "BE", "Wallonia", 2021, "Historic town that gave its name to all mineral bathing spas, patronized by European royalty since the 18th century"],
  ["be-14", "Colonies of Benevolence (Wortel)", "Belgium", "BE", "Flanders", 2021, "Agricultural social reform colony established in 1822 to rehabilitate vagrants through community farming"],
  ["be-15", "Funerary and Memory Sites of the First World War (Western Front)", "Belgium", "BE", "Flanders / Wallonia", 2023, "Military cemeteries and memorials honoring fallen soldiers of WWI including Menin Gate in Ypres and Tyne Cot"],
  ["be-16", "Ancient and Primeval Beech Forests (Sonian Forest)", "Belgium", "BE", "Brussels / Flanders", 2017, "Intact post-glacial European beech forest on the edge of Brussels"],

  // =========================================================================
  // AUSTRIA (AT) - All 12 Inscribed Sites
  // =========================================================================
  ["at-1", "Historic Centre of Vienna", "Austria", "AT", "Vienna", 2001, "Habsburg imperial capital featuring St. Stephen's Cathedral (Stephansdom), Hofburg Palace, Ringstraße boulevard, and Belvedere Palace"],
  ["at-2", "Palace and Gardens of Schönbrunn", "Austria", "AT", "Vienna", 1996, "Baroque summer imperial residence of the Habsburg monarchs with 1,441 rooms, Gloriette colonnade, and world's oldest zoo"],
  ["at-3", "Historic Centre of the City of Salzburg", "Austria", "AT", "Salzburg", 1996, "Birthplace of Wolfgang Amadeus Mozart overlooked by the cliffside Hohensalzburg Fortress and Mirabell Palace gardens"],
  ["at-4", "Hallstatt-Dachstein / Salzkammergut Cultural Landscape", "Austria", "AT", "Upper Austria", 1997, "Picturesque lakeside alpine village of Hallstatt, 7,000-year-old salt mines, and Dachstein ice caves"],
  ["at-5", "Semmering Railway", "Austria", "AT", "Lower Austria / Styria", 1998, "World's first standard-gauge mountain railway built across alpine passes using stone arched viaducts and tunnels (1854)"],
  ["at-6", "City of Graz – Historic Centre and Schloss Eggenberg", "Austria", "AT", "Styria", 1999, "Central European urban ensemble blending Gothic and Italian Renaissance courtyards with Schloss Eggenberg palace"],
  ["at-7", "Wachau Cultural Landscape", "Austria", "AT", "Lower Austria", 2000, "Danube river valley lined with terraced Grüner Veltliner vineyards, Melk Abbey yellow baroque monastery, and Dürnstein castle"],
  ["at-8", "Fertö / Neusiedlersee Cultural Landscape", "Austria", "AT", "Burgenland", 2001, "Shallow endorheic steppe reed lake on the Hungarian border harboring rich birdlife and traditional wine cellars"],
  ["at-9", "Prehistoric Pile Dwellings (Austrian section)", "Austria", "AT", "Carinthia / Upper Austria", 2011, "Submerged lakeshore stilt villages in Attersee, Mondsee, and Keutschacher See dating to 4000 BC"],
  ["at-10", "The Great Spa Towns of Europe (Baden bei Wien)", "Austria", "AT", "Lower Austria", 2021, "Biedermeier mineral spa resort patronized by Emperor Franz I and composer Ludwig van Beethoven"],
  ["at-11", "Frontiers of the Roman Empire – The Danube Limes (Western Segment)", "Austria", "AT", "Lower Austria", 2021, "Roman legionary fortresses and watchtowers guarding the Danube border including Carnuntum"],
  ["at-12", "Ancient and Primeval Beech Forests (Kalkalpen & Dürrenstein)", "Austria", "AT", "Lower Austria / Upper Austria", 2017, "Pristine old-growth European beech forests in Kalkalpen National Park and wilderness reserves"],

  // =========================================================================
  // CZECH REPUBLIC (CZ) - All 17 Inscribed Sites
  // =========================================================================
  ["cz-1", "Historic Centre of Prague", "Czech Republic", "CZ", "Prague", 1992, "City of a Hundred Spires featuring Prague Castle (Hradčany), St. Vitus Cathedral, Charles Bridge over the Vltava, and Old Town Square Astronomical Clock"],
  ["cz-2", "Historic Centre of Český Krumlov", "Czech Republic", "CZ", "South Bohemia", 1992, "Meandering Vltava river town with Renaissance castle, baroque revolving theatre, and pastel townhouses"],
  ["cz-3", "Historic Centre of Telč", "Czech Republic", "CZ", "Vysočina", 1992, "Fairy-tale triangular town square lined with Renaissance and Baroque gabled merchant houses and ponds"],
  ["cz-4", "Pilgrimage Church of St John of Nepomuk at Zelená Hora", "Czech Republic", "CZ", "Vysočina", 1994, "Baroque Gothic church designed by Jan Blažej Santini-Aichel in the shape of a five-pointed star"],
  ["cz-5", "Kutná Hora: Historical Town Centre with St Barbara Church", "Czech Republic", "CZ", "Central Bohemia", 1995, "Medieval silver mining boomtown featuring soaring Gothic St Barbara's Cathedral and Sedlec Ossuary bone church"],
  ["cz-6", "Lednice-Valtice Cultural Landscape", "Czech Republic", "CZ", "South Moravia", 1996, "Vast landscaped English park connecting neo-Gothic Lednice chateau, Valtice palace, and colonnades"],
  ["cz-7", "Gardens and Castle at Kroměříž", "Czech Republic", "CZ", "Zlín", 1998, "Baroque prince-bishop residence featuring the Pleasure Garden (Květná zahrada) and Archbishop's Chateau"],
  ["cz-8", "Holašovice Historic Village", "Czech Republic", "CZ", "South Bohemia", 1998, "Intact traditional Bohemian village featuring 'Folk Baroque' painted plaster gables and village green"],
  ["cz-9", "Litomyšl Castle", "Czech Republic", "CZ", "Pardubice", 1999, "Italianate Renaissance arcade chateau adorned with elaborate sgraffito wall decorations and birthplace of Bedřich Smetana"],
  ["cz-10", "Holy Trinity Column in Olomouc", "Czech Republic", "CZ", "Olomouc", 2000, "Monumental 35-meter-high baroque plague column decorated with gilded copper statues and chapel in the main square"],
  ["cz-11", "Tugendhat Villa in Brno", "Czech Republic", "CZ", "South Moravia", 2001, "Icon of functionalist modern architecture designed by Ludwig Mies van der Rohe featuring onyx wall and glass windows"],
  ["cz-12", "Jewish Quarter and St Procopius' Basilica in Třebíč", "Czech Republic", "CZ", "Vysočina", 2003, "Preserved Jewish ghetto with narrow lanes, two synagogues, Jewish cemetery, and Romanesque basilica"],
  ["cz-13", "Erzgebirge/Krušnohoří Mining Region (Czech section)", "Czech Republic", "CZ", "Karlovy Vary", 2019, "Ore Mountains silver and cobalt mines that minted the original thaler silver coin (origin of the word dollar)"],
  ["cz-14", "Landscape for Breeding of Ceremonial Carriage Horses at Kladruby", "Czech Republic", "CZ", "Pardubice", 2019, "Imperial stud farm dedicated to breeding white Kladruber ceremonial carriage horses for the Habsburg court since 1579"],
  ["cz-15", "The Great Spa Towns of Europe (Karlovy Vary, Mariánské Lázně, Františkovy Lázně)", "Czech Republic", "CZ", "West Bohemia", 2021, "Bohemian spa triangle celebrated for hot mineral geysers, colonnades, and Belle Époque cure culture"],
  ["cz-16", "Ancient and Primeval Beech Forests (Jizera Mountains)", "Czech Republic", "CZ", "Liberec", 2021, "Pristine old-growth European beech forest stands on steep northern slopes of the Jizera Mountains"],
  ["cz-17", "Žatec and the Landscape of Saaz Hops", "Czech Republic", "CZ", "Ústí nad Labem", 2023, "Global center of Saaz noble hops cultivation and drying kilns essential to the brewing of Pilsner lager beer"],

  // =========================================================================
  // CROATIA (HR) - All 10 Inscribed Sites
  // =========================================================================
  ["hr-1", "Old City of Dubrovnik", "Croatia", "HR", "Dubrovnik-Neretva", 1979, "The 'Pearl of the Adriatic' with intact stone city walls, Stradun promenade, and filming location for King's Landing in Game of Thrones"],
  ["hr-2", "Plitvice Lakes National Park", "Croatia", "HR", "Lika-Senj", 1979, "Sixteen cascading crystal-clear turquoise terraced lakes linked by waterfalls through natural travertine limestone dams"],
  ["hr-3", "Historical Complex of Split with the Palace of Diocletian", "Croatia", "HR", "Split-Dalmatia", 1979, "Colossal Roman Emperor Diocletian's retirement palace (AD 305) integrated into the living coastal city with Peristyle"],
  ["hr-4", "Historic City of Trogir", "Croatia", "HR", "Split-Dalmatia", 1997, "Medieval island walled town featuring the Romanesque Cathedral of St Lawrence with master Radovan's carved portal"],
  ["hr-5", "Episcopal Complex of the Euphrasian Basilica in Poreč", "Croatia", "HR", "Istria", 1997, "Sixth-century early Byzantine basilica adorned with shimmering gold wall mosaics matching those of Ravenna"],
  ["hr-6", "The Cathedral of St James in Šibenik", "Croatia", "HR", "Šibenik-Knin", 2000, "Renaissance stone cathedral built entirely of interlocking limestone and marble slabs by Juraj Dalmatinac without mortar"],
  ["hr-7", "Stari Grad Plain, Hvar", "Croatia", "HR", "Split-Dalmatia", 2008, "Ancient Greek agricultural land division grid (chora) on Hvar island cultivated with olives and grapes since 4th century BC"],
  ["hr-8", "Stećci Medieval Tombstones Graveyards (Croatian sites)", "Croatia", "HR", "Dalmatia", 2016, "Monolithic medieval stone tombstones decorated with decorative relief carvings across mountain passes"],
  ["hr-9", "Venetian Works of Defence: Zadar and St Nicholas Fortress", "Croatia", "HR", "Dalmatia", 2017, "City walls of Zadar and sea-bound star fortress of St Nicholas guarding the entrance to Šibenik canal"],
  ["hr-10", "Ancient and Primeval Beech Forests (Paklenica and Northern Velebit)", "Croatia", "HR", "Lika-Senj / Zadar", 2017, "Old-growth European beech forests preserved in the Velebit karst mountain massifs"],

  // =========================================================================
  // SWEDEN (SE) - All 15 Inscribed Sites
  // =========================================================================
  ["se-1", "Royal Domain of Drottningholm", "Sweden", "SE", "Stockholm", 1991, "Private royal residence on Lake Mälaren featuring 18th-century court theatre with original wooden stage machinery and Chinese Pavilion"],
  ["se-2", "Birka and Hovgården", "Sweden", "SE", "Stockholm", 1993, "Viking trading hub on Björkö island occupied during the 8th to 10th centuries with burial mounds and hill fort"],
  ["se-3", "Engelsberg Ironworks", "Sweden", "SE", "Västmanland", 1993, "Best-preserved 17th- and 18th-century Swedish blast furnace, waterwheel, and forge representing industrial ironmaking"],
  ["se-4", "Rock Carvings in Tanum", "Sweden", "SE", "Västra Götaland", 1994, "Extensive Nordic Bronze Age rock art petroglyphs depicting longships, warriors, and hunting rituals"],
  ["se-5", "Skogskyrkogården (Woodland Cemetery)", "Sweden", "SE", "Stockholm", 1994, "Landscape cemetery designed by Gunnar Asplund and Sigurd Lewerentz integrating pines, graves, and classical chapels"],
  ["se-6", "Hanseatic Town of Visby", "Sweden", "SE", "Gotland", 1995, "Walled Baltic trading city on Gotland preserved with 3.4 km stone defensive ring-wall (Ringmuren) and Gothic church ruins"],
  ["se-7", "Church Town of Gammelstad, Luleå", "Sweden", "SE", "Norrbotten", 1996, "Over 400 red wooden church cottages built around a 15th-century stone church for parishioners attending Sunday mass"],
  ["se-8", "Laponian Area", "Sweden", "SE", "Norrbotten", 1996, "Arctic mountain wilderness in northern Sweden stewarded by indigenous Sámi reindeer-herding communities"],
  ["se-9", "Naval Port of Karlskrona", "Sweden", "SE", "Blekinge", 1998, "Planned naval base built by King Charles XI in 1680 to project power in the Baltic Sea with ropewalk and shipyards"],
  ["se-10", "Agricultural Landscape of Southern Öland", "Sweden", "SE", "Kalmar", 2000, "Limestone Stora Alvaret plateau with pastoral grazing traditions and Iron Age ringforts dating to prehistory"],
  ["se-11", "High Coast / Kvarken Archipelago (Swedish section)", "Sweden", "SE", "Västernorrland", 2000, "Rapid post-glacial land uplift rising 285 meters from the Gulf of Bothnia exposing geological strata"],
  ["se-12", "Mining Area of the Great Copper Mountain in Falun", "Sweden", "SE", "Dalarna", 2001, "Great Pit open-cast copper mine that supplied two-thirds of Europe's copper and originated the iconic Falu red paint"],
  ["se-13", "Grimeton Radio Station, Varberg", "Sweden", "SE", "Halland", 2004, "Only operational transatlantic Alexanderson alternator radio transmitter from the 1920s with steel towers"],
  ["se-14", "Struve Geodetic Arc (Swedish section)", "Sweden", "SE", "Norrbotten", 2005, "Triangulation measurement survey stations determining the exact size and shape of Earth across Lapland"],
  ["se-15", "Decorated Farmhouses of Hälsingland", "Sweden", "SE", "Gävleborg", 2012, "Large timber farmhouses decorated with festive folk-art wall murals and textile stencils for weddings"],

  // =========================================================================
  // NORWAY (NO) - All 8 Inscribed Sites
  // =========================================================================
  ["no-1", "Urnes Stave Church", "Norway", "NO", "Vestland", 1979, "Oldest surviving wooden stave church with exquisite 11th-century Viking animal-style woodcarvings overlooking Lustrafjord"],
  ["no-2", "Bryggen", "Norway", "NO", "Vestland", 1979, "Historic Hanseatic wooden trading wharves along the Bergen harbor front with narrow passages and stockfish warehouses"],
  ["no-3", "Røros Mining Town and the Circumference", "Norway", "NO", "Trøndelag", 1980, "High-mountain copper mining town built with pitch-coated log timber houses and slag heaps in subarctic climate"],
  ["no-4", "Rock Art of Alta", "Norway", "NO", "Finnmark", 1985, "Prehistoric petroglyph panels on the shores of Alta Fjord in the Arctic depicting reindeer, bears, and shamans (4200 BC)"],
  ["no-5", "Vegaøyan – The Vega Archipelago", "Norway", "NO", "Nordland", 2004, "Sub-Arctic island cultural landscape illustrating centuries of sustainable eider-down harvesting and fishing"],
  ["no-6", "Struve Geodetic Arc (Norwegian section)", "Norway", "NO", "Finnmark", 2005, "Northern terminus of the triangulation survey arc marked at Fuglenes in Hammerfest on the Barents Sea"],
  ["no-7", "West Norwegian Fjords – Geirangerfjord and Nærøyfjord", "Norway", "NO", "Møre og Romsdal / Vestland", 2005, "Dramatic narrow fjords with sheer crystalline rock walls rising 1,400 meters and cascading waterfalls (Seven Sisters)"],
  ["no-8", "Rjukan-Notodden Industrial Heritage Site", "Norway", "NO", "Telemark", 2015, "Hydroelectric power plants, transmission lines, and synthetic fertilizer factories engineered by Norsk Hydro in mountain valleys"],

  // =========================================================================
  // FINLAND (FI) - All 7 Inscribed Sites
  // =========================================================================
  ["fi-1", "Fortress of Suomenlinna", "Finland", "FI", "Uusimaa", 1991, "Bastion sea fortress spanning six islands defending Helsinki harbor, built by Sweden in 1748 as Sveaborg"],
  ["fi-2", "Old Rauma", "Finland", "FI", "Satakunta", 1991, "Largest unified wooden town in the Nordic countries with 600 painted timber houses and lacemaking heritage"],
  ["fi-3", "Petäjävesi Old Church", "Finland", "FI", "Central Finland", 1994, "Log-built Lutheran country church combining Gothic architectural forms with traditional Nordic log construction (1764)"],
  ["fi-4", "Verla Groundwood and Board Mill", "Finland", "FI", "Kymenlaakso", 1996, "Rural 19th-century water-powered wood-pulp and cardboard mill complex preserved intact on the Kymi river"],
  ["fi-5", "Bronze Age Burial Site of Sammallahdenmäki", "Finland", "FI", "Satakunta", 1999, "Over thirty granite stone burial cairns (including the Church Floor cairn) perched on a rocky ridge"],
  ["fi-6", "Kvarken Archipelago (Finnish section)", "Finland", "FI", "Ostrobothnia", 2000, "Shallow moraine archipelago rising rapidly from the sea through post-glacial land rebound beside Sweden's High Coast"],
  ["fi-7", "Struve Geodetic Arc (Finnish section)", "Finland", "FI", "Multi-region", 2005, "Triangulation stations across Finland including the Oravivuori triangulation tower determining the shape of Earth"],

  // =========================================================================
  // MOROCCO (MA) - All 9 Inscribed Sites
  // =========================================================================
  ["ma-1", "Medina of Fez", "Morocco", "MA", "Fès-Meknès", 1981, "World's largest car-free urban area holding the 9th-century University of al-Qarawiyyin, Chouara tannery, and Bou Inania Madrasa"],
  ["ma-2", "Medina of Marrakesh", "Morocco", "MA", "Marrakesh-Safi", 1985, "Jemaa el-Fnaa square with storytellers, Koutoubia Mosque minaret, Bahia Palace, and traditional souks"],
  ["ma-3", "Ksar of Ait-Ben-Haddou", "Morocco", "MA", "Drâa-Tafilalet", 1987, "Traditional pre-Saharan earthen clay fortified ksar along the Ounila River, backdrop for Gladiator and Lawrence of Arabia"],
  ["ma-4", "Historic City of Meknes", "Morocco", "MA", "Fès-Meknès", 1996, "Ismailian royal capital surrounded by high defensive walls with Bab El-Mansour gate and royal stables"],
  ["ma-5", "Archaeological Site of Volubilis", "Morocco", "MA", "Fès-Meknès", 1997, "Ancient Roman colonial outpost famed for intact floor mosaics, triumphal arch of Caracalla, and basilica"],
  ["ma-6", "Medina of Tétouan", "Morocco", "MA", "Tanger-Tetouan-Al Hoceima", 1997, "Andalusian-influenced medina settled by refugees following the Spanish Reconquista with white architecture"],
  ["ma-7", "Medina of Essaouira (formerly Mogador)", "Morocco", "MA", "Marrakesh-Safi", 2001, "Fortified 18th-century Atlantic port town designed by French architect Cornut with seaside ramparts (Skala de la Ville)"],
  ["ma-8", "Portuguese City of Mazagan (El Jadida)", "Morocco", "MA", "Casablanca-Settat", 2004, "Renaissance bastion fortifications and subterranean vaulted Manueline Gothic cistern on the Atlantic coast"],
  ["ma-9", "Rabat, Modern Capital and Historic City", "Morocco", "MA", "Rabat-Salé-Kénitra", 2012, "Hassan Tower minaret, Kasbah of the Udayas, Chellah necropolis, and French protectorate new town"],

  // =========================================================================
  // TUNISIA (TN) - All 9 Inscribed Sites
  // =========================================================================
  ["tn-1", "Amphitheatre of El Jem", "Tunisia", "TN", "Mahdia", 1979, "Colossal Roman stone amphitheatre seating 35,000 spectators, one of the best-preserved Roman arenas in the world"],
  ["tn-2", "Archaeological Site of Carthage", "Tunisia", "TN", "Tunis", 1979, "Capital of the ancient Phoenician Punic Empire founded by Queen Dido, Roman Antonine Baths, and Byrsa Hill ruins"],
  ["tn-3", "Medina of Tunis", "Tunisia", "TN", "Tunis", 1979, "Al-Zaytuna Mosque, palaces, madrasas, and traditional souks reflecting Islamic golden age architecture"],
  ["tn-4", "Ichkeul National Park", "Tunisia", "TN", "Bizerte", 1980, "Freshwater lake and marshlands hosting hundreds of thousands of wintering migratory waterbirds and ducks"],
  ["tn-5", "Punic Town of Kerkuane and its Necropolis", "Tunisia", "TN", "Nabeul", 1985, "Only surviving purely Phoenician Punic town layout unaffected by later Roman rebuilding, with bathtubs"],
  ["tn-6", "Kairouan", "Tunisia", "TN", "Kairouan", 1988, "Fourth holy city of Islam featuring the Great Mosque of Kairouan (Mosque of Uqba) and Aghlabid water basins"],
  ["tn-7", "Medina of Sousse", "Tunisia", "TN", "Sousse", 1988, "Coastal fortress medina featuring the Ribat of Sousse, Kasbah tower, and fortified Grand Mosque on the Mediterranean"],
  ["tn-8", "Dougga / Thugga", "Tunisia", "TN", "Béja", 1997, "Best-preserved ancient Roman small town in North Africa featuring the Capitoline temple, theatre, and Libyco-Punic Mausoleum"],
  ["tn-9", "Djerba: Testimony to a Settlement Pattern in an Island Territory", "Tunisia", "TN", "Médenine", 2023, "Island settlements adapting to water scarcity with fortified mosques, menzel domestic estates, and El Ghriba synagogue"],

  // =========================================================================
  // ARGENTINA (AR) - All 12 Inscribed Sites
  // =========================================================================
  ["ar-1", "Los Glaciares National Park", "Argentina", "AR", "Santa Cruz", 1981, "Perito Moreno advancing glacier calving icebergs into Lake Argentino and the jagged granite spires of Mount Fitz Roy"],
  ["ar-2", "Iguazu National Park (Argentine side)", "Argentina", "AR", "Misiones", 1984, "Panoramic walkways above the Devil's Throat (Garganta del Diablo) and 275 waterfalls in the subtropical jungle"],
  ["ar-3", "Cueva de las Manos, Río Pinturas", "Argentina", "AR", "Santa Cruz", 1999, "Cave wall stencils of human hands and guanaco hunting scenes painted 9,000 years ago in a Patagonian canyon"],
  ["ar-4", "Península Valdés", "Argentina", "AR", "Chubut", 1999, "Patagonian marine haven for breeding southern right whales, orcas beach-hunting sea lions, and elephant seals"],
  ["ar-5", "Ischigualasto / Talampaya Natural Parks", "Argentina", "AR", "San Juan / La Rioja", 2000, "Desert canyon badlands holding the world's most complete continental fossil record of the Triassic dinosaur explosion"],
  ["ar-6", "Jesuit Block and Estancias of Córdoba", "Argentina", "AR", "Córdoba", 2000, "Core university, church, and outlying farming ranches run by 17th-century Jesuits in central Argentina"],
  ["ar-7", "Quebrada de Humahuaca", "Argentina", "AR", "Jujuy", 2003, "Vibrant multi-colored mountain gorge featuring the Hill of Seven Colors at Purmamarca and Inca trade trails"],
  ["ar-8", "Los Alerces National Park", "Argentina", "AR", "Chubut", 2017, "Glacial Patagonian Andean lakes and ancient alerce trees (Fitzroya) living over 3,000 years"],
  ["ar-9", "ESMA Site Museum – Former Clandestine Centre", "Argentina", "AR", "Buenos Aires", 2023, "Naval Mechanics School that served as secret detention and torture center during the 1976-1983 military dictatorship"],
  ["ar-10", "Jesuit Missions of the Guaranis (Argentina)", "Argentina", "AR", "Misiones", 1984, "San Ignacio Miní red sandstone ruins built in the jungle by Jesuits and Guarani communities"],
  ["ar-11", "Qhapaq Ñan (Argentine section)", "Argentina", "AR", "Andes", 2014, "Inca high mountain road network crossing the Andes down to the high-altitude Llullaillaco volcano"],
  ["ar-12", "Architectural Work of Le Corbusier (Curutchet House)", "Argentina", "AR", "Buenos Aires Province", 2016, "Modernist private home and medical clinic built by Le Corbusier in La Plata featuring ramp and tree"],

  // =========================================================================
  // COLOMBIA (CO) - All 9 Inscribed Sites
  // =========================================================================
  ["co-1", "Port, Fortresses and Monument Group, Cartagena", "Colombia", "CO", "Bolívar", 1984, "Spanish colonial Caribbean walled city featuring Castillo San Felipe de Barajas, ramparts, and pastel balconies"],
  ["co-2", "Los Katíos National Park", "Colombia", "CO", "Chocó / Antioquia", 1994, "Dense rainforest wilderness bridge spanning the Darién Gap between Central and South America"],
  ["co-3", "Historic Centre of Santa Cruz de Mompox", "Colombia", "CO", "Bolívar", 1995, "Colonial river port along the Magdalena River where architecture adapted to seasonal floods"],
  ["co-4", "National Archeological Park of Tierradentro", "Colombia", "CO", "Cauca", 1995, "Underground pre-Columbian subterranean tomb chambers (hypogea) painted with geometric red-and-black murals"],
  ["co-5", "San Agustín Archaeological Park", "Colombia", "CO", "Huila", 1995, "Largest collection of pre-Columbian megalithic stone sculptures and warrior statues in South America"],
  ["co-6", "Malpelo Fauna and Flora Sanctuary", "Colombia", "CO", "Valle del Cauca (Pacific)", 2006, "Isolated oceanic rock island in the Eastern Pacific teeming with massive hammerhead shark aggregations"],
  ["co-7", "Coffee Cultural Landscape of Colombia", "Colombia", "CO", "Caldas / Quindío", 2011, "Steep Andean mountain slopes cultivated with coffee Arabica, colorful colonial towns, and wax palms in Cocora Valley"],
  ["co-8", "Chiribiquete National Park – 'The Maloca of the Jaguar'", "Colombia", "CO", "Caquetá / Guaviare", 2018, "Tepui table mountains in the Amazon wilderness holding 75,000 prehistoric rock paintings (12,000 BC)"],
  ["co-9", "Qhapaq Ñan (Colombian section)", "Colombia", "CO", "Nariño", 2014, "Northernmost reaches of the Inca road system extending into southern Colombia"],

  // =========================================================================
  // CHILE (CL) - All 7 Inscribed Sites
  // =========================================================================
  ["cl-1", "Rapa Nui National Park (Easter Island)", "Chile", "CL", "Valparaíso (Pacific)", 1995, "Over 900 colossal stone moai statues carved from volcanic tuff at Rano Raraku quarry by Polynesian navigators"],
  ["cl-2", "Churches of Chiloé", "Chile", "CL", "Los Lagos", 2000, "Sixteen wooden timber-shingled churches built by Jesuit and Franciscan missionaries without nails on Chiloé island"],
  ["cl-3", "Historic Quarter of the Seaport City of Valparaíso", "Chile", "CL", "Valparaíso", 2003, "Coastal amphitheatre city featuring colorful hillside houses, street art, and historic funicular elevators (ascensores)"],
  ["cl-4", "Humberstone and Santa Laura Saltpeter Works", "Chile", "CL", "Tarapacá", 2005, "Ghost towns in the Atacama Desert where 200 saltpeter extraction plants mined white gold fertilizer"],
  ["cl-5", "Sewell Mining Town", "Chile", "CL", "O'Higgins", 2006, "Company town built high in the Andes for workers of El Teniente, the world's largest underground copper mine"],
  ["cl-6", "Settlement and Artificial Mummification of the Chinchorro Culture", "Chile", "CL", "Arica y Parinacota", 2021, "Oldest artificially prepared human mummies in the world (5000 BC), pre-dating Egyptian mummification by two millennia"],
  ["cl-7", "Qhapaq Ñan (Chilean section)", "Chile", "CL", "Atacama / Antofagasta", 2014, "Inca roads traversing the hyper-arid Atacama Desert to copper and turquoise mines"],

  // =========================================================================
  // ECUADOR (EC) - All 5 Inscribed Sites
  // =========================================================================
  ["ec-1", "Galápagos Islands", "Ecuador", "EC", "Galápagos", 1978, "Volcanic archipelago whose fearless wildlife inspired Charles Darwin's theory of evolution by natural selection"],
  ["ec-2", "City of Quito", "Ecuador", "EC", "Pichincha", 1978, "First city inscribed on the UNESCO list, high Andean colonial capital with Church of the Society of Jesus (La Compañía)"],
  ["ec-3", "Historic Centre of Santa Ana de los Ríos de Cuenca", "Ecuador", "EC", "Azuay", 1999, "Colonial planned town along the Tomebamba River famed for cobblestone streets, cathedral, and Panama hat weaving"],
  ["ec-4", "Sangay National Park", "Ecuador", "EC", "Morona-Santiago", 1983, "Active Tungurahua and Sangay stratovolcanoes descending into lush Amazonian cloud forests"],
  ["ec-5", "Qhapaq Ñan (Ecuadorian section)", "Ecuador", "EC", "Andes", 2014, "Inca highway connecting imperial centers from Quito south to Tomebamba (Cuenca) and Ingapirca"],

  // =========================================================================
  // BOLIVIA (BO) - All 7 Inscribed Sites
  // =========================================================================
  ["bo-1", "City of Potosí", "Bolivia", "BO", "Potosí", 1987, "Rich mountain of Cerro Rico that supplied silver to the Spanish Empire, Casa de la Moneda, and baroque churches"],
  ["bo-2", "Jesuit Missions of the Chiquitos", "Bolivia", "BO", "Santa Cruz", 1990, "Six living wooden church villages that survived the expulsion of the Jesuits with baroque music heritage"],
  ["bo-3", "Historic City of Sucre", "Bolivia", "BO", "Chuquisaca", 1991, "White-walled constitutional capital with Casa de la Libertad where Bolivian independence was proclaimed"],
  ["bo-4", "Fuerte de Samaipata", "Bolivia", "BO", "Santa Cruz", 1998, "Colossal carved sandstone hill with ceremonial jaguar carvings marking the eastern frontier of the Inca Empire"],
  ["bo-5", "Tiwanaku: Spiritual and Political Centre", "Bolivia", "BO", "La Paz", 2000, "Pre-Inca monumental stone temple capital near Lake Titicaca featuring the Gate of the Sun and Kalasasaya temple"],
  ["bo-6", "Noel Kempff Mercado National Park", "Bolivia", "BO", "Santa Cruz", 2000, "Huanchaca sandstone table mountain plateau, waterfalls, and pristine Amazonian biodiversity"],
  ["bo-7", "Qhapaq Ñan (Bolivian section)", "Bolivia", "BO", "La Paz", 2014, "Inca road circuits around Lake Titicaca and descending the Desaguadero valley"],

  // =========================================================================
  // CUBA (CU) - All 9 Inscribed Sites
  // =========================================================================
  ["cu-1", "Old Havana and its Fortification System", "Cuba", "CU", "Havana", 1982, "Colonial Spanish Caribbean plazas (Plaza Vieja, Plaza de la Catedral) and Morro Castle protecting Havana Bay"],
  ["cu-2", "Trinidad and Valley de los Ingenios", "Cuba", "CU", "Sancti Spíritus", 1988, "Preserved 19th-century sugar boom town with pastel cobblestone streets and Iznaga estate slave tower"],
  ["cu-3", "San Pedro de la Roca Castle, Santiago de Cuba", "Cuba", "CU", "Santiago de Cuba", 1997, "Multi-tiered Spanish Renaissance stone coastal fortress engineered by Antonelli to ward off pirates"],
  ["cu-4", "Desembarco del Granma National Park", "Cuba", "CU", "Granma", 1999, "Dramatic uplifted marine limestone terraces and site where Fidel Castro and Che Guevara landed in 1956"],
  ["cu-5", "Viñales Valley", "Cuba", "CU", "Pinar del Río", 1999, "Karst limestone mogote hills and traditional ox-plowed tobacco plantations producing world-famous Cuban cigars"],
  ["cu-6", "Archaeological Landscape of the First Coffee Plantations in the South-East of Cuba", "Cuba", "CU", "Santiago / Guantánamo", 2000, "Nineteenth-century coffee estate ruins in the Sierra Maestra established by French Haitian refugees"],
  ["cu-7", "Alejandro de Humboldt National Park", "Cuba", "CU", "Holguín / Guantánamo", 2001, "Most biologically diverse island rainforest reserve in the Caribbean holding endemic Cuban solenodons"],
  ["cu-8", "Urban Historic Centre of Cienfuegos", "Cuba", "CU", "Cienfuegos", 2005, "Nineteenth-century neoclassical port city settled by French immigrants featuring the Palacio de Valle"],
  ["cu-9", "Historic Centre of Camagüey", "Cuba", "CU", "Camagüey", 2008, "Labyrinthine urban layout designed to confuse pirate invaders, famed for massive earthenware clay water jars (tinajones)"],

  // =========================================================================
  // GUATEMALA (GT) - All 4 Inscribed Sites
  // =========================================================================
  ["gt-1", "Tikal National Park", "Guatemala", "GT", "Petén", 1979, "Classical Mayan forest metropolis with soaring limestone Temple I (Temple of the Great Jaguar), Temple IV, and howler monkeys"],
  ["gt-2", "Antigua Guatemala", "Guatemala", "GT", "Sacatepéquez", 1979, "Colonial capital preserved with Baroque church ruins, Santa Catalina Arch, and cobbled streets framed by Volcán de Agua"],
  ["gt-3", "Archaeological Park and Ruins of Quiriguá", "Guatemala", "GT", "Izabal", 1981, "Ancient Mayan civic center famed for the tallest carved stone stelae and zoomorphic zoomorph sculptures in the Maya world"],
  ["gt-4", "National Archaeological Park Tak'alik Ab'aj", "Guatemala", "GT", "Retalhuleu", 2023, "Ancient ceremonial city illustrating the transition from Olmec civilization to early Maya culture on the Pacific coast"],

  // =========================================================================
  // COSTA RICA (CR) - All 4 Inscribed Sites
  // =========================================================================
  ["cr-1", "Area de Conservación Guanacaste", "Costa Rica", "CR", "Guanacaste", 1999, "Crucial tropical dry forest sanctuary and marine reserve protecting sea turtles and jaguars"],
  ["cr-2", "Cocos Island National Park (Isla del Coco)", "Costa Rica", "CR", "Puntarenas (Pacific)", 1997, "Remote oceanic island in the Pacific teeming with schooling scalloped hammerhead sharks, rays, and dolphins"],
  ["cr-3", "Talamanca Range-La Amistad Reserves", "Costa Rica", "CR", "San José / Puntarenas", 1990, "High-altitude cloud forest wilderness and glaciated Chirripó peak shared with Panama"],
  ["cr-4", "Precolumbian Chiefdom Settlements with Stone Spheres of the Diquís", "Costa Rica", "CR", "Puntarenas", 2014, "Enigmatic perfectly spherical hand-carved stone balls (Diquís spheres) dating from 500 to 1500 AD"],

  // =========================================================================
  // PANAMA (PA) - All 5 Inscribed Sites
  // =========================================================================
  ["pa-1", "Archaeological Site of Panamá Viejo and Historic District of Panamá", "Panama", "PA", "Panamá", 1997, "Oldest Spanish settlement on the Pacific destroyed by pirate Henry Morgan and Casco Viejo colonial district"],
  ["pa-2", "Fortifications on the Caribbean Side of Portobelo-San Lorenzo", "Panama", "PA", "Colón", 1980, "Spanish military bastions guarding the silver transport route across the isthmus"],
  ["pa-3", "Darien National Park", "Panama", "PA", "Darién", 1981, "Vast jungle boundary between North and South America home to harpy eagles and indigenous Embera communities"],
  ["pa-4", "La Amistad International Park (Panama section)", "Panama", "PA", "Chiriquí / Bocas del Toro", 1990, "Transboundary mountain cloud forest reserve connecting with Costa Rica"],
  ["pa-5", "Coiba National Park and its Special Zone of Marine Protection", "Panama", "PA", "Veraguas", 2005, "Former island penal colony in the Gulf of Chiriquí preserving pristine coral reefs and humpback whales"],

  // =========================================================================
  // SOUTH KOREA (KR) - All 16 Inscribed Sites
  // =========================================================================
  ["kr-1", "Haeinsa Temple Janggyeong Panjeon", "South Korea", "KR", "Gyeongsangnam-do", 1995, "Depository housing the Tripitaka Koreana (81,258 ancient carved wooden printing blocks of Buddhist scriptures)"],
  ["kr-2", "Jongmyo Shrine", "South Korea", "KR", "Seoul", 1995, "Confucian royal ancestral shrine dedicated to the Joseon dynasty kings, preserving ancient ritual court music and rites"],
  ["kr-3", "Seokguram Grotto and Bulguksa Temple", "South Korea", "KR", "Gyeongsangbuk-do", 1995, "Eighth-century granite monumental Buddha gazing out over the East Sea and Bulguksa temple wooden bridges in Gyeongju"],
  ["kr-4", "Changdeokgung Palace Complex", "South Korea", "KR", "Seoul", 1997, "Principal Joseon royal palace harmonized with natural topography, featuring the Secret Garden (Huwon) and lotus pavilions"],
  ["kr-5", "Hwaseong Fortress", "South Korea", "KR", "Gyeonggi-do", 1997, "Eighteenth-century scientific defensive stone fortress wall with floodgates built by King Jeongjo in Suwon"],
  ["kr-6", "Gyeongju Historic Areas", "South Korea", "KR", "Gyeongsangbuk-do", 2000, "Capital of the ancient Silla kingdom with Cheomseongdae astronomical observatory, royal grassy tumuli mounds, and Anapji pond"],
  ["kr-7", "Gochang, Hwasun and Ganghwa Dolmen Sites", "South Korea", "KR", "Multi-region", 2000, "Highest concentration of megalithic stone dolmen burial tombs in the world from the 1st millennium BC"],
  ["kr-8", "Jeju Volcanic Island and Lava Tubes", "South Korea", "KR", "Jeju", 2007, "Hallasan shield volcano, Seongsan Ilchulbong sunrise tuff cone, and Geomunoreum multicolored lava tube caves"],
  ["kr-9", "Royal Tombs of the Joseon Dynasty", "South Korea", "KR", "Multi-region", 2009, "Forty royal burial mounds constructed over five centuries according to Confucian and pungsu (geomancy) principles"],
  ["kr-10", "Historic Villages of Korea: Hahoe and Yangdong", "South Korea", "KR", "Gyeongsangbuk-do", 2010, "Clan villages preserving aristocratic Joseon lineage culture, wooden hanok pavilions, and straw-roofed cottages"],
  ["kr-11", "Namhansanseong", "South Korea", "KR", "Gyeonggi-do", 2014, "Emergency mountain fortified capital capable of accommodating 4,000 residents during the Manchu invasions"],
  ["kr-12", "Baekje Historic Areas", "South Korea", "KR", "Chungcheong / Jeolla", 2015, "Fortresses, royal tombs, and temples of the ancient Baekje kingdom in Buyeo, Gongju, and Iksan"],
  ["kr-13", "Sansa, Buddhist Mountain Monasteries in Korea", "South Korea", "KR", "Multi-region", 2018, "Seven secluded mountain temples practicing continuous daily Seon (Zen) Buddhist rituals since the 7th century"],
  ["kr-14", "Seowon, Korean Neo-Confucian Academies", "South Korea", "KR", "Multi-region", 2019, "Nine private academies dedicated to learning and memorializing Joseon dynasty Neo-Confucian philosophers"],
  ["kr-15", "Getbol, Korean Tidal Flats", "South Korea", "KR", "Yellow Sea", 2021, "Vast coastal mudflats supporting millions of endangered migratory shorebirds on the East Asian-Australasian Flyway"],
  ["kr-16", "Gaya Tumuli", "South Korea", "KR", "Gyeongsang / Jeolla", 2023, "Mounded burial cemeteries of the ancient Gaya Confederacy that traded iron with Japan and China (1st-6th centuries)"],

  // =========================================================================
  // VIETNAM (VN) - All 8 Inscribed Sites
  // =========================================================================
  ["vn-1", "Ha Long Bay - Cat Ba Archipelago", "Vietnam", "VN", "Quang Ninh / Hai Phong", 1994, "Thousands of towering limestone karst islands and islets rising out of emerald sea waters with caves"],
  ["vn-2", "Complex of Hué Monuments", "Vietnam", "VN", "Thua Thien Hue", 1993, "Imperial capital of the Nguyen Dynasty along the Perfume River featuring the Forbidden Purple City and royal tombs"],
  ["vn-3", "Hoi An Ancient Town", "Vietnam", "VN", "Quang Nam", 1999, "Preserved Southeast Asian wooden trading port fusing Vietnamese, Chinese, and Japanese architecture with the Japanese Covered Bridge"],
  ["vn-4", "My Son Sanctuary", "Vietnam", "VN", "Quang Nam", 1999, "Hindu brick tower temples constructed by the kings of Champa in a valley overlooked by Cat's Tooth Mountain"],
  ["vn-5", "Phong Nha-Ke Bang National Park", "Vietnam", "VN", "Quang Binh", 2003, "Oldest karst mountain system in Asia containing the world's largest cave Son Doong and subterranean rivers"],
  ["vn-6", "Central Sector of the Imperial Citadel of Thang Long - Hanoi", "Vietnam", "VN", "Hanoi", 2010, "Political power center for 13 consecutive centuries holding Hanoi flag tower and royal palace foundations"],
  ["vn-7", "Citadel of the Ho Dynasty", "Vietnam", "VN", "Thanh Hoa", 2011, "Unique 14th-century fortress constructed using massive stone blocks according to feng shui principles"],
  ["vn-8", "Trang An Landscape Complex", "Vietnam", "VN", "Ninh Binh", 2014, "Mixed cultural-natural site of limestone karst peaks, flooded valleys, caves, and ancient capital Hoa Lu"],

  // =========================================================================
  // THAILAND (TH) - All 8 Inscribed Sites
  // =========================================================================
  ["th-1", "Historic City of Ayutthaya", "Thailand", "TH", "Ayutthaya", 1991, "Ruins of the second Siamese capital destroyed by the Burmese in 1767, Buddha head entwined in banyan tree roots at Wat Mahathat"],
  ["th-2", "Historic Town of Sukhothai and Associated Historic Towns", "Thailand", "TH", "Sukhothai", 1991, "First kingdom of Siam (13th century) cradle of Thai art, walking Buddha statues, and Wat Mahathat temple"],
  ["th-3", "Thungyai-Huai Kha Khaeng Wildlife Sanctuaries", "Thailand", "TH", "Multi-province", 1991, "Largest intact forest conservation complex in mainland Southeast Asia harboring wild tigers and Asian elephants"],
  ["th-4", "Ban Chiang Archaeological Site", "Thailand", "TH", "Udon Thani", 1992, "Prehistoric Bronze Age agricultural settlement famed for red-on-buff painted pottery and early bronze metallurgy"],
  ["th-5", "Dong Phayayen-Khao Yai Forest Complex", "Thailand", "TH", "Northeast", 2005, "Tropical forest corridor supporting endangered Asian elephants, tigers, gibbons, and hornbills"],
  ["th-6", "Kaeng Krachan Forest Complex", "Thailand", "TH", "Phetchaburi", 2021, "Biodiversity crossroads between Indochinese and Sundaic biological zones in the Tenasserim Range"],
  ["th-7", "The Ancient Town of Si Thep and its Associated Dvaravati Monuments", "Thailand", "TH", "Phetchabun", 2023, "Ancient Dvaravati city with moat system and Hindu-Buddhist brick temples (Khao Klang Nok)"],
  ["th-8", "Phu Phrabat, a testimony to the Sīma stone tradition of the Dvaravati period", "Thailand", "TH", "Udon Thani", 2024, "Natural sandstone rock shelters converted into Buddhist shrines demarcated by ancient stone boundary markers"],

  // =========================================================================
  // CAMBODIA (KH) - All 4 Inscribed Sites
  // =========================================================================
  ["kh-1", "Angkor", "Cambodia", "KH", "Siem Reap", 1992, "Vast temple city of the Khmer Empire featuring Angkor Wat (world's largest religious monument), Bayon smiling face towers, and Ta Prohm strangler fig roots"],
  ["kh-2", "Temple of Preah Vihear", "Cambodia", "KH", "Preah Vihear", 2008, "Eleventh-century Khmer temple dedicated to Shiva perched on a 525-meter cliff in the Dângrêk Mountains"],
  ["kh-3", "Temple Zone of Sambor Prei Kuk", "Cambodia", "KH", "Kampong Thom", 2017, "Pre-Angkorian capital of the Chenla Kingdom featuring octagonal brick temples and sandstone lintels"],
  ["kh-4", "Koh Ker: Archaeological Site of Ancient Lingapura", "Cambodia", "KH", "Preah Vihear", 2023, "Tenth-century capital of King Jayavarman IV dominated by the seven-tiered pyramidal temple Prasat Thom"],

  // =========================================================================
  // SAUDI ARABIA (SA) - All 8 Inscribed Sites
  // =========================================================================
  ["sa-1", "Hegra Archaeological Site (al-Hijr / Mada'in Salih)", "Saudi Arabia", "SA", "Al Madinah", 2008, "Monumental tomb facades carved into sandstone mountains by the Nabataeans south of Petra, including Qasr al-Farid"],
  ["sa-2", "At-Turaif District in ad-Dir'iyah", "Saudi Arabia", "SA", "Riyadh", 2010, "First capital of the Saudi dynasty founded in 1744 featuring Najdi adobe mudbrick architecture in Wadi Hanifa"],
  ["sa-3", "Historic Jeddah, the Gate to Makkah", "Saudi Arabia", "SA", "Makkah", 2014, "Red Sea port featuring multi-story coral-stone merchant houses adorned with wooden roshan latticework balconies"],
  ["sa-4", "Rock Art in the Hail Region", "Saudi Arabia", "SA", "Ha'il", 2015, "Petroglyphs at Jubbah and Shuwaymis depicting human and animal figures spanning 10,000 years in the desert"],
  ["sa-5", "Al-Ahsa Oasis, an Evolving Cultural Landscape", "Saudi Arabia", "SA", "Eastern Province", 2018, "Largest self-contained date palm oasis in the world with 2.5 million palms, canal networks, and historic forts"],
  ["sa-6", "Ḥimā Cultural Area", "Saudi Arabia", "SA", "Najran", 2021, "Ancient caravan route well stations with rock petroglyphs carved in Musnad, Aramaic-Nabataean, and Arabic scripts"],
  ["sa-7", "Uruq Bani Ma'arid", "Saudi Arabia", "SA", "Empty Quarter", 2023, "Windblown sand desert dunes in the Rub' al Khali sheltering reintroduced wild Arabian oryx and sand gazelles"],
  ["sa-8", "The Cultural Landscape of Al-Faw Archaeological Area", "Saudi Arabia", "SA", "Riyadh", 2024, "Capital of the ancient Kindah kingdom situated on the trans-Arabian incense trade route"],

  // =========================================================================
  // ISRAEL (IL) - All 9 Inscribed Sites
  // =========================================================================
  ["il-1", "Old City of Jerusalem and its Walls", "Israel / Jerusalem", "IL", "Jerusalem", 1981, "Holy city for Judaism, Christianity, and Islam featuring the Western Wall, Dome of the Rock, Al-Aqsa, and Church of the Holy Sepulchre"],
  ["il-2", "Masada", "Israel", "IL", "Southern", 2001, "King Herod's clifftop desert palace fortress overlooking the Dead Sea and siege ramp of the Jewish Zealots (AD 73)"],
  ["il-3", "Old City of Acre (Akko)", "Israel", "IL", "Northern", 2001, "Crusader underground halls of the Knights Hospitaller and Ottoman fortified citadel on the Mediterranean"],
  ["il-4", "White City of Tel-Aviv – the Modern Movement", "Israel", "IL", "Tel Aviv", 2003, "World's largest concentration of 4,000 Bauhaus and International Style modernist buildings, built by 1930s European refugees"],
  ["il-5", "Biblical Tels – Megiddo, Hazor, Beer Sheba", "Israel", "IL", "Multi-region", 2005, "Multi-layered ancient settlement mounds associated with the Hebrew Bible with subterranean water systems"],
  ["il-6", "Incense Route – Desert Cities in the Negev", "Israel", "IL", "Southern", 2005, "Nabataean desert trading towns (Avdat, Shivta, Mamshit) along the frankincense route from southern Arabia"],
  ["il-7", "Bahá’i Holy Places in Haifa and Western Galilee", "Israel", "IL", "Northern", 2008, "Golden-domed Shrine of the Báb, terraced Persian hillside gardens on Mount Carmel, and Shrine of Bahá'u'lláh at Bahjí"],
  ["il-8", "Sites of Human Evolution at Mount Carmel", "Israel", "IL", "Haifa", 2012, "Nahal Me'arot caves documenting 500,000 years of coexistence between Neanderthals and early anatomically modern humans"],
  ["il-9", "Caves of Maresha and Bet Guvrin", "Israel", "IL", "Southern", 2014, "Subterranean limestone chalk quarry chambers, bell caves, cisterns, and columbaria (dove cotes)"],

  // =========================================================================
  // NEW ZEALAND (NZ) - All 3 Inscribed Sites
  // =========================================================================
  ["nz-1", "Te Wahipounamu – South West New Zealand", "New Zealand", "NZ", "South Island", 1990, "Milford Sound fjords, Mount Cook (Aoraki), Franz Josef Glacier, and temperate rainforests in the Southern Alps"],
  ["nz-2", "Tongariro National Park", "New Zealand", "NZ", "North Island", 1990, "Active volcanic peaks (Mount Ruapehu, Ngauruhoe/Mount Doom) sacred to Maori cultural traditions, Emerald Lakes"],
  ["nz-3", "New Zealand Sub-Antarctic Islands", "New Zealand", "NZ", "Southern Ocean", 1998, "Five isolated island groups in the Roaring Forties harboring endemic yellow-eyed penguins and royal albatrosses"],

  // =========================================================================
  // TANZANIA (TZ) - All 7 Inscribed Sites
  // =========================================================================
  ["tz-1", "Serengeti National Park", "Tanzania", "TZ", "Mara / Simiyu", 1981, "Vast savanna plain hosting the annual Great Migration of two million wildebeest and zebras crossing crocodile rivers"],
  ["tz-2", "Ngorongoro Conservation Area", "Tanzania", "TZ", "Arusha", 1979, "World's largest unbroken volcanic caldera harboring black rhinos, lions, and Olduvai Gorge hominin fossil site"],
  ["tz-3", "Kilimanjaro National Park", "Tanzania", "TZ", "Kilimanjaro", 1987, "Mount Kilimanjaro, Africa's highest mountain peak (5,895 m), an isolated snow-capped stratovolcano"],
  ["tz-4", "Stone Town of Zanzibar", "Tanzania", "TZ", "Zanzibar", 2000, "Swahili coastal trading town with coral rag houses, carved wooden doors, House of Wonders, and slave market history"],
  ["tz-5", "Selous Game Reserve (Nyerere National Park)", "Tanzania", "TZ", "Southern", 1982, "Immense African wilderness savanna bisected by the Rufiji River, stronghold for African wild dogs"],
  ["tz-6", "Ruins of Kilwa Kisiwani and Songo Mnara", "Tanzania", "TZ", "Lindi", 1981, "Medieval Swahili gold and porcelain trading sultanate with the Great Mosque built of coral stone"],
  ["tz-7", "Kondoa Rock-Art Sites", "Tanzania", "TZ", "Dodoma", 2006, "Sandstone cliff shelters decorated with hunter-gatherer and pastoral rock paintings over several millennia"],

  // =========================================================================
  // KENYA (KE) - All 8 Inscribed Sites
  // =========================================================================
  ["ke-1", "Mount Kenya National Park/Natural Forest", "Kenya", "KE", "Central", 1997, "Second highest peak in Africa with rugged glacier-clad summits, Afro-alpine moorland, and sacred Kikuyu heritage"],
  ["ke-2", "Lake Turkana National Parks", "Kenya", "KE", "Rift Valley", 1997, "World's largest permanent desert lake ('Jade Sea') and fossil beds where early hominin skulls were found by Leakey team"],
  ["ke-3", "Lamu Old Town", "Kenya", "KE", "Coast", 2001, "Oldest continuously inhabited Swahili settlement on the East African coast with coral-rag stone buildings and no cars"],
  ["ke-4", "Sacred Mijikenda Kaya Forests", "Kenya", "KE", "Coast", 2008, "Ten coastal forest hilltops holding fortified ancestral villages and burial shrines of the Mijikenda people"],
  ["ke-5", "Fort Jesus, Mombasa", "Kenya", "KE", "Coast", 2011, "Sixteenth-century Portuguese military fortress built in the shape of a man by Giovanni Battista Cairati"],
  ["ke-6", "Kenya Lake System in the Great Rift Valley", "Kenya", "KE", "Rift Valley", 2011, "Lake Bogoria, Nakuru, and Elementaita hosting millions of lesser flamingos feeding on blue-green algae"],
  ["ke-7", "Thimlich Ohinga Archaeological Site", "Kenya", "KE", "Migori", 2018, "Largest dry-stone walled enclosure in the Lake Victoria region built without mortar (16th century)"],
  ["ke-8", "The Historic Town and Archaeological Site of Gedi", "Kenya", "KE", "Kilifi", 2024, "Swahili stone town ruins nestled in coastal forest with palace, mosque, and Chinese porcelain trade artifacts"],

  // =========================================================================
  // SENEGAL (SN) - All 7 Inscribed Sites
  // =========================================================================
  ["sn-1", "Island of Gorée", "Senegal", "SN", "Dakar", 1978, "Atlantic island facing Dakar with the House of Slaves (Maison des Esclaves) and 'Door of No Return', memorial to Atlantic slave trade"],
  ["sn-2", "Niokolo-Koba National Park", "Senegal", "SN", "Tambacounda", 1981, "Gallery forests and savannas along the Gambia River harboring Western giant eland and chimpanzees"],
  ["sn-3", "Djoudj National Bird Sanctuary", "Senegal", "SN", "Saint-Louis", 1981, "Senegal River delta wetland hosting millions of wintering migratory birds including white pelicans"],
  ["sn-4", "Island of Saint-Louis", "Senegal", "SN", "Saint-Louis", 2000, "First French colonial settlement in West Africa on an island in the Senegal River with colonial architecture"],
  ["sn-5", "Stone Circles of Senegambia (Senegalese section)", "Senegal", "SN", "Kaolack", 2006, "Megalithic laterite stone circles marking ancient royal burial grounds across the Gambia River basin"],
  ["sn-6", "Saloum Delta", "Senegal", "SN", "Fatick", 2011, "Mangrove river channels, shellfish mounds, and traditional fishing culture in the Sine-Saloum estuary"],
  ["sn-7", "Bassari Country: Bassari, Fula and Bedik Cultural Landscapes", "Senegal", "SN", "Kédougou", 2012, "Terraced villages nestled in the foothills of Mount Fouta Djallon preserving ancestral rituals"],

  // =========================================================================
  // DEMOCRATIC REPUBLIC OF CONGO (CD) - All 5 Inscribed Sites
  // =========================================================================
  ["cd-1", "Virunga National Park", "DR Congo", "CD", "North Kivu", 1979, "Africa's oldest national park, home to endangered mountain gorillas, active Nyiragongo lava lake, and Rwenzori glaciated peaks"],
  ["cd-2", "Garamba National Park", "DR Congo", "CD", "Haut-Uélé", 1980, "Savannas and gallery forests that served as the last stronghold of the wild northern white rhinoceros"],
  ["cd-3", "Kahuzi-Biega National Park", "DR Congo", "CD", "South Kivu", 1980, "Extinct volcanic domes harboring the world's primary sanctuary for the endangered Eastern lowland gorilla"],
  ["cd-4", "Salonga National Park", "DR Congo", "CD", "Équateur / Kasaï", 1984, "World's largest tropical rainforest national park in the Congo River basin, refuge for the bonobo (pygmy chimpanzee)"],
  ["cd-5", "Okapi Wildlife Reserve", "DR Congo", "CD", "Ituri", 1996, "Dense Ituri rainforest preserving the endemic okapi (forest giraffe), forest elephants, and Mbuti pygmies"],

  // =========================================================================
  // ZIMBABWE (ZW) - All 5 Inscribed Sites
  // =========================================================================
  ["zw-1", "Victoria Falls (Mosi-oa-Tunya)", "Zimbabwe", "ZW", "Matabeleland North", 1989, "World's largest curtain of falling water ('The Smoke That Thunders') spanning 1.7 km on the Zambezi River shared with Zambia"],
  ["zw-2", "Great Zimbabwe National Monument", "Zimbabwe", "ZW", "Masvingo", 1986, "Medieval stone city built by the Shona civilization without mortar, Great Enclosure, and carved soapstone bird emblem"],
  ["zw-3", "Khami Ruins National Monument", "Zimbabwe", "ZW", "Matabeleland North", 1986, "Capital of the Torwa dynasty featuring tiered stone retaining walls and Portuguese trade relics"],
  ["zw-4", "Mana Pools National Park", "Zimbabwe", "ZW", "Mashonaland West", 1984, "Zambezi River floodplain pools attracting massive herds of elephants, hippos, and African wild dogs"],
  ["zw-5", "Matobo Hills", "Zimbabwe", "ZW", "Matabeleland South", 2003, "Granite kopjes balancing rock landforms holding exceptional concentrations of San rock art and Cecil Rhodes grave"],

  // =========================================================================
  // MADAGASCAR (MG) - All 3 Inscribed Sites
  // =========================================================================
  ["mg-1", "Tsingy de Bemaraha Strict Nature Reserve", "Madagascar", "MG", "Melaky", 1990, "Surreal geological labyrinth of razor-sharp vertical limestone karst needles, suspension bridges, and lemurs"],
  ["mg-2", "Rainforests of the Atsinanana", "Madagascar", "MG", "Eastern", 2007, "Six national parks preserving ancient Gondwanan rainforest biodiversity with 25 species of endangered lemurs"],
  ["mg-3", "Royal Hill of Ambohimanga", "Madagascar", "MG", "Analamanga", 2001, "Sacred royal city, palace, and burial grounds of the Merina kings, symbol of Malagasy national identity"],

  // =========================================================================
  // UGANDA (UG) - All 3 Inscribed Sites
  // =========================================================================
  ["ug-1", "Bwindi Impenetrable National Park", "Uganda", "UG", "Western", 1994, "Dense montane mist rainforest harboring half of the world's remaining endangered wild mountain gorillas"],
  ["ug-2", "Rwenzori Mountains National Park", "Uganda", "UG", "Western", 1994, "Legendary 'Mountains of the Moon' featuring glaciated peaks, Mount Stanley (5,109 m), and giant lobelias"],
  ["ug-3", "Tombs of Buganda Kings at Kasubi", "Uganda", "UG", "Kampala", 2001, "Circular organic palace and royal burial shrine constructed of wood, reed, and thatch for the Kabakas of Buganda"],

  // =========================================================================
  // BOTSWANA (BW) - All 2 Inscribed Sites
  // =========================================================================
  ["bw-1", "Okavango Delta", "Botswana", "BW", "North-West", 2014, "World's largest inland endorheic delta where the Okavango River floods the Kalahari desert into a maze of waterways"],
  ["bw-2", "Tsodilo", "Botswana", "BW", "North-West", 2001, "The 'Louvre of the Desert' with over 4,500 rock paintings across four isolated quartzite hills in the Kalahari"],

  // =========================================================================
  // NAMIBIA (NA) - All 2 Inscribed Sites
  // =========================================================================
  ["na-1", "Namib Sand Sea", "Namibia", "NA", "Erongo / Hardap", 2013, "Only coastal desert in the world where fog-nourished dunes (Sossusvlei, Dune 45) meet the Atlantic Ocean, Deadvlei clay pan"],
  ["na-2", "Twyfelfontein (ǀUi-ǁAes)", "Namibia", "NA", "Kunene", 2007, "One of the largest concentrations of hunter-gatherer rock engravings in Africa including the Lion Man and seal carving"],

  // =========================================================================
  // GHANA (GH) - All 2 Inscribed Sites
  // =========================================================================
  ["gh-1", "Forts and Castles, Volta, Greater Accra, Central and Western Regions", "Ghana", "GH", "Multi-region", 1979, "Fortified European colonial trading posts along the Gold Coast including Elmina Castle and Cape Coast Castle holding slave dungeons"],
  ["gh-2", "Asante Traditional Buildings", "Ghana", "GH", "Ashanti", 1980, "Last surviving traditional earthen, timber, and thatch shrine buildings of the Ashanti Empire near Kumasi"],

  // =========================================================================
  // NIGERIA (NG) - All 2 Inscribed Sites
  // =========================================================================
  ["ng-1", "Sukur Cultural Landscape", "Nigeria", "NG", "Adamawa", 1999, "Terraced hilltop palace of the Hidi (chief), stone paved walkways, and historic iron smelting furnaces in the Mandara Mountains"],
  ["ng-2", "Osun-Osogbo Sacred Grove", "Nigeria", "NG", "Osun", 2005, "Sacred primary forest sanctuary along the Osun River containing shrines and sculptures dedicated to Yoruba water fertility goddess Osun"],

  // =========================================================================
  // URUGUAY (UY) - All 3 Inscribed Sites
  // =========================================================================
  ["uy-1", "Historic Quarter of the City of Colonia del Sacramento", "Uruguay", "UY", "Colonia", 1995, "Strategic colonial fortified port on the Río de la Plata fought over by Portuguese and Spanish crowns with cobblestones"],
  ["uy-2", "Fray Bentos Industrial Landscape", "Uruguay", "UY", "Río Negro", 2015, "Historic meatpacking colliery and Liebig's Extract of Meat Company plant on the Uruguay River ('The Kitchen of the World')"],
  ["uy-3", "The Work of Engineer Eladio Dieste: Church of Cristo Obrero", "Uruguay", "UY", "Canelones", 2021, "Modernist brick church engineered by Eladio Dieste using sweeping reinforced Gaussian vault ceramics in Atlántida"],

  // =========================================================================
  // VENEZUELA (VE) - All 3 Inscribed Sites
  // =========================================================================
  ["ve-1", "Canaima National Park", "Venezuela", "VE", "Bolívar", 1994, "Sheer-sided sandstone tepui table mountains (Mount Roraima) and Angel Falls (Salto Ángel), the world's highest uninterrupted waterfall"],
  ["ve-2", "Coro and its Port", "Venezuela", "VE", "Falcón", 1993, "Only surviving example of fusion between Caribbean Spanish and Dutch mud-brick architecture near coastal sand dunes"],
  ["ve-3", "Ciudad Universitaria de Caracas", "Venezuela", "VE", "Capital District", 2000, "Masterpiece of modern university architecture designed by Carlos Raúl Villanueva featuring Alexander Calder sound clouds"],

  // =========================================================================
  // NEPAL (NP) - All 4 Inscribed Sites
  // =========================================================================
  ["np-1", "Kathmandu Valley", "Nepal", "NP", "Bagmati", 1979, "Durbar Squares of Kathmandu, Patan, and Bhaktapur, Swayambhunath monkey stupa, Boudhanath stupa, and Pashupatinath temple"],
  ["np-2", "Sagarmatha National Park (Mount Everest)", "Nepal", "NP", "Koshi", 1979, "Highest peak on Earth Mount Everest (Sagarmatha / Chomolungma, 8,848 m), Lhotse, Cho Oyu, and Sherpa monasteries in the Himalayas"],
  ["np-3", "Chitwan National Park", "Nepal", "NP", "Bagmati", 1984, "Terai subtropical lowland jungles harboring endangered greater one-horned rhinoceroses, Bengal tigers, and gharial crocodiles"],
  ["np-4", "Lumbini, the Birthplace of the Lord Buddha", "Nepal", "NP", "Lumbini", 1997, "Sacred garden site where Queen Maya Devi gave birth to Siddhartha Gautama (the Buddha) in 623 BC marked by Ashoka pillar"],

  // =========================================================================
  // SRI LANKA (LK) - All 8 Inscribed Sites
  // =========================================================================
  ["lk-1", "Ancient City of Sigiriya (Lion Rock)", "Sri Lanka", "LK", "Central", 1982, "Colossal 200-meter-tall granite rock fortress built by King Kashyapa with lion paw gateway, mirror wall, and colorful maiden frescoes"],
  ["lk-2", "Sacred City of Kandy (Temple of the Sacred Tooth Relic)", "Sri Lanka", "LK", "Central", 1988, "Hillside royal capital sheltering the Sri Dalada Maligawa holding the sacred tooth relic of the Buddha beside Kandy Lake"],
  ["lk-3", "Ancient City of Polonnaruwa", "Sri Lanka", "LK", "North Central", 1982, "Medieval second capital featuring the Gal Vihara colossal rock-hewn Buddha statues and Parakrama Samudra water reservoir"],
  ["lk-4", "Ancient City of Anuradhapura", "Sri Lanka", "LK", "North Central", 1982, "First capital of ancient Lanka with colossal brick stupas (Ruwanwelisaya) and the sacred Jaya Sri Maha Bodhi fig tree"],
  ["lk-5", "Old Town of Galle and its Fortifications", "Sri Lanka", "LK", "Southern", 1988, "Fortified Dutch colonial sea fortress bastions, lighthouse, and cobblestone streets on the Indian Ocean"],
  ["lk-6", "Rangiri Dambulla Cave Temple", "Sri Lanka", "LK", "Central", 1991, "Five sacred rock-cut cave sanctuaries holding 157 Buddha statues and vibrant Buddhist mural paintings dating to 1st century BC"],
  ["lk-7", "Sinharaja Forest Reserve", "Sri Lanka", "LK", "Sabaragamuwa / Southern", 1988, "Last viable primary tropical rainforest in Sri Lanka holding endemic purple-faced langurs and Sri Lanka blue magpie"],
  ["lk-8", "Central Highlands of Sri Lanka", "Sri Lanka", "LK", "Central", 2010, "Horton Plains National Park, World's End sheer cliff, Peak Wilderness (Adam's Peak), and montane rainforests"],

  // =========================================================================
  // PHILIPPINES (PH) - All 6 Inscribed Sites
  // =========================================================================
  ["ph-1", "Baroque Churches of the Philippines", "Philippines", "PH", "Multi-region", 1993, "Four Spanish colonial 'Earthquake Baroque' stone churches: San Agustin in Manila, Paoay, Santa Maria, and Miagao"],
  ["ph-2", "Rice Terraces of the Philippine Cordilleras", "Philippines", "PH", "Ifugao", 1995, "Steep 2,000-year-old emerald mountain rice terraces (Banaue, Batad) hand-carved into the mountains by the indigenous Ifugao"],
  ["ph-3", "Historic City of Vigan", "Philippines", "PH", "Ilocos Sur", 1999, "Best-preserved Spanish colonial planned trading town in Asia with cobblestone Calle Crisologo and horse-drawn kalesas"],
  ["ph-4", "Puerto-Princesa Subterranean River National Park", "Philippines", "PH", "Palawan", 1999, "8.2-kilometer navigable underground river flowing through a limestone cave directly into the sea on Palawan island"],
  ["ph-5", "Tubbataha Reefs Natural Park", "Philippines", "PH", "Palawan (Sulu Sea)", 1993, "Pristine coral atolls in the center of the Sulu Sea harboring whale sharks, manta rays, and hawksbill sea turtles"],
  ["ph-6", "Mount Hamiguitan Range Wildlife Sanctuary", "Philippines", "PH", "Davao Oriental", 2014, "Pygmy bonsai mossy forest ridge sheltering the critically endangered Philippine eagle and pitcher plants"],

  // =========================================================================
  // MALAYSIA (MY) - All 5 Inscribed Sites
  // =========================================================================
  ["my-1", "Kinabalu Park", "Malaysia", "MY", "Sabah (Borneo)", 2000, "Mount Kinabalu (4,095 m), highest peak in Malaysia, harboring thousands of orchid species and carnivorous pitcher plants"],
  ["my-2", "Gunung Mulu National Park", "Malaysia", "MY", "Sarawak (Borneo)", 2000, "Vast cave systems including Sarawak Chamber (world's largest cave room), Deer Cave with millions of bats, and limestone pinnacles"],
  ["my-3", "Melaka and George Town, Historic Cities of the Straits of Malacca", "Malaysia", "MY", "Melaka / Penang", 2008, "Historic maritime trading ports fusing Malay, Chinese, and Peranakan shophouses, temples, and Red Square"],
  ["my-4", "Archaeological Heritage of the Lenggong Valley", "Malaysia", "MY", "Perak", 2012, "Open-air Paleolithic stone tool workshop and skeletal remains of the 10,000-year-old 'Perak Man'"],
  ["my-5", "The Archaeological Heritage of Niah National Park’s Caves Complex", "Malaysia", "MY", "Sarawak (Borneo)", 2024, "Great Cave of Niah yielding evidence of earliest human settlement in island Southeast Asia (40,000 BP)"],

  // =========================================================================
  // SINGAPORE (SG) - 1 Inscribed Site
  // =========================================================================
  ["sg-1", "Singapore Botanic Gardens", "Singapore", "SG", "Central", 2015, "Historic 1859 tropical English landscape garden featuring the National Orchid Garden and pioneering rubber tree cultivation"],

  // =========================================================================
  // LEBANON (LB) - All 6 Inscribed Sites
  // =========================================================================
  ["lb-1", "Baalbek", "Lebanon", "LB", "Baalbek-Hermel", 1984, "Colossal Roman stone temple city in the Beqaa Valley featuring the Temple of Bacchus and six giant columns of the Temple of Jupiter"],
  ["lb-2", "Byblos (Jbeil)", "Lebanon", "LB", "Mount Lebanon", 1984, "Oldest continuously inhabited Phoenician coastal port city, birthplace of the linear phonetic Phoenician alphabet"],
  ["lb-3", "Tyre (Sour)", "Lebanon", "LB", "South Lebanon", 1984, "Phoenician maritime metropolis famed for purple dye trade, Roman triumphal arch, and the world's largest Roman stone hippodrome"],
  ["lb-4", "Anjar", "Lebanon", "LB", "Bekaa", 1984, "Eighth-century Umayyad planned inland trading city with cardo maximus, tetrapylon, and Grand Palace ruins"],
  ["lb-5", "Ouadi Qadisha (Holy Valley) and the Forest of the Cedars of God", "Lebanon", "LB", "North Lebanon", 1998, "Sacred mountain gorge sheltering early Christian Maronite hermit cave monasteries and ancient biblical Cedars of Lebanon"],
  ["lb-6", "Rachid Karami International Fair of Tripoli", "Lebanon", "LB", "North Lebanon", 2023, "Visionary modernist concrete exhibition complex designed by Brazilian master architect Oscar Niemeyer"],

  // =========================================================================
  // OMAN (OM) - All 5 Inscribed Sites
  // =========================================================================
  ["om-1", "Bahla Fort", "Oman", "OM", "Ad Dakhiliyah", 1987, "Monumental mudbrick oasis oasis fortress with stone towers and 12-kilometer defensive perimeter wall built by the Banu Nebhan"],
  ["om-2", "Archaeological Sites of Bat, Al-Khutm and Al-Ayn", "Oman", "OM", "Ad Dhahirah", 1988, "Bronze Age beehive stone burial tombs (3000 BC) set against jagged desert mountain ridges"],
  ["om-3", "Land of Frankincense", "Oman", "OM", "Dhofar", 2000, "Frankincense trees of Wadi Dawkah, caravan oasis of Shisr (Ubar), and ancient frankincense exporting ports (Khor Rori/Sumhuram)"],
  ["om-4", "Aflaj Irrigation Systems of Oman", "Oman", "OM", "Multi-region", 2006, "Ancient gravity-flow channel water irrigation systems dividing water equitably among date palm plantations"],
  ["om-5", "Ancient City of Qalhat", "Oman", "OM", "South Ash Sharqiyah", 2018, "Maritime trading hub visited by Marco Polo and Ibn Battuta featuring the coastal Mausoleum of Lady Maryam (Bibi Maryam)"],

  // =========================================================================
  // UZBEKISTAN (UZ) - All 5 Inscribed Sites
  // =========================================================================
  ["uz-1", "Samarkand – Crossroad of Cultures", "Uzbekistan", "UZ", "Samarkand", 2001, "Silk Road capital of the Timurid Empire featuring the majestic Registan square with three blue-tiled madrasas and Gur-e-Amir"],
  ["uz-2", "Historic Centre of Bukhara", "Uzbekistan", "UZ", "Bukhara", 1993, "Silk Road oasis with the 10th-century Samanid Mausoleum, Kalyan Minaret (which Genghis Khan spared), and Po-i-Kalyan"],
  ["uz-3", "Itchan Kala, Khiva", "Uzbekistan", "UZ", "Xorazm", 1990, "Walled desert oasis inner citadel surrounded by ten-meter clay walls featuring the turquoise-tiled Kalta Minor minaret"],
  ["uz-4", "Historic Centre of Shakhrisyabz", "Uzbekistan", "UZ", "Qashqadaryo", 2000, "Birthplace of conqueror Timur (Tamerlane) featuring the colossal tiled ruins of the Ak-Saray Palace portal gate"],
  ["uz-5", "Silk Roads: Zarafshan-Karakum Corridor", "Uzbekistan", "UZ", "Multi-region", 2023, "Strategic 866-kilometer trading route across Central Asia connecting mountain passes with desert caravan oases"],

  // =========================================================================
  // IRELAND (IE) - All 2 Inscribed Sites
  // =========================================================================
  ["ie-1", "Brú na Bóinne – Archaeological Ensemble of the Bend of the Boyne", "Ireland", "IE", "County Meath", 1993, "Neolithic passage tombs of Newgrange (aligned with winter solstice sunrise), Knowth with megalithic art, and Dowth (3200 BC)"],
  ["ie-2", "Sceilg Mhichíl (Skellig Michael)", "Ireland", "IE", "County Kerry", 1996, "Isolated jagged ocean rock pyramid rising out of the Atlantic holding a 6th-century Christian monastery of drystone beehive huts"]
];

// Register globally so index.html accesses it immediately
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
