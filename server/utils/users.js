[{
	id: 'ieiyjjbjbnhiu8uf',
	name: 'Brad',
	room: 'Chat Room'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor () {
		this.users = [];
	}

	addUser (id, name, room) {
		var user = {id, name, room};
		this.users.push(user);
		return user;
	}

	removeUser (id) {
		// return user that was removed
		var user = this.users.filter((user) => user.id === id);
		var remainingUsers = this.users.filter((user) => user.id !== id);

		if (user !== null && user.length > 0) {
			// set to users w/o user
			this.users = remainingUsers;

			return user[0];
		} else {
			return null;
		}
	}

	getUser (id) {
		var user = this.users.filter((user) => user.id === id);

		if (user !== null && user.length > 0) {
			return user[0];
		} else {
			return null;
		}
	}

	getUserList (room) {
		var users = this.users.filter((user) => user.room === room);
		var namesArray = users.map((user) => user.name);

		return namesArray;
	}
}

module.exports = {Users};

// class Person {
// 	constructor (name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	getUserDescription () {
// 		return `${this.name} is ${this.age} year(s) old.`;
// 	}
// }

// var me = new Person('Andrew', 25);
// var description = me.getUserDescription();
// console.log(description);