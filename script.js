// Task 01:

// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes
// an array of values and logs each value with a delay of 1 second between logs.


const values = [11, 12, 13, 14, 15]

const iterateWithAsyncAwait = async (array) => {
    for (const value of array) {
        await setTimeout(() => console.log(value), 1000)
    }
}

iterateWithAsyncAwait(values)





// Task 02:

// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API.
// Use await to wait for the API response and then log the data.

const awaitCall = async () => {
    try {
        const res = await fetch('https://catfact.ninja/fact')
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.error('Failed:', error.message);
    }
};

awaitCall()




// Task 04:

// Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all().
// Log the combined results after both requests have resolved.

const concurrentRequests = async () => {
    const [res1, res2] = await Promise.all([
        fetch('https://randomuser.me/api/'),
        fetch('http://universities.hipolabs.com/search?country=United+States')
    ])

    const data1 = await res1.json()
    const data2 = await res2.json()
    console.log(data1, data2);
};

concurrentRequests()
