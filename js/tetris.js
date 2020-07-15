var tetris = {
  board: $('.board'),

  draw_empty_board: function () {
    var board_html = '';
    board_html += '<div class="row" data-row="0"></div>';
    board_html += '<div class="row" data-row="1"></div>';
    board_html += '<div class="row" data-row="2"></div>';
    board_html += '<div class="row" data-row="3"></div>';
    board_html += '<div class="row" data-row="4"></div>';
    board_html += '<div class="row" data-row="5"></div>';
    board_html += '<div class="row" data-row="6"></div>';
    board_html += '<div class="row" data-row="7"></div>';
    board_html;
    tetris.board.append(board_html)
  },

  draw_blocks: function () {
    tetris
      .board
      .find('.row[data-row=1]')
      .append('<div class="block"></div>')
  }
}

tetris.draw_empty_board()
tetris.draw_blocks()