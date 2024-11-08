const GREETINGS = [
    "Hello, how you doing?",
    "Great to see you!",
    "Fancy seeing you here!",
    "Let's goooooooo!"
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
