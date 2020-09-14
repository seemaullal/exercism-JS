export class Crypto {
  constructor(text) {
    this.text = text;
    this.cols = this.size();
  }

  size() {
    const text = this.normalizePlaintext();
    for (let i = 0; i < text.length; i++) {
      if (i * i === text.length) return i;
      if (i*i > text.length) return i;
    }
  }

  plaintextSegments() {
    let segments = '';
    const text = this.normalizePlaintext();
    for (let i = 0; i < text.length; i++) {
      segments += text.charAt(i);
      if ((i+1) % this.cols === 0 && i !== text.length-1) {
        segments += ' '
      }
    }
    return segments.split(' ');
  }

  ciphertext() {
    let segments = this.plaintextSegments();
    let columns = [];
    let currSegment, currLetter;
    for (let i = 0; i < this.cols; i++) {
      columns.push([]);
    }
    for (let i = 0; i < segments.length; i++) {
      currSegment = segments[i];
      for (var j =0 ; j < currSegment.length; j++) {
        currLetter = currSegment[j];
        columns[j].push(currLetter);
      }
    }
    return columns.map(column => column.join('')).join('');
  }

  normalizeCiphertext() {
    let normalized = '';
    const cipher = this.ciphertext();
    for (let i=0; i < cipher.length; i++) {
      normalized += cipher.charAt(i);
      if ((i+1) % this.cols === 0) {
        normalized += ' ';
      }
    }
    return normalized.trim();
  }


  normalizePlaintext() {
    return this.text.replace(/\W/g, '').toLowerCase();
  }
}
