const mongose = require('mongoose');
const Schema = mongose.Schema;



const shareSchema = new Schema({
    landId: { type: Schema.Types.ObjectId, ref: 'Land', required: true },
    price: { type: Number, required: true },
    percentage: { type: Number, required: true}
  });

  module.exports = mongose.model('Share', shareSchema);