export const handler = async (event, context) => {
    const { httpMethod } = event;

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

    if (httpMethod === 'GET') {
        // Access environment variables
        const apiSecretKey = process.env.API_SECRET_KEY;
        const databaseUrl = process.env.DATABASE_URL;
        const appName = process.env.APP_NAME;
        const debugMode = process.env.DEBUG_MODE === 'true';
        const nodeEnv = process.env.NODE_ENV;

        // For security, we'll mask the secret key
        const maskedSecretKey = apiSecretKey
            ? `${apiSecretKey.substring(0, 4)}${'*'.repeat(apiSecretKey.length - 4)}`
            : 'Not set';

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                message: 'Environment variables demo',
                timestamp: new Date().toISOString(),
                environment: {
                    appName: appName || 'Not set',
                    nodeEnv: nodeEnv || 'Not set',
                    debugMode: debugMode,
                    databaseUrl: databaseUrl || 'Not set',
                    apiSecretKey: maskedSecretKey,
                    // Show all available env vars (for demo purposes only)
                    availableEnvVars: Object.keys(process.env).filter(key =>
                        key.startsWith('API_') ||
                        key.startsWith('DATABASE_') ||
                        key.startsWith('APP_') ||
                        key.startsWith('DEBUG_') ||
                        key === 'NODE_ENV'
                    )
                },
                notes: [
                    'Secret keys are masked for security',
                    'In production, set these in Netlify dashboard under Site settings > Environment variables',
                    'Local development uses .env file'
                ]
            })
        };
    }

    if (httpMethod === 'POST') {
        const debugMode = process.env.DEBUG_MODE === 'true';
        const appName = process.env.APP_NAME;

        if (!debugMode) {
            return {
                statusCode: 403,
                headers,
                body: JSON.stringify({
                    error: 'Debug mode is disabled',
                    message: 'Set DEBUG_MODE=true in environment variables to enable this endpoint'
                })
            };
        }

        try {
            const data = JSON.parse(event.body || '{}');

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    message: `Debug endpoint active for ${appName}`,
                    receivedData: data,
                    timestamp: new Date().toISOString(),
                    debugInfo: {
                        headers: event.headers,
                        queryStringParameters: event.queryStringParameters,
                        environment: process.env.NODE_ENV
                    }
                })
            };
        } catch (error) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({
                    error: 'Invalid JSON in request body',
                    details: error.message
                })
            };
        }
    }

    return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
    };
}; 