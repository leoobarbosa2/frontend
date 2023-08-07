// Simulating standard jest behavior

function test(description, callback) {
    try {
        callback()
        console.log(`✓ ${description}`)
    } catch (error) {
        console.error(`✕ ${description}`)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if(actual !== expected) {
               throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

// Setting functions as globals
global.test = test;
global.expect = expect;