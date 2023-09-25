import { IPathFinderInputData, PathFinder } from './path-finder';

// An empty placeholder
/*const MAP_NODES: string[][] = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
];*/

// A basic example
/*const MAP_NODES: string[][] = [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['x', '-', 'B', '-', '+', '', '', '', 'C'],
    ['', '', '', '', '|', '', '', '', '|'],
    ['', '', '', '', '+', '-', '-', '-', '+']
];*/

// Go straight through the intersections
/*const MAP_NODES: string[][] = [
    ['@', '', '', '', '', '', '', '', '', ''],
    ['|', '', '+', '-', 'C', '-', '-', '+', '', ''],
    ['A', '', '|', '', '', '', '', '|', '', ''],
    ['+', '-', '-', '-', 'B', '-', '-', '+', '', ''],
    ['', '', '|', '', '', '', '', '', '', 'x'],
    ['', '', '|', '', '', '', '', '', '', '|'],
    ['', '', '+', '-', '-', '-', 'D', '-', '-', '+'],
];*/

// Letters may be found on turns
/*const MAP_NODES: string[][] = [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['x', '-', 'B', '-', '+', '', '', '', '|'],
    ['', '', '', '', '|', '', '', '', '|'],
    ['', '', '', '', '+', '-', '-', '-', 'C'],
];*/

// Do not collect a letter from the same location twice
/*const MAP_NODES: string[][] = [
    ['', '', '', '', '+', '-', 'O', '-', 'N', '-', '+', '', ''],
    ['', '', '', '', '|', '', '', '', '', '', '|', '', ''],
    ['', '', '', '', '|', '', '', '', '+', '-', 'I', '-', '+'],
    ['@', '-', 'G', '-', 'O', '-', '+', '', '|', '', '|', '', '|'],
    ['', '', '', '', '|', '', '|', '', '+', '-', '+', '', 'E'],
    ['', '', '', '', '+', '-', '+', '', '', '', '', '', 'S'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '|'],
    ['', '', '', '', '', '', '', '', '', '', '', '', 'x'],
];*/

// Keep direction, even in a compact space
const MAP_NODES: string[][] = [
    ['', '+', '-', 'L', '-', '+', '', ''],
    ['', '|', '', '', '+', 'A', '-', '+'],
    ['@', 'B', '+', '', '+', '+', '', 'H'],
    ['', '+', '+', '', '', '', '', 'x'],
];

const INPUT_DATA = {
    nodes: MAP_NODES
} as IPathFinderInputData;

const pathFinder = new PathFinder(INPUT_DATA);
const solution = pathFinder.traversePath();
console.log(solution);
