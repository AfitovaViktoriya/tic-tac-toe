class TicTacToe {

    constructor() {
        this.currentPlayer = 'x';
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.board[rowIndex][columnIndex] == null){
            this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if(this.getCurrentPlayerSymbol() == 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            }
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        for (let i = 0; i <= 2; i++) {
            if (this.board[i][0] != null) {
                if (this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]) {
                    return this.board[i][0];
                }
            }
            if (this.board[0][i] != null) {
                if (this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i]) {
                    return this.board[0][i];
                }
            }
        }

        if (this.board[1][1] != null) {
            if (this.board[0][0] != null) {
                if (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]) {
                    return this.board[0][0];
                }
            }
            if (this.board[0][2] != null) {
                if (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]) {
                    return this.board[0][2];
                }
            }
        }
        return null;
    }

    noMoreTurns() {
        if ((this.board[0][0] && this.board[0][1] && this.board[0][2] &&
            this.board[1][0] && this.board[1][1] && this.board[1][2] &&
            this.board[2][0] && this.board[2][1] && this.board[2][2]) != null) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
