<template>
  <div class="about">
    <section class="about-me section text-left">
      <div class="site-section pb-0">
        <div class="container">
          <div class="row align-items-stretch">
            <div class="col">
              <h1 class="h1">About Me</h1>
              <div class="image-wrapper float-md-right pl-0 pl-md-5 text-center pb-3 pb-md-0"
                   data-aos="fade-up">
                <img src="@/assets/images/lancelot-blanchard.jpg"
                     alt="Lancelot Blanchard" class="img-fluid thumbnail">
              </div>
              <div class="single-post-content-wrapper pr-5" data-aos="fade-up" data-aos-delay="100">
                <div class="mb-5">
                  <p>I am currently in the third year of a Masters of Engineering degree in
                    Computing at Imperial College London. I have always been fascinated by Computer
                    Science. I started learning C online at the age of ten and Java at the age of
                    twelve, and I have since then never stopped exploring and building applications
                    using these languages. I therefore naturally chose to study Computing after high
                    school and entered Imperial College London where I was granted an Entrance
                    Scholarship for best application and was featured on the Dean's List at the end
                    of my Second Year. I have always wanted to work in this area and to practise
                    my passion in an innovative environment.</p>

                  <p>Aside from Computing, I have always been passionate about music. In addition
                    to my engineering studies, I graduated from the French conservatory where I
                    studied classical piano and music theory for twelve years. I have composed and
                    performed with musicians in a variety of genres and formats. I am now involved
                    in several bands, for which I am producing and using my data analysis knowledge
                    to understand our statistics and optimise the audience. I am also managing my
                    University’s Recording Studio and leading group workshops to teach students
                    how to use the facilities.
                  </p>
                </div>
                <p><a href="#" class="readmore">Download CV</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  mounted() {
    document.title = 'Lancelot Blanchard | About';
  }
}
</script>
