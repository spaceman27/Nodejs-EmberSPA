var ClientOAuth2 = require('client-oauth2')

var githubAuth = new ClientOAuth2({
  clientId: '754do4s7der96l',
  clientSecret: 'Pw90O7kMsCC7460J',
  accessTokenUri: 'https://www.linkedin.com/uas/oauth2/accessToken',
  authorizationUri: 'https://www.linkedin.com/uas/oauth2/authorization',
  authorizationGrants: ['credentials'],
  redirectUri: 'http://localhost:5000/auth/linkedin/callback',
  scopes: ['notifications', 'gist']
})