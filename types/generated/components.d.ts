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
    titleBackgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.zagolovok': HeaderZagolovok;
    }
  }
}
