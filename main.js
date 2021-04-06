const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      addToCart(variant) {
        // this.cart += 1;
        this.cart.push(variant.id);

        console.log('cart', this.cart);
      },

      removeFromCart(variant, array) {
        const index = this.cart.indexOf(variant.id);

        if (index > -1) {
          return this.cart = [
            ...this.cart.slice(0, index),
            ...this.cart.slice(index + 1),
          ];
          // console.log('...this.cart.slice(0, index)', ...this.cart.slice(0, index));
          // console.log('...this.cart.slice(index + 1)', ...this.cart.slice(index + 1));
        } else {
          console.log(`You have no more of the ${product.color} socks in your cart.`);
        }
      }

      // removeById(id) {
      //   const index = this.cart.indexOf(id);
      //   if (index > -1) {
      //     this.cart.splice(index, 1);
      //   }
      // }
    }
});


