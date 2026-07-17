const { AIProvider } = require('./provider');

class KoboldCppProvider extends AIProvider {
  get id() {
    return 'koboldcpp';
  }

  async generateChapter() {
    throw new Error('KoboldCppProvider is a T0001 placeholder and cannot generate content.');
  }
}

module.exports = { KoboldCppProvider };
