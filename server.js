// function add(a, b) {
//     return a+ b;
// }

// var add = function(a, b) {
//     return a +b;
// }

// var add = (a, b) => {return a+b;}

// var add = (a, b) => a+b;

// var result=add(2, 9);
// console.log(result);
// (function() {
//     console.log('anjali');
// })();


// function callback() {
//     console.log('call');
// }

// const add = function (a, b, callback) {
//     var result = a + b;
//     console.log('result:'+result)
//     callback();
// }

// add(3, 5, callback);


// const add = function (a, b, callback) {
//     var result = a + b;
//     console.log('result:'+result)
//     callback();
// }

// add(2, 3, function() {
//     console.log('complete');
// })

// add(2, 3, () => console.log('complete'));

// var fs = require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('dara.txt', 'Ho'+user.username+'!', () => {
//     console.log('anjali');
// });

// const notes = require('./notes.js');
// var _ =require('loadash');
// console.log('server');
// var age=notes.age;
// var result = notes.add(age+18, 10);
// console.log(age);
// console.log('result'+result);
// var data = ["person", 4, 67, 'gfrfg', 'sfdsd'];
// var filter = _.uniq(data);
// console.log(filter);

// console.log('notes');
// var age = 24;
// const add = function (a, b) {
//     return a + b;
// }
// module.exports = { age, add };
// const notes = require('./notes.js'); 
// var _ = require('lodash');
// console.log('server');
// var age = notes.age;
// var result = notes.add(age + 18, 10);
// console.log(age);
// console.log('result: ' + result);
// var data = ["person", 4, 67, 'gfrfg', 'sfdsd', "person"];
// var filter = _.uniq(data);
// console.log(filter);



//5

// const jsonString = '{"name" : "Anjali", "age" : 20, "city" : "Hyderabad"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const objectToConvert = {
//     name: "Anjali",
//     age : 20
// };
// const jsonStringified = JSON.stringify(objectToConvert);
// console.log(jsonStringified);

// const json = JSON.stringify(objectToConvert);
// console.log(json);
// console.log(typeof json);


// app.get('/chicken', (req, res) => {
//     res.send('sure sir')
// })


// app.get('/egg', (req, res) => {
//     res.send('sure sir')
// })
// app.get('/idli', (req, res) => {
//     var customized_idli = {
//         name: 'rava idli',
//         size: '10cm diameter',
//         is_sambar: true,
//         is_chutney: false
//     }
//     res.send(customized_idli)
// })


const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;



const MenuItem = require('./models/MenuItem')

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body
//         const newPerson = new Person(data);
//         const response = await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});
//     }

// })

// app.get('/person', async(req, res) => {
//     try {
//         const data = await Person.find();
//         console.log('data fetched');
//         res.status(200).json(data);
//     }
//     catch(err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// })

// app.post('/menuitem', async (req, res) => {
//     try {
//         const newMenuItem = new MenuItem(req.body);
//         const response = await newMenuItem.save();
//         console.log('Menu item data saved');
//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.get('/menuitem', async (req, res) => {
//     try {
//         const data = await MenuItem.find();
//         console.log('Menu item data fetched');
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.get('/person/:workType', async(req, res) => {
//     try {
//         const workType = req.params.workType;
//         if(workType == 'chef' || workType =='manager' || workType == 'waiter') {
//             const response = await Person.find({work: workType});
//             console.log('response fetched');
//             res.status(200).json(response);
//         }
//         else {
//             res.status(404).json({error: 'Invalid work type'});
//         }
//     }
//     catch(err) {
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});
//     }
// })


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuItemRoutes');
app.use('/menuitem', menuRoutes);


app.listen(PORT, () => {
    console.log('Listening');
})



