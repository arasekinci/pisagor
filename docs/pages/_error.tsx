import Error from '@/containers/error'

Error.getInitialProps = ({ res }) => {
  const code = res ? res.statusCode : 404

  switch (code) {
    case 400:
      return {
        code: 400,
        type: 'Bad Request',
        message:
          'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
      }
    case 403:
      return {
        code: 403,
        type: 'Forbidden',
        message:
          "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.",
      }
    case 404:
      return {
        code: 404,
        type: 'Not Found',
        message:
          'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist.',
      }
    case 405:
      return {
        code: 405,
        type: 'Method Not Allowed',
        message:
          'The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.',
      }
    case 414:
      return {
        code: 414,
        type: 'URI Too Long',
        message:
          'The URI requested by the client is longer than the server is willing to interpret.',
      }
    case 429:
      return {
        code: 429,
        type: 'Too Many Requests',
        message:
          'The user has sent too many requests in a given amount of time ("rate limiting").',
      }
    case 501:
      return {
        code: 501,
        type: 'Not Implemented',
        message:
          'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.',
      }
    case 502:
      return {
        code: 502,
        type: 'Bad Gateway',
        message:
          'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
      }
    case 503:
      return {
        code: 503,
        type: 'Service Unavailable',
        message:
          'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.',
      }
    case 504:
      return {
        code: 504,
        type: 'Gateway Timeout',
        message:
          'This error response is given when the server is acting as a gateway and cannot get a response in time.  ',
      }
    default:
      return {
        code: 500,
        type: 'Internal Server Error',
        message:
          'The server has encountered a situation it does not know how to handle.',
      }
  }
}

export default Error
