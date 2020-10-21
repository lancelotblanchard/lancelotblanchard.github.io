<template>
  <section class="section pb-5">
    <div class="container">

      <div class="row mb-5 align-items-end">
        <div class="col-md-6" data-aos="fade-up">
          <h2>Contact</h2>
          <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam necessitatibus incidunt ut
            officiis explicabo inventore.
          </p>
        </div>

      </div>

      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <label for="name">Name</label>
                <input type="text" name="name" class="form-control" id="name"
                       data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validate"></div>
              </div>
              <div class="col-md-6 form-group">
                <label for="name">Email</label>
                <input type="email" class="form-control" name="email" id="email"
                       data-rule="email" data-msg="Please enter a valid email" />
                <div class="validate"></div>
              </div>
              <div class="col-md-12 form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject"
                       data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="col-md-12 form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" cols="30" rows="10"
                          data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>

              <div class="col-md-12 mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>

              <div class="col-md-6 form-group">
                <input type="submit" class="readmore d-block w-100" value="Send Message">
              </div>
            </div>

          </form>

        </div>

        <div class="col-md-4 ml-auto order-2" data-aos="fade-up">
          <ul class="list-unstyled">
            <li class="mb-3">
              <strong class="d-block mb-1">Address</strong>
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </li>
            <li class="mb-3">
              <strong class="d-block mb-1">Phone</strong>
              <span>+1 232 3235 324</span>
            </li>
            <li class="mb-3">
              <strong class="d-block mb-1">Email</strong>
              <span>youremail@domain.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
}
</script>

<style scoped>
.form-control {
  border-radius: 0;
  background: #f8f9fa;
  border: 1px solid transparent;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}

.form-control:active, .form-control:focus {
  background: #eff1f4;
  outline: none;
  box-shadow: none;
  border: 1px solid transparent;
}

.custom-progress {
  height: 7px;
  border-radius: 0;
}

.custom-progress .progress-bar {
  background: #000;
}

/* Contact Form */
.php-email-form .validate {
  display: none;
  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}

.php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.php-email-form .error-message br + br {
  margin-top: 25px;
}

.php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
