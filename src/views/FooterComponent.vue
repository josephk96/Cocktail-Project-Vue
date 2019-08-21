<template>
  <div class="footer">
    <p>
      Created by Soo Hwan Kim
      <br />2019
      <br />Big thanks to
      <a href="https://www.thecocktaildb.com">The CocktailDB</a> for their API and
      <br />
      <span id="andre">
        <a href="https://github.com/avasconcelos114">Andre Vasconcelos</a>, my mentor.
      </span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  height: 20vh;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#andre {
  line-height: 1rem;
}

a {
  color: #f76c6c !important;
}
</style>