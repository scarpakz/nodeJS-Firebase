/**
 * Test Controller
 */

export const test = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(400)
    }
}