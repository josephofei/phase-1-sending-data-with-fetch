// Add your code here

//str1 = username
//str2 = email address

const submitData = function (passName, passEmail) {


    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: passName,
            email: passEmail
        }),

    }).then(res => res.json())
        .then(data => {
            const newData = document.body.append(data.id)
        })

        //e.preventDefault;
        .catch(function (error) {
            const message = error.message
            document.body.append(message)
        })
}

