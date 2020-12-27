const pantryGet = require('./pantryGet');
const pantrySubmit = require('./pantrySubmit');
const pantryUpdate = require('./pantryUpdate');
const pantryItemUp = require('./pantryItemUp');
const pantryItemDown = require('./pantryItemDown');
const pantryDelete = require('./pantryUpdate');

const pantryController = {
    pantryGet: pantryGet,
    pantrySubmit: pantrySubmit,
    pantryUpdate: pantryUpdate,
    pantryItemUp: pantryItemUp,
    pantryItemDown: pantryItemDown,
    pantryDelete: pantryDelete
};

module.export = pantryController;