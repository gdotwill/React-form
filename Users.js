var faker = require('faker')

function generateUsers () {
  var users = []
  for (var id = 0; id < 1; id++) {
    var title = faker.name.title()
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    users.push({
      "id": id,
      "title": title, 
      "email": email,
      "firstname": firstName,
      "lastname": lastName,     
    })
  }
  
  return { "users": users }
}

module.exports = generateUsers