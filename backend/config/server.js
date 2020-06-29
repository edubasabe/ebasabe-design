module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', '1337'),
  url: `http://localhost:1337`,
  admin: {
    url: '/dashboard',
  },
});