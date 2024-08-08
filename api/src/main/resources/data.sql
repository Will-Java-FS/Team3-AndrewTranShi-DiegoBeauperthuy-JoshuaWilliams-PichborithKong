INSERT INTO users (username, password, role)
    VALUES 
        ('bo', '123', 'staff'), 
        ('andrew', '123', 'staff'), 
        ('joshua', '123', 'staff'), 
        ('diego', '123', 'staff');

INSERT INTO users (username, password)
    VALUES ('david', '123'), ('mike', '123'), ('robert', '123'), ('kevin', '123');

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
        ('Fries', 'Food', 2.99, 'Crispy French fries with a side of ketchup');

INSERT INTO orders (user_id, menu_id)
    VALUES (8, 1), (8, 5), (8, 9), (5, 1), (5, 7), (6, 10), (6, 2), (6, 6), (7, 4), (7, 8), (7, 3);