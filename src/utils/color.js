const rgbToHex = (rgb) => {
  const hex = Number(rgb).toString(16);
  return (hex.length < 2) ? `0${hex}` : hex;
};

const randomColor = () => {
  const color = [];

  // Iterate 3 times R, G, and B
  for (let i = 0; i < 3; i += 1) {
    // Random value up to 255, random never returns 1
    const randomValue = parseInt((Math.random() * 256), 10);
    color.push(rgbToHex(randomValue));
  }

  return `#${color.join('')}`;
};

const createColors = (count) => {
  const colors = [];

  while (colors.length < count) {
    const testColor = randomColor();

    if (!colors.includes(testColor)) {
      colors.push(testColor);
    }
  }

  return colors;
}

export {
  createColors,
  randomColor,
};
