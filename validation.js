const { check } = require('express-validator');
 
exports.signupValidation = [
    check('CLN','CLN is reuired'),
    check('CustomerName', 'Name is requied').not().isEmpty(),
    check('EmailId', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('PhoneNumber','Please enter valid phone number'),
    check('DateOfRegistraion','Please enter the date'),
    check('LoanAppliedDate','Pelase enter applied date'),
    //check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]