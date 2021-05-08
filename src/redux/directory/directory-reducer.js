const INITIAL_STATE = {
  sections: [
    {
      title: 'Seeds',
      imageUrl: 'https://ychef.files.bbci.co.uk/976x549/p04c9z3q.jpg',
      id: 1,
      linkUrl: 'shop/seeds'
    },
    {
      title: 'Plants',
      imageUrl: 'https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/01/10-Best-Indoor-Plants-Gear-Patrol-lead-full.jpg',
      id: 2,
      linkUrl: 'shop/plants'
    },
    {
      title: 'Pots',
      imageUrl: 'https://www.platthillnursery.com/wp-content/uploads/2020/01/terracotta-vs-ceramic-which-is-better-plants-in-pots-white-background-1080x600.jpg',
      id: 3,
      linkUrl: 'shop/pots'
    },
    {
      title: 'Tools',
      imageUrl: 'https://pinchofseeds.com/wp-content/uploads/2019/03/Essential-Container-Gardeing-Tools.jpeg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/tools'
    },
    {
      title: 'Fertilizers',
      imageUrl: 'https://www.planetnatural.com/wp-content/uploads/2012/12/fertilizer-products-1.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/fertilizers'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;