
const useHttp = () => {
    const sendRequest = async(requestConfig, applyData) => {
        const request = await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.header ? requestConfig.header : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        });
        if(request.ok) {
            const data = await request.json();
            console.log('after successful POST')
            console.log(data)
            applyData(requestConfig.body);
        }
    }
    return {
        sendRequest
    };
}

export default useHttp;