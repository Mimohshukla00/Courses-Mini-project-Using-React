const apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";
const data=fetch(apiUrl)
    .then((response)=> response.json())
    .then((data)=>{
        const anem=data.Development
        console.log(data)
        console.log(anem)
    });