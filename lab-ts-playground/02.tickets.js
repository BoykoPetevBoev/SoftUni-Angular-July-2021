var Destination = /** @class */ (function () {
    function Destination(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Destination;
}());
function tickets(array, criteria) {
    var destinations = array
        .map(function (string) { return string.split('|'); })
        .map(function (_a) {
        var destination = _a[0], price = _a[1], status = _a[2];
        return new Destination(destination, Number(price), status);
    })
        .sort(function (a, b) { return a[criteria].localeCompare(b[criteria]); });
    console.log(destinations);
    return destinations;
}
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
