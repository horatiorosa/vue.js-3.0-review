app.component('review-form', {
  template: `
    <form class="review-form" v-on:submit.prevent="handleSubmit">
      <h3>Leave a Review</h3>
      <label for="name">Name:</label>
      <input type="text"
        name="name"
        id="name"
        required
        v-model="name">

      <label for="review">Review:</label>
      <textarea name="review"
        id="review"
        required
        v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select name="rating"
        id="rating"
        required
        v-model.number="rating"
        v-model="selected">
        <option selected disabled>Select Rating</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <br>

      <label for="recommendation">Recommend Us?</label>
      <select name="recommendation"
        id="recommendation"
        required
        v-model="recommendation">
        <option value="recommendation" selected disabled>Recommendation</option>
        <option value="yes">Definitely</option>
        <option value="No">Nope</option>
      </select>
      <input type="submit"
        class="button"
        name="submit"
        value="Submit">

    </form>
  `,

   data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommendation: 'Recommendation?',
      selected: 'Select Rating',
    }
   },

   methods: {
    handleSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommendation: this.recommendation
      };

      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.selected = 'Select Rating';
      this.recommendation = 'Recommendation';
    }
   }
});
