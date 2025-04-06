
export function sendEmail(data) {
    const apiEndpoint = '/api/email';


    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        // alert(response.message);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        alert(err);
      });
}