<template>
  <section class="vision section">
    <div class="container">

      <div class="row text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <div class="col-12">
          <img :src="getImgUrl('ai_lifeboat2.jpg')" class="img-fluid"
                alt="AI: A Lifeboat on the Media Ocean" />
          <br /><br />
          <h1>AI: A Lifeboat to navigate the Media Flood</h1>
          <p><i>Building Intelligent Systems to allow comfortable access to media content</i></p>
        </div>
      </div>

      <div class="row text-center my-4 mt-5"  data-aos="fade-up" data-aos-delay="200">
        <div class="col-12">
          <h2>Introduction</h2>
          <p>
            <b>We are being flooded by media content.</b> As our technologies expand and get
              applied to an increasing number of activities, we are faced with more
              knowledge, creative opportunities, and social interactions than ever
              before. At the age of ten, I was able to learn how to code by myself using
              online tutorials, create my music and publish it online using Garage Band
              and Bandcamp, and connect with my friends using Facebook. However, technologies
              to navigate this content have not evolved nearly as fast. Watching tutorials
              on the internet remains one of the only ways to learn new skills, the software
              I used to create music has only barely evolved, and social media have steadily
              survived in their existing format. As the amount of available media content
              grows even bigger, diving into this flood of content requires more courage
              than ever.
          </p>
          <p>
            Learning, creating, and interacting are all essential aspects of our lives as humans,
            but they are becoming increasingly harder to perform as the world becomes saturated
            with content and opportunities. Faced with all the knowledge that I can absorb
            online, with all the sounds that I can produce through libraries, and with all the
            threads that I can participate in, I find myself submerged by possibilities, which
            pushes me back into my comfort zone. How can we help humans thrive by offering new
            ways to interact with online content? Enabling these human activities in an easier
            way therefore becomes an essential challenge to correctly answer our human needs.
            Artificial Intelligence, by providing personalization, adaptability, and a better
            understanding of each individual, thus appears as a lifeboat, offering a way to
            safely and comfortably guide our journey through the unsettling flood of media
            content. Throughout my work, I aim to build these novel AI integrations
            that can help make approaching
            <a class="vision-link" @click="scrollTo('theme1')">Education</a>,
            <a class="vision-link" @click="scrollTo('theme2')">Creativity</a>, and
            <a class="vision-link" @click="scrollTo('theme3')">Social Interactions</a> more
            comfortable.
          </p>
        </div>
      </div>

      <div ref="theme1" class="row text-left my-4 mt-5" data-aos="fade-up" data-aos-delay="300">
        <div class="col-7">
          <h2>Personalizing Education</h2>
          <div class="content text-justify">
          <p>
            Today, the content of almost every class that has ever been taught is available with
            the push of a button. By browsing the internet, anyone can read Leonardo Da Vinci's
            biography on Wikipedia or learn about quantum physics by watching an MIT OpenCourseWare
            lecture on YouTube. However, the vast majority of this information comes in a
            standardized format, with similar assumptions of backgrounds, references, and cultures.
            In this situation, I believe that using AI can make the delivery of content more
            personalized to the unique needs of every student around the world, and allow them
            to browse content at their own pace, in their own style. For example, language models
            can learn which type of language to use, or which cultural references to employ, to
            better engage with students with different backgrounds and preferences. Generative AI
            can also allow us to create virtual avatars with which students can interact and ask
            questions, thus embodying the browsing of content into a human form, bringing it closer
            to personalized tutoring.
          </p>
          <p>
            Together with MIT Media Lab Research Assistants Pat Pataranutaporn and Valdemar Danry,
            MIT Media Lab Professor Pattie Maes, MIT Media Lab Visiting Student Lavanay Thakral,
            and UCSB Assistant Professor Misha Sra, I worked on a paper called
            <span @click="scrollAtTop">
            <router-link class="vision-link" to="/projects/living-memories">
            'Living Memories'
            </router-link>
            </span>,
            currently under review for IUI 2023. In this work, we designed an AI-powered system
            that allowed anyone to learn about the life of Leonardo Da Vinci in a personalized
            and compelling way, by generating a digital avatar of Da Vinci that people could
            question about anything they wanted to know. The AI was trained on Da Vinci's
            biography and was able to answer questions in an authentic and interesting way.
            The result of the user study we conducted showed that self-reported engagement
            increased significantly when people were offered the opportunity to talk to the
            Living Memory, displaying the benefits of embodied information. In the future, I
            would love to continue working on this technology by improving its authenticity,
            for instance by infusing knowledge into large language models with the help of
            symbolic models and knowledge graphs.
          </p>
          <p>
            A requirement for these interactive AI interfaces to function appropriately is the
            existence of a common medium of communication, understood and used by both AI
            systems and human users. This common medium can be based on natural language,
            but also on cultural references or specialized theories. In the context of musical
            education, for example, I believe that AI systems should have an understanding of
            Music Theory. In
            <span @click="scrollAtTop">
            <router-link class="vision-link" to="/projects/neurosymbolic-music-classification">
            the application of my Master Thesis Project
            </router-link>
            </span>, I encoded Music Theory
            within a Neurosymbolic AI system and let it perform explainable music genre
            classification. The result was an interactive intelligence that was able to offer
            insights into the various theoretical aspects behind music genres, and help with
            the generation of new ideas.
          </p>
          <p>
            In the future, I envision the current model of classrooms filled with tens of students
            becoming archaic, as the world turns increasingly towards personalized learning
            experiences that can focus on the needs, backgrounds, and preferences of every student.
            I believe that future teachers and educators will be able to manipulate AI technologies
            to create content that will be communicated to students in an adaptable way, by learning
            the strengths and weaknesses of every individual and modulating the delivery of the
            content accordingly. In general, I would like to work on augmenting learning experiences
            by helping AI systems gain complete knowledge of the internet through the use of
            knowledge graphs, and by constructing more personalized interfaces that can facilitate
            learning, such as digital avatars or immersive VR environments.
          </p>
          </div>
          <p><span class="font-weight-bold">Related Projects:</span></p>
          <isotope ref="portfolioTheme1" class="row no-gutter" :options="options"
                   :list="listTheme1" v-images-loaded:on.progress="layout">
            <div v-for="(project, index) in listTheme1"
                 class="col-sm-6 col-md-4 col-lg-4 mb-4" :key="index"
                 @click="scrollAtTop">
              <router-link :to="`/projects/${project.id}`" class="item-wrap fancybox">
                <div class="work-info px-1">
                  <h2>{{ project.name }}</h2>
                  <span>{{ project.types.join(' | ') }}</span>
                  <br />
                  <small><em>{{ project.date }}</em></small>
                </div>
                <img class="img-fluid" :src="getImgUrl(project.imgUrl)">
              </router-link>
            </div>
          </isotope>
        </div>
        <div class="col-5">
        </div>
      </div>

      <div ref="theme2" class="row text-left my-4 mt-5" data-aos="fade-up" data-aos-delay="300">
        <div class="col-5">
        </div>
        <div class="col-7">
          <h2>Spreading access to Creativity</h2>
          <div class="content text-justify">
          <p>
            As existing tools to create art have spread very fast, it is now possible for everyone
            to use the most high-end and professional software available on the market. However,
            this does not necessarily translate into creation being more accessible, as these tools
            have steep learning curves and were made with specific user flows in mind, which might
            not be adapted to everyone. I believe in creation being necessary for humans to express
            their thoughts and emotions, and, as such, I believe that everyone should have the
            ability to create art that is relatable, comfortable, and true to them. In particular,
            I am interested in developing tools that can help both amateurs and leading experts
            rediscover their musical creativity and express their musical ideas more easily.
          </p>
          <p>
            Through my 2020 startup
            <span @click="scrollAtTop">
            <router-link class="vision-link" to="/projects/djstreamr">
            DJStreamr
            </router-link>
            </span>, I worked to enhance the art of DJing and improve its
            accessibility by developing a novel kind of creative connection for DJ performers
            online. By synchronizing multiple instances of our software, we allowed DJs to
            collaborate remotely and create live-streamed performances that could be listened to
            around the world. As part of this tool, we introduced novel technologies into the
            world of DJing, by implementing AI suggestions for tracks, effects, and AI-based
            sound processing. Performers were for example able to mash up vocals and instrumentals
            in creative ways, and navigate their DJ set depending on the desired emotional response
            of the crowd, and by following AI suggestions. This project therefore infused new
            creativity tools into an existing craft, and augmented its accessibility through the
            use of creative AI systems.
          </p>
          <p>
            My ongoing project
            <span @click="scrollAtTop">
            <router-link class="vision-link" to="/projects/human-music">
            'Human Music'
            </router-link>
            </span>seeks to make music creation possible through the
            interface of facial expressions and body language. The developed model uses Contrastive
            Learning and processes the user's facial expressions, body language, and words to
            generate music that matches corresponding detected emotions. By using the universal
            medium of the body and the face, I aim to make music creation as accessible as possible,
            and allow anyone to create music that can capture any emotion and moment that they might
            go through, and want to remember in another format in the future. Through this tool, I
            hope to enhance both the creativity of amateurs and professional musicians, by offering
            an inexhaustible source of inspiration in the studio.
          </p>
          <p>
            Music comes from a deep emotional place and resonates differently with everyone. In the
            future, I envision music creation and consumption to be a fully personal and exclusive
            experience, expanding creative abilities to a much wider audience. Everyone, regardless
            of their level of expertise, will be able to create music that is true to them, that
            encapsulates a specific emotion or moment, and they will then be able to revisit it at
            any time. For example, digital photography could be augmented by helping users generate
            their own soundtrack for each picture, creating an audiovisual museum of memories that
            can be used for personal or therapeutic reasons. I would love to work more in depth with
            generative AI models and make them more personalizable and more knowledgeable about the
            style and preferences of every user. Currently, obtaining good results with generative
            AI requires good reverse-engineering skills to understand the intricacies of the model.
            By leveraging the user-adaptability of Neurosymbolic AI, I aim to make the process of
            communicating with models more interactive, and more adapted to the needs of every user.
          </p>
          </div>
          <p><span class="font-weight-bold">Related Projects:</span></p>
          <isotope ref="portfolioTheme2" class="row no-gutter" :options="options"
                   :list="listTheme2" v-images-loaded:on.progress="layout">
            <div v-for="(project, index) in listTheme2"
                 class="col-sm-6 col-md-4 col-lg-4 mb-4" :key="index"
                 @click="scrollAtTop">
              <router-link :to="`/projects/${project.id}`" class="item-wrap fancybox">
                <div class="work-info px-1">
                  <h2>{{ project.name }}</h2>
                  <span>{{ project.types.join(' | ') }}</span>
                  <br />
                  <small><em>{{ project.date }}</em></small>
                </div>
                <img class="img-fluid" :src="getImgUrl(project.imgUrl)">
              </router-link>
            </div>
          </isotope>
        </div>
      </div>

      <div ref="theme3" class="row text-left my-4 mt-5" data-aos="fade-up" data-aos-delay="300">
        <div class="col-7">
          <h2>Democratizing Social Interactions</h2>
          <div class="content text-justify">
          <p>
            Social Interaction is a fundamental human need. The growth of pervading technology in
            recent years has resulted in our society being more interconnected than ever. A recent
            study shows that more than 6.5 billion people on Earth own a mobile phone, making it
            theoretically possible for anyone to reach more than 83% of the world's population at
            any time. However, this increase in interconnectivity does not necessarily translate
            into an increase in the social outreach of individuals. In fact, the rise of social
            media and personalization algorithms has resulted in the reinforcement of strong
            “filter bubbles”, states of isolation that limit the exposure of users to their own
            views and beliefs. Straying away from these filter bubbles can be a daunting idea,
            and AI can appear as a tool for helping people break the barriers of these bubbles
            confidently and comfortably.
          </p>
          <p>
            One of the reasons why people do not interact outside of their bubbles is because
            online confrontation and argumentation can feel very unfair and unsettling. To
            help people interact in a more helpful way, I developed the
            <span @click="scrollAtTop">
            <router-link class="vision-link" to="/projects/argument-assistant">
            'Argument Assistant'
            </router-link>
            </span>
            , together with Valdemar Danry from the MIT Media Lab. This project uses a Neurosymbolic
            AI architecture to understand human dialogue and model human reasoning, and aims at
            facilitating online conversations by keeping track of the flow of arguments and by
            helping people reason. By visualizing every argument on a visual graph, the system
            offers a novel way to navigate discussions, making it possible for users to detect
            logical contradictions, better structure their arguments, as well as understand
            their counterparts and build a more structured debate. By keeping track of the
            arguments, it can also help prevent people from repeating themselves, and help
            them better understand the other side's point of view. The system also offers a
            way to reason about the constructed graph, by highlighting certain aspects of the
            conversation, such as contradicting facts or logical inconsistencies. Another aim
            of the project is to augment conversations by providing automated insight into the
            implicit knowledge or references that might be necessary for understanding a certain
            conversation, therefore allowing anyone to join any conversation and any social
            interaction, regardless of their background or domain of expertise.
          </p>
          <p>
            In the future, I envision thread-based, two-dimensional, social media quickly becoming
            obsolete. By using AI-assisted communication technologies, people will be able to
            virtually exchange ideas and information that will get automatically represented in
            visual ways, and with which other users will be able to interact. Generative AI could
            create 3D narrative virtual stories to help users understand other people's unique
            situations and points of view, or simulate historic events to help them catch up with
            necessary background knowledge. I envision each piece of information becoming part of
            3D explorable graphs. Through these visual representations, anyone will be able to join
            any conversation, quickly catching up with the necessary background knowledge, and add
            their own opinion. I aim to work more with Neurosymbolic AI to understand conversations,
            to embed better common sense knowledge, and to use large language models to generate
            personalized summaries of discussions.
          </p>
          </div>
          <p><span class="font-weight-bold">Related Projects:</span></p>
          <isotope ref="portfolioTheme3" class="row no-gutter" :options="options"
                   :list="listTheme3" v-images-loaded:on.progress="layout">
            <div v-for="(project, index) in listTheme3"
                 class="col-sm-6 col-md-4 col-lg-4 mb-4" :key="index"
                 @click="scrollAtTop">
              <router-link :to="`/projects/${project.id}`" class="item-wrap fancybox">
                <div class="work-info px-1">
                  <h2>{{ project.name }}</h2>
                  <span>{{ project.types.join(' | ') }}</span>
                  <br />
                  <small><em>{{ project.date }}</em></small>
                </div>
                <img class="img-fluid" :src="getImgUrl(project.imgUrl)">
              </router-link>
            </div>
          </isotope>
        </div>
        <div class="col-5">
        </div>
      </div>

      <div class="row text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <div class="col-12">
          <br /><br />
          <h2>Conclusion</h2>
          <p>
            Throughout this statement of objectives, I drafted out the plans of the AI
            Lifeboat, an intelligent vessel that can help us navigate the Media Flood in a
            more reassuring and comfortable way. I strongly believe that AI can help us
            make Education more personalized, Creativity more accessible, and Social
            Interactions more democratized. By better integrating AI systems that can
            understand our needs and take into account our backgrounds, experiences, and
            preferences, we can build a more inclusive and safe way of venturing into the
            immense world of media. As an AI researcher, engineer, and artist myself, I aim
            to create innovative systems that can help everyone explore, discover, and create
            in comfort.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Project from '@/classes/project';
import projectList from '@/content/project.list';

/* eslint-disable @typescript-eslint/no-var-requires */
const isotope = require('vueisotope');
const imagesLoaded = require('vue-images-loaded');

@Component({
  components: {
    isotope,
  },
  directives: {
    imagesLoaded,
  },
})
export default class Vision extends Vue {
  private publicPath = process.env.BASE_URL;

  private list = projectList;

  /* Collecting Projects in Theme 1 */
  private listTheme1 = projectList.filter((project: Project) => project.themes !== undefined && project.themes.includes('Theme1'));

  /* Collecting Projects in Theme 2 */
  private listTheme2 = projectList.filter((project: Project) => project.themes !== undefined && project.themes.includes('Theme2'));

  /* Collecting Projects in Theme 3 */
  private listTheme3 = projectList.filter((project: Project) => project.themes !== undefined && project.themes.includes('Theme3'));

  private options = {
    isFitWidth: true,
  };

  private layout() {
    (this.$refs.portfolioTheme1 as typeof isotope).layout('masonry');
    (this.$refs.portfolioTheme2 as typeof isotope).layout('masonry');
    (this.$refs.portfolioTheme3 as typeof isotope).layout('masonry');
  }

  private getImgUrl(fileName: string) {
    const images = require.context('@/assets/images/', true);
    return images(`./${fileName}`);
  }

  private scrollAtTop() {
    window.scrollTo(0, 0);
  }

  private scrollTo(refName: string) {
    const element = this.$refs[refName] as HTMLElement;

    window.scrollTo(0, element.offsetTop);
  }

  mounted() {
    document.title = 'Lancelot Blanchard | Vision';
  }
}
</script>

<style scoped>
.vision-link {
  color: #777;
}

.vision-link:hover {
  color: #000;
  cursor: pointer;
}

.item {
  border: none;
  margin-bottom: 30px;
}

.item .item-wrap {
  display: block;
  position: relative;
  overflow: hidden;
}

.item .item-wrap:after {
  z-index: 2;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: .3s all ease-in-out;
}

.item .item-wrap img {
  transition: .3s transform ease;
  transform: scale(1);
}

.item .item-wrap > .work-info {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  z-index: 3;
  transform: translateY(-50%);
  color: #fff;
  opacity: 0;
  visibility: hidden;
  margin-top: 20px;
  transition: .3s all ease;
}

.item .item-wrap > .work-info h3 {
  font-size: 20px;
  margin-bottom: 0;
}

.item .item-wrap > .work-info span {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: .2rem;
}

.item .item-wrap:hover {
  text-decoration: none;
  cursor: pointer;
}

.item .item-wrap:hover img {
  transform: scale(1.05);
}

.item .item-wrap:hover:after {
  opacity: 1;
  visibility: visible;
}

.item .item-wrap:hover .work-info {
  margin-top: 0px;
  opacity: 1;
  visibility: visible;
}
</style>
