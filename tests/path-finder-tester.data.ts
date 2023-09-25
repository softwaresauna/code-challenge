import { IPathFinderTestCase } from './path-finder-tester.model';

/* An empty data placeholder
[
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
]
*/

export const testCases: IPathFinderTestCase[] = [
    {
        name: 'A basic example',
        inputData: [
            ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
            ['', '', '', '', '', '', '', '', '|'],
            ['x', '-', 'B', '-', '+', '', '', '', 'C'],
            ['', '', '', '', '|', '', '', '', '|'],
            ['', '', '', '', '+', '-', '-', '-', '+']
        ],
        lettersOutput: 'ACB',
        pathOutput: '@---A---+|C|+---+|+-B-x'
    },
    {
        name: 'Go straight through the intersections',
        inputData: [
            ['@', '', '', '', '', '', '', '', '', ''],
            ['|', '', '+', '-', 'C', '-', '-', '+', '', ''],
            ['A', '', '|', '', '', '', '', '|', '', ''],
            ['+', '-', '-', '-', 'B', '-', '-', '+', '', ''],
            ['', '', '|', '', '', '', '', '', '', 'x'],
            ['', '', '|', '', '', '', '', '', '', '|'],
            ['', '', '+', '-', '-', '-', 'D', '-', '-', '+'],
        ],
        lettersOutput: 'ABCD',
        pathOutput: '@|A+---B--+|+--C-+|-||+---D--+|x'
    },
    {
        name: 'Letters may be found on turns',
        inputData: [
            ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
            ['', '', '', '', '', '', '', '', '|'],
            ['x', '-', 'B', '-', '+', '', '', '', '|'],
            ['', '', '', '', '|', '', '', '', '|'],
            ['', '', '', '', '+', '-', '-', '-', 'C'],
        ],
        lettersOutput: 'ACB',
        pathOutput: '@---A---+|||C---+|+-B-x'
    },
    {
        name: 'Do not collect a letter from the same location twice',
        inputData: [
            ['', '', '', '', '+', '-', 'O', '-', 'N', '-', '+', '', ''],
            ['', '', '', '', '|', '', '', '', '', '', '|', '', ''],
            ['', '', '', '', '|', '', '', '', '+', '-', 'I', '-', '+'],
            ['@', '-', 'G', '-', 'O', '-', '+', '', '|', '', '|', '', '|'],
            ['', '', '', '', '|', '', '|', '', '+', '-', '+', '', 'E'],
            ['', '', '', '', '+', '-', '+', '', '', '', '', '', 'S'],
            ['', '', '', '', '', '', '', '', '', '', '', '', '|'],
            ['', '', '', '', '', '', '', '', '', '', '', '', 'x'],
        ],
        lettersOutput: 'GOONIES',
        pathOutput: '@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x'
    },
    {
        name: 'Keep direction, even in a compact space',
        inputData: [
            ['', '+', '-', 'L', '-', '+', '', ''],
            ['', '|', '', '', '+', 'A', '-', '+'],
            ['@', 'B', '+', '', '+', '+', '', 'H'],
            ['', '+', '+', '', '', '', '', 'x'],
        ],
        lettersOutput: 'BLAH',
        pathOutput: '@B+++B|+-L-+A+++A-+Hx'
    },
    {
        name: 'Ignore stuff after end of path',
        inputData: [
            ['@', '-', 'A', '-', '-', '+', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '|', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '+', '-', 'B', '-', '-', 'x', '-', 'C', '-', '-', 'D'],
        ],
        lettersOutput: 'AB',
        pathOutput: '@-A--+|+-B--x'
    }
];
