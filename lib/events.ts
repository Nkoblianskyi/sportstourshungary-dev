export type SportCategory = 'labdarugas' | 'kosarlabda' | 'vizilabda' | 'atletika' | 'formula1' | 'tenisz' | 'jegkorong' | 'bokszMMA' | 'egyeb';

export interface TicketPartner {
  name: string;
  url: string;
  priceFrom: number;
  priceTo: number;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  category: SportCategory;
  categoryLabel: string;
  date: string;
  dateFormatted: string;
  venue: string;
  city: string;
  country: string;
  priceFrom: number;
  priceTo: number;
  currency: string;
  image: string;
  description: string;
  partners: TicketPartner[];
  featured?: boolean;
}

export const CATEGORIES: { value: SportCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Összes sport' },
  { value: 'labdarugas', label: 'Labdarúgás' },
  { value: 'formula1', label: 'Forma–1' },
  { value: 'kosarlabda', label: 'Kosárlabda' },
  { value: 'tenisz', label: 'Tenisz' },
  { value: 'vizilabda', label: 'Vízilabda' },
  { value: 'atletika', label: 'Atlétika' },
  { value: 'jegkorong', label: 'Jégkorong' },
  { value: 'bokszMMA', label: 'Boksz / MMA' },
  { value: 'egyeb', label: 'Egyéb sport' },
];

/** Katalógus kizárólag sporteseményeket tartalmaz (koncert, színház stb. nincs). */
export const EVENTS: Event[] = [
  {
    id: '1',
    slug: 'forma1-magyar-nagydij-2026',
    title: 'Forma–1 Magyar Nagydíj 2026',
    category: 'formula1',
    categoryLabel: 'Forma–1',
    date: '2026-07-31',
    dateFormatted: '2026. július 31.',
    venue: 'Hungaroring',
    city: 'Mogyoród',
    country: 'Magyarország',
    priceFrom: 45000,
    priceTo: 350000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=800&q=80',
    description:
      'A Forma–1 Magyar Nagydíj a Hungaroringen – az autósport egyik legrangosabb eseménye Magyarországon. Háromnapos program: szabadedzések, időmérő és a vasárnapi döntő futam. A kanyargós pálya mindig izgalmas versenyeket produkál.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 45000, priceTo: 200000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 60000, priceTo: 350000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 55000, priceTo: 320000 },
      { name: 'Eventim', url: 'https://www.eventim.hu', priceFrom: 48000, priceTo: 290000 },
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'magyarorszag-nemetorszag-nb-2026',
    title: 'Magyarország – Németország (Nemzetek Ligája)',
    category: 'labdarugas',
    categoryLabel: 'Labdarúgás',
    date: '2026-06-05',
    dateFormatted: '2026. június 5.',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 12000,
    priceTo: 65000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80',
    description:
      'A magyar válogatott a Puskás Arénában fogadja a Németországot a Nemzetek Ligájában. A telt ház garantált – a Puskás Aréna forrósodik, amint a Himnusz felcsendül. Ne maradj le az ev meccseiről!',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 12000, priceTo: 45000 },
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 12500, priceTo: 50000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 15000, priceTo: 65000 },
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'fradi-real-madrid-el-2026',
    title: 'Ferencváros – Real Madrid (Európa Liga)',
    category: 'labdarugas',
    categoryLabel: 'Labdarúgás',
    date: '2026-04-16',
    dateFormatted: '2026. április 16.',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 18000,
    priceTo: 95000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    description:
      'A Ferencváros az Európa Liga csoportkörében fogadja a Real Madridet a Groupama Arénában. Történelmi találkozó, ahol a hazai drukkerek reménykednek a bravúrban.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 18000, priceTo: 65000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 22000, priceTo: 95000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 20000, priceTo: 88000 },
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'euroleague-kosarlabda-final-four-2026',
    title: 'EuroLeague Final Four – Kosárlabda',
    category: 'kosarlabda',
    categoryLabel: 'Kosárlabda',
    date: '2026-05-22',
    dateFormatted: '2026. május 22–25.',
    venue: 'Budapest Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 25000,
    priceTo: 120000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    description:
      'Európa legjobb kosárlabdacsapatai küzdenek a kontinens legelőkelőbb trófeájáért a Budapest Arénában. Egy négynapos kosárlabda-ünnep – elődöntők, döntő és a legjobb NBA-szintű játékosok.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 25000, priceTo: 70000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 32000, priceTo: 120000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 28000, priceTo: 105000 },
    ],
    featured: true,
  },
  {
    id: '5',
    slug: 'budapest-grand-prix-tenisz-2026',
    title: 'Budapest Grand Prix – WTA Tenisztorna',
    category: 'tenisz',
    categoryLabel: 'Tenisz',
    date: '2026-04-25',
    dateFormatted: '2026. április 25. – május 3.',
    venue: 'Római Teniszakadémia',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 8000,
    priceTo: 55000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
    description:
      'A Budapest Grand Prix az európai WTA-naptár egyik kiemelkedő eseménye. A világ top teniszezői küzdenek a budai agyagpályákon – izgalmas mérkőzések és sportszeretet jellemezte hétvégék.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 8000, priceTo: 30000 },
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 8500, priceTo: 35000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 10000, priceTo: 55000 },
    ],
  },
  {
    id: '6',
    slug: 'vizilabda-vilagbajnoksag-donto-2026',
    title: 'Vízilabda-VB – Döntő (Budapest)',
    category: 'vizilabda',
    categoryLabel: 'Vízilabda',
    date: '2026-07-18',
    dateFormatted: '2026. július 18.',
    venue: 'Duna Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 10000,
    priceTo: 45000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    description:
      'A vízilabda-világbajnokság döntője a legendás Duna Arénában. A magyar válogatott hazai pályán védheti meg bajnoki címét – szurkolj élőben a csapatnak!',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 10000, priceTo: 35000 },
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 10500, priceTo: 40000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 11000, priceTo: 45000 },
    ],
    featured: true,
  },
  {
    id: '7',
    slug: 'atletika-eb-budapest-2026',
    title: 'Atlétikai Európa-bajnokság 2026',
    category: 'atletika',
    categoryLabel: 'Atlétika',
    date: '2026-08-12',
    dateFormatted: '2026. augusztus 12–23.',
    venue: 'Nemzeti Atlétikai Központ',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 6000,
    priceTo: 55000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    description:
      'Az atlétikai Európa-bajnokság visszatér Budapestre! 12 napon át tartó verseny a Nemzeti Atlétikai Központban, ahol a kontinens legjobb atléták küzdenek az aranyért futásban, ugrásban és dobásban egyaránt.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 6000, priceTo: 30000 },
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 6500, priceTo: 35000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 8000, priceTo: 55000 },
    ],
  },
  {
    id: '8',
    slug: 'jegkorong-eb-donto-2026',
    title: 'Jégkorong Európa-bajnokság – Döntő',
    category: 'jegkorong',
    categoryLabel: 'Jégkorong',
    date: '2026-05-10',
    dateFormatted: '2026. május 10.',
    venue: 'Syma Csarnok',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 8000,
    priceTo: 40000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&q=80',
    description:
      'A jégkorong EB döntőjét Budapest adja otthon – egy villámgyors, kemény mérkőzés a legjobb európai csapatok között. Remek hangulat és top szintű jégkorong-show várja a nézőket.',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 8000, priceTo: 28000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 8500, priceTo: 35000 },
      { name: 'Eventim', url: 'https://www.eventim.hu', priceFrom: 8200, priceTo: 40000 },
    ],
  },
  {
    id: '9',
    slug: 'boksz-wbc-nehezsulyú-donto-2026',
    title: 'WBC Nehézsúlyú Boxmérkőzés – Budapest',
    category: 'bokszMMA',
    categoryLabel: 'Boksz / MMA',
    date: '2026-09-12',
    dateFormatted: '2026. szeptember 12.',
    venue: 'Budapest Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 20000,
    priceTo: 150000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    description:
      'WBC nehézsúlyú bajnoki mérkőzés Budapesten – egy történelmi est, amelyet a világ minden tájáról követnek. Magyar és külföldi ökölvívók csapnak össze a szorítóban a Budapest Arénában.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 20000, priceTo: 80000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 28000, priceTo: 150000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 25000, priceTo: 135000 },
    ],
    featured: true,
  },
  {
    id: '10',
    slug: 'magyarorszag-olaszorszag-eb-selejtezo-2026',
    title: 'Magyarország – Olaszország (EB-selejtező)',
    category: 'labdarugas',
    categoryLabel: 'Labdarúgás',
    date: '2026-09-05',
    dateFormatted: '2026. szeptember 5.',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 10000,
    priceTo: 55000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
    description:
      'A magyar válogatott az EB-selejtező egyik kulcsmeccsén fogadja az olaszokat. A Puskás Aréna teli ház előtt ad otthont a találkozónak – a pontokért és a csoportelsőségért.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 10000, priceTo: 40000 },
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 10500, priceTo: 42000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 13000, priceTo: 55000 },
    ],
  },
  {
    id: '11',
    slug: 'forma1-osztriak-nagydij-2026',
    title: 'Forma–1 Osztrák Nagydíj 2026',
    category: 'formula1',
    categoryLabel: 'Forma–1',
    date: '2026-06-28',
    dateFormatted: '2026. június 26–28.',
    venue: 'Red Bull Ring',
    city: 'Spielberg',
    country: 'Ausztria',
    priceFrom: 55000,
    priceTo: 280000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
    description:
      'A Red Bull Ring adja otthont az Osztrák Nagydíjnak – az egyik leglátogatottabb F1-es hétvégenek Közép-Európában. Kiváló nézői élmény, természeti háttér és tele lelátók jellemzik az estet.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 55000, priceTo: 160000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 70000, priceTo: 280000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 65000, priceTo: 260000 },
    ],
  },
  {
    id: '12',
    slug: 'fraadi-barcelona-cl-2026',
    title: 'Ferencváros – Barcelona (Bajnokok Ligája)',
    category: 'labdarugas',
    categoryLabel: 'Labdarúgás',
    date: '2026-10-22',
    dateFormatted: '2026. október 22.',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 22000,
    priceTo: 110000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    description:
      'A Ferencváros a Bajnokok Ligája csoportkörében fogadja az FC Barcelonát. Mesés találkozó, amelyre egész Közép-Európa figyel – élő helyszíni dráma garantált.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 22000, priceTo: 75000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 28000, priceTo: 110000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 25000, priceTo: 100000 },
    ],
    featured: true,
  },
  {
    id: '13',
    slug: 'uszas-eb-2026-budapest',
    title: 'Úszó Európa-bajnokság 2026',
    category: 'atletika',
    categoryLabel: 'Atlétika',
    date: '2026-08-02',
    dateFormatted: '2026. augusztus 2–9.',
    venue: 'Duna Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 5000,
    priceTo: 35000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80',
    description:
      'Budapest ismét otthont ad az úszó Európa-bajnokságnak a világhírű Duna Arénában. Milák Kristóf és az európai élúszók csapnak össze medencés és nyíltvízi számokban.',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 5000, priceTo: 22000 },
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 5500, priceTo: 28000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 5200, priceTo: 35000 },
    ],
  },
  {
    id: '14',
    slug: 'honved-slavia-praga-konferencia-liga-2026',
    title: 'Budapest Honvéd – Slavia Praha (Konferencia Liga)',
    category: 'labdarugas',
    categoryLabel: 'Labdarúgás',
    date: '2026-11-05',
    dateFormatted: '2026. november 5.',
    venue: 'Bozsik Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 8000,
    priceTo: 42000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    description:
      'A Budapest Honvéd a Konferencia Liga playoff körében fogadja a Slavia Prágát. A Bozsik Aréna hangulata páratlan – a kispestiek drukkereit tüzes mérkőzés várja.',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 8000, priceTo: 30000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 8500, priceTo: 35000 },
      { name: 'Eventim', url: 'https://www.eventim.hu', priceFrom: 8200, priceTo: 42000 },
    ],
  },
  {
    id: '15',
    slug: 'mma-one-championship-budapest-2026',
    title: 'ONE Championship – Budapest Fight Night',
    category: 'bokszMMA',
    categoryLabel: 'Boksz / MMA',
    date: '2026-10-03',
    dateFormatted: '2026. október 3.',
    venue: 'Budapest Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 15000,
    priceTo: 85000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    description:
      'Az ONE Championship MMA-gála Budapestre érkezik! A világ egyik legjobb MMA-szervezetének gálája különleges spektákulumot ígér – hazai és külföldi harcosok csapnak össze az octagonban.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 15000, priceTo: 55000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 20000, priceTo: 85000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 18000, priceTo: 78000 },
    ],
  },
  {
    id: '16',
    slug: 'forma1-belga-nagydij-2026',
    title: 'Forma–1 Belga Nagydíj 2026',
    category: 'formula1',
    categoryLabel: 'Forma–1',
    date: '2026-07-26',
    dateFormatted: '2026. július 24–26.',
    venue: 'Circuit de Spa-Francorchamps',
    city: 'Spa',
    country: 'Belgium',
    priceFrom: 65000,
    priceTo: 320000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&q=80',
    description:
      'Spa-Francorchamps – az F1-es legendák pályája. A Belga Nagydíj az egyik leghangulatasabb és legveszélyesebb versenyhelyszín Eau Rouge kanyarjával, telt lelátókkal és kiszámíthatatlan időjárással.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 65000, priceTo: 180000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 85000, priceTo: 320000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 78000, priceTo: 295000 },
    ],
    featured: true,
  },
  {
    id: '17',
    slug: 'jegkorong-vilagbajnoksag-elodonto-2026',
    title: 'Jégkorong-VB Elődöntő – Budapest',
    category: 'jegkorong',
    categoryLabel: 'Jégkorong',
    date: '2026-05-22',
    dateFormatted: '2026. május 22.',
    venue: 'Syma Csarnok',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 9000,
    priceTo: 50000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=800&q=80',
    description:
      'A jégkorong-világbajnokság elődöntője Budapesten. A négy legjobb csapat között két helyen dől el, ki kerül a döntőbe – feszültség, gyorsaság és egyedi csarnok-hangulat.',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 9000, priceTo: 32000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 9500, priceTo: 40000 },
      { name: 'Eventim', url: 'https://www.eventim.hu', priceFrom: 9200, priceTo: 50000 },
    ],
  },
  {
    id: '18',
    slug: 'vizilabda-eb-donto-2026',
    title: 'Vízilabda Európa-bajnokság – Döntő',
    category: 'vizilabda',
    categoryLabel: 'Vízilabda',
    date: '2026-09-20',
    dateFormatted: '2026. szeptember 20.',
    venue: 'Duna Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 8000,
    priceTo: 38000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    description:
      'A vízilabda EB döntőjét a világ legmodernebb vízilabda-létesítményében, a Duna Arénában rendezik. A magyar válogatott hazai közönség előtt harcol az aranyért.',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 8000, priceTo: 28000 },
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 8500, priceTo: 32000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 8200, priceTo: 38000 },
    ],
  },
  {
    id: '19',
    slug: 'tenisz-atp-vienna-open-2026',
    title: 'ATP Vienna Open 2026',
    category: 'tenisz',
    categoryLabel: 'Tenisz',
    date: '2026-10-26',
    dateFormatted: '2026. október 26. – november 2.',
    venue: 'Wiener Stadthalle',
    city: 'Bécs',
    country: 'Ausztria',
    priceFrom: 25000,
    priceTo: 95000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
    description:
      'Az ATP Vienna Open a szezon egyik utolsó nagy tornája – Bécsbe száll a világ tenisz-elitje. A fedett pályán a leggyorsabb, legtechnikásabb játékosok küzdenek az ATP 500-as pontokért.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 25000, priceTo: 60000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 32000, priceTo: 95000 },
      { name: 'Eventim', url: 'https://www.eventim.hu', priceFrom: 28000, priceTo: 85000 },
    ],
  },
  {
    id: '20',
    slug: 'magyarorszag-franciaorszag-raby-eb-2026',
    title: 'Magyarország – Franciaország (Rögbi EB)',
    category: 'egyeb',
    categoryLabel: 'Egyéb sport',
    date: '2026-11-14',
    dateFormatted: '2026. november 14.',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 7000,
    priceTo: 35000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1515541324332-7dd0c37426e0?w=800&q=80',
    description:
      'A magyar rögbicsapat a Puskás Arénában fogadja a franciákat az EB selejtezőjén. Különleges, egyre népszerűbb látvánisport – erő, taktika és csapatszellem a pályán.',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 7000, priceTo: 22000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 7500, priceTo: 28000 },
      { name: 'Eventim', url: 'https://www.eventim.hu', priceFrom: 7200, priceTo: 35000 },
    ],
  },
  {
    id: '21',
    slug: 'kosarlabda-fiba-windows-2026',
    title: 'FIBA EuroBasket – Selejtező (Magyarország)',
    category: 'kosarlabda',
    categoryLabel: 'Kosárlabda',
    date: '2026-11-20',
    dateFormatted: '2026. november 20.',
    venue: 'Budapest Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 6000,
    priceTo: 28000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80',
    description:
      'A magyar kosárlabda-válogatott otthon játszik az EuroBasket selejtezőjén – teljes ház és tüzes hangulat garantált a Budapest Arénában. Szurkolj a magyar csapatnak!',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 6000, priceTo: 20000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 6500, priceTo: 24000 },
      { name: 'Eventim', url: 'https://www.eventim.hu', priceFrom: 6200, priceTo: 28000 },
    ],
  },
  {
    id: '22',
    slug: 'forma1-abu-dhabi-nagydij-2026',
    title: 'Forma–1 Abu Dhabi Nagydíj 2026 (Szezonzáró)',
    category: 'formula1',
    categoryLabel: 'Forma–1',
    date: '2026-12-06',
    dateFormatted: '2026. december 4–6.',
    venue: 'Yas Marina Circuit',
    city: 'Abu Dhabi',
    country: 'Egyesült Arab Emírségek',
    priceFrom: 120000,
    priceTo: 650000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    description:
      'Az F1-es szezon záróversenye Abu Dhabiban – ahol a bajnokság utolsó szimulációja zajlik le. A Yas Marina Circuit éjszakai fények között fogadja a világ motorsport-szurkolóit.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 120000, priceTo: 380000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 160000, priceTo: 650000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 145000, priceTo: 600000 },
    ],
    featured: true,
  },
  {
    id: '23',
    slug: 'atletika-maraton-budapest-2026',
    title: 'Budapest Marathon 2026',
    category: 'atletika',
    categoryLabel: 'Atlétika',
    date: '2026-10-11',
    dateFormatted: '2026. október 11.',
    venue: 'Hősök tere (start/cél)',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 3500,
    priceTo: 18000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1470010762743-1fa2363c4c85?w=800&q=80',
    description:
      'A Budapest Marathon Magyarország legnagyobb és legszebb maratoni versenye. A futók Budapest legikonikusabb helyszínein futnak végig – Lánchíd, Duna-part, Hősök tere.',
    partners: [
      { name: 'Jegy.hu', url: 'https://www.jegy.hu', priceFrom: 3500, priceTo: 12000 },
      { name: 'Jegymester', url: 'https://www.jegymester.hu', priceFrom: 3800, priceTo: 15000 },
      { name: 'Eventim', url: 'https://www.eventim.hu', priceFrom: 3600, priceTo: 18000 },
    ],
  },
  {
    id: '24',
    slug: 'fradi-juventus-el-2026',
    title: 'Ferencváros – Juventus (Európa Liga)',
    category: 'labdarugas',
    categoryLabel: 'Labdarúgás',
    date: '2026-12-10',
    dateFormatted: '2026. december 10.',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    country: 'Magyarország',
    priceFrom: 20000,
    priceTo: 100000,
    currency: 'HUF',
    image: 'https://images.unsplash.com/photo-1551958219-acbc595d0c59?w=800&q=80',
    description:
      'A Ferencváros Európa Liga csoportkörében fogadja a Juventust a Groupama Arénában. Egy felejthetetlen téli meccs – olasz sztárok és zöld-fehér szenvedély Budapest szívében.',
    partners: [
      { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', priceFrom: 20000, priceTo: 70000 },
      { name: 'StubHub', url: 'https://www.stubhub.com', priceFrom: 26000, priceTo: 100000 },
      { name: 'Viagogo', url: 'https://www.viagogo.com', priceFrom: 23000, priceTo: 92000 },
    ],
    featured: true,
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

export function getFeaturedEvents(): Event[] {
  return EVENTS.filter((e) => e.featured);
}

export function searchEvents(query: string, category?: string): Event[] {
  let results = EVENTS;
  if (category && category !== 'all') {
    results = results.filter((e) => e.category === category);
  }
  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        e.categoryLabel.toLowerCase().includes(q)
    );
  }
  return results;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('hu-HU').format(amount) + ' Ft';
}
