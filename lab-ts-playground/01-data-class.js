const Request = /** @class */ (function () {
    function Requests(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return Requests;
}());
const myData = new Requests('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
