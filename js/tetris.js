var tetris = {
  board: {
    el: $('.board'),
    rows: 8,
    cols: 1
  },

  blocks: [
    [0, 0]
  ],

  draw_empty_board: function () {
    var board_html = '';
    for (var i = 0; i < tetris.board.rows; i++) {
      board_html += '<div class="row" data-row="' + i + '"></div>';
    }
    tetris.board.el.html(board_html)
  },

  draw_blocks: function () {
    tetris.blocks.forEach(function(block) {
      tetris
        .board
        .el
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
      if (block[1] < tetris.board.rows - 1) {
        block[1] += 1
      }
    })
  }
}

tetris.start();

