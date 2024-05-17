import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderZagolovok extends Schema.Component {
  collectionName: 'components_header_zagolovok';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    titleColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface QuestQuest extends Schema.Component {
  collectionName: 'components_quest_quests';
  info: {
    displayName: 'Quest';
  };
  attributes: {
    quests: Attribute.Relation<'quest.quest', 'oneToMany', 'api::quest.quest'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.zagolovok': HeaderZagolovok;
      'quest.quest': QuestQuest;
    }
  }
}
