export const handler = async (event, context) => {
    const { httpMethod, queryStringParameters } = event;

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };

    // Handle CORS preflight
    if (httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (httpMethod === 'GET') {
        const name = queryStringParameters?.name || 'World';

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                message: `Hello, ${name}!`,
                timestamp: new Date().toISOString(),
                function: 'hello'
            })
        };
    }

    return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
    };
}; 