<template>
  <div id="app">
    <MainComponent />
    <FormTextArea />
    <FooterComponent />
  </div>
</template>

<script>
import MainComponent from "@/views/MainComponent.vue";
import FormTextArea from "@/components/FormTextArea.vue";
import FooterComponent from "@/views/FooterComponent.vue";
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: "app",
  components: {
    MainComponent,
    FormTextArea,
    FooterComponent
  }
};
</script>

<style>
html,
body {
  box-sizing: border-box;
  background-color: #a8d0e7;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #a8d0e7;
}
</style>
