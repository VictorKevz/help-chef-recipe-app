
export const mealCardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.8,     
        delay: i * 0.1,    
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
        duration: 0.8,     
        delay: i * 1,    
      }
    }),
  };
  export const tabsVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale:0.8
    },
    visible:{
      opacity: 1,
      y: 0,
      scale:1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.7,     
        delay: 0.3,    
      }
    },
  };
  export const navVariants = {
    hidden: { 
      opacity: 0,
      y: "-100%",
    },
    visible:{
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping:15,
        stiffness:300,
        duration: 0.7,     
        delay: 0.3,    
      }
    },
  };