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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 25vh;
  margin: 2rem 0;
}

#andre {
  line-height: 1rem;
}

a {
  color: #f76c6c !important;
}
</style>