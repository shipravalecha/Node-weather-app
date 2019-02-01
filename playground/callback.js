//callback.js

var getUser = (id, callback) => {
	var user = {
		id: id,
		name: 'shipra'
	};
	callback(user);
}


getUser(1, (userObj) => {
	console.log(userObj);
});