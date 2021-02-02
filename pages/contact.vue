<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <hero-vue hero-title="contact"></hero-vue>
    <section class="mt-6 section">
      <form name="contact" action="" method="post">
        <div class="field">
          <label class="form-label" for="name"> Name: </label>
          <div class="control">
            <input id="name" class="input" type="text" name="name" />
          </div>
        </div>
        <div class="field">
          <label class="form-label" for="email"> Email: </label>
          <div class="control">
            <input id="email" class="input" type="text" name="email" />
          </div>
        </div>
        <div class="field">
          <label class="form-label" for="message"> Message: </label>
          <div class="control">
            <textarea id="message" class="textarea" name="message"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import PageHeaderVue from '~/components/PageHeader.vue'
import HeroVue from '~/components/Hero.vue'

export default {
  components: {
    PageHeaderVue,
    HeroVue,
  },
}
</script>
