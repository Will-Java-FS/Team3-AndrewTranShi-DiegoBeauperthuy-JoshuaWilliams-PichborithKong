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

INSERT INTO menu (name, type, price, description, image_url)
VALUES
    ('Pizza', 'Food', 8.99, 'Delicious cheese pizza with a crispy crust', 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg'),
    ('Burger', 'Food', 6.99, 'Juicy beef burger with lettuce and tomato', 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg'),
    ('Pasta', 'Food', 7.99, 'Creamy Alfredo pasta with chicken', 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg'),
    ('Ice Cream', 'Dessert', 4.99, 'Vanilla ice cream with chocolate syrup', 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/homemade-ice-cream.jpg'),
    ('Brownie', 'Dessert', 3.99, 'Rich chocolate brownie with nuts', 'https://www.inspiredtaste.net/wp-content/uploads/2024/01/Brownies-Recipe-Video.jpg'),
    ('Soda', 'Drink', 1.99, 'Refreshing cola with ice', 'https://144989930.cdn6.editmysite.com/uploads/1/4/4/9/144989930/s197812845336018251_p119_i1_w2000.png'),
    ('Coffee', 'Drink', 2.49, 'Hot brewed coffee with a strong aroma', 'https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x500.png'),
    ('Smoothie', 'Drink', 4.49, 'Mixed berry smoothie with a hint of honey', 'https://www.elizabethrider.com/wp-content/uploads/2022/11/Strawberry-Yogurt-Smoothie-Elizabeth-Rider-4.jpg'),
    ('Cake', 'Dessert', 5.49, 'Moist chocolate cake with layers of frosting', 'https://cakebycourtney.com/wp-content/uploads/2015/08/Cookies-and-Cream-Cake-4-500x375.jpg'),
    ('Fries', 'Food', 2.99, 'Crispy French fries with a side of ketchup', 'https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800'),
    ('Chicken Wings', 'Food', 9.99, 'Spicy chicken wings with a side of ranch', 'https://bakerbynature.com/wp-content/uploads/2015/02/Sweet-and-Spicy-Sriracha-Chicken-Wings-0-6.jpg'),
    ('Caesar Salad', 'Food', 5.99, 'Crisp romaine lettuce with Caesar dressing and croutons', 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg'),
    ('Garlic Bread', 'Food', 3.49, 'Toasted garlic bread with butter and herbs', 'https://cookingupmemories.com/wp-content/uploads/2023/08/Stuffed-Garlic-Bread-11-500x500.jpg'),
    ('Steak', 'Food', 14.99, 'Grilled ribeye steak with a side of mashed potatoes', 'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2023/06/Sirloin-Steak-24.jpg'),
    ('Beer', 'Drink', 4.99, 'Chilled draft beer, choice of lager or ale', 'https://assets.editorial.aetnd.com/uploads/2014/01/gettyimages-1386915196.jpg?width=768'),
    ('Wine', 'Drink', 7.99, 'Glass of red or white wine', 'https://bravofarms.com/cdn/shop/products/red-wine.jpg?v=1646253890'),
    ('Nachos', 'Food', 7.49, 'Tortilla chips topped with cheese, jalapeños, and sour cream', 'https://www.babaganosh.org/wp-content/uploads/2021/01/skillet-beef-nachos-22.jpg'),
    ('Tacos', 'Food', 6.99, 'Three soft tacos with seasoned beef, lettuce, and salsa', 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-04-tacos%2Ftacos-490'),
    ('Milkshake', 'Dessert', 5.49, 'Creamy chocolate milkshake with whipped cream', 'https://cookienameddesire.com/wp-content/uploads/2019/06/bacon-milkshake-1.jpg'),
    ('Pie', 'Dessert', 4.99, 'Slice of apple pie with a scoop of vanilla ice cream', 'https://www.twopeasandtheirpod.com/wp-content/uploads/2022/11/Apple-Cranberry-Pie-43.jpg'),
    ('Espresso', 'Drink', 3.49, 'Rich and bold espresso shot', 'https://majestycoffee.com/cdn/shop/articles/How_Much_Caffeine_in_Italian_Espresso__A_Quick_Guide.jpg?v=1694737687'),
    ('Mojito', 'Drink', 6.49, 'Refreshing cocktail with mint, lime, and rum', 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/03/tequila-mojito_afarmgirlsdabbles_10.jpg'),
    ('Hot Dog', 'Food', 4.49, 'Grilled hot dog with mustard and relish', 'https://cdn.britannica.com/27/213427-050-869B98FE/Chicago-style-hot-dog.jpg'),
    ('Bagel', 'Food', 2.99, 'Fresh bagel with cream cheese', 'https://stpierrebakery-com.s3.amazonaws.com/app/uploads/2021/08/Brioche-Bagel04-1440x960.jpg'),
    ('Margarita', 'Drink', 7.49, 'Classic margarita with lime and tequila', 'https://cdn.apartmenttherapy.info/image/upload/v1712671572/k/Photo/Recipes/2024-04-margarita/margarita-346.jpg')
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