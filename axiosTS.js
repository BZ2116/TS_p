var tsAxios = /** @class */ (function () {
    function tsAxios(urlts) {
        this.urlts = urlts;
    }
    tsAxios.prototype.request = function (url, method, data) {
        var config = {
            method: method
        };
        if (data) { //如果有body，传入
            config.body = JSON.stringify(data);
        }
        return fetch(this.urlts + url, config) //fecth发起请求
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    };
    tsAxios.prototype.get = function (url) {
        return this.request(url, 'GET');
    };
    tsAxios.prototype.post = function (url, data) {
        return this.request(url, "POST", data);
    };
    tsAxios.prototype.put = function (url, data) {
        return this.request(url, "PUT", data);
    };
    tsAxios.prototype.delete = function (url) {
        return this.request(url, "DELETE");
    };
    return tsAxios;
}());
// const axiosTS = new tsaxios('https://localhost:3000');
// axiosTS.get('/message')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
//   axiosTS.post('/message', { id: 'John', age: 25 })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
//   axiosTS.put('/users/1', { name: 'John Doe', age: 26 })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
//   axiosTS.delete('/users/1')
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
