class ApiError extends Error{
  constructor(
     statusCode,
     message="Something went wrong",
     errors=[],
     statck=""
  ){
    super(message)//override
    this.statusCode=statusCode//override
    this.data=null,
    this.message=message
    this.success=false;
    this.errors=errors

    if(statck){
      this.stack=statck
    }else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
}
export {ApiError}