// TODO Find a better way of managing content.
import Project from '@/classes/project';

const projectList: Project[] = [
  /* Jordan Rudess */
  new Project('ai-accompaniment',
    'Generative AI for Musical Accompaniment',
    'Creating a novel Human-AI Co-Created Live Music Performance.',
    ['Music', 'AI'],
    '2024',
    'ai-accompaniment.jpg',
    'I am currently working in partnership with **GRAMMY-winning keyboardist Jordan Rudess** in a project to create a novel '
    + '**Human-AI Co-Created Live Music Performance**.\n\n '
    + 'Through optimized GPT2-based MIDI generation models, this project aims at generating real-time live accompaniment '
    + 'for music performers. A large kinetic sculpture, visualizing the generated voices, enables the audience to visualize '
    + 'this non-human musical agent embodied on stage.\n\n'
    + 'The work was funded by **MIT\'s Generative AI Impact Publication Grant**, for which we wrote a paper published by MIT Press. '
    + 'So far, we presented this work in a live performance at the MIT Media Lab on September 21st, 2024, and at the AES 2024 '
    + 'Show in NYC. We will also be presenting it at NAMM 2025.',
    ['Read our impact paper', 'https://doi.org/10.21428/e4baedd9.69c11de7'],
    undefined),

  /* MQDC */
  new Project('restorative-forest',
    'Restorative Forest',
    'Reinforcing Environmental Awareness through AI Sonification of Forests.',
    ['Music', 'AI'],
    '2024',
    'restorative-forest.jpg',
    'The Forestias is a new development concept by the Magnolia Quality Development Corporation (MQDC), based in '
    + 'Thailand. Currently under construction, the expansive parks and forests aim to engage residents with nature '
    + 'only steps away from their residences.\n\n'
    + 'In this project, the MIT Media Lab is collaborating with MQDC to develop **new experiences that aim at reinforcing '
    + 'the environmental awareness** of the residents. One of these experiences focuses on using Generative AI to '
    + 'offer a novel way to listen to natural sounds. Through a **vast sensor network deployed by the lab**, trail-goers '
    + 'are able to listen to a soundtrack that fits their current activity (jogging, meditation, etc.), AI-generated in '
    + 'real time using the sounds of nearby microphones.',
    undefined,
    undefined),

  /* inHarmony */
  new Project('inharmony',
    'inHarmony',
    'Reinforcing Community Belonging through AI Choirs',
    ['Music', 'AI'],
    '2024',
    'inharmony.jpg',
    'inHarmony is an opportunity for everyone to explore the **multiple and diverse singing voices** of their community, '
    + 'while letting their own voice stand out.\n\n'
    + 'Previous research has shown the effectiveness of group singing in the **reduction of anxiety and reinforcement of '
    + 'community belonging**. Through state-of-the-art Singing Voice Conversion models (such as SVC and RVC), we are building '
    + 'a novel experience in which participants are able to harmonize their own words in the voice of their community. '
    + 'We study the impact of this experience on community belonging and social anxiety.\n\n'
    + 'A publication for this work is in preparation.',
    undefined,
    undefined),

  /* FIBERHARP */
  new Project('fiberharp',
    'FiberHarp',
    'A MIDI harp-like instrument that uses optical fiber.',
    ['Music', 'Art'],
    '2023',
    'fiberharp.jpg',
    'As part of the 2023 iteration of Prof. Neil Gershenfeld\'s class *How To Make (almost) Anything*, I dived into '
    + 'the construction of various musical instruments using machines that can all be found within a FabLab. '
    + 'For my final project, I designed and constructed a **real-size harp** made out of wood, with **sidelight optical '
    + 'fiber** for strings. The strumming of the strings was captured through piezoelectric sensors and a microcontroller. '
    + 'The result was a beautiful **MIDI controller with great playability and increased haptic feedback** compared to '
    + 'more traditional laser harps.',
    ['Visit my class page: \'How To Make Almost Any Instrument\'', 'https://fab.cba.mit.edu/classes/863.23/CBA/people/Lancelot'],
    undefined),

  /* SITUATIONSHIP */
  new Project('situationship',
    'SITUATIONSHIP',
    'Exploring Relationships and Perspectives in an Intergalactic Dating Simulator.',
    ['AI', 'Art'],
    '2023',
    'situationship.jpg',
    'SITUATIONSHIP is a unique **dating simulator-like game** that delves into the intricate dynamics of relationships, '
    + 'examining their profound impacts and **how social situations can be experienced from diverse perspectives**. Set '
    + 'against the backdrop of an intergalactic payphone, players engage in conversations with extraterrestrial '
    + 'beings from their past, aiming to deftly navigate challenging scenarios in a limited timeframe.\n\n'
    + 'This innovative experience draws inspiration from the storytelling style of StoryCorps and the nostalgic '
    + 'allure of 1-900 hotline commercials from the 1990s. Players immerse themselves within a specially designed '
    + 'booth, using a web-based program on a touchscreen phone equipped with a handset to interact with the game. '
    + 'Major thematic considerations encompass the profound sense of alienation that often accompanies the end of a '
    + 'close relationship, alongside the exploration of agency and predictability in these poignant moments.',
    undefined,
    undefined),

  /* Argument Assessment from Dialogue */
  new Project('aipocalypse',
    'AIPocalypse',
    'Degenerative AI Podcasting',
    ['AI', 'Art'],
    '2023',
    'aipocalypse.jpg',
    'In a future where artificial intelligence can produce any media consent that we may desire, **how will it influence '
    + 'the media which we consume?**\n\nThis project is an exploration of podcasting where everything from the host to the '
    + 'music is completely AI generated from whatever the user wants to hear. The first run of the project was launched '
    + 'during the 99 Friday MIT Media Lab party "*CONQUERED BY CLIPPY: Tales of a Degenerative AI.*" The inaugural podcast '
    + 'theme delved into the speculative genre of a post-AI apocalypse, hosted by AI persona Max "The Exterminator” Stone. '
    + 'Podcast topics are generated based on large language models and a text to speech, voice cloning of a 1950\'s radio '
    + 'host, employing an elaborate system that can instantly produce thematically fitting content. Not only do the podcasts '
    + 'discuss the topics, but they also address queries posed by listeners in real time, further emphasizing the '
    + 'interactive potential of AI.',
    undefined,
    ['Theme3']),

  /* Argument Assessment from Dialogue */
  new Project('argument-assistant',
    'Argument Assistant from Dialogue',
    'Augmenting Human Reasoning through an Intelligent Interface',
    ['AI', 'SoftEng'],
    '2022',
    'argument_assistant.jpg',
    'As part of my Master of Research, I worked with Valdemar Danry and Professor Pattie Maes from the MIT Media Lab to '
    + 'construct a **Neurosymbolic AI** that **models human reasoning** and **analyses arguments and debates** expressed in '
    + 'natural language. Our architecture seamlessly combined Deep Learning with Logic-based Learning to assist human '
    + 'users in **defining and expressing their thoughts logically**, **understanding and assessing supporting and challenging '
    + 'answers**, as well as **keeping up with complex discussions**.\n\n'
    + 'Through this project, I aimed to democratise logical reasoning, facilitate social interactions, and avoid emotional '
    + 'manipulation, by applying the Argument Assistant to situations ranging from everyday conversations to political '
    + 'debates.',
    undefined,
    ['Theme3']),

  /* StageFright VR */
  new Project('stagefright',
    'StageFright VR',
    'Immersive VR Experience to combat Musical Performance Anxiety',
    ['Music'],
    '2022',
    'stagefright.jpg',
    'As part of a group project at MIT, I have co-developed StageFright, an **immersive VR experience** that aims to **combat '
    + 'Music Performance Anxiety** by **simulating a music performance**, **measuring users\' biofeedback**, and '
    + 'teaching them how to **apply Cognitive Behavioral Therapy techniques** to redefine their emotional response to MPA.\n\n'
    + 'A 2020 study showed that one in every five performers suffers from Music Performance Anxiety, making up for millions of '
    + 'people around the world. Through an authentic performance simulation, we aimed to help musicians, amateurs or professionals, '
    + 'conquer their fear of playing in public in order to spread the accessibility of live music performances.',
    undefined,
    undefined),

  /* Living Memories */
  /* TODO Check that I can use it on my website */
  new Project('living-memories',
    'Living Memories',
    'AI-Generated Characters as Digital Mementos',
    ['AI'],
    '2022',
    'living-memories.png',
    'Together with Pat Pataranutaporn, Valdemar Danry, Lavanay Thakral, and Professor Pattie Maes from MIT Media Lab, '
    + 'and Misha Sra from UC Santa Barbara, I have been working on creating *Living Memories*, **interactive digital '
    + 'mementos** that are created from journals, letters and data that an individual have left behind. Like an interactive '
    + 'photograph, living memories can be talked to and asked questions, **making connecting with the knowledge, attitudes and past '
    + 'experiences of a person easily accessible.**\n\n'
    + 'To demonstrate our concept, we created an AI-based pipeline for generating '
    + 'living memories from any data source and implemented living memories of the three historical figures *Leonardo Da Vinci*, '
    + '*Murasaki Shikibu*, and *Captain Robert Scott*. Our results show that interacting the living memory in addition to simply '
    + 'reading a journal increases learning effectiveness and motivation to learn about the character.\n\n'
    + 'Our paper was published in IUI 2023.',
    undefined,
    ['Theme1']),

  /* Immersive Cover Arts */
  new Project('immersive-cover-arts',
    'Immersive Cover Arts',
    'Enhancing Listening Experience through VR Synethesia',
    ['AI', 'Music'],
    '2022',
    'immersive_cover_arts.png',
    'In this work in progress, I am **augmenting the experience of music listening** in a novel way by transporting '
    + 'listeners into **virtual immersive environments** inspired by cover arts. This synesthetic experience aims at '
    + 'redefining the way in which users listen to music, by expanding the range of senses that are solicitated while '
    + 'listening to musical pieces, and engaging listeners to associate musical elements, lyrical narratives, and '
    + 'emotions to matching visual aspects.',
    undefined,
    undefined),

  /* Explainable Music Classification */
  new Project('neurosymbolic-music-classification',
    'Neurosymbolic Music Classification',
    'Explainable Classification using Music Theory',
    ['AI', 'Music'],
    '2022',
    'neurosymbolic_classifier.png',
    'In this work in progress, I developed a novel **Music Theory-aware AI** that can **classify Music Genres** '
    + 'using **explainable theoretical musical features**, and **communicate results in an interactive way**. The '
    + 'technology is based on [GenFastLAS](#/projects/genfastlas), the Genetic Symbolic Learner that I developed '
    + 'during my Master\'s Thesis Project, supplemented with an additional Neural subcomponent.\n\n'
    + 'By manipulating Music Theory, the AI system is equipped with the necessary knowledge and vocabulary to '
    + 'interact with human users in various ways, therefore gaining explainability and augmenting the learning '
    + 'benefits of users. The model can learn insightful rules used in the classification process such as '
    + '*"ii-V-I progressions indicate a jazz music piece with a higher probability"*. By letting the user '
    + 'navigate between music genres and music theory concepts, the system gives a new insight into the classification '
    + 'of genres, and embeds a novel way of exploring information and teaching subjects like musicology or others.\n\n',
    undefined,
    ['Theme1']),

  /* GenFastLAS */
  new Project('genfastlas',
    'GenFastLAS',
    'Genetic Symbolic Learning with Increased Feature Scalability',
    ['AI'],
    '2022',
    'genfastlas.jpg',
    'As part of my Master\'s Thesis, I developed a GenFastLAS, a novel **Logic-based Learning system** that '
    + 'combines **Genetic Algorithms** with the **Symbolic Learner FastLAS**, in order to scale the latter to '
    + '**large feature spaces**. By using Genetic Algorithms to explore symbolic hypothesis spaces, GenFastLAS '
    + 'can be applied to **solve tasks in a newly explainable, interactive, and efficient way**.\n\n'
    + 'When applied to complex datasets with large numbers of features (up to 60), GenFastLAS has been shown'
    + 'to speed up the finding of solutions by a factor of *up to 210 times* the speed of other '
    + 'FastLAS-based methods, like OLAPH. Accuracy was also shown to greatly improve when using GenFastLAS.\n\n'
    + 'I am currently writing a paper for IJCAI 2023.',
    undefined,
    undefined),

  /* DJStreamr */
  new Project('djstreamr',
    'DJStreamr',
    'An brand new DJ Synchronisation Technology',
    ['SoftEng', 'Music'],
    '2020',
    'djstreamr.jpg',
    'At the end of my Second Year at Imperial College, I joined a team of four people for '
    + 'our end-of-year group project. We decided to implement a technology that allowed **DJs to '
    + 'perform gigs together by collaborating remotely**. The product we developed allows DJs to '
    + 'create sessions and invite any number of people to join them and mix tracks together. The '
    + 'product also offers the ability of streaming a live session to *Youtube* or *Twitch*.\n\n'
    + 'This project came as a potential response to the global ban of Live Music during the '
    + 'Covid-19 Pandemic. Such a technology had *never been seen before in the Music Technology '
    + 'industry* and I was very thrilled to develop such an innovation for an Industry that I '
    + 'genuinely enjoy. Among the features offered by DJStreamr were also other innovations such '
    + 'as *Cloud-Based track management*.\n\n'
    + 'As part of our market research, we received very positive feedback and drew the interest of '
    + 'DJ Label *DEFECTED* and the Music Technology Company *Native Instruments*. The product has '
    + 'also been used by *Imperial College DJ & Production Society* at the start of the Autumn Term '
    + 'of 2020/2021, as a way of doing their usual *DJ Tutoring Sessions* remotely to comply with '
    + 'the College safety guidelines.\n\n'
    + 'The product uses *Vue* with *Typescript* on the Frontend, in order to provide a simple DJ '
    + 'Client and to apply our Synchronisation Protocol. We use *AWS* on the Backend with *API '
    + 'Gateways* and *Lambdas* developed in Kotlin. Another *EC2* Server is used in order to '
    + 'stream the live session.',
    ['Visit the website', 'https://djstreamr.com'],
    ['Theme2']),

  /* IVANN */
  new Project('ivann',
    'IVANN',
    'A Visual Flow-based Neural Network Builder',
    ['AI', 'SoftEng'],
    '2020',
    'ivann.png',
    'As part of our Third Year Software Engineering Group Project, my team and I are '
    + 'worked on *IVANN*, an *Open Source Web App* which allows users to **build '
    + 'Neural Networks using an Interactive Graph Editor** and which then automatically '
    + '**generates the code to run them**.\n\n'
    + '*IVANN* is genuinely customisable as, additionally to provide a *Standard Library*, it '
    + 'features the ability to *import existing Python code* in order to use it in any part of '
    + 'the Neural Network. It also features *Type Checking* whose aim is to provide a better '
    + 'workflow over using Python to code Neural Networks.\n\n'
    + 'The project allowed me to improve my knowledge in *AI* and *ML* and in several Python '
    + 'Libraries such as *PyTorch*, *Scikit-Learn* and *Tensorflow*. It also allowed me to '
    + 'practice my Full Stack skills using *Vue.js*, *Typescript*, *HTML* and *CSS*. It was also a '
    + 'great opportunity to contribute to Open Source with a project that can hopefully be helpful '
    + 'to both *Industry* and *Research*.\n\n'
    + 'The project was supervised by Imperial College Teaching Scholar *Nuri Cingillioglu*.',
    ['View the Open Source Repository', 'https://github.com/icivann/ivann'],
    undefined),

  /* Checkm8 */
  new Project('checkm8',
    'Checkm8',
    'An AI Chess Player',
    ['SoftEng', 'AI'],
    'Jun 2019',
    'checkm8.jpg',
    'For our First Year Group Project at Imperial College London, my team and I designed and '
    + 'implemented an **Automated Chess Player** that allowed any user to play a game of chess against '
    + 'AlphaZero using a physical chess board.\n\n'
    + 'The program was developed in *C* and used *OpenCV* in order to detect the state of the chess '
    + 'board, using a phone\'s camera. After we determined the position of all the pieces, we '
    + 'communicated with an *AlphaZero* instance runnning on *SingularityNET*, a decentralised '
    + 'network of AIs running on the *Ethereum* blockchain.\n\n'
    + 'The project was awarded the *Most Interesting Extension Prize* and ranked 2nd best project '
    + 'overall. This project also allowed me to practice my skills in C as well as improve my '
    + 'knowledge of *Computer Vision* and the *Blockchain Technology*.',
    ['View the project on GitHub', 'https://github.com/lancelotblanchard/checkm8-public'],
    undefined),

  /* Spotify Playlists Analysis */
  new Project('spotify-playlists-analysis',
    'Spotify Playlists Analysis',
    'An Analysis of Spotify Algorithmic Playlists',
    ['SoftEng', 'Data', 'Music'],
    'Jun 2018',
    'spotify-playlists-analysis.jpg',
    'In Year 13, I joined a team of three people for a Computing Group Project (_ISN in the '
    + 'French Baccalaureate_). As part of this project, we conducted a **Study of Spotify Algorithmic '
    + 'Playlists** in order to gain an understanding of *how the music properties of certain tracks '
    + 'could influence their position in specific playlists*.\n\n'
    + 'We used *Python* in order to collect the data of tracks featured on different Spotify '
    + 'Algorithmic Playlists over time, using the beta Web Service *SpotOnTrack* as well as the '
    + '*Spotify API*. We made sure of running the algorithm several times a week, in order to '
    + 'monitor the evolution of the position of tracks in the playlist over time.\n\n'
    + 'We then used *R* to analyse the data and find correlations between track peak positions, the '
    + 'duration of their stay in the playlist and specific music properties we chose. Those '
    + 'properties included Key and Tempo, but also Spotify’s own *Audio Feature* parameters.\n\n'
    + 'The project received the highest mark _(20/20)_. This was also a great opportunity for me to '
    + 'learn the *R* language, and practice my *Data Science* skills while gaining knowledge about '
    + 'a topic that genuinely interested me. \n\n'
    + '_Data, Python project and R project available on request._',
    undefined,
    undefined),

  /* Music & Brain */
  new Project('music-and-brain',
    'Music & Brain',
    'A Study on the Influence of Music on the Brain',
    ['SoftEng', 'Data', 'Music'],
    'Sep 2016 - Feb 2017',
    'music-and-brain-magazine.jpg',
    'As part of my Year 12 Science Group Project (_TPE in the French Baccalaureate_), my '
    + 'teammate and I conducted a study that merged *Music*, *Biology*, *Neuroscience* and '
    + '*Psychology*. The purpose of our study was to **understand in what ways an individual '
    + 'could be affected when listening to a piece of music**. As part of this research, we '
    + 'exchanged with several Researchers specialised in this field, from the *University of '
    + 'Rennes 1*, the *University of McGill* and the *Massachussets Institute of Technology*. The '
    + 'result of our study was presented as part of a magazine we designed and printed.\n\n'
    + 'The *Software Engineering* aspect of this project was the **Web-App Survey** that I designed '
    + 'and developed for the purpose of this study. The survey required users to listen to a '
    + 'specific piece of music and to input keywords corresponding to their feelings in reaction '
    + 'to this piece of music. The survey was developed in *Javascript* and communicated with a '
    + '*PHP Server* deployed on *Heroku*. We collected more than 1,400 answers that we then had '
    + 'to analyse in order to gain a deeper understanding of the effect of Music on people\'s '
    + 'emotions.\n\n'
    + 'We were awarded the highest mark _(20/20)_ for this project. The project was also a great '
    + 'way for me to conduct an authentic Research project in domains that I am truly passionate '
    + 'about, as well as practicing my *Software Engineering* and *Data Science* skills.\n\n'
    + '_PDF of the magazine available on request._',
    ['View the Survey project on GitHub',
      'https://github.com/lancelotblanchard/music-emotions-survey'],
    undefined),

  /* Sense */
  new Project('sense',
    'Sense',
    'An Electronic Music project',
    ['Music'],
    'Mar 2016 - Present',
    'sense.png',
    'Aside from my work in Computing areas, I am also passionate about Music and more '
    + 'specifically Music production. As part of this passion, I have been co-producing music with '
    + 'the band *Sense* since 2016. I have especially been involved in the making of the second EP '
    + '*Taste*, as well as the latest singles. I have been producing all of the music using the '
    + 'music software *Ableton*. A great amount of work has also been spent on developing strategies '
    + 'to sell songs to brands and to world-famous vloggers.\n\n'
    + 'This work allowed the band to reach **more than 8 millions streams** on Spotify as well as '
    + 'the **Billboard Top 10 Charts** in Philippines, and having songs featured in Top-tier '
    + 'playlists on several Music Streaming platforms.',
    ['Listen to Sense', 'https://smarturl.it/sensebandmusic'],
    undefined),

  /* Tin Can Stories */
  new Project('tin-can-stories',
    'Upside - Tin Can Stories',
    'My work on a Modern Folk album',
    ['Music'],
    '2019',
    'tin-can-stories.png',
    'In August 2019, I co-produced the first album of the band *Upside*, called *Tin Can '
    + 'Stories*. My work involved contributing to the writing and arrangement of the tracks, '
    + 'recording some piano parts and pre-mixing and editing the recorded tracks on *Pro Tools*.\n\n'
    + 'The album was written by Yorick Vinesse and Marius Blanchard, and I co-wrote the songs '
    + '*Tom* and *Blue* on which I also play the piano. All of the songs were recorded by '
    + '*Nicolas Laurençot* in *Studio History* in Paris, and mixed by *Benjamin Garson*.',
    ['Stream the album', 'https://songwhip.com/upside/tin-can-stories'],
    undefined),

  /* ICRProduction */
  new Project('icrproduction',
    'ICRProduction',
    'A fully designed static website',
    ['SoftEng'],
    '2019',
    'icrproduction.jpg',
    'Alongside my studies, I also manage the Recording Studio of Imperial College London. '
    + 'My responsibilities as part of this commitment include managing the equipment of the studio '
    + 'and training people to use it with monthly workshops. I also regularly record bands, and '
    + 'broadcast live music gigs on the University Radio, *ICRadio*.\n\n'
    + 'In order to improve the social presence of the Recording Studio and to showcase the list of '
    + 'services we offer, I designed and created an **Online Static Website**. I spent some time to '
    + 'design a fully responsive website from scratch to fit my personal needs using *Adobe '
    + 'Photoshop* mockups. I then implemented the website using the *Bootstrap* framework, *HTML*, '
    + '*CSS* and Javascript.',
    ['Visit the Website', 'https://icrproduction.co.uk'],
    undefined),

  /* Quack */
  new Project('quack',
    'Quack!',
    'A random messaging app',
    ['SoftEng'],
    '2014',
    'quack.jpg',
    'In 2014, I developed a **Full-Stack Messaging App** on Android in order to practice my '
    + 'skills in the various areas of Software Engineering. The main features of the app included '
    + 'the ability to exchange messages, the management of a List of Friends and a Market place to '
    + 'customise your avatar using virtual money.\n\n'
    + 'I developed the app using *Java for Android* and the Server using *Java* and the *Google '
    + 'Cloud Platform*.\n\n'
    + 'The App was released on the Google Play Store and totaled *more than 2,000 downloads*.',
    undefined,
    undefined),
];

export default projectList;
