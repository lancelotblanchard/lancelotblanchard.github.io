// TODO Find a better way of managing content.
import Project from '@/classes/project';

const projectList: Project[] = [
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
    ['Visit the website', 'https://djstreamr.com']),

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
    ['View the project on GitHub', 'https://github.com/lancelotblanchard/checkm8-public']),

  /* Spotify Playlists Analysis */
  new Project('spotify-playlists-analysis',
    'Spotify Playlists Analysis',
    'An Analysis of Spotify Algorithmic Playlists',
    ['SoftEng', 'Data'],
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
    + 'way for me to conduct an authentic Research project in domains that genuinely interest me, '
    + 'as well as practicing my *Software Engineering* and *Data Science* skills.\n\n'
    + '_PDF of the magazine available on request._',
    ['View the Survey project on GitHub',
      'https://github.com/lancelotblanchard/music-emotions-survey']),

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
    ['Listen to Sense', 'https://smarturl.it/sensebandmusic']),

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
    ['Stream the album', 'https://songwhip.com/upside/tin-can-stories']),

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
    ['Visit the Website', 'https://icrproduction.co.uk']),

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
    undefined),
];

export default projectList;
