import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentAproposAccordeon extends Schema.Component {
  collectionName: 'components_component_apropos_accordeons';
  info: {
    displayName: 'Accord\u00E9on';
    description: '';
  };
  attributes: {
    Titre: Attribute.String;
    Contenu: Attribute.Text;
    ContenuListe: Attribute.RichText;
  };
}

export interface ComponentAproposComponentApropos extends Schema.Component {
  collectionName: 'components_component_apropos_component_apropos';
  info: {
    displayName: 'ComponentApropos';
  };
  attributes: {
    Titre: Attribute.String;
    Texte: Attribute.Text;
    Numero: Attribute.Integer;
  };
}

export interface ComponentAproposEtape extends Schema.Component {
  collectionName: 'components_etape_etapes';
  info: {
    displayName: '4PointsApropos';
    description: '';
  };
  attributes: {
    Titre: Attribute.String;
    Texte: Attribute.String;
    Numero: Attribute.String;
  };
}

export interface ComponentAproposListe extends Schema.Component {
  collectionName: 'components_component_apropos_listes';
  info: {
    displayName: 'Liste';
  };
  attributes: {
    Items: Attribute.String;
  };
}

export interface ComponentBreadcrumbBreadCrumbsLiens extends Schema.Component {
  collectionName: 'components_component_breadcrumb_bread_crumbs_liens';
  info: {
    displayName: 'BreadCrumbsLiens';
  };
  attributes: {
    Texte: Attribute.String;
    URL: Attribute.String;
    Ordre: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component-apropos.accordeon': ComponentAproposAccordeon;
      'component-apropos.component-apropos': ComponentAproposComponentApropos;
      'component-apropos.etape': ComponentAproposEtape;
      'component-apropos.liste': ComponentAproposListe;
      'component-breadcrumb.bread-crumbs-liens': ComponentBreadcrumbBreadCrumbsLiens;
    }
  }
}
