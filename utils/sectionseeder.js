const Datastore = require('nedb') // set up a temporary (in memory) database
const sectionData = require('../data/section.json') // read in data file

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.developers.insert(sectionData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.developers = db.developers.find(sectionData)
  console.log(`${app.locals.developers.query.length} developers seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}