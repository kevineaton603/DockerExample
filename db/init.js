db.createUser({
  user: process.env.DB_USER_NAME,
  pwd: process.env.DB_USER_PWD,
  roles: [{
    role: 'readWrite',
    db: 'test',
  }],
});
