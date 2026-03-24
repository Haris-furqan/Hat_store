const pool = require('./db/db');

async function seedDatabase() {
    try {
        // Clear existing data
        await pool.query('DELETE FROM items');
        await pool.query('DELETE FROM category');

        // Reset ID sequences
        await pool.query('ALTER SEQUENCE category_category_id_seq RESTART WITH 1');
        await pool.query('ALTER SEQUENCE items_item_id_seq RESTART WITH 1');

        // Insert categories
        await pool.query(`
            INSERT INTO category (category_name) 
            VALUES ('Caps'), ('Beanies'), ('Cowboy Hats')
        `);

        // Insert items
        await pool.query(`
            INSERT INTO items (item_name, quantity, category_id) 
            VALUES 
                ('Red Baseball Cap', 50, 1),
                ('Blue Snapback', 30, 1),
                ('Warm Beanie', 40, 2),
                ('Striped Beanie', 25, 2),
                ('Classic Cowboy Hat',  15, 3)
        `);

        console.log('Database seeded successfully!');
        pool.end();
    } catch (err) {
        console.error('Error seeding database:', err);
        pool.end();
    }
}

seedDatabase();

