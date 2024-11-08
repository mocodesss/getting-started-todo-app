const GREETINGs = [
    'Hello, how you doing?',
    'Great to see you!',
    'Fancy seeing you here!',
    'Lets goooooooo!',
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
