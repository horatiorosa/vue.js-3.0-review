app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },

  template:
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
        </div>

        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          v-on:click="addToCart">
          Add to Cart
        </button>

        <review-list v-if="reviews.length" v-bind:reviews="reviews"></review-list>
        <review-form @review-submitted="handleReview"></review-form>

      </div>
    </div>
  </div>`,

  data() {
    return {
      product: 'Socks',
      brand: 'JiroTheDog',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
      ],
      reviews: []
    }
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },

    updateVariant(index) {
      this.selectedVariant = index;
    },

    handleReview(review) {
      this.reviews.push(review);
      this.mirrorToLocalStorage();
      console.log(review);
    },

    mirrorToLocalStorage() {
      console.info('saving items to local storage');
      localStorage.setItem('reviews', JSON.stringify(this.reviews));
    },

    restoreFromLocalStorage() {
      console.info('Restoring from LS');
      const lsReviews = JSON.parse(localStorage.getItem('reviews'));
      if (lsReviews && lsReviews.length) {
        this.reviews.push(...lsReviews);
      }
    }
  },

  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },

    image() {
      return this.variants[this.selectedVariant].image;
    },

    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },

    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return 2.99
    }
  },

  mounted() {
    this.restoreFromLocalStorage();
  }
});