var h2 = document.createElement("h2");
document.body.append(h2)

setTimeout(function(){
    document.querySelector("h2").innerHTML = `Count: ${10}`
    setTimeout(function(){
        document.querySelector("h2").innerHTML = `Count: ${9}`
        setTimeout(function(){
            document.querySelector("h2").innerHTML = `Count: ${8}`
            setTimeout(function(){
                document.querySelector("h2").innerHTML = `Count: ${7}`
                setTimeout(function(){
                    document.querySelector("h2").innerHTML = `Count: ${6}`
                    setTimeout(function(){
                        document.querySelector("h2").innerHTML = `Count: ${5}`
                        setTimeout(function(){
                            document.querySelector("h2").innerHTML = `Count: ${4}`
                            setTimeout(function(){
                                document.querySelector("h2").innerHTML = `Count: ${3}`
                                setTimeout(function(){
                                    document.querySelector("h2").innerHTML = `Count: ${2}`
                                    setTimeout(function(){
                                        document.querySelector("h2").innerHTML = `Count: ${1}`
                                        setTimeout(function(){
                                            document.querySelector("h2").innerHTML = `Happy Independence Day!!`
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)