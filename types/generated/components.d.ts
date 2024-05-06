import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderZagolovok extends Schema.Component {
  collectionName: 'components_header_zagolovok';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    titleColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    titleBackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface LootCardKartochkaLuta extends Schema.Component {
  collectionName: 'components_loot_card_kartochka_luta';
  info: {
    displayName: 'LootCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface QuestCardKartochkaKvesta extends Schema.Component {
  collectionName: 'components_quest_card_kartochka_kvesta';
  info: {
    displayName: 'QuestCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    isWeekly: Attribute.Boolean;
    illustration: Attribute.Media;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    descriptionColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    descriptionBackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    rules: Attribute.Blocks;
    description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.zagolovok': HeaderZagolovok;
      'loot-card.kartochka-luta': LootCardKartochkaLuta;
      'quest-card.kartochka-kvesta': QuestCardKartochkaKvesta;
    }
  }
}
