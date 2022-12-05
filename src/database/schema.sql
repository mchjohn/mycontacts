-- Create an databse
CREATE DATABASE mycontacts;

-- Enable the uuid extension if not existis
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create an table if not existis
CREATE TABLE IF NOT EXISTS categories (
  -- Create an column id
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  -- Create an column name
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
