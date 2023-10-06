export   const isProducexist=(id,cartProduct)=> {
       
  return cartProduct.some(obj => obj.id === id);
}

export const contanerImg={
  hidden:{
    x:'-100vw',
    opacity :0
  },
  visible:{
    x:0,
    opacity :1,
    transition:{duration:0.5}
  },
}
export const contanerLg={
  hidden:{
    x:'100vw',
    opacity :0
  },
  visible:{
    x:0,
    opacity :1,
    transition:{duration:0.5}
  },
}
 export const cardVariants={
  offscreen: {
    scale: 0
  },
  onscreen: {
    scale: 1,
    
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.1
    }
  }
};