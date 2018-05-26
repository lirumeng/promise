fetch('some.json')
    .then(response => {
        return response.json();
    })
    .then(json => {
        // do something with the join
    })
    .catch(err => {
        console.log(err);
    })