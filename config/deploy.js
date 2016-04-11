module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'builds',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
