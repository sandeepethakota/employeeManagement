'use strict';
module.exports = function(app) {
  var employeeList = require('../controller/employeeController');
//Author Sandeep Ethakota

  // employeeList Routes
  app.route('/employees')
    .get(employeeList.list_all_employees)
    .post(employeeList.create_a_employee);


  app.route('/employees/:employeeId')
    .get(employeeList.read_a_employee)
    .put(employeeList.update_a_employee)
    .delete(employeeList.delete_a_employee);
};