module.exports = {
  mongo: {
    db: 'mongodb://localhost/calendar',
    options: {useNewUrlParser: true},
  },
  facebook: {
    appId: '5912743682160832',
    appSecret: process.env.FACEBOOK_APP_SECRET,
  }
};