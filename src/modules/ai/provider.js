class AIProvider {
  get id() {
    throw new Error('AIProvider implementations must define an id.');
  }

  async generateChapter() {
    throw new Error('AIProvider implementations must implement generateChapter.');
  }
}

module.exports = { AIProvider };
