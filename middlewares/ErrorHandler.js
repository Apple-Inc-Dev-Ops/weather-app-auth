const ErrorHandler = (err, req, res, next) => { 
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Internal Server Error'
  
  if (process.env.ENV === 'local') {
    return res.status(errStatus).json({
      status: errStatus,
      message: errMsg,
      stack: err.stack 
    })
  }
  
  return res.status(errStatus).json({
    status: errStatus,
    message: 'Internal Server Error'
  })
}
  
export default ErrorHandler
  