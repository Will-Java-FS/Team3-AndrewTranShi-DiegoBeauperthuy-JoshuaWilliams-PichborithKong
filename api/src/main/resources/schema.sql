-- This will set the schema to use
SET search_path TO project1;

-- Drop tables in the correct order
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS menu CASCADE;
DROP TABLE IF EXISTS users CASCADE;
-- Create tables again
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(100) DEFAULT 'CUSTOMER' NOT NULL,
    create_at TIMESTAMP DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE menu (
    menu_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(100),
    price NUMERIC(5, 2),
    description VARCHAR(255),
    create_at TIMESTAMP DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
    user_id INT REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    menu_id INT REFERENCES menu(menu_id) ON UPDATE CASCADE ON DELETE CASCADE,
    create_at TIMESTAMP DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NOW(),
    UNIQUE (user_id, menu_id)
);


