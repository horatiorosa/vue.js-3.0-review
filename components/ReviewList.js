app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },

  template: `
    <div class="review-container">
      <h3>Reviews:</h3>
      <ul >
        <li v-for="(review, index) in reviews"
          v-bind:key="index">
          {{ review.name }} left a rating of {{ review.rating }} {{ review.rating == "1" ? "Star" : "Stars" }}.
          <br>
           {{ review.review }}
        </li>
      </ul>
    </div>`
});
