import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderZagolovok extends Schema.Component {
  collectionName: 'components_header_zagolovok';
  info: {
    displayName: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A';
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
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043B\u0443\u0442\u0430';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface QuestCardKartochkaKvesta extends Schema.Component {
  collectionName: 'components_quest_card_kartochka_kvesta';
  info: {
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043A\u0432\u0435\u0441\u0442\u0430';
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
