var tetris = {
  board: $('.board'),
  draw_board: function () {
    tetris
      .board
      .find('.row[data-row=0]')
      .append('<div class="block">block</div>')
  }
}

tetris.draw_board()