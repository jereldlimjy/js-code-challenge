// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).
// class Datasource {

class Datasource {
    getPrices() {
        const fetchData = fetch("https://static.ngnrs.io/test/prices")
        .then(result => result.json())
        .then(data => {
            data.data.prices.forEach(price => {
                // my apologies for doing it this way, quite janky but I'm not sure how to add the methods to 
                // the Object prototype within a class
                price.mid = function() {
                    return (this.buy + this.sell) / 200;
                };

                price.quote = function() {
                    return this.pair.slice(3,6);
                };
            });

            return data.data.prices;
        });
    
        return fetchData;
    }
}

let ds = new Datasource();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
    });