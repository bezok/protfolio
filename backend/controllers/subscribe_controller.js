exports.handleSubscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: 'Email is required' });
  }

  // TODO: Save email to database or email list provider (like Mailchimp)
  console.log(`New subscriber: ${email}`);

  res.status(200).json({ msg: 'Subscribed successfully!' });
};
