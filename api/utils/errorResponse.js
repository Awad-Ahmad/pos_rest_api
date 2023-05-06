/// we extends class Error to override it's constructor adding statuesCode
class ErrorResponse extends Error {
  constructor(message, statuesCode) {
    super(message);
    this.statuesCode = statuesCode;
  }
}
module.exports=ErrorResponse ;
