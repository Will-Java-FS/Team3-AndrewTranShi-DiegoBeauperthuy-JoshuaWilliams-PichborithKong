INSERT INTO users (username, password, role)
VALUES
    ('bo', '$2a$10$PohqQMKNuWD1/WBAX36IZODzC8ao4B42ee8fyLJNTrJAU6.6vwMo2', 'STAFF'),
    ('andrew', '$2a$10$PohqQMKNuWD1/WBAX36IZODzC8ao4B42ee8fyLJNTrJAU6.6vwMo2', 'STAFF'),
    ('joshua', '$2a$10$PohqQMKNuWD1/WBAX36IZODzC8ao4B42ee8fyLJNTrJAU6.6vwMo2', 'STAFF'),
    ('diego', '$2a$10$PohqQMKNuWD1/WBAX36IZODzC8ao4B42ee8fyLJNTrJAU6.6vwMo2', 'STAFF')
ON CONFLICT (username) DO NOTHING;

INSERT INTO users (username, password, role)
VALUES
    ('david', '$2a$10$PohqQMKNuWD1/WBAX36IZODzC8ao4B42ee8fyLJNTrJAU6.6vwMo2', 'CUSTOMER'),
    ('mike', '$2a$10$PohqQMKNuWD1/WBAX36IZODzC8ao4B42ee8fyLJNTrJAU6.6vwMo2', 'CUSTOMER'),
    ('robert', '$2a$10$PohqQMKNuWD1/WBAX36IZODzC8ao4B42ee8fyLJNTrJAU6.6vwMo2', 'CUSTOMER'),
    ('kevin', '$2a$10$PohqQMKNuWD1/WBAX36IZODzC8ao4B42ee8fyLJNTrJAU6.6vwMo2', 'CUSTOMER')
ON CONFLICT (username) DO NOTHING;

INSERT INTO menu (name, type, price, description)
VALUES
    ('Pizza', 'Food', 8.99, 'Delicious cheese pizza with a crispy crust'),
    ('Burger', 'Food', 6.99, 'Juicy beef burger with lettuce and tomato'),
    ('Pasta', 'Food', 7.99, 'Creamy Alfredo pasta with chicken'),
    ('Ice Cream', 'Dessert', 4.99, 'Vanilla ice cream with chocolate syrup'),
    ('Brownie', 'Dessert', 3.99, 'Rich chocolate brownie with nuts'),
    ('Soda', 'Drink', 1.99, 'Refreshing cola with ice'),
    ('Coffee', 'Drink', 2.49, 'Hot brewed coffee with a strong aroma'),
    ('Smoothie', 'Drink', 4.49, 'Mixed berry smoothie with a hint of honey'),
    ('Cake', 'Dessert', 5.49, 'Moist chocolate cake with layers of frosting'),
    ('Fries', 'Food', 2.99, 'Crispy French fries with a side of ketchup'),
    ('Chicken Wings', 'Food', 9.99, 'Spicy chicken wings with a side of ranch'),
    ('Caesar Salad', 'Food', 5.99, 'Crisp romaine lettuce with Caesar dressing and croutons'),
    ('Garlic Bread', 'Food', 3.49, 'Toasted garlic bread with butter and herbs'),
    ('Steak', 'Food', 14.99, 'Grilled ribeye steak with a side of mashed potatoes'),
    ('Beer', 'Drink', 4.99, 'Chilled draft beer, choice of lager or ale'),
    ('Wine', 'Drink', 7.99, 'Glass of red or white wine'),
    ('Nachos', 'Food', 7.49, 'Tortilla chips topped with cheese, jalapeños, and sour cream'),
    ('Tacos', 'Food', 6.99, 'Three soft tacos with seasoned beef, lettuce, and salsa'),
    ('Milkshake', 'Dessert', 5.49, 'Creamy chocolate milkshake with whipped cream'),
    ('Pie', 'Dessert', 4.99, 'Slice of apple pie with a scoop of vanilla ice cream'),
    ('Espresso', 'Drink', 3.49, 'Rich and bold espresso shot'),
    ('Mojito', 'Drink', 6.49, 'Refreshing cocktail with mint, lime, and rum'),
    ('Hot Dog', 'Food', 4.49, 'Grilled hot dog with mustard and relish'),
    ('Bagel', 'Food', 2.99, 'Fresh bagel with cream cheese'),
    ('Margarita', 'Drink', 7.49, 'Classic margarita with lime and tequila')
ON CONFLICT (name) DO NOTHING;

INSERT INTO orders (user_id, menu_id)
VALUES
    (8, 1),  -- Kevin ordered Pizza
    (8, 5),  -- Kevin ordered Brownie
    (8, 9),  -- Kevin ordered Cake
    (7, 1),  -- Mike ordered Pizza
    (7, 7),  -- Mike ordered Coffee
    (6, 10), -- Robert ordered Fries
    (6, 2),  -- Robert ordered Burger
    (6, 6),  -- Robert ordered Soda
    (5, 4),  -- David ordered Ice Cream
    (5, 8),  -- David ordered Smoothie
    (5, 3);  -- David ordered Pasta