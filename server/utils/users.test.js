const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
				id: '1',
				name: 'Mike',
				room: 'Node Course'
			}, {
				id: '2',
				name: 'Jen',
				room: 'React Course'
			}, {
				id: '3',
				name: 'Julie',
				room: 'Node Course'
			}
		];
	});

	it ('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Tom',
			room: 'The Office Fans'
		};

		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it ('should return names for node course', () => {
		var userList = users.getUserList('Node Course');

		expect(userList).toEqual(['Mike', 'Julie']);
	});
	
	it ('should return names for react course', () => {
		var userList = users.getUserList('React Course');

		expect(userList).toEqual(['Jen']);
	});

	it ('should remove a user', () => {
		var delUser = users.removeUser('2');

		expect(delUser).toInclude({
				id: '2',
				name: 'Jen',
				room: 'React Course'
			});
	});

	it ('should not remove a user', () => {
		var delUser = users.removeUser('7');
	
		expect(delUser).toEqual(null);
	});	

	it ('should find a user', () => {
		var user = users.getUser('2');

		expect(user).toInclude({
				id: '2',
				name: 'Jen',
				room: 'React Course'
			});
	});

	it ('should not find a user', () => {
		var user = users.getUser('7');

		expect(user).toEqual(null);
	});
});