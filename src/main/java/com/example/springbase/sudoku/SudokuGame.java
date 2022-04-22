package com.example.springbase.sudoku;

public class SudokuGame {
    private final GameState gameState;
    private final int[][] gridState;

    public static final int GRID_BOUNDARY = 9;

    public SudokuGame(GameState gameState, int[][] gridState) {
        this.gameState = gameState;
        this.gridState = gridState;
    }

    public GameState getGameState() {
        return this.gameState;
    }

    public int[][] getCopyOfGridState() {
        return SudokuUtilities.copyToNewArray(gridState);
    }
}
