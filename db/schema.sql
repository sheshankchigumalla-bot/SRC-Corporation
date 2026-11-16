-- Run on a private PostgreSQL database before enabling the dashboard.
CREATE TABLE IF NOT EXISTS sales (
  id BIGSERIAL PRIMARY KEY,
  customer_name VARCHAR(150) NOT NULL,
  product VARCHAR(150) NOT NULL,
  quantity_kg NUMERIC(14,2) NOT NULL CHECK (quantity_kg > 0),
  unit_price_inr NUMERIC(14,2) NOT NULL CHECK (unit_price_inr >= 0),
  total_inr NUMERIC(20,2) GENERATED ALWAYS AS (quantity_kg * unit_price_inr) STORED,
  status VARCHAR(24) NOT NULL DEFAULT 'recorded',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS sales_created_at_idx ON sales (created_at DESC);
