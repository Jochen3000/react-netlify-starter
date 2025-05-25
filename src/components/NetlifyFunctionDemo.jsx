import { useState } from "react";

export default function NetlifyFunctionDemo() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callHelloFunction = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/.netlify/functions/hello?name=Developer");
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testEnvVariables = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/.netlify/functions/env-demo");
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testDebugEndpoint = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/.netlify/functions/env-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          testData: "This is a debug test",
          timestamp: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <p className="text-muted-foreground mb-6">Here are some examples</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={callHelloFunction}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded"
        >
          Hello Function
        </button>

        <button
          onClick={testEnvVariables}
          disabled={loading}
          className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white px-4 py-2 rounded"
        >
          Test Environment Variables
        </button>

        <button
          onClick={testDebugEndpoint}
          disabled={loading}
          className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white px-4 py-2 rounded"
        >
          Test Debug Endpoint
        </button>
      </div>

      {loading && <div className="text-blue-600 mb-4">Loading...</div>}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}

      {response && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Response:</h3>
          <pre className="text-sm overflow-auto whitespace-pre-wrap">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
