// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    let step = ' '.repeat(n);
    debugger;

    for(let i = 0; i < n; i++) {
        
        let line = step.split('');
        line[i] = '#';

        step = line.join('');
        console.log(step);
    }
}

module.exports = steps;
