export default class employeeDto {
  constructor(
    employeeName = null,
    employeeEmail = null,
    employeeContact = null,
    // employeeLocation = null,
    password = null,
    username = null,
    employeeDesignation = null,
    companyId = null,
    roleId = null,
  ) {
    this.employeeName = employeeName;
    this.employeeEmail = employeeEmail;
    this.employeeContact = employeeContact;
    // this.employeeLocation = employeeLocation;
    this.password = password;
    this.employeeDesignation = employeeDesignation;
    this.companyId = companyId;
    this.roleId = roleId;
    this.username = employeeEmail;
  }
}
