const wtf = {
    name: 'Hello World',
    print: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 3000);
    }
}

Promise.resolve()
    .then(() => {
        return wtf.print();
    })
    .catch((error) => {
        console.log(error);
    });