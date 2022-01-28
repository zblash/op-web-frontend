import { ApiCallService } from './api-call-service';
import { ApiCallBuilder } from './api-call-builder';

function ApiCall(url?: string, data?: any, headers?: any) {
  ApiCallBuilder.call(this, url, data, headers);
}

ApiCall.prototype = Object.create(ApiCallBuilder.prototype);

ApiCall.prototype.setUrl = function (url: string, isPrivate = true) {
  this._request.header = {
    'Content-Type': 'application/json',
    'Accept-Language': 'tr',
  };
  this._request.url = isPrivate ? `private${url}` : url;

  return this;
};

ApiCall.prototype.setHeader = function (header: any) {
  Object.defineProperty(this._request, 'header', {
    value: header,
    writable: true,
    enumerable: true,
  });

  return this;
};

export { ApiCall, ApiCallService };
