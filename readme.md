## Answer to queries:

1 :  SELECT * 
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
  

2:   SELECT user_id, SUM(total_amount) AS total_spent
FROM orders
GROUP BY user_id
ORDER BY total_spent DESC;
