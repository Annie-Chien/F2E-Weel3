export const characterAnimation = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

export const openHoleVariant = {
  hidden: { scaleX: 0 },
  visible: (custom) => ({
    scaleX: 1,
    transition: {
      duration: 0.5,
      delay: custom || 1.5,
    },
  }),
};

export const rolePopDown = {
  hidden: { y: '-80%', scaleY: 1, opacity: 0, originY: '1' },
  visible: {
    y: '-20%',
    opacity: 1,
    scaleY: [1.2, 1],
    transition: {
      delay: 2,
      type: 'spring',
      stiffness: 80,
    },
  },
};

export const rolePopUp = {
  hidden: { y: '80%', scaleY: 1, opacity: 0, originY: '1' },
  visible: (custom) => ({
    y: '20%',
    opacity: 1,
    scaleY: [1.2, 1],
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: custom || 4,
    },
  }),
  // visible: {
  //   y: '20%',
  //   opacity: 1,
  //   scaleY: [1.2, 1],
  //   transition: {
  //     type: 'spring',
  //     stiffness: 80,
  //     delay: 4,
  //   },
  // },
};
export const fadeInVariant = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom ?? 2.5,
    },
  }),
};

export const fadeOutVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
