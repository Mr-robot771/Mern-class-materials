db.users.deleteMany({});
db.users.insertOne({
  firstName: "Sushil",
  lastName: "user",
  email: "admin@cms.com",
  password: "admin@123",
  createdAt: new Date(),
});
const count = db.users.countDocuments();
print("inserted", count, "user");
