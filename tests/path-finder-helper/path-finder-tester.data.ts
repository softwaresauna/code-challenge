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
        shouldBeCorrect: true,
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
        shouldBeCorrect: true,
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
        shouldBeCorrect: true,
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
        shouldBeCorrect: true,
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
        shouldBeCorrect: true,
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
        shouldBeCorrect: true,
        name: 'Ignore stuff after end of path',
        inputData: [
            ['@', '-', 'A', '-', '-', '+', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '|', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '+', '-', 'B', '-', '-', 'x', '-', 'C', '-', '-', 'D'],
        ],
        lettersOutput: 'AB',
        pathOutput: '@-A--+|+-B--x'
    },
    {
        shouldBeCorrect: false,
        name: 'Missing start character',
        inputData: [
            ['', '', '', '-', 'A', '-', '-', '-', '+'],
            ['', '', '', '', '', '', '', '', '|'],
            ['x', '-', 'B', '-', '+', '', '', '', 'C'],
            ['', '', '', '', '|', '', '', '', '|'],
            ['', '', '', '', '+', '-', '-', '-', '+'],
        ],
        error: 'Missing start character'
    },
    {
        shouldBeCorrect: false,
        name: 'Missing end character',
        inputData: [
            ['@', '-', '-', 'A', '-', '-', '-', '+'],
            ['', '', '', '', '', '', '', '|'],
            ['', 'B', '-', '+', '', '', '', 'C'],
            ['', '', '', '|', '', '', '', '|'],
            ['', '', '', '+', '-', '-', '-', '+'],
        ],
        error: 'Missing end character'
    },
    {
        shouldBeCorrect: false,
        name: 'Multiple starts #1',
        inputData: [
            ['', '@', '-', '-', 'A', '-', '@', '-', '+'],
            ['', '', '', '', '', '', '', '', '|'],
            ['x', '-', 'B', '-', '+', '', '', '', 'C'],
            ['', '', '', '', '|', '', '', '', '|'],
            ['', '', '', '', '+', '-', '-', '-', '+'],
        ],
        error: 'Multiple starts'
    },
    {
        shouldBeCorrect: false,
        name: 'Multiple starts #2',
        inputData: [
            ['', '@', '-', '-', 'A', '-', '-', '-', '+'],
            ['', '', '', '', '', '', '', '', '|'],
            ['', '', '', '', '', '', '', '', 'C'],
            ['', '', '', '', '', '', '', '', 'x'],
            ['', '', '', '', '@', '-', 'B', '-', '+'],
        ],
        error: 'Multiple starts'
    },
    {
        shouldBeCorrect: false,
        name: 'Multiple starts #3',
        inputData: [
            ['', '@', '-', '-', 'A', '-', '-', 'x'],
            ['', '', '', '', '', '', '', ''],
            ['x', '-', 'B', '-', '+', '', '', ''],
            ['', '', '', '', '|', '', '', ''],
            ['', '', '', '', '@', '', '', ''],
        ],
        error: 'Multiple starts'
    },
    {
        shouldBeCorrect: false,
        name: 'Multiple ends',
        inputData: [
            ['', '', '', '', '', 'x', '-', 'B'],
            ['', '', '', '', '', '', '', '|'],
            ['@', '-', '-', 'A', '-', '-', '-', '+'],
            ['', '', '', '', '', '', '', '|'],
            ['', '', '', 'x', '+', '', '', 'C'],
            ['', '', '', '', '|', '', '', '|'],
            ['', '', '', '', '-', '-', '-', '+'],
        ],
        error: 'Multiple ends'
    },
    {
        shouldBeCorrect: false,
        name: 'Fork in path',
        inputData: [
            ['', '', '', '', '', 'C', '-', 'B'],
            ['', '', '', '', '', '', '', '|'],
            ['@', '-', '-', 'A', '-', '-', '-', '+'],
            ['', '', '', '', '', '', '', '|'],
            ['', '', '', 'x', '+', '', '', 'C'],
            ['', '', '', '', '|', '', '', '|'],
            ['', '', '', '', '-', '-', '-', '+'],
        ],
        error: 'Fork in path'
    },
    {
        shouldBeCorrect: false,
        name: 'Broken path',
        inputData: [
            ['@', '-', '-', 'A', '-', '+', '', ''],
            ['', '', '', '', '', '|', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', 'B', '-', 'x'],
        ],
        error: 'Broken path'
    }
];