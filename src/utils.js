// Utility functions for the Cake Ordering App

/**
 * Calculate the total price of items in the cart.
 * @param {Array} cart - Array of cart items with `price` and `quantity` properties.
 * @returns {number} - The total price.
 */
export const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  /**
   * Format a number to Indonesian Rupiah currency.
   * @param {number} number - The number to format.
   * @returns {string} - The formatted currency string.
   */
  export const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };
  
  /**
   * Validate user input for notes.
   * @param {string} note - The note string to validate.
   * @returns {boolean} - True if valid, otherwise false.
   */
  export const validateNote = (note) => {
    return note.length <= 200; // Limit note length to 200 characters
  };
  
  /**
   * Mock API call to submit an order.
   * @param {Array} cart - Array of cart items.
   * @param {string} note - Optional user note for the order.
   * @returns {Promise} - A promise that resolves with a success message.
   */
  export const submitOrder = async (cart, note) => {
    // Simulating an API request delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cart.length > 0) {
          resolve('Pesanan berhasil dibuat!');
        } else {
          reject('Keranjang belanja kosong!');
        }
      }, 1000);
    });
  };
  