import tilt from 'tilt.js';

const initTilt = () => {
  const seedMousePositions = function() {
    if (!this.mousePositions) {
      const element = $(this);
      const offset = element.offset();
      this.mousePositions = {
        x: offset.left + element.outerWidth() / 2,
        y: offset.top + element.outerHeight() / 2,
      };
    }
  };

  // Projects images
  $('.project-wrapper__image a div').tilt({
    maxTilt: 3,
  }).each(seedMousePositions).on('mouseenter', seedMousePositions);
};

export default initTilt;
