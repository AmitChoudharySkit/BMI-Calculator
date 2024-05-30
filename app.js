document.getElementById('bmiForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get input values
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // Replace this URL with your actual API Gateway endpoint
    const apiUrl = 'https://vrxkk7frt1.execute-api.eu-north-1.amazonaws.com/dev/bmi';

    try {
        // Make a POST request to your API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ height, weight })
        });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON response
        const data = await response.json();

        // Display the BMI result
        document.getElementById('result').innerText = `Your BMI is ${data.bmi}`;
    } catch (error) {
        // Display error message
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error calculating BMI. Please try again.';
    }
});
