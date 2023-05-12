// const Product = require('../models/Product.js');

// const verifytoken = function verifytoken (req, res, next) {
//     const bearerHeader = req.headers['authorization'];

//     if (bearerHeader) {
//         const bearer = bearerHeader.split(' ');
//         const bearerToken = bearer[1];
//         connection.query('select * from access where token = ?', [bearerToken],(err, results, fields) =>{
//           if(results?.length != 0){
//               req.token = bearerToken;
//               req.userId = results[0].user_id
//               next();
//           }
//           else {
//               res.sendStatus(401);
//           }
//         });
        
//       } else {
//         // Forbidden
//         res.sendStatus(403);
//       }
//     }
  
//   module.exports = verifyToken;