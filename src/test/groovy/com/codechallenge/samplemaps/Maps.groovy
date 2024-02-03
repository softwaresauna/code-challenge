package com.codechallenge.samplemaps

class Maps {

    public static final char[][] map1 = [
            ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
            [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+']
    ] as char[][]

    public static final char[][] map2 = [
            ['@'],
            ['|', ' ', '+', '-', 'C', '-', '-', '+'],
            ['A', ' ', '|', ' ', ' ', ' ', ' ', '|'],
            ['+', '-', '-', '-', 'B', '-', '-', '+'],
            [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
            [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            [' ', ' ', '+', '-', '-', '-', 'D', '-', '-', '+']
    ] as char[][]

    public static final char[][] map3 = [
            ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['x', '-', 'B', '-', '+', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', '+', '-', '-', '-', 'C']
    ] as char[][]

    public static final char[][] map4 = [
            [' ', ' ', ' ', ' ', '+', '-', 'O', '-', 'N', '-', '+'],
            [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '+', '-', 'I', '-', '+'],
            ['@', '-', 'G', '-', 'O', '-', '+', ' ', '|', ' ', '|', ' ', '|'],
            [' ', ' ', ' ', ' ', '|', ' ', '|', ' ', '+', '-', '+', ' ', 'E'],
            [' ', ' ', ' ', ' ', '+', '-', '+', ' ', ' ', ' ', ' ', ' ', 'S'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x']
    ] as char[][]

    public static final char[][] map5 = [
            [' ', '+', '-', 'L', '-', '+'],
            [' ', '|', ' ', ' ', '+', 'A', '-', '+'],
            ['@', 'B', '+', ' ', '+', '+', ' ', 'H'],
            [' ', '+', '+', ' ', ' ', ' ', ' ', 'x']
    ] as char[][]

    public static final char[][] map6 = [
            ['@', '-', 'A', '-', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', ' ', '+', '-', 'B', '-', '-', 'x', '-', 'C', '-', '-', 'D']
    ] as char[][]

    public static final char[][] map7 = [
            ['@', 'A', 'B', ' ', ' '],
            [' ', ' ', 'C', ' ', ' '],
            ['J', 'K', 'D', 'L', 'M'],
            ['I', ' ', 'E', ' ', 'N'],
            ['H', 'G', 'F', ' ', 'x'],
    ] as char[][]

    public static final char[][] map8 = [
            ['@', 'x']
    ] as char[][]

    public static final char[][] invalidMap1MissingStartCharacter = [
            [' ', ' ', ' ', '-', 'A', '-', '-', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
            [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+']
    ] as char[][]

    public static final char[][] invalidMap2MissingEndCharacter = [
            ['@', '-', '-', 'A', '-', '-', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            [' ', 'B', '-', '+', ' ', ' ', ' ', 'C'],
            [' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', '+', '-', '-', '-', '+']
    ] as char[][]

    public static final char[][] invalidMap3MultipleStarts = [
            [' ', '@', '-', '-', 'A', '-', '@', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
            [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+']
    ] as char[][]

    public static final char[][] invalidMap4MultipleStarts = [
            ['@', '-', '-', 'A', '-', '-', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'C'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
            [' ', ' ', ' ', '@', '-', 'B', '-', '+']
    ] as char[][]

    public static final char[][] invalidMap5MultipleStarts = [
            [' ', '@', '-', '-', 'A', '-', '-', 'x'],
            [],
            ['x', '-', 'B', '-', '+'],
            [' ', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', '@'],
    ] as char[][]

    public static final char[][] invalidMap6ForkInPath = [
            [' ', ' ', ' ', ' ', ' ', 'x', '-', 'B'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
            ['@', '-', '-', 'A', '-', '-', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B'],
            [' ', ' ', 'x', '+', ' ', ' ', ' ', 'B'],
            [' ', ' ', ' ', '|', ' ', ' ', ' ', 'B'],
            [' ', ' ', ' ', '+', '-', '-', '-', 'B']
    ] as char[][]

    public static final char[][] invalidMap7BrokenPath = [
            ['@', '-', '-', 'A', '-', '+'],
            [' ', ' ', ' ', ' ', ' ', '|'],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', 'B', '-', 'x'],
            [' ', ' ', ' ', ' ', ' ', ' ']
    ] as char[][]

    public static final char[][] invalidMap8MultipleStartingPaths = [
            ['x', '-', 'B', '-', '@', '-', 'A', '-', 'x']
    ] as char[][]

    public static final char[][] invalidMap9FakeTurn = [
            ['@', '-', 'A', '-', '+', '-', 'B', '-', 'x']
    ] as char[][]

    public static final char[][] invalidMap10InvalidCharacter = [
            ['@', '-', 'A', '-', '+', '-', 'B', 'b', 'x']
    ] as char[][]

}