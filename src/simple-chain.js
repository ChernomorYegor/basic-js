const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  length: 0,

  getLength() {
    return this.length;
  },

  addLink(value = '') {
    if (this.length === 0) {
      if (value === '') {
        this.chain = '( )';
      } else {
        this.chain = `( ${value} )`;
      }
    } else {
      this.chain = `${this.chain}~~( ${value} )`;
    }
    this.length += 1;
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.length) {
      let posStartLink = -1;
      let posEndLink = -1;

      for (let i = 0; i < position; i++) {
        posStartLink = this.chain.indexOf('( ', posStartLink + 1);
        posEndLink = this.chain.indexOf(' )', posEndLink + 1);
      }

      if (posStartLink === 0) {
        this.chain = this.chain.slice(posEndLink + 4);
      } else if (posEndLink === this.chain.length - 1) {
        this.chain = this.chain.slice(0, posStartLink - 2);
      } else {
        this.chain = `${this.chain.slice(0, posStartLink - 2)}${this.chain.slice(posEndLink + 2)}`;
      }

      this.length -= 1;
    } else {
      this.chain = '';
      this.length = 0;
      throw new Error('Error');
    }
    return this;
  },

  reverseChain() {
    let chainReversed = '';
    let isLink = false;
    let linkValue = '';

    for (let i = 0; i < this.chain.length; i++) {
      if (this.chain[i] === '(' && (this.chain[i - 1] === '~' || this.chain[i + 1] === ' ')) {
        chainReversed = `)${chainReversed}`;
        isLink = true;
      } else if (this.chain[i] === ')' && (this.chain[i + 1] === '~' || this.chain[i - 1] === ' ')) {
        chainReversed = `(${linkValue}${chainReversed}`;
        isLink = false;
        linkValue = '';
      } else if (isLink === true) {
        linkValue = `${linkValue}${this.chain[i]}`;
      } else {
        chainReversed = `${this.chain[i]}${chainReversed}`;
      }
    }
    this.chain = chainReversed;
    return this;
  },

  finishChain() {
    const chainFinished = this.chain.slice();
    this.chain = '';
    this.length = 0;
    return chainFinished;
  }
}

module.exports = chainMaker;