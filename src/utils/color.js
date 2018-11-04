const padZero = (str, len = 2) => {
    var zeros = new Array(len).join('0');
    return `${zeros}${str}`.slice(-len);
}

const rgbToHex = (rgb) => {
  const hex = Number(rgb).toString(16);
  return padZero(hex);
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

const invertColor = (hex) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }

    // Convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }

    // Invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

    // Pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
};

export {
  createColors,
  randomColor,
  invertColor,
};
