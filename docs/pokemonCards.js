const pokemonList = [

  {
    number: '0001',
    name: 'Bulbasaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego y Volador'
  },
  {
    number: '0002',
    name: 'Ivysaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego y Volador'
  },
  {
    number: '0003',
    name: 'Venusaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego, Volador, Hielo y Psíquico'
  },
  {
    number: '0004',
    name: 'Charmander',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    type1: 'Fuego',
    type2: '',
    weakness: 'Agua, Roca y Tierra'
  },
  {
    number: '0005',
    name: 'Charmeleon',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    type1: 'Fuego',
    type2: '',
    weakness: 'Agua, Roca y Tierra'
  },
  {
    number: '0006',
    name: 'Charizard',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    type1: 'Fuego',
    type2: 'Volador',
    weakness: 'Agua, Eléctrico y Roca'
  },
  {
    number: '0007',
    name: 'Squirtle',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0008',
    name: 'Wartortle',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0009',
    name: 'Blastoise',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0010',
    name: 'Caterpie',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    type1: 'Bicho',
    type2: '',
    weakness: 'Fuego, Volador y Roca'
  },
  {
    number: '0011',
    name: 'Metapod',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    type1: 'Bicho',
    type2: '',
    weakness: 'Fuego, Volador y Roca'
  },
  {
    number: '0012',
    name: 'Butterfree',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    type1: 'Bicho',
    type2: 'Volador',
    weakness: 'Fuego, Volador, Roca y Eléctrico'
  },
  {
    number: '0013',
    name: 'Weedle',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    type1: 'Bicho',
    type2: 'Veneno',
    weakness: 'Fuego, Volador, Psíquico y Roca'
  },
  {
    number: '0014',
    name: 'Kakuna',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
    type1: 'Bicho',
    type2: 'Veneno',
    weakness: 'Fuego, Volador, Psíquico y Roca'
  },
  {
    number: '0015',
    name: 'Beedrill',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
    type1: 'Bicho',
    type2: 'Veneno',
    weakness: 'Fuego, Volador, Psíquico y Roca'
  },
  {
    number: '0016',
    name: 'Pidgey',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    type1: 'Normal',
    type2: 'Volador',
    weakness: 'Eléctrico, Roca y Hielo'
  },
  {
    number: '0017',
    name: 'Pidgeotto',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
    type1: 'Normal',
    type2: 'Volador',
    weakness: 'Eléctrico, Roca y Hielo'
  },
  {
    number: '0018',
    name: 'Pidgeot',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
    type1: 'Normal',
    type2: 'Volador',
    weakness: 'Eléctrico, Roca y Hielo'
  },
  {
    number: '0019',
    name: 'Rattata',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
    type1: 'Normal',
    type2: '',
    weakness: 'Lucha'
  },
  {
    number: '0020',
    name: 'Raticate',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
    type1: 'Normal',
    type2: '',
    weakness: 'Lucha'
  },
  {
    number: '0021',
    name: 'Spearow',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
    type1: 'Normal',
    type2: 'Volador',
    weakness: 'Eléctrico y Hielo'
  },
  {
    number: '0022',
    name: 'Fearow',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
    type1: 'Normal',
    type2: 'Volador',
    weakness: 'Eléctrico y Hielo'
  },
  {
    number: '0023',
    name: 'Ekans',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
    type1: 'Veneno',
    type2: '',
    weakness: 'Psíquico y Tierra'
  },
  {
    number: '0024',
    name: 'Arbok',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
    type1: 'Veneno',
    type2: '',
    weakness: 'Psíquico y Tierra'
  },
  {
    number: '0025',
    name: 'Pikachu',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    type1: 'Eléctrico',
    type2: '',
    weakness: 'Tierra'
  },
  {
    number: '0026',
    name: 'Raichu',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
    type1: 'Eléctrico',
    type2: '',
    weakness: 'Tierra'
  },
  {
    number: '0027',
    name: 'Sandshrew',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
    type1: 'Tierra',
    type2: '',
    weakness: 'Agua y Hielo'
  },
  {
    number: '0028',
    name: 'Sandslash',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
    type1: 'Tierra',
    type2: '',
    weakness: 'Agua y Hielo'
  },
  {
    number: '0029',
    name: 'Nidoran',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png',
    type1: 'Veneno',
    type2: '',
    weakness: 'Psíquico y Tierra'
  },
  {
    number: '0030',
    name: 'Nidorina',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
    type1: 'Veneno',
    type2: '',
    weakness: 'Psíquico y Tierra'
  },
  {
    number: '0031',
    name: 'Nidoqueen',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
    type1: 'Veneno',
    type2: 'Tierra',
    weakness: 'Psíquico y Agua'
  },
  {
    number: '0032',
    name: 'Nidoran',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    type1: 'Veneno',
    type2: '',
    weakness: 'Psíquico y Tierra'
  },
  {
    number: '0033',
    name: 'Nidorino',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
    type1: 'Veneno',
    type2: '',
    weakness: 'Psíquico y Tierra'
  },
  {
    number: '0034',
    name: 'Nidoking',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
    type1: 'Veneno',
    type2: 'Tierra',
    weakness: 'Psíquico y Agua'
  },
  {
    number: '0035',
    name: 'Clefairy',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
    type1: 'Hada',
    type2: '',
    weakness: 'Veneno y Acero'
  },
  {
    number: '0036',
    name: 'Clefable',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
    type1: 'Hada',
    type2: '',
    weakness: 'Veneno y Acero'
  },
  {
    number: '0037',
    name: 'Vulpix',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
    type1: 'Fuego',
    type2: '',
    weakness: 'Agua, Roca y Tierra'
  },
  {
    number: '0038',
    name: 'Ninetails',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
    type1: 'Fuego',
    type2: '',
    weakness: 'Agua, Roca y Tierra'
  },
  {
    number: '0039',
    name: 'Jigglypuff',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    type1: 'Normal',
    type2: 'Hada',
    weakness: 'Veneno y Acero'
  },
  {
    number: '0040',
    name: 'Wigglytuff',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
    type1: 'Normal',
    type2: 'Hada',
    weakness: 'Veneno y Acero'
  },
  {
    number: '0041',
    name: 'Zubat',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
    type1: 'Veneno',
    type2: 'Volador',
    weakness: 'Psíquico, Roca y Eléctrico'
  },
  {
    number: '0042',
    name: 'Golbat',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
    type1: 'Veneno',
    type2: 'Volador',
    weakness: 'Psíquico, Roca y Eléctrico'
  },
  {
    number: '0043',
    name: 'Oddish',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego, Psíquico, Volador y Hielo'
  },
  {
    number: '0044',
    name: 'Gloom',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego, Psíquico, Volador y Hielo'
  },
  {
    number: '0045',
    name: 'Vileplume',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego, Psíquico, Volador y Hielo'
  },
  {
    number: '0046',
    name: 'Paras',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
    type1: 'Bicho',
    type2: 'Planta',
    weakness: 'Fuego, Volador, Hielo y Veneno'
  },
  {
    number: '0047',
    name: 'Parasect',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
    type1: 'Bicho',
    type2: 'Planta',
    weakness: 'Fuego, Volador, Hielo y Veneno'
  },
  {
    number: '0048',
    name: 'Venonat',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
    type1: 'Bicho',
    type2: 'Veneno',
    weakness: 'Fuego, Psíquico, Volador y Roca'
  },
  {
    number: '0049',
    name: 'Venomoth',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
    type1: 'Bicho',
    type2: 'Veneno',
    weakness: 'Fuego, Psíquico, Volador y Roca'
  },
  {
    number: '0050',
    name: 'Zubat',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
    type1: 'Tierra',
    type2: '',
    weakness: 'Agua, Planta y Hielo'
  },
  {
    number: '0051',
    name: 'Dugtrio',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
    type1: 'Tierra',
    type2: '',
    weakness: 'Agua, Planta y Hielo'
  },
  {
    number: '0052',
    name: 'Meowth',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
    type1: 'Normal',
    type2: '',
    weakness: 'Lucha'
  },
  {
    number: '0053',
    name: 'Persian',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
    type1: 'Normal',
    type2: '',
    weakness: 'Lucha'
  },
  {
    number: '0054',
    name: 'Psyduck',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0055',
    name: 'Golduck',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0056',
    name: 'Mankey',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
    type1: 'Lucha',
    type2: '',
    weakness: 'Psíquico y Volador'
  },
  {
    number: '0057',
    name: 'Primeape',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
    type1: 'Lucha',
    type2: '',
    weakness: 'Psíquico y Volador'
  },
  {
    number: '0058',
    name: 'Growlithe',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
    type1: 'Fuego',
    type2: '',
    weakness: 'Agua, Roca y Tierra'
  },
  {
    number: '0059',
    name: 'Arcanine',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
    type1: 'Fuego',
    type2: '',
    weakness: 'Agua, Roca y Tierra'
  },
  {
    number: '0060',
    name: 'Poliwag',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0061',
    name: 'Poliwhirl',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0062',
    name: 'Poliwrath',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
    type1: 'Agua',
    type2: 'Lucha',
    weakness: 'Planta, Eléctrico, Psíquico y Volador'
  },
  {
    number: '0063',
    name: 'Abra',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
    type1: 'Psíquico',
    type2: '',
    weakness: 'Bicho, Fantasma y Siniestro'
  },
  {
    number: '0064',
    name: 'Kadabra',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
    type1: 'Psíquico',
    type2: '',
    weakness: 'Bicho, Fantasma y Siniestro'
  },
  {
    number: '0065',
    name: 'Alakazam',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
    type1: 'Psíquico',
    type2: '',
    weakness: 'Bicho, Fantasma y Siniestro'
  },
  {
    number: '0066',
    name: 'Machop',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
    type1: 'Lucha',
    type2: '',
    weakness: 'Psíquico y Volador'
  },
  {
    number: '0067',
    name: 'Machoke',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
    type1: 'Lucha',
    type2: '',
    weakness: 'Psíquico y Volador'
  },
  {
    number: '0068',
    name: 'Machamp',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
    type1: 'Lucha',
    type2: '',
    weakness: 'Psíquico y Volador'
  },
  {
    number: '0069',
    name: 'Bellsprout',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego, Psíquico, Volador y Hielo'
  },
  {
    number: '0070',
    name: 'Weepinbell',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego, Psíquico, Volador y Hielo'
  },
  {
    number: '0071',
    name: 'Victreebel',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
    type1: 'Planta',
    type2: 'Veneno',
    weakness: 'Fuego, Psíquico, Volador y Hielo'
  },
  {
    number: '0072',
    name: 'Tentacool',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
    type1: 'Agua',
    type2: 'Veneno',
    weakness: 'Eléctrico y Psíquico'
  },
  {
    number: '0073',
    name: 'Tentacruel',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
    type1: 'Agua',
    type2: 'Veneno',
    weakness: 'Eléctrico y Psíquico'
  },
  {
    number: '0074',
    name: 'Geodude',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png',
    type1: 'Roca',
    type2: 'Tierra',
    weakness: 'Agua, Planta, Hielo y Lucha'
  },
  {
    number: '0075',
    name: 'Graveler',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png',
    type1: 'Roca',
    type2: 'Tierra',
    weakness: 'Agua, Planta, Hielo y Lucha'
  },
  {
    number: '0076',
    name: 'Golem',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png',
    type1: 'Roca',
    type2: 'Tierra',
    weakness: 'Agua, Planta, Hielo y Lucha'
  },
  {
    number: '0077',
    name: 'Ponyta',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
    type1: 'Fuego',
    type2: '',
    weakness: 'Agua, Roca y Tierra'
  },
  {
    number: '0078',
    name: 'Rapidash',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png',
    type1: 'Fuego',
    type2: '',
    weakness: 'Agua, Roca y Tierra'
  },
  {
    number: '0079',
    name: 'Slowpoke',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
    type1: 'Agua',
    type2: 'Psíquico',
    weakness: 'Planta, Eléctrico y Siniestro'
  },
  {
    number: '0080',
    name: 'Slowbro',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png',
    type1: 'Agua',
    type2: 'Psíquico',
    weakness: 'Planta, Eléctrico y Siniestro'
  },
  {
    number: '0081',
    name: 'Magnemite',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
    type1: 'Eléctrico',
    type2: 'Metal',
    weakness: 'Fuego y Lucha'
  },
  {
    number: '0082',
    name: 'Dugtrio',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png',
    type1: 'Eléctrico',
    type2: 'Metal',
    weakness: 'Fuego y Lucha'
  },
  {
    number: '0083',
    name: 'Farfetch\'d',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png',
    type1: 'Normal',
    type2: 'Volador',
    weakness: 'Eléctrico y Roca'
  },
  {
    number: '0084',
    name: 'Doduo',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png',
    type1: 'Normal',
    type2: 'Volador',
    weakness: 'Eléctrico y Roca'
  },
  {
    number: '0085',
    name: 'Dodrio',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png',
    type1: 'Normal',
    type2: 'Volador',
    weakness: 'Eléctrico y Roca'
  },
  {
    number: '0086',
    name: 'Seel',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0087',
    name: 'Dewgong',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png',
    type1: 'Agua',
    type2: 'Hielo',
    weakness: 'Planta, Eléctrico y Fuego'
  },
  {
    number: '0088',
    name: 'Grimer',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png',
    type1: 'Veneno',
    type2: '',
    weakness: 'Psíquico y Tierra'
  },
  {
    number: '0089',
    name: 'Mulk',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png',
    type1: 'Veneno',
    type2: '',
    weakness: 'Psíquico y Tierra'
  },
  {
    number: '0090',
    name: 'Shellder',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0091',
    name: 'Cloyster',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png',
    type1: 'Agua',
    type2: 'Hielo',
    weakness: 'Planta, Eléctrico y Fuego'
  },
  {
    number: '0092',
    name: 'Gastly',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
    type1: 'Fantasma',
    type2: 'Veneno',
    weakness: 'Psíquico y Fantasma'
  },
  {
    number: '0093',
    name: 'Haunter',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
    type1: 'Fantasma',
    type2: 'Veneno',
    weakness: 'Psíquico y Fantasma'
  },
  {
    number: '0094',
    name: 'Gengar',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
    type1: 'Fantasma',
    type2: 'Veneno',
    weakness: 'Psíquico y Fantasma'
  },
  {
    number: '0095',
    name: 'Onix',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png',
    type1: 'Roca',
    type2: 'Tierra',
    weakness: 'Agua, Planta, Hielo y Lucha'
  },
  {
    number: '0096',
    name: 'Drowzee',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png',
    type1: 'Psíquico',
    type2: '',
    weakness: 'Bicho, Fantasma y Siniestro'
  },
  {
    number: '0097',
    name: 'Hypno',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png',
    type1: 'Psíquico',
    type2: '',
    weakness: 'Bicho, Fantasma y Siniestro'
  },
  {
    number: '0098',
    name: 'Krabby',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0099',
    name: 'Kingler',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
    type1: 'Agua',
    type2: '',
    weakness: 'Planta y Eléctrico'
  },
  {
    number: '0100',
    name: 'Voltorb',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png',
    type1: 'Eléctrico',
    type2: '',
    weakness: 'Tierra'
  },
  {
    number: '0101',
    name: 'Electrode',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png',
    type1: 'Eléctrico',
    type2: '',
    weakness: 'Tierra'
  },
  {
    number: '0102',
    name: 'Exeggcube',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
    type1: 'Planta',
    type2: 'Psíquico',
    weakness: 'Fuego, Hielo, Veneno y Bicho'
  },
  {
    number: '0103',
    name: 'Exeggutor',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png',
    type1: 'Planta',
    type2: 'Psíquico',
    weakness: 'Fuego, Hielo, Veneno y Bicho'
  },
  {
    number: '0104',
    name: 'Cubone',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
    type1: 'Tierra',
    type2: '',
    weakness: 'Agua, Planta y Hielo'
  },
];

const typeMap = {
  'Planta': 'grass',
  'Veneno': 'poison',
  'Fuego': 'fire',
  'Agua': 'water',
  'Bicho': 'bug',
  'Roca': 'rock',
  'Tierra': 'land',
  'Volador': 'flying',
  'Eléctrico': 'electric',
  'Hielo': 'ice',
  'Psíquico': 'psychic',
  'Normal': 'normal',
  'Hada': 'fairy',
  'Metal': 'steal',
  'Fantasma': 'ghost',
  'Lucha': 'fight'
};

function renderPokemonCard(pokemon) {
  const typeClass1 = typeMap[pokemon.type1];
  const typeClass2 = typeMap[pokemon.type2];

  return `
    <div class="pokemon-card">
      <div class="pokemon-card-inner">
        <div class="pokemon-card-front">
          <img src="${pokemon.image}" alt="${pokemon.name}">
          <div class="pokemon-info">
            <p class="pokemon-number">N.º ${pokemon.number}</p>
            <h3 class="pokemon-name">${pokemon.name}</h3>
            <div class="pokemon-types">
              <span class="type type-${typeClass1}">${pokemon.type1}</span>
              ${pokemon.type2 ? `<span class="type type-${typeClass2}">${pokemon.type2}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="pokemon-card-back">
          <h3 class="pokemon-name">${pokemon.name}</h3>
          <p>Este Pokémon es débil contra pokémons de tipo ${pokemon.weakness}.</p>
        </div>
      </div>
    </div>
  `;
}

function displayAllPokemon(pokemonList) {
  const pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = pokemonList.map(pokemon => renderPokemonCard(pokemon)).join('');
}

function filterPokemon() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  const filteredPokemon = pokemonList.filter(pokemon => {
    return (
      pokemon.name.toLowerCase().includes(searchTerm) ||
      pokemon.number.toString().includes(searchTerm) ||
      pokemon.type1.toLowerCase().includes(searchTerm) ||
      pokemon.type2.toLowerCase().includes(searchTerm)
    );
  });
  displayAllPokemon(filteredPokemon);
}

displayAllPokemon(pokemonList);

function generatePokemonCards(pokemonList) {
  let cards = '';

  pokemonList.forEach(pokemon => {
    cards += renderPokemonCard(pokemon);
  });

  document.getElementById('pokedex').innerHTML = cards;
}

document.getElementById('search-bar').addEventListener('input', filterPokemon);