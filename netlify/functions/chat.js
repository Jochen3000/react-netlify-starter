import { GoogleGenerativeAI } from '@google/generative-ai';

export const handler = async (event, context) => {
    const { httpMethod, body } = event;

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

    if (httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { message } = JSON.parse(body);

        if (!message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Message is required' })
            };
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'Gemini API key not configured' })
            };
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" });

        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                response: text,
                timestamp: new Date().toISOString()
            })
        };

    } catch (error) {
        console.error('Chat function error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Failed to process chat request',
                details: error.message
            })
        };
    }
}; 