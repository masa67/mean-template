
conn = new Mongo();
db = conn.getDB("mean-template-3");
db.userlist.insert({'username' : 'test1','email' : 'test1@test.com','fullname' : 'Bob Smith','age' : 27,'location' : 'San Francisco','gender' : 'Male'});
db.userlist.insert({'username' : 'test2','email' : 'test2@test.com','fullname' : 'John Doe','age' : 72,'location' : 'Los Angeles', 'gender' : 'Male'});
db.userlist.insert({'username' : 'test3','email' : 'test3@test.com','fullname' : 'Lady Gaga','age' : 28,'location' : 'NYC', 'gender' : 'Female'});
