class Entity {
  constructor({ id, name } = {}) {
    this.id = id;
    this.name = name;
  }
}

class Project extends Entity {}
class Universe extends Entity {}
class Country extends Entity {}
class Faction extends Entity {}
class Character extends Entity {}
class Relationship extends Entity {}
class Timeline extends Entity {}
class Event extends Entity {}
class Chapter extends Entity {}
class CanonRecord extends Entity {}
class DialogueRecord extends Entity {}

module.exports = { Entity, Project, Universe, Country, Faction, Character, Relationship, Timeline, Event, Chapter, CanonRecord, DialogueRecord };
