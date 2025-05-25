export const handler = async (event, context) => {
    const { httpMethod, path, queryStringParameters, body } = event;

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };

    // Handle CORS preflight
    if (httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        // Extract route from path
        const route = path.replace('/.netlify/functions/api', '') || '/';

        switch (route) {
            case '/users':
                if (httpMethod === 'GET') {
                    // Mock user data
                    const users = [
                        { id: 1, name: 'John Doe', email: 'john@example.com' },
                        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
                    ];

                    return {
                        statusCode: 200,
                        headers,
                        body: JSON.stringify({ users })
                    };
                }

                if (httpMethod === 'POST') {
                    const userData = JSON.parse(body || '{}');
                    const newUser = {
                        id: Date.now(),
                        ...userData,
                        createdAt: new Date().toISOString()
                    };

                    return {
                        statusCode: 201,
                        headers,
                        body: JSON.stringify({ user: newUser, message: 'User created successfully' })
                    };
                }
                break;

            case '/status':
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({
                        status: 'API is running',
                        timestamp: new Date().toISOString(),
                        environment: process.env.NODE_ENV || 'development'
                    })
                };

            default:
                return {
                    statusCode: 404,
                    headers,
                    body: JSON.stringify({ error: 'Route not found' })
                };
        }

    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error', details: error.message })
        };
    }
}; 