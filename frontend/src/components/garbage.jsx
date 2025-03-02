const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const paymentRazorpay = async (req, res) => {
    try {
        const { appointmentId } = req.body;

        const appointmentData = await appointmentModel.findById(appointmentId);

        if (!appointmentData || appointmentData.cancelled) {
            return res.json({ success: false, message: "Appointment cancelled" });
        }

        const options = {
            amount: appointmentData.amount * 100, // Amount in paisa
            currency: "INR",
            receipt: appointmentData._id,
        };

        const order = await razorpay.orders.create(options);
        res.json({ success: true, order });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Failed to create payment order",
        });
    }
};

export { placeOrder, paymentRazorpay };