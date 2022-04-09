const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        try {
            const response = await navigator.serviceWorker.register(swUrl);
            console.log("Success: ", response.scope)
        } catch (error) {
            console.log("Failure: ", error)
        }
      });
    } else {
        console.log("Browser Doesn't support Service Worker")
    }
}
  
export default registerServiceWorker;