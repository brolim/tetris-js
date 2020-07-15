var tetris = {
  board: $('.board'),
  blocks: [
    [0, 0]
  ],

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
    tetris.board.html(board_html)
  },

  draw_blocks: function () {
    tetris.blocks.forEach(function(block) {
      tetris
        .board
        .find('.row[data-row=' + block[1] + ']')
        .append('<div class="block"></div>')
    })
  },

  start: function () {
    tetris.draw_empty_board()
    tetris.draw_blocks()

    setInterval(
      function() {
        tetris.update_time()
        tetris.draw_empty_board()
        tetris.draw_blocks()
      },
      1000
    )
  },

  update_time: function() {
    tetris.blocks.forEach(function(block) {
      block[1] += 1
    })
  }
}

tetris.start();

