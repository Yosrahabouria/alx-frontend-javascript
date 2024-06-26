function getResponseFromAPI(){
const succeed = true;
return NewPromise((resolve, reject) => {
    if (succeed) {
        resolve();
    }
else {
    reject();
}
    
})}
