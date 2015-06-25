# Gitkit-Javascipt-Enhancements
Gitkit Javascipt Enhacements

Enhanced gitkit.js with support for OAuth scope like in Gitkit v2

Add idpConfig to your config in your gitkit-widget:

```javascript
idpConfig: {
	facebook: {
		scopes: [
			"public_profile",
			"user_friends",
			"email"
		]
	},
	google: {
		scopes: [
    	"https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/plus.login"
		]
	}
}
```

The Google+ scope isn't needed as it's the default one.
Only tested with google+ and facebook login.

The name of the idpConfig childs must be in the first 45 chars of the IDPs authentication url to work.