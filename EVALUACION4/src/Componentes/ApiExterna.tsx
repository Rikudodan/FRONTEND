
import { useState, useEffect } from 'react';
import '../index.css';

function CompAPIRequest() {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const resp = await fetch('https://api.random.org/json-rpc/4/invoke', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "method": "generateIntegers",
                    "params": {
                        "apiKey": "8dfd42d3-aed2-4205-96ae-c74580f0195a",
                        "n": 1,
                        "min": 1,
                        "max": 100
                    },
                    "id": 42
                })
            });

            if (!resp.ok) {
                throw new Error(`HTTP error! Status: ${resp.status}`);
            }

            const json = await resp.json();
            if (json.error) {
                throw new Error(json.error.message);
            }
            setData(json.result.random.data[0]);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (typeof data !== 'number') {
        return <div>Error: los datos no son un número</div>;
    }

    return (
        <div>
            <h1 className='custom-h1'>Número aleatorio: {data}</h1>
        </div>
    );
}

export default CompAPIRequest;
