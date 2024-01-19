const { Promos } = require('../DB_connection.js');

const getAllPromos = async ( req, res) => {
  try {
    const allImages = await Promos.findAll()
    res.status(201).json(allImages);
  } catch (error) {
    res.status(500).json({error: "Error to find Promo's images" })
  }
}

const deletePromoById = async (req, res) => {
  try {
    const { id } = req.body;

    // Encuentra la instancia de la promoción por su ID
    const promoToDelete = await Promos.findByPk(id);

    if (!promoToDelete) {
      return res.status(404).json({ error: 'Promo not found' });
    }

    // Elimina la promoción
    await promoToDelete.destroy();

    res.status(200).json({ message: 'Promo delete successfully' });
  } catch (error) {
    console.error('Error removing promotion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePromo = async (req, res) => {
  try {
    const { id, updatedData } = req.body;

    // Verifica si se proporcionó algún dato para actualizar
    if (!updatedData) {
      return res.status(400).json({ error: 'Updated data is required for the update' });
    }

    // Encuentra la instancia de la promoción por su ID
    const promoToUpdate = await Promos.findByPk(id);

    // Encuentra la instancia de la promoción por su ID
    if (!promoToUpdate) {
      return res.status(404).json({ error: 'Promotion not found' });
    }

    // Actualiza la promoción con los datos proporcionados
    await promoToUpdate.update(updatedData);

    res.status(200).json({ message: 'Promotion updated successfully' });
  } catch (error) {
    console.error('Error updating promotion:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const createPromos = async (req, res) => {
  try {
    const { url } = req.body;
    const promo = await Promos.create({ image: url });
    res.status(201).json(promo);
  } catch (error) {
    res.status(500).json({ error: "Error to create Promo's tables" });
  }
};

module.exports = {
  createPromos,
  getAllPromos,
  deletePromoById,
  updatePromo,
}