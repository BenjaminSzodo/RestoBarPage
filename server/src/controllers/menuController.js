const { Menu } = require('../DB_connection.js');

const getAllMenu = async ( req, res) => {
  try {
    const allImages = await Menu.findAll()
    res.status(201).json(allImages);
  } catch (error) {
    res.status(500).json({error: "Error to find Menu's images" })
  }
}

const deleteMenuById = async (req, res) => {
  try {
    const { id } = req.body;

    // Encuentra la instancia de la promoción por su ID
    const menuToDelete = await Menu.findByPk(id);

    if (!menuToDelete) {
      return res.status(404).json({ error: 'Menu not found' });
    }

    // Elimina la promoción
    await menuToDelete.destroy();

    res.status(200).json({ message: 'Menu delete successfully' });
  } catch (error) {
    console.error('Error removing menu:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateMenu = async (req, res) => {
  try {
    const { id, updatedData } = req.body;

    // Verifica si se proporcionó algún dato para actualizar
    if (!updatedData) {
      return res.status(400).json({ error: 'Updated data is required for the update' });
    }

    // Encuentra la instancia de el menu por su ID
    const menuToUpdate = await Menu.findByPk(id);

    // Encuentra la instancia de el menu por su ID
    if (!menuToUpdate) {
      return res.status(404).json({ error: 'Menu not found' });
    }

    // Actualiza el menu con los datos proporcionados
    await menuToUpdate.update(updatedData);

    res.status(200).json({ message: 'Menu updated successfully' });
  } catch (error) {
    console.error('Error updating menu:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createMenu = async (req, res) => {
  try {
    const { url } = req.body;
    const menu = await Menu.create({ image: url });
    res.status(201).json(menu);
  } catch (error) {
    console.error('Error creating menu:', error);
    res.status(500).json({ error: "Error creating menu" });
  }
}


module.exports = {
  createMenu,
  getAllMenu,
  deleteMenuById,
  updateMenu

}