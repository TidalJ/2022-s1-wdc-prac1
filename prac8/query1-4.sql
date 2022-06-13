SELECT DISTINCT address FROM inventory,address,store
	WHERE store.store_id = inventory.store_id AND
	address.address_id = store.address_id AND
	film_id = 918;