<template>
  <div id="search-popup" class="search-popup">
    <div class="close-search theme-btn">
      <span class="flaticon-targeting-cross" />
    </div>

    <div class="popup-inner">
      <div class="overlay-layer" />

      <div class="search-form">
        <form method="post" action="index.html">
          <div class="form-group">
            <fieldset>
              <input
                type="search"
                class="form-control"
                name="search-input"
                value=""
                placeholder="Search Here"
                required
              >

              <input type="submit" value="Search Now!" class="theme-btn">
            </fieldset>
          </div>
        </form>

        <br>

        <h3>Recent Search Keywords</h3>

        <ul class="recent-searches">
          <li><a href="index.html#">Finance</a></li>

          <li><a href="index.html#">Idea</a></li>

          <li><a href="index.html#">Service</a></li>

          <li><a href="index.html#">Growth</a></li>

          <li><a href="index.html#">Plan</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPopup'
}
</script>

<style scoped>

</style>
