"use strict";

module.exports = ({ env }) => ({
  // Autres configurations...

  // Ajout du plugin "entity-relationship-chart"
  "entity-relationship-chart": {
    enabled: true,
    config: {
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },

  // Configuration pour le provider "upload"
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  // Ajout du plugin "models-relation-diagram"
  "models-relation-diagram": {
    enabled: true,
    config: {
      defaultExcludeAdmin: true, // Masquer admin:: + strapi:: + webhook + plugin::i18n.locale + plugin::content-releases
      defaultHideUpload: true, // Masquer plugin::upload.file + plugin::upload.folder
      defaultExcludeComponents: false, // Ne pas masquer les composants
      defaultLayout: 'dagre', // Disposition par défaut : ELK, Dagre
      defaultEdgesType: 'step', // Type de bordure par défaut : straight, step, smoothstep, bezier
      hideMarkers: true, // Masquer les marqueurs de relation sur les bordures
    },
  },

  // Autres configurations...
});
