module.exports = {
  abbreviateText(text, maxLen = 50) {
    if (maxLen < 4) {
      console.warn('maxLen should be greater than 3');
    }

    if (text.length > 3 && text.length >= maxLen - 3) {
      return `${text.substring(0, maxLen - 3)}...`;
    }
    return text;
  }
};