
export const mealCardVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale:0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale:1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,     
        delay: i * 0.3,    
      }
    }),
  };

  export const categoriesVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale:0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale:1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,     
        delay: i * 1,    
      }
    }),
  };
  export const tabsVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale:0.7
    },
    visible:{
      opacity: 1,
      y: 0,
      scale:1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 1,     
        delay: 0.3,    
      }
    },
  };