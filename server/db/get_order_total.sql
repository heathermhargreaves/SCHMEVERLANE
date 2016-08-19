Select *
From order_lines
Join orders
Where orderid.orders = orderid.orderlines;
join users
where userid.users = userid.orders;
