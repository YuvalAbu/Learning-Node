// Impots
var jwt = require('jsonwebtoken')

const JWT_SIGN_SECRET = 'iMdUKh8LkDx-WJrGpnsYHtHsKosj%so'

// Exported Function
module.exports = {
	generateTokenForUser: (userData) => {
		return jwt.sign({
			userId: userData.id,
			isAdmin: userData.isAdmin
		},
		JWT_SIGN_SECRET,
		{
			expiresIn: '1h'
		})
	},

  parseAuthorization: function(authorization) {
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
  },
  getUserId: function(authorization) {
    var userId = -1;
    var token = this.parseAuthorization(authorization);
    if(token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if(jwtToken != null)
          userId = jwtToken.userId;
      } catch(err) { }
    }
    return userId;
  }
}