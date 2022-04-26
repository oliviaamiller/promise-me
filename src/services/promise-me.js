// https://officeapi.dev/api/quotes/random

/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
  console.log('1. before async fetch');
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');

  console.log('2. async fetch complete');
  const result = await res.json();

  console.log('3. after async fetch');
  return { quote: result[0], totalResults: result.length };
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
// promise chain - each link only has access to the info in the one before it
export function thenGetQuotes() {
  console.log('1. before .then fetch');
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2. .then fetch complete'));

  console.log('3. after .then fetch');

  return result;
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
// loads an error rather than crashing the site, safer
// url has typo to throw error
export async function asyncTryGetQuotes() {
  try {
    console.log('1. before async fetch');
    const res = await fetch('https://futuramaapssi.herokuapp.com/api/quotes/1');

    console.log('2. async fetch complete');
    const result = await res.json();

    console.log('3. after async fetch');
    return { quote: result[0], totalResults: result.length };
  } catch (error) {
    console.error('oops');
  }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
// url has typo to throw error
export function thenTryGetQuotes() {
  console.log('1. before .then fetch');
  const result = fetch('https://futuramaapssi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2. .then fetch complete'))
    .catch((error) => console.error('oops!'));

  console.log('3. after .then fetch');

  return result;
}

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
// finally useful for refreshing cache or sending push notification or updates
export async function asyncFinallyGetQuotes() {
  try {
    console.log('1. before async fetch');
    const res = await fetch('https://futuramaapssi.herokuapp.com/api/quotes/1');

    console.log('2. async fetch complete');
    const result = await res.json();

    console.log('3. after async fetch');
    return { quote: result[0], totalResults: result.length };
  } catch (error) {
    console.error('oops');
  } finally {
    console.log('all done!');
  }
}

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
// will jump to error and then finally, will not block
export function thenFinallyGetQuotes() {
  console.log('1. before .then fetch');
  const result = fetch('https://futuramaapssi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2. .then fetch complete'))
    .catch((error) => console.error('oops!'))
    .finally(() => console.log('all done!'));

  console.log('3. after .then fetch');

  return result;
}

/**
 * TODO: Exercise 7: Call your function from exercise 5 using .then
 */
export function thenAsyncGetQuotes() {
  return asyncFinallyGetQuotes().then((result) =>
    console.log('completed running asyncFinallyGetQuotes with result:', result)
  );
}
/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
export async function asyncThenGetQuotes() {
  console.log('1. before .then fetch');

  const result = fetch('https://futuramaapssi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => {
      console.log('2. .then fetch complete');
      return { quote: result[0], totalResults: result.length };
    })
    .catch((error) => console.error('oops!'))
    .finally(() => console.log('all done!'));

  console.log('3. after .then fetch');

  return result;
}
