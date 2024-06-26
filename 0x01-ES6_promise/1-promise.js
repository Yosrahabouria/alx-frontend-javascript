export function getFullResponseFromAPI(success) {
    const status = 200;
    const body = 'Success';
    
    return new Promise((resolve, reject) => {
        if (status, body)
            {
                resolve();
                return (true);
            }
            else {
                reject();
                console.log('The fake API is not working currently');
            }
        
    })
} 
