// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "All of my recent projects. There has been only one big mentionable one so far...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
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
              window.location.href = "/books/the_godfather/";
            },},{id: "books-তিথিডোর",
          title: 'তিথিডোর',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tithidor/";
            },},{id: "projects-calculus-of-variations-notes",
          title: 'Calculus of Variations Notes',
          description: "Notes from my internship at TIFR-CAM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/calculus_variations/";
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
