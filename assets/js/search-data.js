// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-movies",
          title: "Movies",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/movies/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "All of my recent projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic curriculum vitae detailing my education, research interests, projects, and awards.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-1984",
          title: '1984',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1984/";
            },},{id: "books-angels-and-demons",
          title: 'Angels And Demons',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/angels/";
            },},{id: "books-animal-farm",
          title: 'Animal Farm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/animalfarm/";
            },},{id: "books-অপরাজিত",
          title: 'অপরাজিত',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/aparajito/";
            },},{id: "books-ছবির-দেশে-কবিতার-দেশে",
          title: 'ছবির দেশে কবিতার দেশে',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/chhobirdeshe/";
            },},{id: "books-chilekothar-sepai",
          title: 'Chilekothar Sepai',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/chilekothar/";
            },},{id: "books-harry-potter-and-the-cursed-child",
          title: 'Harry Potter and the Cursed Child',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/cursedchild/";
            },},{id: "books-the-da-vinci-code",
          title: 'The Da Vinci Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/davinci/";
            },},{id: "books-dune",
          title: 'Dune',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dune/";
            },},{id: "books-harry-potter-series",
          title: 'Harry Potter Series',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hpseries/";
            },},{id: "books-one-hundred-years-of-solitude",
          title: 'One Hundred Years of Solitude',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hundredyears/";
            },},{id: "books-কালবেলা",
          title: 'কালবেলা',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/kalbela/";
            },},{id: "books-পথের-পাঁচালী",
          title: 'পথের পাঁচালী',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/patherpanchali/";
            },},{id: "books-প্রথম-আলো",
          title: 'প্রথম আলো',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/prothomalo/";
            },},{id: "books-sapiens",
          title: 'Sapiens',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sapiens/";
            },},{id: "books-সেই-সময়",
          title: 'সেই সময়',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/seisomoy/";
            },},{id: "books-শেষের-কবিতা",
          title: 'শেষের কবিতা',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/shesherkobita/";
            },},{id: "books-তিথিডোর",
          title: 'তিথিডোর',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tithidor/";
            },},{id: "books-তুমি-সন্ধ্যার-মেঘ",
          title: 'তুমি সন্ধ্যার মেঘ',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tumisondharmegh/";
            },},{id: "books-তুঙ্গভদ্রার-তীরে",
          title: 'তুঙ্গভদ্রার তীরে',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tungabhadra/";
            },},{id: "movies-1917",
          title: '1917',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/1917/";
            },},{id: "movies-3-idiots",
          title: '3 Idiots',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/3-idiots/";
            },},{id: "movies-an-enemy-of-the-people",
          title: 'An Enemy of the People',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/an-enemy-of-the-people/";
            },},{id: "movies-aparajito",
          title: 'Aparajito',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/aparajito/";
            },},{id: "movies-apur-sansar",
          title: 'Apur Sansar',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/apur-sansar/";
            },},{id: "movies-aschhe-abar-shabor",
          title: 'Aschhe Abar Shabor',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/aschhe-abar-shabor/";
            },},{id: "movies-atonement",
          title: 'Atonement',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/atonement/";
            },},{id: "movies-bajrangi-bhaijaan",
          title: 'Bajrangi Bhaijaan',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/bajrangi-bhaijaan/";
            },},{id: "movies-ballabhpurer-roopkotha",
          title: 'Ballabhpurer Roopkotha',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/ballabhpurer-roopkotha/";
            },},{id: "movies-ballerina",
          title: 'Ballerina',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/ballerina/";
            },},{id: "movies-batman-begins",
          title: 'Batman Begins',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/batman-begins/";
            },},{id: "movies-before-sunrise",
          title: 'Before Sunrise',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/before-sunrise/";
            },},{id: "movies-before-sunset",
          title: 'Before Sunset',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/before-sunset/";
            },},{id: "movies-blade-runner",
          title: 'Blade Runner',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/blade-runner/";
            },},{id: "movies-charulata",
          title: 'Charulata',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/charulata/";
            },},{id: "movies-cinema-paradiso",
          title: 'Cinema Paradiso',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/cinema-paradiso/";
            },},{id: "movies-days-and-nights-in-the-forest",
          title: 'Days and Nights in the Forest',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/days-and-nights-in-the-forest/";
            },},{id: "movies-dead-poets-society",
          title: 'Dead Poets Society',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/dead-poets-society/";
            },},{id: "movies-devi",
          title: 'Devi',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/devi/";
            },},{id: "movies-dhurandhar-the-revenge",
          title: 'Dhurandhar The Revenge',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/dhurandhar-the-revenge/";
            },},{id: "movies-dhurandhar",
          title: 'Dhurandhar',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/dhurandhar/";
            },},{id: "movies-dil-chahta-hai",
          title: 'Dil Chahta Hai',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/dil-chahta-hai/";
            },},{id: "movies-disclosure-day",
          title: 'Disclosure Day',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/disclosure-day/";
            },},{id: "movies-",
          title: '',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/dune-part-two/";
            },},{id: "movies-dune",
          title: 'Dune',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/dune/";
            },},{id: "movies-eagoler-chokh",
          title: 'Eagoler Chokh',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/eagoler-chokh/";
            },},{id: "movies-ebar-shabor",
          title: 'Ebar Shabor',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/ebar-shabor/";
            },},{id: "movies-forrest-gump",
          title: 'Forrest Gump',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/forrest-gump/";
            },},{id: "movies-fury",
          title: 'Fury',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/fury/";
            },},{id: "movies-ghajini",
          title: 'Ghajini',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/ghajini/";
            },},{id: "movies-goopy-gyne-bagha-byne",
          title: 'Goopy Gyne Bagha Byne',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/goopy-gyne-bagha-byne/";
            },},{id: "movies-hacksaw-ridge",
          title: 'Hacksaw Ridge',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/hacksaw-ridge/";
            },},{id: "movies-har-har-byomkesh",
          title: 'Har Har Byomkesh',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/har-har-byomkesh/";
            },},{id: "movies-inception",
          title: 'Inception',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/inception/";
            },},{id: "movies-indrani",
          title: 'Indrani',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/indrani/";
            },},{id: "movies-inglourious-basterds",
          title: 'Inglourious Basterds',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/inglourious-basterds/";
            },},{id: "movies-interstellar",
          title: 'Interstellar',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/interstellar/";
            },},{id: "movies-jaws",
          title: 'Jaws',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/jaws/";
            },},{id: "movies-john-wick-chapter-2",
          title: 'John Wick: Chapter 2',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/john-wick-chapter-2/";
            },},{id: "movies-john-wick-chapter-3-parabellum",
          title: 'John Wick: Chapter 3 – Parabellum',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/john-wick-chapter-3-parabellum/";
            },},{id: "movies-john-wick-chapter-4",
          title: 'John Wick: Chapter 4',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/john-wick-chapter-4/";
            },},{id: "movies-john-wick",
          title: 'John Wick',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/john-wick/";
            },},{id: "movies-kahaani",
          title: 'Kahaani',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/kahaani/";
            },},{id: "movies-kanchenjungha",
          title: 'Kanchenjungha',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/kanchenjungha/";
            },},{id: "movies-like-stars-on-earth",
          title: 'Like Stars on Earth',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/like-stars-on-earth/";
            },},{id: "movies-lootera",
          title: 'Lootera',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/lootera/";
            },},{id: "movies-midnight-in-paris",
          title: 'Midnight in Paris',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/midnight-in-paris/";
            },},{id: "movies-",
          title: '',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/mission-impossible-the-final-reckoning/";
            },},{id: "movies-oppenheimer",
          title: 'Oppenheimer',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/oppenheimer/";
            },},{id: "movies-pan-39-s-labyrinth",
          title: 'Pan&amp;#39;s Labyrinth',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/pan-s-labyrinth/";
            },},{id: "movies-pather-panchali",
          title: 'Pather Panchali',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/pather-panchali/";
            },},{id: "movies-piku",
          title: 'Piku',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/piku/";
            },},{id: "movies-project-hail-mary",
          title: 'Project Hail Mary',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/project-hail-mary/";
            },},{id: "movies-saptapadi",
          title: 'Saptapadi',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/saptapadi/";
            },},{id: "movies-saving-private-ryan",
          title: 'Saving Private Ryan',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/saving-private-ryan/";
            },},{id: "movies-spider-man-brand-new-day",
          title: 'Spider-Man: Brand New Day',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/spider-man-brand-new-day/";
            },},{id: "movies-spider-man-homecoming",
          title: 'Spider-Man: Homecoming',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/spider-man-homecoming/";
            },},{id: "movies-",
          title: '',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/spider-man-no-way-home/";
            },},{id: "movies-superman",
          title: 'Superman',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/superman/";
            },},{id: "movies-talaash",
          title: 'Talaash',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/talaash/";
            },},{id: "movies-tenet",
          title: 'Tenet',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/tenet/";
            },},{id: "movies-the-adversary",
          title: 'The Adversary',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-adversary/";
            },},{id: "movies-the-big-city",
          title: 'The Big City',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-big-city/";
            },},{id: "movies-the-book-thief",
          title: 'The Book Thief',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-book-thief/";
            },},{id: "movies-the-branches-of-the-tree",
          title: 'The Branches of the Tree',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-branches-of-the-tree/";
            },},{id: "movies-the-cloud-capped-star",
          title: 'The Cloud-Capped Star',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-cloud-capped-star/";
            },},{id: "movies-the-code-of-secrecy",
          title: 'The Code of Secrecy',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-code-of-secrecy/";
            },},{id: "movies-the-coward",
          title: 'The Coward',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-coward/";
            },},{id: "movies-the-dark-knight-rises",
          title: 'The Dark Knight Rises',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-dark-knight-rises/";
            },},{id: "movies-the-dark-knight",
          title: 'The Dark Knight',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-dark-knight/";
            },},{id: "movies-the-elephant-god",
          title: 'The Elephant God',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-elephant-god/";
            },},{id: "movies-the-golden-fortress",
          title: 'The Golden Fortress',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-golden-fortress/";
            },},{id: "movies-the-hero",
          title: 'The Hero',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-hero/";
            },},{id: "movies-the-imitation-game",
          title: 'The Imitation Game',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-imitation-game/";
            },},{id: "movies-the-kingdom-of-diamonds",
          title: 'The Kingdom of Diamonds',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-kingdom-of-diamonds/";
            },},{id: "movies-",
          title: '',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-lord-of-the-rings-the-fellowship-of-the-ring/";
            },},{id: "movies-the-map-of-tiny-perfect-things",
          title: 'The Map of Tiny Perfect Things',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-map-of-tiny-perfect-things/";
            },},{id: "movies-the-middleman",
          title: 'The Middleman',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-middleman/";
            },},{id: "movies-the-odyssey",
          title: 'The Odyssey',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-odyssey/";
            },},{id: "movies-the-pianist",
          title: 'The Pianist',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-pianist/";
            },},{id: "movies-the-prestige",
          title: 'The Prestige',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-prestige/";
            },},{id: "movies-the-prisoner-of-jhind",
          title: 'The Prisoner of Jhind',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-prisoner-of-jhind/";
            },},{id: "movies-the-sheep-detectives",
          title: 'The Sheep Detectives',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-sheep-detectives/";
            },},{id: "movies-the-stranger",
          title: 'The Stranger',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-stranger/";
            },},{id: "movies-the-zoo",
          title: 'The Zoo',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/the-zoo/";
            },},{id: "movies-thor",
          title: 'Thor',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/thor/";
            },},{id: "movies-three-daughters",
          title: 'Three Daughters',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/three-daughters/";
            },},{id: "movies-tirandaj-shabor",
          title: 'Tirandaj Shabor',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/tirandaj-shabor/";
            },},{id: "movies-",
          title: '',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/top-gun-maverick/";
            },},{id: "movies-whiplash",
          title: 'Whiplash',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/whiplash/";
            },},{id: "movies-zindagi-na-milegi-dobara",
          title: 'Zindagi Na Milegi Dobara',
          description: "",
          section: "Movies",handler: () => {
              window.location.href = "/movies/zindagi-na-milegi-dobara/";
            },},{id: "projects-calculus-of-variations-using-sobolev-spaces",
          title: 'Calculus of Variations using Sobolev Spaces',
          description: "Notes from my internship at IISc under the supervision of Prof. Swarnendu Sil in 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/calculus2/";
            },},{id: "projects-calculus-of-variations-notes",
          title: 'Calculus of Variations Notes',
          description: "Notes from my internship at TIFR-CAM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/calculus-variations/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CalculusNotes_TIFR_2025.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%67%32%33%6D%73%31%32%30@%69%69%73%65%72%6B%6F%6C.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/suparnoghosh", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/suparno.__", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
