function applyAssociations(sequelize) {

    const {board, board_address} = sequelize.models;

    board.hasOne(board_address);
    board_address.belongsTo(board);

}

module.exports = {applyAssociations};
