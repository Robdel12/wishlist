module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'wishlist',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
