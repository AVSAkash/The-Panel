/* =========================================================
   ROADMAP DATA
   =========================================================
   This file contains ONLY movie / series information.

   You can add, remove, or edit titles here without touching
   the roadmap rendering code.

   `title` should always be the full, official title. If it's
   long, add a `lines` array (2 entries) to wrap it across two
   lines on the map — line 0 renders on top, line 1 below.
   `mustWatchBefore` entries must exactly match another item's
   `title` somewhere in this file (the app looks titles up by
   exact string match), so keep them in sync when you rename
   anything.
   ========================================================= */

const ROADMAP_DATA = {
    TRACK_A: [

    {
      title: 'Iron Man',
      year: '2008',
      phase: '1',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Tony Stark is captured and forced to build a weapon, but instead creates the first Iron Man armor and begins his journey as a hero.',
  mustWatchBefore: []
    },

    {
      title: 'The Incredible Hulk',
      year: '2008',
      phase: '1',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Bruce Banner searches for a cure while trying to control the Hulk and evade those who want to capture him.',
        mustWatchBefore: []
    },

    {
      title: 'Iron Man 2',
      year: '2010',
      phase: '1',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Tony Stark faces new enemies and struggles with the consequences of revealing himself as Iron Man.',
        mustWatchBefore: [
        'Iron Man'
        ]

    },

    {
      title: 'Thor',
      year: '2011',
      phase: '1',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Thor is banished to Earth and must learn humility before he can become worthy of wielding his legendary hammer again.',
  mustWatchBefore: []
    },

    {
      title: 'Captain America: The First Avenger',
      year: '2011',
      phase: '1',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Steve Rogers becomes Captain America and battles Hydra during World War II.',
        mustWatchBefore: []
    },

    {
      title: 'The Avengers',
      year: '2012',
      phase: '1',
      universe: 'Earth-616',
      type: 'movie',
      major: true,
      description:
        'Earth’s greatest heroes finally unite when Loki leads an alien invasion of New York.',
        mustWatchBefore: [
            'Iron Man',
            'The Incredible Hulk',
            'Iron Man 2',
            'Thor',
            'Captain America: The First Avenger'
        ]
    },


    /* ---------- PHASE 2 ---------- */

    {
      title: 'Iron Man 3',
      year: '2013',
      phase: '2',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Tony Stark struggles with the aftermath of the Battle of New York while facing a mysterious new enemy.',
        mustWatchBefore: [
        'The Avengers'
        ]
    },

    {
      title: 'Thor: The Dark World',
      year: '2013',
      phase: '2',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Thor must protect the Nine Realms when an ancient enemy seeks to use the Aether to plunge the universe into darkness.',
        mustWatchBefore: [
        'Thor',
        'The Avengers'
        ]
    },

    {
      title: 'Captain America: The Winter Soldier',
      year: '2014',
      phase: '2',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Steve Rogers discovers a conspiracy within S.H.I.E.L.D. and faces a mysterious assassin known as the Winter Soldier.',
        mustWatchBefore: [
        'The Avengers',
        'Captain America: The First Avenger'
        ]
    },

    {
      title: 'Guardians of the Galaxy',
      year: '2014',
      phase: '2',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'A group of unlikely criminals become the Guardians of the Galaxy and must stop Ronan from destroying Xandar.',
        mustWatchBefore: []
    },

    {
      title: 'Avengers: Age of Ultron',
      year: '2015',
      phase: '2',
      universe: 'Earth-616',
      type: 'movie',
      major: true,
      description:
        'The Avengers create an artificial intelligence that turns against humanity and threatens the world.',
        mustWatchBefore: [
        'The Avengers',
        'Iron Man 3',
        'Captain America: The Winter Soldier',
        ]
    },

    {
      title: 'Ant-Man',
      year: '2015',
      phase: '2',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Scott Lang becomes Ant-Man and learns to use his shrinking technology while taking on a powerful new enemy.',
        mustWatchBefore: [
        'Avengers: Age of Ultron'
        ]
    },


    /* ---------- PHASE 3 ---------- */

    {
      title: 'Captain America: Civil War',
      year: '2016',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'The Avengers split apart over government control, forcing Captain America and Iron Man onto opposing sides.',
        mustWatchBefore: [
        'Avengers: Age of Ultron',
        'Captain America: The Winter Soldier',
        'Ant-Man'
        ]
    },

    {
      title: 'Doctor Strange',
      year: '2016',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'After losing his ability to practice medicine, Stephen Strange discovers the mystical arts and becomes a powerful sorcerer.',
        mustWatchBefore: []
    },

    {
      title: 'Guardians of the Galaxy Vol. 2',
      year: '2017',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'The Guardians uncover secrets about Peter Quill’s mysterious father while their family begins to grow closer.',
        mustWatchBefore: [
        'Guardians of the Galaxy'
        ]
    },

    {
      title: 'Spider-Man: Homecoming',
      year: '2017',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Peter Parker tries to balance high school with his new responsibilities as Spider-Man.',
        mustWatchBefore: [
  'Captain America: Civil War'
]
    },

    {
      title: 'Thor: Ragnarok',
      year: '2017',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Thor must escape Sakaar and stop Hela from destroying Asgard.',
        mustWatchBefore: [
        'Thor: The Dark World',
        'Avengers: Age of Ultron'
        ]
    },

    {
      title: 'Black Panther',
      year: '2018',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'T’Challa returns to Wakanda and must defend his kingdom when a powerful challenger emerges.',
        mustWatchBefore: [
  'Captain America: Civil War'
]
    },

    {
      title: 'Avengers: Infinity War',
      year: '2018',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: true,
      description:
        'Thanos begins collecting the Infinity Stones, bringing heroes across the universe together to stop him.',
        mustWatchBefore: [
  'The Avengers',
  'Avengers: Age of Ultron',
  'Captain America: Civil War',
  'Thor: Ragnarok',
  'Guardians of the Galaxy',
  'Guardians of the Galaxy Vol. 2',
  'Black Panther',
  'Doctor Strange'
]
    },

    {
      title: 'Ant-Man and the Wasp',
      year: '2018',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Scott Lang teams up with Hope van Dyne as they attempt to rescue Janet van Dyne from the Quantum Realm.',
        mustWatchBefore: [
  'Ant-Man',
  'Captain America: Civil War'
]
    },

    {
      title: 'Captain Marvel',
      year: '2019',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Carol Danvers discovers her true identity and becomes one of the universe’s most powerful heroes.',
        mustWatchBefore: []
    },

    {
      title: 'Avengers: Endgame',
      year: '2019',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: true,
      description:
        'The surviving Avengers attempt to undo Thanos’ destruction and bring back everyone they lost.',
        mustWatchBefore: [
  'Avengers: Infinity War',
  'Ant-Man and the Wasp',
  'Captain Marvel'
]
    },

    {
      title: 'Spider-Man: Far From Home',
      year: '2019',
      phase: '3',
      universe: 'Earth-616',
      type: 'movie',
      major: false,
      description:
        'Peter Parker tries to enjoy a school trip while dealing with the aftermath of Tony Stark’s death.',
        mustWatchBefore: [
  'Avengers: Endgame',
  'Spider-Man: Homecoming'
]
    }

  ],

  TRUNK: [

    {
      title: 'Iron Man',
      year: '2008',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Tony Stark builds an armored suit after being captured and becomes a hero determined to use his technology for good.',
        mustWatchBefore: []
    },

    {
      title: 'The Avengers',
      year: '2012',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Earth’s greatest heroes unite when Loki and an invading alien army threaten the planet.',
        mustWatchBefore: [
            'Iron Man',
            'The Incredible Hulk',
            'Iron Man 2',
            'Thor',
            'Captain America: The First Avenger'
        ]
    },

    {
      title: 'Avengers: Age of Ultron',
      lines: ['Avengers:', 'Age of Ultron'],
      year: '2015',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'The Avengers create an artificial intelligence that turns against humanity and forces the team into another fight for Earth.',
        mustWatchBefore: [
        'The Avengers',
        'Iron Man 3',
        'Captain America: The Winter Soldier',
        ]
    },

    {
      title: 'Captain America: Civil War',
      lines: ['Captain America:', 'Civil War'],
      year: '2016',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'The Avengers split over government control, putting former allies Captain America and Iron Man on opposite sides.',
        mustWatchBefore: [
  'Avengers: Age of Ultron',
  'Captain America: The Winter Soldier',
  'Ant-Man'
]
    },

    {
      title: 'Avengers: Infinity War',
      lines: ['Avengers:', 'Infinity War'],
      year: '2018',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Thanos begins collecting the Infinity Stones, forcing heroes across the universe into a desperate fight to stop him.',
        mustWatchBefore: [
  'The Avengers',
  'Avengers: Age of Ultron',
  'Captain America: Civil War',
  'Thor: Ragnarok',
  'Guardians of the Galaxy',
  'Guardians of the Galaxy Vol. 2',
  'Black Panther',
  'Doctor Strange'
]
    },

    {
      title: 'Avengers: Endgame',
      year: '2019',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'The surviving Avengers attempt to reverse Thanos’ devastation and bring their lost friends and allies back.',
        mustWatchBefore: [
  'Avengers: Infinity War',
  'Ant-Man and the Wasp',
  'Captain Marvel'
]
    },

    {
      title: 'Spider-Man: Far From Home',
      lines: ['Spider-Man:', 'Far From Home'],
      year: '2019',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Peter Parker tries to enjoy a school trip while a new threat and the legacy of Tony Stark pull him back into action.',
        mustWatchBefore: [
  'Avengers: Endgame',
  'Spider-Man: Homecoming'
]
    },

    {
      title: 'WandaVision',
      year: '2021',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Wanda Maximoff creates a strange suburban reality while struggling with grief and the full extent of her powers.',
        mustWatchBefore: [
  'Avengers: Endgame'
]
    },

    {
      title: 'The Falcon and the Winter Soldier',
      lines: ['The Falcon and', 'the Winter Soldier'],
      year: '2021',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Sam Wilson and Bucky Barnes confront new threats while deciding what Captain America’s legacy should become.',
        mustWatchBefore: [
  'Avengers: Endgame'
]
    },

    {
      title: 'Loki (Season 1)',
      year: '2021',
      universe: 'Earth-616',
      type: 'series',
      description:
        'A captured Loki is pulled into the mysterious Time Variance Authority and discovers the dangerous consequences of his escape.',
        mustWatchBefore: [
  'Avengers: Endgame'
]
    },

    {
      title: 'Black Widow',
      year: '2021',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Natasha Romanoff confronts the Red Room and the secrets of the family and past she left behind.',
        mustWatchBefore: [
  'Captain America: Civil War'
]
    },

    {
      title: 'What If...? (Seasons 1–2)',
      lines: ['What If...?', '(Seasons 1–2)'],
      year: '2021',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Alternate realities explore how different choices can create radically different versions of familiar Marvel stories.',
        mustWatchBefore: [
  'Loki (Season 1)'
]
    },

    {
      title: 'Shang-Chi and the Legend of the Ten Rings',
      lines: ['Shang-Chi and the', 'Legend of the Ten Rings'],
      year: '2021',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Shang-Chi is pulled back into his family’s dangerous legacy and discovers a hidden world beyond his ordinary life.',
        mustWatchBefore: [
  'Loki (Season 1)'
]
    },

    {
      title: 'Eternals',
      year: '2021',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Ancient cosmic beings reveal themselves to protect Earth from a threat tied to their own origins.',
        mustWatchBefore: [
  'Avengers: Endgame'
]
    },

    {
      title: 'Hawkeye',
      year: '2021',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Clint Barton and Kate Bishop become unlikely partners while dealing with enemies from Hawkeye’s past.',
        mustWatchBefore: [
  'Avengers: Endgame'
]
    },

    {
      title: 'Spider-Man: No Way Home',
      lines: ['Spider-Man:', 'No Way Home'],
      year: '2021',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Peter Parker’s identity is exposed, triggering a multiversal crisis that brings familiar faces from other universes into his world.',
        mustWatchBefore: [
  'Spider-Man: Far From Home',
  'Avengers: Endgame'
]
    },

    {
      title: 'Moon Knight',
      year: '2022',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Steven Grant discovers another identity, Marc Spector, and becomes caught in a conflict involving ancient Egyptian gods.',
        mustWatchBefore: []
    },

    {
      title: 'Doctor Strange in the Multiverse of Madness',
      lines: ['Doctor Strange in the', 'Multiverse of Madness'],
      year: '2022',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Doctor Strange travels through alternate realities while a dangerous multiversal threat pursues America Chavez.',
        mustWatchBefore: [
  'Doctor Strange',
  'WandaVision',
  'Spider-Man: No Way Home'
]
    },

    {
      title: 'Ms. Marvel',
      year: '2022',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Kamala Khan discovers extraordinary powers and begins learning what it means to become a hero.',
        mustWatchBefore: [
  'Avengers: Endgame'
]
    },

    {
      title: 'Thor: Love and Thunder',
      lines: ['Thor:', 'Love and Thunder'],
      year: '2022',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Thor reunites with Jane Foster while facing Gorr, a god who has sworn to eliminate the gods.',
        mustWatchBefore: [
  'Avengers: Endgame'
]
    },

    {
      title: 'She-Hulk: Attorney at Law',
      lines: ['She-Hulk:', 'Attorney at Law'],
      year: '2022',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Jennifer Walters balances her legal career with life as a super-powered Hulk.',
        mustWatchBefore: [
  'The Incredible Hulk'
]
    },

    {
      title: 'Black Panther: Wakanda Forever',
      lines: ['Black Panther:', 'Wakanda Forever'],
      year: '2022',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Wakanda mourns its king while facing new threats and encountering the powerful underwater nation of Talokan.',
        mustWatchBefore: [
  'Black Panther',
  'Avengers: Endgame'
]
    },

    {
      title: 'Ant-Man and the Wasp: Quantumania',
      lines: ['Ant-Man and the Wasp:', 'Quantumania'],
      year: '2023',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Scott Lang and his family are pulled into the Quantum Realm and encounter the dangerous Kang.',
        mustWatchBefore: [
  'Ant-Man and the Wasp',
  'Avengers: Endgame',
  'Loki (Season 1)'
]
    },

    {
      title: 'Guardians of the Galaxy Vol. 3',
      lines: ['Guardians of the Galaxy', 'Vol. 3'],
      year: '2023',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'The Guardians race to save Rocket while confronting the painful origins of their friend.',
        mustWatchBefore: [
  'Guardians of the Galaxy Vol. 2',
  'Avengers: Infinity War',
  'Avengers: Endgame'
]
    },

    {
      title: 'Secret Invasion',
      year: '2023',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Nick Fury returns to Earth as the Skrulls secretly infiltrate positions of power.',
        mustWatchBefore: [
  'Captain Marvel',
  'Avengers: Endgame'
]
    },

    {
      title: 'Loki (Season 2)',
      year: '2023',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Loki races through time to save the TVA and the branching timelines from collapse.',
        mustWatchBefore: [
  'Loki (Season 1)'
]
    },

    {
      title: 'The Marvels',
      year: '2023',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Carol Danvers, Kamala Khan and Monica Rambeau become mysteriously linked and must learn to work together.',
        mustWatchBefore: [
  'Captain Marvel',
  'Ms. Marvel',
  'WandaVision'
]
    },

    {
      title: 'Echo',
      year: '2024',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Maya Lopez returns home and confronts her past while discovering more about her heritage and her connection to the criminal world.',
        mustWatchBefore: [
  'Hawkeye'
]
    },

    {
      title: 'Deadpool & Wolverine',
      lines: ['Deadpool &', 'Wolverine'],
      year: '2024',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Deadpool is pulled into a multiversal crisis and reluctantly teams up with Wolverine to protect reality.',
        mustWatchBefore: [
  'Deadpool',
  'Deadpool 2',
  'Logan',
  'Loki (Season 1)',
  'Loki (Season 2)'
]
    },

    {
      title: 'Agatha All Along',
      year: '2024',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Agatha Harkness assembles a coven and travels the mysterious Witches’ Road in search of power.',
        mustWatchBefore: [
  'WandaVision'
]
    },

    {
      title: 'What If...? (Season 3)',
      lines: ['What If...?', '(Season 3)'],
      year: '2024',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'More alternate realities reveal unexpected versions of familiar Marvel heroes and events.',
        mustWatchBefore: [
  'What If...? (Seasons 1–2)'
]
    },

    {
      title: 'Daredevil: Born Again',
      lines: ['Daredevil:', 'Born Again'],
      year: '2025',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Matt Murdock returns to Hell’s Kitchen as Daredevil while Wilson Fisk builds a new political power base.',
        mustWatchBefore: [
  'Daredevil (Season 1)',
  'Daredevil (Season 2)',
  'Daredevil (Season 3)'
]
    },

    {
      title: 'Captain America: Brave New World',
      lines: ['Captain America:', 'Brave New World'],
      year: '2025',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Sam Wilson faces an international crisis after fully stepping into the role of Captain America.',
      mustWatchBefore: [
  'The Falcon and the Winter Soldier',
  'Captain America: Civil War',
  'Avengers: Endgame'
]
    },

    {
      title: 'Thunderbolts*',
      year: '2025',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'A group of unconventional heroes and antiheroes are brought together for a dangerous mission.',
        mustWatchBefore: [
  'Black Widow',
  'The Falcon and the Winter Soldier'
]
    },

    {
      title: 'Ironheart',
      year: '2025',
      universe: 'Earth-616',
      type: 'series',      
      optional: true,
      description:
        'Riri Williams returns with her genius and technology as she discovers that magic can be as dangerous as science.',
        mustWatchBefore: [
  'Black Panther',
  'Black Panther: Wakanda Forever'
]
    },

    {
      title: 'The Fantastic Four: First Steps',
      lines: ['The Fantastic Four:', 'First Steps'],
      year: '2025',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Marvel’s First Family faces a cosmic threat while trying to protect their world and their family.',
        mustWatchBefore: []
    },

    {
      title: 'Wonder Man',
      year: '2025',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Simon Williams enters Hollywood as his ambitions collide with a very different kind of superhero story.',
        mustWatchBefore: []
    },

    {
      title: 'Spider-Man: Brand New Day',
      lines: ['Spider-Man:', 'Brand New Day'],
      year: '2026',
      universe: 'Earth-616',
      type: 'movie',
      description:
        'Peter Parker enters a new chapter as Spider-Man while a new threat begins to emerge.',
        mustWatchBefore: [
  'Spider-Man: Homecoming',
  'Spider-Man: Far From Home',
  'Spider-Man: No Way Home'
]
    },

    {
      title: 'Avengers: Doomsday',
      lines: [
        'Avengers:',
        'Doomsday'
      ],
      year: '2026',
      universe: 'Earth-616',
      type: 'movie',
      hero: true,
      description:
        'Heroes from multiple universes are pulled toward a catastrophic collision that threatens to reshape the Marvel multiverse.',
      mustWatchBefore: [
  'Avengers: Endgame',
  'Loki (Season 1)',
  'Loki (Season 2)',
  'Spider-Man: No Way Home',
  'Doctor Strange in the Multiverse of Madness',
  'Deadpool & Wolverine',
  'The Fantastic Four: First Steps',
  'Spider-Man: Brand New Day'
]
    },

    {
      title: 'Avengers: Secret Wars',
      lines: ['Avengers:', 'Secret Wars'],
      year: "'27 TBD",
      universe: 'Earth-616',
      type: 'movie',
      description:
        'The surviving heroes face the ultimate multiversal conflict as realities collide.',
      mustWatchBefore: [
  'Avengers: Doomsday'
]
    }

  ],


  /* =========================================================
     RAIMI SPIDER-MAN
     ========================================================= */

  RAIMI: [

    {
      title: 'Spider-Man',
      year: '2002',
      universe: 'Earth-96283',
      type: 'movie',
      description:
        'Peter Parker gains extraordinary abilities and learns that becoming a hero comes with enormous responsibility.',
        mustWatchBefore: []
    },

    {
      title: 'Spider-Man 2',
      year: '2004',
      universe: 'Earth-96283',
      type: 'movie',
      description:
        'Peter Parker struggles to balance his life as Spider-Man with the arrival of the brilliant but dangerous Doctor Octopus.',
        mustWatchBefore: [
  'Spider-Man'
]
    },

    {
      title: 'Spider-Man 3',
      year: '2007',
      universe: 'Earth-96283',
      type: 'movie',
      description:
        'Peter Parker’s life spirals as new enemies emerge and an alien symbiote begins influencing him.',
        mustWatchBefore: [
  'Spider-Man',
  'Spider-Man 2'
]
    }

  ],


  /* =========================================================
     AMAZING SPIDER-MAN
     ========================================================= */

  AMAZING: [

    {
      title: 'The Amazing Spider-Man',
      lines: ['The Amazing', 'Spider-Man'],
      year: '2012',
      universe: 'Earth-120703',
      type: 'movie',
      description:
        'Peter Parker investigates the mystery of his parents while discovering his own powers and responsibilities.',
        mustWatchBefore: []
    },

    {
      title: 'The Amazing Spider-Man 2',
      lines: ['The Amazing', 'Spider-Man 2'],
      year: '2014',
      universe: 'Earth-120703',
      type: 'movie',
      description:
        'Peter Parker faces Electro and Harry Osborn while the danger surrounding Oscorp grows.',
        mustWatchBefore: [
  'The Amazing Spider-Man'
]
    }

  ],


  /* =========================================================
     X-MEN / FOX
     ========================================================= */

  XMEN: [

    {
      title: 'X-Men',
      year: '2000',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'Mutants fight for acceptance while Professor Xavier’s X-Men confront Magneto and his Brotherhood.',
        mustWatchBefore: []
    },

    {
      title: 'X2: X-Men United',
      year: '2003',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'The X-Men face a military campaign against mutants while uncovering a deeper conspiracy involving Wolverine.',
        mustWatchBefore: [
  'X-Men'
]
    },

    {
      title: 'X-Men: The Last Stand',
      lines: ['X-Men:', 'The Last Stand'],
      year: '2006',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'The mutant community is divided over a controversial cure as Magneto prepares for war.',
        mustWatchBefore: [
  'X-Men',
  'X2: X-Men United'
]
    },

    {
      title: 'X-Men Origins: Wolverine',
      lines: ['X-Men Origins:', 'Wolverine'],
      year: '2009',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'Wolverine’s violent past and connection to Victor Creed are explored through a dangerous military experiment.',
        mustWatchBefore: []
    },

    {
      title: 'X-Men: First Class',
      year: '2011',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'A young Charles Xavier and Erik Lehnsherr form the first X-Men while their friendship begins to fracture.',
        mustWatchBefore: []
    },

    {
      title: 'The Wolverine',
      year: '2013',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'Logan travels to Japan and becomes caught between old enemies, new alliances and questions about his mortality.',
        mustWatchBefore: [
  'X-Men: The Last Stand'
]
    },

    {
      title: 'X-Men: Days of Future Past',
      lines: ['X-Men:', 'Days of Future Past'],
      year: '2014',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'The X-Men send Wolverine into the past to prevent a future where mutants and humans are nearly wiped out.',
        mustWatchBefore: [
  'X-Men',
  'X2: X-Men United',
  'X-Men: The Last Stand',
  'X-Men: First Class'
]
    },

    {
      title: 'Deadpool',
      year: '2016',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'Wade Wilson becomes Deadpool after an experimental treatment leaves him scarred and nearly impossible to kill.',
        mustWatchBefore: [
  'X-Men: Days of Future Past'
]
    },

    {
      title: 'X-Men: Apocalypse',
      year: '2016',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'The X-Men face Apocalypse, an ancient mutant who awakens with plans to reshape civilization.',
        mustWatchBefore: [
            'X-Men: First Class',
            'X-Men: Days of Future Past'
            ]
    },

    {
      title: 'Logan',
      year: '2017',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'An aging Logan protects a young mutant while confronting the final chapter of his life as Wolverine.',
        mustWatchBefore: [
  'X-Men',
  'X2: X-Men United',
  'X-Men: The Last Stand',
  'The Wolverine'
]
    },

    {
      title: 'Deadpool 2',
      year: '2018',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'Deadpool protects a young mutant from a time-traveling soldier while assembling an unconventional team.',
        mustWatchBefore: [
  'Deadpool'
]
    },

    {
      title: 'Dark Phoenix',
      year: '2019',
      universe: 'Earth-10005',
      type: 'movie',
      description:
        'Jean Grey struggles with a powerful cosmic force that threatens to consume her and everyone around her.',
        mustWatchBefore: [
  'X-Men: First Class',
  'X-Men: Days of Future Past',
  'X-Men: Apocalypse'
]
    },

    {
      title: 'The New Mutants',
      year: '2020',
      universe: 'Earth-10005',
      type: 'movie',
      optional: true,
      description:
        'A group of young mutants discover their powers while being held in a mysterious facility.',
        mustWatchBefore: [
  'X-Men: Days of Future Past'
]
    }

  ],


  /* =========================================================
     MCU SERIES / DEFENDERS
     ========================================================= */

  DAREDEVIL: [

    {
      title: 'Daredevil (Season 1)',
      lines: ['Daredevil', '(Season 1)'],
      year: '2015',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Matt Murdock secretly fights crime in Hell’s Kitchen while building a legal career by day.',
        mustWatchBefore: []
    },

    {
      title: 'Jessica Jones (Season 1)',
      lines: ['Jessica Jones', '(Season 1)'],
      year: '2015',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Private investigator Jessica Jones confronts a traumatic figure from her past who has returned to control her life.',
        mustWatchBefore: []
    },

    {
      title: 'Daredevil (Season 2)',
      lines: ['Daredevil', '(Season 2)'],
      year: '2016',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Matt Murdock faces the Punisher and the Hand while his personal life begins to unravel.',
        mustWatchBefore: [
  'Daredevil (Season 1)'
]
    },

    {
      title: 'Luke Cage (Season 1)',
      lines: ['Luke Cage', '(Season 1)'],
      year: '2016',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Luke Cage becomes a reluctant hero in Harlem while confronting criminals tied to his past.',
        mustWatchBefore: [
            'Jessica Jones (Season 1)'
        ]
    },

    {
      title: 'Iron Fist (Season 1)',
      lines: ['Iron Fist', '(Season 1)'],
      year: '2017',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Danny Rand returns to New York claiming the mantle of the Iron Fist and becomes involved in a hidden war.',
        mustWatchBefore: []
    },

    {
      title: 'The Defenders',
      year: '2017',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Daredevil, Jessica Jones, Luke Cage and Iron Fist unite when the Hand threatens New York.',
        mustWatchBefore: [
  'Daredevil (Season 2)',
  'Jessica Jones (Season 1)',
  'Luke Cage (Season 1)',
  'Iron Fist (Season 1)'
]
    },

    {
      title: 'The Punisher (Season 1)',
      lines: ['The Punisher', '(Season 1)'],
      year: '2017',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Frank Castle wages a brutal war against the conspiracy responsible for the death of his family.',
        mustWatchBefore: [
  'Daredevil (Season 2)'
]
    },

    {
      title: 'Jessica Jones (Season 2)',
      lines: ['Jessica Jones', '(Season 2)'],
      year: '2018',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Jessica investigates the origins of her powers while confronting the people who experimented on her.',
        mustWatchBefore: [
  'Jessica Jones (Season 1)'
]
    },

    {
      title: 'Luke Cage (Season 2)',
      lines: ['Luke Cage', '(Season 2)'],
      year: '2018',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Luke Cage struggles with his growing reputation as Harlem’s protector while new rivals challenge him.',
        mustWatchBefore: [
  'Luke Cage (Season 1)',
  'The Defenders'
]
    },

    {
      title: 'Iron Fist (Season 2)',
      lines: ['Iron Fist', '(Season 2)'],
      year: '2018',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Danny Rand tries to protect New York while mastering his responsibilities as the Iron Fist.',
        mustWatchBefore: [
  'Iron Fist (Season 1)',
  'The Defenders'
]
    },

    {
      title: 'Daredevil (Season 3)',
      lines: ['Daredevil', '(Season 3)'],
      year: '2018',
      universe: 'Earth-616',
      type: 'series',
      description:
        'After suffering a devastating defeat, Matt Murdock returns to confront Wilson Fisk and reclaim his identity.',
        mustWatchBefore: [
  'Daredevil (Season 1)',
  'Daredevil (Season 2)',
  'The Defenders'
]
    },

    {
      title: 'The Punisher (Season 2)',
      lines: ['The Punisher', '(Season 2)'],
      year: '2019',
      universe: 'Earth-616',
      type: 'series',
      description:
        'Frank Castle tries to disappear into a quiet life but is pulled back into violence to protect a young girl.',
        mustWatchBefore: [
  'The Punisher (Season 1)'
]
    },

    {
      title: 'Jessica Jones (Season 3)',
      lines: ['Jessica Jones', '(Season 3)'],
      year: '2019',
      universe: 'Earth-616',
      type: 'series',
      optional: true,
      description:
        'Jessica investigates a dangerous serial killer while dealing with the consequences of her relationship with Trish.',
        mustWatchBefore: [
  'Jessica Jones (Season 1)',
  'Jessica Jones (Season 2)',
  'The Defenders'
]
    }

  ],


  /* =========================================================
     FANTASTIC FOUR
     ========================================================= */

  FANTASTIC_FOUR: [

    {
      title: 'Fantastic Four (2005)',
      lines: ['Fantastic Four', '(2005)'],
      year: '2005',
      universe: 'Earth-121698',
      type: 'movie',
      description:
        'Four explorers gain extraordinary abilities after a cosmic accident and must learn to work together.',
        mustWatchBefore: []
    },

    {
      title: 'Fantastic Four: Rise of the Silver Surfer',
      lines: [
        'Fantastic Four:',
        'Rise of the Silver Surfer'
      ],
      year: '2007',
      universe: 'Earth-121698',
      type: 'movie',
      description:
        'The Fantastic Four face the arrival of the Silver Surfer and a cosmic threat that could consume Earth.',
        mustWatchBefore: [
  'Fantastic Four (2005)'
]
    },

    {
      title: 'Fantastic Four (2015)',
      lines: ['Fantastic Four', '(2015)'],
      year: '2015',
      universe: 'Earth-15866',
      type: 'movie',
      description:
        'Four explorers gain extraordinary abilities after an experiment goes wrong and must face a powerful enemy.',
        mustWatchBefore: []
    }

  ],


  /* =========================================================
     VENOM / SONY
     ========================================================= */

  VENOM: [

    {
      title: 'Venom',
      year: '2018',
      universe: 'Earth-688',
      type: 'movie',
      description:
        'Eddie Brock becomes host to an alien symbiote and discovers that survival may depend on accepting it.',
        mustWatchBefore: []
    },

    {
      title: 'Venom: Let There Be Carnage',
      lines: [
        'Venom:',
        'Let There Be Carnage'
      ],
      year: '2021',
      universe: 'Earth-688',
      type: 'movie',
      description:
        'Eddie Brock and Venom face the violent serial killer Cletus Kasady and his symbiote Carnage.',
        mustWatchBefore: [
  'Venom'
]
    },

    {
      title: 'Venom: The Last Dance',
      lines: ['Venom:', 'The Last Dance'],
      year: '2024',
      universe: 'Earth-688',
      type: 'movie',
      description:
        'Eddie and Venom are hunted by forces from across the universe as their final adventure pushes their bond to its limit.',
        mustWatchBefore: [
  'Venom',
  'Venom: Let There Be Carnage'
]
    }

  ]

};


/* =========================================================
   TIMELINE REGISTRY
   =========================================================
   This is the only part the roadmap renderer needs to know
   about when creating timeline buttons.
   ========================================================= */

const ROADMAP_TIMELINES = {

  mcu: {
    label: 'MCU Main Line',
    color: 'var(--track-mcu)',
    items: ROADMAP_DATA.TRUNK
  },

  raimi: {
    label: 'Raimi Spider-Man',
    color: 'var(--track-raimi)',
    items: ROADMAP_DATA.RAIMI
  },

  amazing: {
    label: 'Amazing Spider-Man',
    color: 'var(--track-amazing)',
    items: ROADMAP_DATA.AMAZING
  },

  xmen: {
    label: 'X-Men (Fox Era)',
    color: 'var(--track-xmen)',
    items: ROADMAP_DATA.XMEN
  },

  series: {
    label: 'MCU Series',
    color: 'var(--track-mcu_series)',
    items: ROADMAP_DATA.DAREDEVIL
  },

  four: {
    label: 'Fantastic Four (Fox Era)',
    color: 'var(--track-four)',
    items: ROADMAP_DATA.FANTASTIC_FOUR
  },

  venom: {
    label: 'Venom Universe (Sony)',
    color: 'var(--track-venom)',
    items: ROADMAP_DATA.VENOM
  }

};
