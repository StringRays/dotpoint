# Worksheet Generator

*My partner is a special education teacher, and I am building this so that she can generate printable worksheets for her classroom. It generates worksheets using numbers with added circles. Solid circles symbolize one, and hollow circles symbolize two. This adds extra information to the numbers and has been useful especially for multi-sensory learners.*

Visit site [here](https://stringrays.github.io/dotpoint/);

## To Do

- make form component for allowing more customizable problem sets
- remove the symbols page that I had there mainly for development
- use a pdf rendering library to get more control over printable layout
- visual testing of canvas elements
- component testing

## Testing

- run `npm run test` with the server running in the background to test code running on localhost
- run `npm run test-deployed` to run the test suite against the hosted app

## Notes

- Currently not mobile friendly at all (other than navbar) - this is a choice, because for now the use case is simply to print worksheets, not view or complete them online.