/**
 * @swagger
 *
 * /:
 *   get:
 *     tags:
 *     - Root
 *     description: ''
 *     summary: Root APIs ampUp's Provision Tool
 *     responses:
 *       200:
 *         description: The Status OK
 *
 */
module.exports = async (req, res) => {
  return res.json({
    status: 'OK',
    UP_STAGE: process.env.UP_STAGE,
  });
};
