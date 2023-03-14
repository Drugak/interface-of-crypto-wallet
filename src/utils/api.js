const api = async (url, method) => {
    const response = await fetch(url, {
        method: method
    });

    if (response.status === 200) {
        return await response.json();
    } else {
        return new Error('Api request failed.', {response});
    }
}

export default api;