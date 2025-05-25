export const handler = async (event, context) => {
    const { httpMethod, queryStringParameters, body } = event;

    if (httpMethod === 'GET') {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
            },
            body: JSON.stringify({
                message: 'Hello from Netlify Functions!',
                timestamp: new Date().toISOString(),
                query: queryStringParameters
            })
        };
    }

    if (httpMethod === 'POST') {
        const data = JSON.parse(body || '{}');

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
            },
            body: JSON.stringify({
                message: 'Data received successfully!',
                receivedData: data,
                timestamp: new Date().toISOString()
            })
        };
    }

    return {
        statusCode: 405,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Method not allowed' })
    };
}; 