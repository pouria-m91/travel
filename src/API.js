const BASE_URL = 'http://localhost:8000/api/v1';

export const useFetch = (endpoint) => {
  const defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;application/json",
  };
  const customFetch = (
    url,
    method = "GET",
    auth = true,
    body = false,
    headers = defaultHeader
  ) => {
    const options = {
      method,
      headers
    };
    if (url)
      console.log("URL: " + url);

    if (body) {
      options.body = JSON.stringify(body);
      console.log("Request: " + options.body);
    } else console.log("Request: ");

    if (auth) options.headers['Authorization'] = 'bearer ' + localStorage.getItem('token');
    console.log(options.headers);
    return fetch(`${BASE_URL}/${url}`, options).then(responseHandler);
  };
  const list = (body = false, auth = true) => {
    return customFetch(endpoint, body ? "POST" : "GET", auth, body);
  };
  const get = (id = false, auth = true) => {
    const url = `${endpoint}${id ? `/${id}` : ""}`;
    return customFetch(url, "GET", auth);
  };
  const post = (body = false, auth = true) => {
    // if (!body) throw new Error("to make a post you must provide a     body");
    return customFetch(endpoint, "POST", auth, body);
  };
  const put = (id = false, body = false, auth = true) => {
    if (!id || !body)
      throw new Error("to make a put you must provide the id and the   body");
    const url = `${endpoint}/${id}`;
    return customFetch(url, "PUT", auth, body);
  };
  const del = (id = false, auth = true) => {
    if (!id)
      throw new Error("to make a delete you must provide the id and the body");
    const url = `${endpoint}/${id}`;
    return customFetch(url, "DELETE", auth);
  };
  return {
    list,
    get,
    post,
    put,
    del
  };
};


// const ACCEPT = 'application/x-www-form-urlencoded';
export function callApi(requestOptions, url, success, error) {
  console.log("Request:" + requestOptions.body);
  return fetch(`${BASE_URL}/${url}`, requestOptions)
    .then(responseHandler)
    .then(data => {
      success(data);
    }).catch(e => {
      error(e);
    });
}

function responseHandler(response) {
  return response.text().then(text => {
    const result = text && JSON.parse(text);
    console.log("Response:" + text);
    if (!result.success) {
      return Promise.reject(errorHandler(result.error_code));
    }
    return result.data;
  });
}

function errorHandler(c) {
  let msg = '';
  switch (c) {
    case 1007:
      msg = 'نام کاربری یا رمرزعبور اشتباه است';
      break;
    case 1008:
      msg = 'این شی جای دیگری استفاده شده';
      break;
    case 1006:
      window.location.hash = '/login';
      msg = 'لاگین کن';
      break;
    case 1009:
      msg = 'Code Not Found';
      break;
    default:
      msg = 'خطای ناشناس';
      break;
  }
  return {code: c, message: msg};

}
