import { Order } from "../model/order.model.js";

export const order_controller = async (req, res) => {
  try {
    const { logeduser } = req.params;
    const { totalamount, deliveryadress } = req.body;
    console.log(totalamount, deliveryadress);

    const saveorder = new Order({
      user: logeduser,
      totalamount: totalamount,
      deliveryadress: deliveryadress,
    });
    console.log(saveorder);

    await saveorder.save();
    res.status(201).json({ data: saveorder });
  } catch (error) {
    console.log(`error while ordering : ${error}`);
  }
};
