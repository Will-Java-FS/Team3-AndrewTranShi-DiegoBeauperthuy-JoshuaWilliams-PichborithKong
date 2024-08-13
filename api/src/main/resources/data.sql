INSERT INTO users (username, password, role)
VALUES
    ('bo', '123', 'staff'),
    ('andrew', '123', 'staff'),
    ('joshua', '123', 'staff'),
    ('diego', '123', 'staff')
ON CONFLICT (username) DO NOTHING;

INSERT INTO users (username, password, role)
VALUES
    ('david', '123', 'customer'),
    ('mike', '123', 'customer'),
    ('robert', '123', 'customer'),
    ('kevin', '123', 'customer')
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
    ('Fries', 'Food', 2.99, 'Crispy French fries with a side of ketchup')
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