const Order = require("../../models/shoppingHistoryModel");


async function shoppingHistory(req, res) {
    const { userId, products, totalQty, totalPrice } = req.body;
    
    try {
        const newOrder = new Order({
            userId,
            products,
            totalQty,
            totalPrice
        });

        await newOrder.save();

        res.status(200).json({ success: true, message: 'Order saved successfully.' });
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = shoppingHistory;