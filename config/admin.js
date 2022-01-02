module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b3eafc0a5425a7b8092c5e513343148'),
  },
});
