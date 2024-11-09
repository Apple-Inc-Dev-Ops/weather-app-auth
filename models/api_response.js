export default function APIResponse (data = null, status = 'SUCCESS', error = null) {
  return {
    status,
    data,
    error
  }
}
